<script setup lang="ts">
import { merge } from 'lodash-es'
import type { appConfig } from '~/config'
import type { DeepPartial } from '~/types'

const props = withDefaults(defineProps<{
  ui?: DeepPartial<typeof appConfig.ui.skeleton>
}>(), {
  ui: () => useAppUi().skeleton,
})

const config = computed(() => merge({}, useAppUi().skeleton, props.ui))
</script>

<template>
  <div :class="[config.base, config.background, config.rounded]" />
</template>
