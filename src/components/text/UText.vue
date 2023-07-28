<script setup lang="ts">
import { merge } from 'lodash-es'
import type { appConfig } from '~/config'
import type { Color, DeepPartial } from '~/types'
import { classNames } from '~/utils'

const props = withDefaults(defineProps<{
  label?: string
  as?: string
  color?: Color
  isTruncate?: boolean
  ui?: DeepPartial<typeof appConfig.ui.text>
}>(), {
  color: () => useAppUi().text.default.color,
  ui: () => useAppUi().text,
  as: 'span',
})

const { primaryColor } = useAppTheme()

const config = computed(() => merge({}, useAppUi().text, props.ui))
const buttonClass = computed(() => {
  const color = config.value.color?.[props.color] || (props.color === 'primary' && config.value.color?.[primaryColor.value]) || config.value.color.default
  return classNames(
    color.replaceAll('{color}', props.color),
    config.value.color.base,
    config.value.size,
    config.value.font,
  )
})
</script>

<template>
  <component :is="as" :class="[buttonClass, { 'text-left break-all line-clamp-1': isTruncate }]">
    <slot>
      {{ label }}
    </slot>
  </component>
</template>
