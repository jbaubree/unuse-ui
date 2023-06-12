<script setup lang="ts">
import { merge } from 'lodash-es'
import { Switch } from '@headlessui/vue'
import { appConfig } from '~/config'

const { ui = appConfig.ui.checkbox, icon = 'i-ph-check-bold' } = defineProps<{
  icon?: string
  isDisabled?: boolean
  isRequired?: boolean
  label?: string
  name?: string
  ui?: Partial<typeof appConfig.ui.checkbox>
}>()

const isChecked = defineModel<boolean>({ default: false })

const slots = useSlots()

const config = computed(() => merge({}, ui, appConfig.ui.checkbox))
</script>

<template>
  <Switch v-model="isChecked" :disabled="isDisabled" :name="name" :class="config.wrapper">
    <div :class="[isChecked ? config.button.active : config.button.inactive, config.button.base, config.button.rounded, { [config.button.disabled]: isDisabled }]">
      <UIcon v-if="isChecked" :class="[icon, config.icon]" />
    </div>
    <label v-if="label || slots.label" :for="name" :class="config.label">
      <slot name="label">{{ label }}</slot>
      <span v-if="isRequired" :class="config.required">*</span>
    </label>
  </Switch>
</template>
