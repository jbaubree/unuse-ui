<script setup lang="ts">
import { get, merge } from 'lodash-es'
import type { InputColor, InputVariant } from '../input/input'
import { appConfig } from '~/config'
import type { Color, DeepPartial, Size } from '~/types'
import { classNames } from '~/utils'

const props = withDefaults(defineProps<{
  name?: string
  placeholder?: string
  isRequired?: boolean
  isDisabled?: boolean
  icon?: string
  loadingIcon?: string
  leadingIcon?: string
  trailingIcon?: string
  isTrailing?: boolean
  isLeading?: boolean
  isLoading?: boolean
  isPadded?: boolean
  options?: any[]
  size?: Size
  color?: Color | InputColor
  variant?: InputVariant | InputColor
  textAttribute?: string
  valueAttribute?: string
  ui?: DeepPartial<typeof appConfig.ui.select>
}>(), {
  loadingIcon: () => useAppUi().select.default.loadingIcon,
  trailingIcon: () => useAppUi().select.default.trailingIcon,
  options: () => [],
  size: () => useAppUi().select.default.size,
  color: () => useAppUi().select.default.color,
  variant: () => useAppUi().select.default.variant,
  isPadded: true,
  textAttribute: 'text',
  valueAttribute: 'value',
  ui: () => useAppUi().select,
})
defineEmits<{
  (eventName: 'focus', value: FocusEvent): void
  (eventName: 'blur', value: FocusEvent): void
}>()
const modelValue = defineModel<string | number | object>({ default: '' })

const slots = useSlots()

const config = computed(() => merge({}, useAppUi().select, props.ui))

function onInput(event: Event) {
  modelValue.value = (event.target as any).value
}
function guessOptionValue(option: any) {
  return get(option, props.valueAttribute, get(option, props.textAttribute))
}
function guessOptionText(option: any) {
  return get(option, props.textAttribute, get(option, props.valueAttribute))
}
function normalizeOption(option: any) {
  if (['string', 'number', 'boolean'].includes(typeof option)) {
    return {
      [props.valueAttribute]: option,
      [props.textAttribute]: option,
    }
  }
  return {
    ...option,
    [props.valueAttribute]: guessOptionValue(option),
    [props.textAttribute]: guessOptionText(option),
  }
}

const normalizedOptions = computed(() => props.options.map(option => normalizeOption(option)))
const normalizedOptionsWithPlaceholder: ComputedRef<{ disabled?: boolean; children: { disabled?: boolean }[] }[]> = computed(() => {
  if (!props.placeholder)
    return normalizedOptions.value
  return [
    {
      [props.valueAttribute]: '',
      [props.textAttribute]: props.placeholder,
      disabled: true,
    },
    ...normalizedOptions.value,
  ]
})
const normalizedValue = computed(() => {
  const normalizeModelValue = normalizeOption(modelValue.value)
  const foundOption = normalizedOptionsWithPlaceholder.value.find(option => option[props.valueAttribute] === normalizeModelValue[props.valueAttribute])
  if (!foundOption)
    return ''
  return foundOption[props.valueAttribute]
})
const isLeading = computed(() => (props.icon && props.isLeading) || (props.icon && !props.isTrailing) || (props.isLoading && !props.isTrailing) || props.leadingIcon)
const isTrailing = computed(() => (props.icon && props.isTrailing) || (props.isLoading && props.isTrailing) || props.trailingIcon)
const leadingIconName = computed(() => props.isLoading ? props.loadingIcon : props.leadingIcon || props.icon)
const trailingIconName = computed(() => props.isLoading && !isLeading.value ? props.loadingIcon : props.trailingIcon || props.icon)
const selectClass = computed(() => {
  const variant = config.value.color?.[props.color]?.[props.variant as string] || config.value.variant[props.variant as string]
  return classNames(
    config.value.base,
    config.value.rounded[props.size],
    config.value.size[props.size],
    props.isPadded ? config.value.padding[props.size] : 'p-0',
    variant?.replaceAll('{color}', props.color),
    (isLeading.value || slots.leading) && config.value.leading.padding[props.size],
    (isTrailing.value || slots.trailing) && config.value.trailing.padding[props.size],
  )
})
const leadingWrapperIconClass = computed(() => classNames(
  config.value.icon.leading.wrapper,
  config.value.icon.leading.pointer,
  config.value.icon.leading.padding[props.size],
))
const leadingIconClass = computed(() => classNames(
  config.value.icon.base,
  Object.keys(appConfig.ui.colors).includes(props.color) && config.value.icon.color.replaceAll('{color}', props.color),
  config.value.icon.size[props.size],
  props.isLoading && 'animate-spin',
))
const trailingWrapperIconClass = computed(() => classNames(
  config.value.icon.trailing.wrapper,
  config.value.icon.trailing.pointer,
  config.value.icon.trailing.padding[props.size],
))
const trailingIconClass = computed(() => classNames(
  config.value.icon.base,
  config.value.icon.color.replaceAll('{color}', 'pilot'),
  config.value.icon.size[props.size],
  props.isLoading && !isLeading.value && 'animate-spin',
))
</script>

<template>
  <div :class="config.wrapper">
    <select
      :id="name"
      :name="name"
      :value="modelValue"
      :required="isRequired"
      :disabled="isDisabled || isLoading"
      :class="selectClass"
      @input="onInput"
    >
      <template v-for="(option, index) in normalizedOptionsWithPlaceholder">
        <optgroup
          v-if="option.children"
          :key="`${option[valueAttribute]}-optgroup-${index}`"
          :value="option[valueAttribute]"
          :label="option[textAttribute]"
        >
          <option
            v-for="(childOption, index2) in option.children"
            :key="`${childOption[valueAttribute]}-${index}-${index2}`"
            :value="childOption[valueAttribute]"
            :selected="childOption[valueAttribute] === normalizedValue"
            :disabled="childOption.disabled"
            v-text="childOption[textAttribute]"
          />
        </optgroup>
        <option
          v-else
          :key="`${option[valueAttribute]}-${index}`"
          :value="option[valueAttribute]"
          :selected="option[valueAttribute] === normalizedValue"
          :disabled="option.disabled"
          v-text="option[textAttribute]"
        />
      </template>
    </select>

    <span v-if="(isLeading && leadingIconName) || slots.leading" :class="leadingWrapperIconClass">
      <slot name="leading" :is-disabled="isDisabled" :loading="isLoading">
        <UIcon :name="leadingIconName" :class="leadingIconClass" />
      </slot>
    </span>

    <span v-if="(isTrailing && trailingIconName) || slots.trailing" :class="trailingWrapperIconClass">
      <slot name="trailing" :is-disabled="isDisabled" :loading="isLoading">
        <UIcon :name="trailingIconName" :class="trailingIconClass" aria-hidden="true" />
      </slot>
    </span>
  </div>
</template>
