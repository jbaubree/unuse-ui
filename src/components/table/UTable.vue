<script setup lang="ts">
import { capitalize, merge, orderBy } from 'lodash-es'
import type { appConfig } from '~/config'
import { defaultComparator } from '~/utils'
import type { Button } from '~/components/button/button'
import type { DeepPartial } from '~/types'

interface Sort { column?: string; direction?: 'asc' | 'desc' }

const props = withDefaults(defineProps<{
  modelValue?: any[]
  sortBy?: string | ((a: unknown, b: unknown) => void)
  rows?: { [key: string]: any }[]
  columns?: { key: string; sortable?: boolean; class?: string; [key: string]: any }[]
  columnAttribute?: string
  sort?: Sort
  sortButton?: Button
  sortAscIcon?: string
  sortDescIcon?: string
  emptyState?: { icon: string; label: string }
  ui?: DeepPartial<typeof appConfig.ui.table>
}>(), {
  sortBy: () => defaultComparator,
  rows: () => [],
  columnAttribute: 'label',
  sort: () => ({}),
  sortButton: () => useAppUi().table.default.sortButton,
  sortAscIcon: () => useAppUi().table.default.sortAscIcon,
  sortDescIcon: () => useAppUi().table.default.sortDescIcon,
  emptyState: () => useAppUi().table.default.emptyState,
  ui: () => useAppUi().table,
})
const selected = defineModel<any[]>({ default: [] })

const sort = ref<Sort>(merge({}, { column: null, direction: 'asc' }, props.sort))

const config = computed(() => merge({}, useAppUi().table, props.ui))
const columns = computed(() => props.columns ?? Object.keys(props.rows[0] ?? {}).map(key => ({ key, label: capitalize(key), sortable: false })))
const isIndeterminate = computed(() => selected.value && selected.value.length > 0 && selected.value.length < props.rows.length)
const emptyState = computed(() => ({ ...config.value.default.emptyState, ...props.emptyState }))
const rows = computed(() => {
  if (!sort.value?.column)
    return props.rows
  const { column, direction } = sort.value
  return orderBy(props.rows, column, direction)
})

function compare(a, z) {
  if (typeof props.sortBy === 'string') {
    const property = props.sortBy
    return a?.[property] === z?.[property]
  }
  return props.sortBy(a, z)
}
function isSelected(row) {
  if (!selected.value)
    return false
  return selected.value.some(item => compare(toRaw(item), toRaw(row)))
}
function onSort(column: { key: string; direction?: 'asc' | 'desc' }) {
  const direction = !column.direction || column.direction === 'asc' ? 'desc' : 'asc'
  if (sort.value.direction === direction)
    sort.value = merge({}, { column: null, direction: 'asc' }, props.sort)
  else
    sort.value.direction = sort.value.direction === 'asc' ? 'desc' : 'asc'

  if (sort.value.column === column.key)
    sort.value.direction = sort.value.direction === 'asc' ? 'desc' : 'asc'
  else
    sort.value = { column: column.key, direction: column.direction || 'asc' }
}
</script>

<template>
  <div :class="config.wrapper">
    <table :class="[config.base, config.divide]">
      <thead :class="config.thead">
        <tr :class="config.tr.base">
          <th v-if="modelValue" scope="col" class="pl-4">
            <UCheckbox :checked="isIndeterminate || selected?.length === rows.length" :is-indeterminate="isIndeterminate" @change="selected = $event.target.checked ? rows : []" />
          </th>
          <th v-for="(column, index) in columns" :key="index" scope="col" :class="[config.th.base, config.th.padding, config.th.color, config.th.font, config.th.size, column.class]">
            <slot :name="`${column.key}-header`" :column="column" :sort="sort" :on-sort="onSort">
              <UButton
                v-if="column.sortable"
                v-bind="{ ...config.default.sortButton, ...sortButton }"
                :icon="
                  (!sort.column || sort.column !== column.key)
                    ? (sortButton.icon || config.default.sortButton.icon)
                    : sort.direction === 'asc'
                      ? sortAscIcon
                      : sortDescIcon
                "
                :label="column[columnAttribute]"
                @click="onSort(column)"
              />
              <span v-else>{{ column[columnAttribute] }}</span>
            </slot>
          </th>
        </tr>
      </thead>
      <tbody :class="config.tbody">
        <tr v-for="(row, index) in rows" :key="index" :class="[config.tr.base, isSelected(row) && config.tr.selected]">
          <td v-if="modelValue" class="pl-4">
            <UCheckbox v-model="selected" :value="row" />
          </td>
          <td v-for="(column, subIndex) in columns" :key="subIndex" :class="[config.td.base, config.td.padding, config.td.color, config.td.font, config.td.size]">
            <slot :name="`${column.key}-data`" :column="column" :row="row">
              {{ row[column.key] }}
            </slot>
          </td>
        </tr>
        <tr v-if="emptyState && !rows.length">
          <td :colspan="columns.length">
            <slot name="empty-state">
              <div :class="config.emptyState.wrapper">
                <UIcon v-if="emptyState.icon" :name="emptyState.icon" :class="config.emptyState.icon" aria-hidden="true" />
                <p :class="config.emptyState.label">
                  {{ emptyState.label }}
                </p>
              </div>
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
