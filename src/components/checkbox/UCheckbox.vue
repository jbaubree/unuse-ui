<script setup lang="ts">
import { Switch } from '@headlessui/vue'
import { merge } from 'lodash-es'
import type { appConfig } from '~/config'

const props = withDefaults(defineProps<{
  icon?: string
  isDisabled?: boolean
  isRequired?: boolean
  label?: string
  name?: string
  ui?: Partial<typeof appConfig.ui.checkbox>
}>(), {
  ui: () => useAppUi().checkbox,
  icon: 'i-ph-check-bold',
})
const isChecked = defineModel<boolean>({ default: false })

const slots = useSlots()

const config = computed(() => merge({}, useAppUi().checkbox, props.ui))
</script>

<template>
  <Switch v-model="isChecked" :disabled="isDisabled" :name="name" :class="config.wrapper">
    <div :class="[isChecked ? config.button.active : config.button.inactive, config.button.base, config.button.rounded, { [config.button.disabled]: isDisabled }]">
      <UIcon v-if="isChecked" :name="icon" :class="[config.icon]" />
    </div>
    <label v-if="label || slots.label" :for="name" :class="config.label">
      <slot name="label">{{ label }}</slot>
      <span v-if="isRequired" :class="config.required">*</span>
    </label>
  </Switch>
</template>
