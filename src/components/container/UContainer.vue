<script setup lang="ts">
import { merge } from 'lodash-es'
import type { appConfig } from '~/config'
import type { DeepPartial } from '~/types'

const props = withDefaults(defineProps<{
  as?: string
  ui?: DeepPartial<typeof appConfig.ui.container>
}>(), {
  as: 'div',
  ui: () => useAppUi().container,
})

const config = computed(() => merge({}, useAppUi().container, props.ui))
</script>

<template>
  <component :is="as" :class="[config.base, config.padding, config.constrained]">
    <slot />
  </component>
</template>
