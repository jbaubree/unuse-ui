<script setup lang="ts">
import { merge } from 'lodash-es'
import type { TagVariant } from './tag'
import type { appConfig } from '~/config'
import type { Color, DeepPartial, Size } from '~/types'
import { classNames } from '~/utils'

const props = withDefaults(defineProps<{
  size?: Size
  color?: Color
  variant?: TagVariant
  label?: string
  ui?: DeepPartial<typeof appConfig.ui.tag>
}>(), {
  size: () => useAppUi().tag.default.size,
  color: () => useAppUi().tag.default.color,
  variant: () => useAppUi().tag.default.variant,
  ui: () => useAppUi().tag,
})

const { primaryColor } = useAppTheme()

const config = computed(() => merge({}, useAppUi().tag, props.ui))
const tagClass = computed(() => {
  const variant = config.value.color?.[props.color]?.[props.variant] || (props.color === 'primary' && config.value.color?.[primaryColor.value]?.[props.variant]) || config.value.variant[props.variant]
  return classNames(
    config.value.base,
    config.value.font[props.size],
    config.value.rounded,
    config.value.size[props.size],
    variant?.replaceAll('{color}', props.color),
  )
})
</script>

<template>
  <span :class="tagClass">
    <slot>{{ label }}</slot>
  </span>
</template>
