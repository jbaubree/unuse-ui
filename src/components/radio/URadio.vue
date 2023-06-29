<script setup lang="ts">
import { merge } from 'lodash-es'
import type { appConfig } from '~/config'

const props = withDefaults(defineProps<{
  value?: string | number | boolean
  name?: string
  isDisabled?: boolean
  isRequired?: boolean
  help?: string
  label?: string
  ui?: Partial<typeof appConfig.ui.radio>
}>(), {
  ui: () => useAppUi().radio,
})
const emit = defineEmits<{
  (eventName: 'focus', value: FocusEvent): void
  (eventName: 'blur', value: FocusEvent): void
}>()
const isChecked = defineModel<string | number | boolean | object>()

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
    <div v-if="label || slots.label" class="ml-3 text-sm">
      <label :for="`${name}-${value}`" :class="config.label">
        <slot name="label">{{ label }}</slot>
        <span v-if="isRequired" :class="config.required">*</span>
      </label>
      <p v-if="help" :class="config.help">
        {{ help }}
      </p>
    </div>
  </div>
</template>
