<script setup lang="ts" generic="T extends string | number | boolean, U extends T | object">
import { merge } from 'lodash-es'
import type { appConfig } from '~/config'
import type { DeepPartial } from '~/types'

const props = withDefaults(defineProps<{
  modelValue?: U
  value?: T
  name?: string
  isDisabled?: boolean
  isRequired?: boolean
  label?: string
  ui?: DeepPartial<typeof appConfig.ui.radio>
}>(), {
  ui: () => useAppUi().radio,
})
const emit = defineEmits<{
  (eventName: 'focus', value: FocusEvent): void
  (eventName: 'blur', value: FocusEvent): void
  (eventName: 'update:model-value', value?: U): void
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

const config = computed(() => merge({}, useAppUi().radio, props.ui))
</script>

<template>
  <div :class="config.wrapper">
    <div class="h-5 flex items-center">
      <input
        :id="`${name}-${value}`"
        v-model="isChecked"
        :name="name"
        :required="isRequired"
        :value="value"
        :disabled="isDisabled"
        type="radio"
        :class="config.base"
        @focus="emit('focus', $event)"
        @blur="emit('blur', $event)"
      >
    </div>
    <div v-if="label || slots.label" class="ml-2.5 text-13px">
      <label :for="`${name}-${value}`" :class="config.label">
        <slot name="label">{{ label }}</slot>
        <span v-if="isRequired" :class="config.required">*</span>
      </label>
    </div>
  </div>
</template>
