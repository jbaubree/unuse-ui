<script setup lang="ts">
import { merge } from 'lodash-es'
import type { appConfig } from '~/config'
import type { DeepPartial } from '~/types'

export type T = string | number | boolean | Record<any, any>

const props = withDefaults(defineProps<{
  modelValue?: boolean | any[]
  value?: T
  isChecked?: boolean
  isDisabled?: boolean
  isRequired?: boolean
  isIndeterminate?: boolean
  label?: string
  name?: string
  ui?: DeepPartial<typeof appConfig.ui.checkbox>
}>(), {
  ui: () => useAppUi().checkbox,
})
const emit = defineEmits<{
  (eventName: 'focus', value: FocusEvent): void
  (eventName: 'blur', value: FocusEvent): void
  (eventName: 'update:model-value', value?: boolean | T[]): void
}>()
const isChecked = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:model-value', value)
  },
})
const slots = useSlots()

const config = computed(() => merge({}, useAppUi().checkbox, props.ui))
</script>

<template>
  <div :class="config.wrapper">
    <div class="h-5 flex items-center">
      <input
        :id="name"
        v-model="isChecked"
        :name="name"
        :required="isRequired"
        :value="value"
        :disabled="isDisabled"
        :checked="props.isChecked"
        :indeterminate="isIndeterminate"
        type="checkbox"
        :class="config.base"
        @focus="emit('focus', $event)"
        @blur="emit('blur', $event)"
      >
    </div>
    <div v-if="label || slots.label" class="ml-3 text-sm">
      <label :for="name" :class="config.label">
        <slot name="label">{{ label }}</slot>
        <span v-if="isRequired" :class="config.required">*</span>
      </label>
    </div>
  </div>
</template>
