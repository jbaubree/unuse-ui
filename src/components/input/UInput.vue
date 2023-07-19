<script setup lang="ts">
import { merge } from 'lodash-es'
import type { InputColor, InputVariant } from './input'
import { appConfig } from '~/config'
import type { Color, DeepPartial, Size } from '~/types'
import { classNames } from '~/utils'

const props = withDefaults(defineProps<{
  type?: string
  name?: string
  placeholder?: string
  isRequired?: boolean
  isDisabled?: boolean
  isReadonly?: boolean
  autofocus?: boolean
  autocomplete?: string
  spellcheck?: boolean
  icon?: string
  loadingIcon?: string
  leadingIcon?: string
  trailingIcon?: string
  isTrailing?: boolean
  isLeading?: boolean
  isLoading?: boolean
  isPadded?: boolean
  size?: Size
  color?: Color | InputColor
  variant?: InputVariant | InputColor
  ui?: DeepPartial<typeof appConfig.ui.input>
}>(), {
  ui: () => useAppUi().input,
  loadingIcon: () => useAppUi().input.default.loadingIcon,
  size: () => useAppUi().input.default.size,
  color: () => useAppUi().input.default.color,
  variant: 'outline',
  isPadded: true,
  type: 'text',
})
const emit = defineEmits<{
  (eventName: 'focus', value: FocusEvent): void
  (eventName: 'blur', value: FocusEvent): void
}>()
const modelValue = defineModel<string | number>({ default: '' })

const slots = useSlots()

const input = ref<HTMLInputElement | null>(null)

const config = computed(() => merge({}, useAppUi().input, props.ui))
const isLeading = computed(() => (props.icon && props.isLeading) || (props.icon && !props.isTrailing) || (props.isLoading && !props.isTrailing) || props.leadingIcon)
const isTrailing = computed(() => (props.icon && props.isTrailing) || (props.isLoading && props.isTrailing) || props.trailingIcon)
const leadingIconName = computed(() => props.isLoading ? props.loadingIcon : props.leadingIcon || props.icon)
const trailingIconName = computed(() => props.isLoading && !isLeading.value ? props.loadingIcon : props.trailingIcon || props.icon)
const inputClass = computed(() => {
  const variant = config.value.color?.[props.color]?.[props.variant as InputVariant] || config.value.variant[props.variant as InputVariant]
  return classNames(
    config.value.base,
    config.value.rounded[props.size],
    config.value.placeholder,
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
  config.value.icon[modelValue.value ? 'active' : 'inactive'],
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
  config.value.icon[modelValue.value ? 'active' : 'inactive'],
  Object.keys(appConfig.ui.colors).includes(props.color) && config.value.icon.color.replaceAll('{color}', props.color),
  config.value.icon.size[props.size],
  props.isLoading && !isLeading.value && 'animate-spin',
))

function autoFocus() {
  if (props.autofocus)
    input.value?.focus()
}
function onInput(event: Event) {
  modelValue.value = (event.target as HTMLInputElement).value
}

onMounted(() => {
  setTimeout(() => {
    autoFocus()
  }, 100)
})
</script>

<template>
  <div :class="ui.wrapper">
    <input
      :id="name"
      ref="input"
      :name="name"
      :value="modelValue"
      :type="type"
      :required="isRequired"
      :placeholder="placeholder"
      :disabled="isDisabled || isLoading"
      :readonly="isReadonly"
      :autocomplete="autocomplete"
      :spellcheck="spellcheck"
      :class="inputClass"
      @focus="emit('focus', $event)"
      @blur="emit('blur', $event)"
      @input="onInput"
    >
    <slot />

    <span v-if="(isLeading && leadingIconName) || slots.leading" :class="leadingWrapperIconClass">
      <slot name="leading" :is-disabled="isDisabled" :loading="isLoading">
        <UIcon :name="leadingIconName" :class="leadingIconClass" />
      </slot>
    </span>

    <span v-if="(isTrailing && trailingIconName) || slots.trailing" :class="trailingWrapperIconClass">
      <slot name="trailing" :is-disabled="isDisabled" :loading="isLoading">
        <UIcon :name="trailingIconName" :class="trailingIconClass" />
      </slot>
    </span>
  </div>
</template>
