<script setup lang="ts">
import { merge } from 'lodash-es'
import type { Button } from '~/components/button/button'
import type { appConfig } from '~/config'
import type { Size } from '~/types'

const props = withDefaults(defineProps<{
  perPage?: number
  total: number
  max?: number
  size?: Size
  activeButton?: Partial<Button>
  inactiveButton?: Partial<Button>
  prevButton?: Partial<Button>
  nextButton?: Partial<Button>
  divider?: string
  ui?: Partial<typeof appConfig.ui.pagination>
}>(), {
  perPage: 10,
  max: 7,
  divider: '...',
  size: () => useAppUi().pagination.default.size,
  activeButton: () => useAppUi().pagination.default.activeButton,
  inactiveButton: () => useAppUi().pagination.default.inactiveButton,
  prevButton: () => useAppUi().pagination.default.prevButton,
  nextButton: () => useAppUi().pagination.default.nextButton,
  ui: () => useAppUi().pagination,
})
const currentPage = defineModel<number>({ required: true })

const config = computed(() => merge({}, useAppUi().pagination, props.ui))
const pages = computed(() => Array.from({ length: Math.ceil(props.total / props.perPage) }, (_, i) => i + 1))
const canGoPrev = computed(() => currentPage.value > 1)
const canGoNext = computed(() => currentPage.value < pages.value.length)
const displayedPages = computed(() => {
  if (!props.max || pages.value.length <= 5) {
    return pages.value
  }
  else {
    const current = currentPage.value
    const max = pages.value.length
    const r = Math.floor((Math.min(props.max, max) - 5) / 2)
    const r1 = current - r
    const r2 = current + r
    const beforeWrapped = r1 - 1 > 1
    const afterWrapped = r2 + 1 < max
    const items: Array<number | string> = [1]

    if (beforeWrapped)
      items.push(props.divider)

    if (!afterWrapped) {
      const addedItems = (current + r + 2) - max
      for (let i = current - r - addedItems; i <= current - r - 1; i++)
        items.push(i)
    }

    for (let i = r1 > 2 ? (r1) : 2; i <= Math.min(max, r2); i++)
      items.push(i)

    if (!beforeWrapped) {
      const addedItems = 1 - (current - r - 2)
      for (let i = current + r + 1; i <= current + r + addedItems; i++)
        items.push(i)
    }

    if (afterWrapped)
      items.push(props.divider)

    if (r2 < max)
      items.push(max)

    // Replace divider by number on start edge case [1, '…', 3, ...]
    if (items.length >= 3 && items[1] === props.divider && items[2] === 3)
      items[1] = 2

    // Replace divider by number on end edge case [..., 48, '…', 50]
    if (items.length >= 3 && items[items.length - 2] === props.divider && items[items.length - 1] === items.length)
      items[items.length - 2] = items.length - 1

    return items
  }
})

function onClickPage(page: number | string) {
  if (typeof page === 'string')
    return
  currentPage.value = page
}
function onClickPrev() {
  if (!canGoPrev.value)
    return
  currentPage.value--
}
function onClickNext() {
  if (!canGoNext.value)
    return
  currentPage.value++
}
</script>

<template>
  <div :class="config.wrapper">
    <slot name="prev" :on-click="onClickPrev">
      <UButton
        v-if="prevButton"
        :size="size"
        :disabled="!canGoPrev"
        :class="[config.base, config.rounded]"
        v-bind="{ ...config.default.prevButton, ...prevButton }"
        :ui="{ rounded: '', font: 'font-medium leading-5' }"
        @click="onClickPrev"
      />
    </slot>

    <UButton
      v-for="(page, index) of displayedPages"
      :key="index"
      :size="size"
      :label="`${page}`"
      v-bind="page === currentPage ? { ...config.default.activeButton, ...activeButton } : { ...config.default.inactiveButton, ...inactiveButton }"
      :class="[{ 'pointer-events-none': typeof page === 'string', 'z-1': page === currentPage }, config.base, config.rounded]"
      :ui="{ rounded: '', font: 'font-medium leading-5' }"
      @click="() => onClickPage(page)"
    />

    <slot name="next" :on-click="onClickNext">
      <UButton
        v-if="nextButton"
        :size="size"
        :disabled="!canGoNext"
        :class="[config.base, config.rounded]"
        v-bind="{ ...config.default.nextButton, ...nextButton }"
        :ui="{ rounded: '', font: 'font-medium leading-5' }"
        @click="onClickNext"
      />
    </slot>
  </div>
</template>
