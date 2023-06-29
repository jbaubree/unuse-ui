<script setup lang="ts">
import { merge } from 'lodash-es'
import type { appConfig } from '~/config'

const props = withDefaults(defineProps<{
  ui?: Partial<typeof appConfig.ui.skeleton>
}>(), {
  ui: () => useAppUi().skeleton,
})

const config = computed(() => merge({}, useAppUi().skeleton, props.ui))
</script>

<template>
  <div :class="[config.base, config.background, config.rounded]" />
</template>
