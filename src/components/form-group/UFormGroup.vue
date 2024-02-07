<script setup lang="ts">
import type { MaybeRef } from '@vueuse/core'
import { merge } from 'lodash-es'
import type { appConfig } from '~/config'
import type { DeepPartial } from '~/types'

const props = withDefaults(defineProps<{
  name?: string
  label?: string
  isRequired?: boolean
  isDisabled?: boolean
  error?: MaybeRef<string>
  ui?: DeepPartial<typeof appConfig.ui.formGroup>
}>(), {
  ui: () => useAppUi().formGroup,
  icon: 'icon-ph-check-bold',
})

const config = computed(() => merge({}, useAppUi().formGroup, props.ui))
</script>

<template>
  <div :class="config.wrapper">
    <div v-if="label" :class="config.label.wrapper">
      <label
        :for="name" :class="[config.label.base, {
          [config.label.required]: props.isRequired,
          [config.label.disabled]: props.isDisabled,
        }]"
      >
        {{ label }}
      </label>
    </div>
    <div :class="[config.container.base, label && config.container.space]">
      <slot />
      <p v-if="error" :class="config.error">
        {{ error }}
      </p>
    </div>
  </div>
</template>
