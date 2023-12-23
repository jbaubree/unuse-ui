<script setup lang="ts">
import { merge } from 'lodash-es'
import type { appConfig } from '~/config'
import type { DeepPartial } from '~/types'
import { uid } from '~/utils'

export type T = string | number | boolean | Record<any, any>

const props = withDefaults(defineProps<{
  modelValue?: boolean | any[] | null
  items: {
    value?: T
    isChecked?: boolean
    isDisabled?: boolean
    isRequired?: boolean
    isIndeterminate?: boolean
    label?: string
    name?: string
  }[]
  isMultiple?: boolean
  ui?: DeepPartial<typeof appConfig.ui.checkbox>
}>(), {
  ui: () => useAppUi().checkbox,
})
const emit = defineEmits<{
  (eventName: 'focus', value: FocusEvent): void
  (eventName: 'blur', value: FocusEvent): void
  (eventName: 'update:model-value', value?: boolean | T[] | null): void
}>()

const modelValue = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:model-value', value)
  },
})

const slots = useSlots()

const config = computed(() => merge({}, useAppUi().checkbox, props.ui))

const ids = computed(() => {
  return props.items.map(() => uid())
})

onMounted(() => {
  if (props.isMultiple && !modelValue.value)
    modelValue.value = []
})
</script>

<template>
  <div :class="config.wrapper">
    <div v-for="{ name, label, isChecked, isRequired, value, isDisabled, isIndeterminate }, index in items" :key="index" class="h-5 flex items-center">
      <input
        :id="name || ids[index]"
        v-model="modelValue"
        :name="name"
        :checked="isChecked"
        :required="isRequired"
        :value="value"
        :disabled="isDisabled"
        :indeterminate="isIndeterminate"
        type="checkbox"
        :class="config.base"
        @focus="emit('focus', $event)"
        @blur="emit('blur', $event)"
      >
      <div v-if="label || slots.label" class="ml-3 text-sm">
        <label :for="name || ids[index]" :class="config.label">
          <slot name="label">{{ label }}</slot>
          <span v-if="isRequired" :class="config.required">*</span>
        </label>
      </div>
    </div>
  </div>
</template>
