<script setup lang="ts">
import { merge } from 'lodash-es'
import type { TagVariant } from './tag'
import type { appConfig } from '~/config'
import type { Color, Size } from '~/types'
import { classNames } from '~/utils'

const props = withDefaults(defineProps<{
  size?: Size
  color?: Color
  variant?: TagVariant
  label?: string
  ui?: Partial<typeof appConfig.ui.tag>
}>(), {
  size: () => useAppUi().tag.default.size,
  color: () => useAppUi().tag.default.color,
  variant: () => useAppUi().tag.default.variant,
  ui: () => useAppUi().tag,
})

const config = computed(() => merge({}, useAppUi().tag, props.ui))

const badgeClass = computed(() => {
  const variant = config.value.variant[props.variant]
  return classNames(
    config.value.base,
    config.value.font,
    config.value.rounded,
    config.value.size[props.size],
    variant?.replaceAll('{color}', props.color),
  )
})
</script>

<template>
  <span :class="badgeClass">
    <slot>{{ label }}</slot>
  </span>
</template>