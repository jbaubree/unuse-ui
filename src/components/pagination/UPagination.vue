<script setup lang="ts">
import { merge } from 'lodash-es'
import type { Button } from '~/components/button/button'
import type { appConfig } from '~/config'
import type { DeepPartial, Size } from '~/types'

const props = withDefaults(defineProps<{
  perPage?: number
  total: number
  size?: Size
  prevButton?: Partial<Button>
  nextButton?: Partial<Button>
  ui?: DeepPartial<typeof appConfig.ui.pagination>
}>(), {
  perPage: 10,
  size: () => useAppUi().pagination.default.size,
  prevButton: () => useAppUi().pagination.default.prevButton,
  nextButton: () => useAppUi().pagination.default.nextButton,
  ui: () => useAppUi().pagination,
})
const currentPage = defineModel<number>({ required: true })

const config = computed(() => merge({}, useAppUi().pagination, props.ui))
const pages = computed(() => Array.from({ length: Math.ceil(props.total / props.perPage) }, (_, i) => i + 1))
const canGoPrev = computed(() => currentPage.value > 1)
const canGoNext = computed(() => currentPage.value < pages.value.length)

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
    <span :class="config.label">{{ ((currentPage - 1) * perPage) + 1 }}-{{ currentPage * perPage }} sur {{ total }}</span>
    <div :class="config.btnWrapper">
      <slot name="prev" :on-click="onClickPrev">
        <UButton
          v-if="prevButton"
          :size="size"
          :disabled="!canGoPrev"
          :class="[config.base, config.rounded]"
          v-bind="{ ...config.default.prevButton, ...prevButton }"
          :ui="{
            variant: { ghost: 'text-dark-500 dark:text-light-500 hover:bg-{color}-100 dark:hover:bg-{color}-900' },
            square: { rounded: '' },
            custom: 'ring-1 ring-inset ring-pilot-100 dark:ring-pilot-900',
          }"
          @click="onClickPrev"
        />
      </slot>
      <slot name="next" :on-click="onClickNext">
        <UButton
          v-if="nextButton"
          :size="size"
          :disabled="!canGoNext"
          :class="[config.base, config.rounded]"
          v-bind="{ ...config.default.nextButton, ...nextButton }"
          :ui="{
            variant: { ghost: 'text-dark-500 dark:text-light-500 hover:bg-{color}-100 dark:hover:bg-{color}-900' },
            square: { rounded: '' },
            custom: 'ring-1 ring-inset ring-pilot-100 dark:ring-pilot-900',
          }"
          @click="onClickNext"
        />
      </slot>
    </div>
  </div>
</template>
