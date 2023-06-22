<script setup lang="ts">
import { merge } from 'lodash-es'
import type { appConfig } from '~/config'

const props = withDefaults(defineProps<{
  name?: string
  label?: string
  isRequired?: boolean
  error?: string
  ui?: Partial<typeof appConfig.ui.formGroup>
}>(), {
  ui: () => useAppUi().formGroup,
  icon: 'i-ph-check-bold',
})

const config = computed(() => merge({}, useAppUi().formGroup, props.ui))
</script>

<template>
  <div :class="config.wrapper">
    <div v-if="label" :class="config.label.wrapper">
      <label :for="name" :class="[config.label.base, { [config.label.required]: props.isRequired }]">
        {{ label }}
      </label>
    </div>
    <div :class="{ [config.container]: !!label }">
      <slot />
      <p v-if="error" :class="config.error">
        {{ error }}
      </p>
    </div>
  </div>
</template>
