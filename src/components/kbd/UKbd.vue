<script setup lang="ts">
import { merge } from 'lodash-es'
import type { appConfig } from '~/config'
import type { Size } from '~/types'

const props = withDefaults(defineProps<{
  value?: string
  size?: Size
  ui?: Partial<typeof appConfig.ui.dropdown>
}>(), {
  size: () => useAppUi().kbd.default.size,
  ui: () => useAppUi().kbd,
  color: 'primary',
})

const config = computed(() => merge({}, useAppUi().kbd, props.ui))
</script>

<template>
  <kbd :class="[config.base, config.size[size], config.padding, config.rounded, config.font, config.background, config.ring]">
    <slot>{{ value }}</slot>
  </kbd>
</template>
