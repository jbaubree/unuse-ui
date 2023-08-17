<script setup lang="ts" generic="T extends { [key: string]: any }">
import { capitalize, merge, orderBy } from 'lodash-es'
import type { appConfig } from '~/config'
import { defaultComparator } from '~/utils'
import type { Button } from '~/components/button/button'
import type { DeepPartial } from '~/types'

export interface Sort { column?: string; direction?: 'asc' | 'desc' }

const props = withDefaults(defineProps<{
  sortBy?: string | ((a: T, b: T) => void)
  rows?: T[]
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
  sortButton: () => useAppUi().table.default.sortButton as Button,
  sortAscIcon: () => useAppUi().table.default.sortAscIcon,
  sortDescIcon: () => useAppUi().table.default.sortDescIcon,
  emptyState: () => useAppUi().table.default.emptyState,
  ui: () => useAppUi().table,
})
const emit = defineEmits<{
  (eventName: 'row-clicked', value: T): void
}>()
const selected = defineModel<T[]>()

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

function compare(a: T, z: T) {
  if (typeof props.sortBy === 'string') {
    const property = props.sortBy
    return a?.[property] === z?.[property]
  }
  return props.sortBy(a, z)
}
function isSelected(row: T) {
  if (!selected.value)
    return false
  return selected.value.some(item => compare(toRaw(item), toRaw(row)))
}
function onSort(column: { key: string; direction?: 'asc' | 'desc' }) {
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
          <th scope="col" class="pl-4">
            <UCheckbox v-if="selected" :is-checked="isIndeterminate || selected?.length === rows.length" :is-indeterminate="isIndeterminate" @change="selected = $event.target.checked ? rows : []" />
            <div v-else class="h-3.75 w-3.75" />
          </th>
          <th v-for="(column, index) in columns" :key="index" scope="col" :class="[config.th.base, config.th.padding, config.th.color, config.th.font, config.th.size, column.class]">
            <slot :name="`${column.key}-header`" :column="column" :sort="sort" :on-sort="onSort">
              <UButton
                v-if="column.sortable"
                v-bind="{ ...sortButton }"
                :icon="
                  (!sort.column || sort.column !== column.key)
                    ? config.default.sortButton.icon
                    : sort.direction === 'asc'
                      ? sortAscIcon
                      : sortDescIcon
                "
                :label="column[columnAttribute]"
                @click="onSort(column)"
              />
              <span v-else class="font-normal">{{ column[columnAttribute] }}</span>
            </slot>
          </th>
        </tr>
      </thead>
      <tbody :class="config.tbody">
        <tr
          v-for="(row, index) in rows" :key="index"
          :class="[config.tr.base, config.tr.hover, isSelected(row) && config.tr.selected]"
          @click="emit('row-clicked', row)"
        >
          <td class="w-0 pl-4">
            <UCheckbox v-if="selected" v-model="selected" :value="row" @click.stop />
            <div v-else class="h-3.75 w-3.75" />
          </td>
          <td v-for="(column, subIndex) in columns" :key="subIndex" :class="[config.td.base, config.td.padding, config.td.color, config.td.font, config.td.size, column.class]">
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
