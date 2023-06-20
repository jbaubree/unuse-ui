<script setup lang="ts">
import { merge } from 'lodash-es'
import type { RouteLocationRaw } from 'vue-router'
import type { ButtonColor, ButtonVariant } from './button'
import { classNames } from '~/utils'
import type { appConfig } from '~/config'
import type { Color, Size } from '~/types'

const props = withDefaults(defineProps<{
  type?: string
  isBlock?: boolean
  label?: string
  isLoading?: boolean
  isDisabled?: boolean
  isPadded?: boolean
  size?: Size
  color?: Color | ButtonColor
  variant?: ButtonVariant
  icon?: string
  loadingIcon?: string
  leadingIcon?: string
  trailingIcon?: string
  isTrailing?: boolean
  isLeading?: boolean
  to?: string | RouteLocationRaw
  target?: string
  ariaLabel?: string
  isSquare?: boolean
  isTruncate?: boolean
  ui?: Partial<typeof appConfig.ui.button>
}>(), {
  isPadded: true,
  loadingIcon: () => useAppUi().button.default.loadingIcon,
  color: () => useAppUi().button.default.color,
  variant: () => useAppUi().button.default.variant,
  size: () => useAppUi().button.default.size,
  ui: () => useAppUi().button,
  type: 'button',
})

const slots = useSlots()

const config = computed(() => merge({}, useAppUi().button, props.ui))
const component = computed(() => props.to ? 'RouterLink' : 'button')
const buttonProps = computed(() => props.to
  ? { to: props.to, target: props.target }
  : { disabled: props.isDisabled || props.isLoading, type: props.type },
)
const isLeading = computed(() => (props.icon && props.isLeading) || (props.icon && !props.isTrailing) || (props.isLoading && !props.isTrailing) || props.leadingIcon)
const isTrailing = computed(() => (props.icon && props.isTrailing) || (props.isLoading && props.isTrailing) || props.trailingIcon)
const isSquare = computed(() => props.isSquare || (!slots.default && !props.label))
const buttonClass = computed(() => {
  const variant = config.value.color?.[props.color]?.[props.variant] || config.value.variant[props.variant]
  return classNames(
    config.value.base,
    config.value.font,
    config.value.rounded,
    config.value.size[props.size],
    config.value.gap[props.size],
    props.isPadded && config.value[isSquare.value ? 'square' : 'padding'][props.size],
    variant?.replaceAll('{color}', props.color),
    props.isBlock ? 'w-full flex justify-center items-center' : 'inline-flex items-center',
  )
})
const leadingIconName = computed(() => props.isLoading ? props.loadingIcon : props.leadingIcon || props.icon)
const trailingIconName = computed(() => (props.isLoading && !isLeading.value) ? props.loadingIcon : props.trailingIcon || props.icon)
const leadingIconClass = computed(() => classNames(
  config.value.icon.base,
  config.value.icon.size[props.size],
  props.isLoading && 'animate-spin',
))
const trailingIconClass = computed(() => classNames(
  config.value.icon.base,
  config.value.icon.size[props.size],
  props.isLoading && !isLeading.value && 'animate-spin',
))
</script>

<template>
  <component
    :is="component"
    :class="buttonClass"
    :aria-label="ariaLabel"
    v-bind="buttonProps"
  >
    <slot name="leading" :disabled="isDisabled" :loading="isLoading">
      <UIcon v-if="isLeading && leadingIconName" :name="leadingIconName" :class="leadingIconClass" />
    </slot>
    <slot>
      <span v-if="label" :class="[isTruncate ? 'text-left break-all line-clamp-1' : '']">
        {{ label }}
      </span>
    </slot>
    <slot name="trailing" :disabled="isDisabled" :loading="isLoading">
      <UIcon v-if="isTrailing && trailingIconName" :name="trailingIconName" :class="trailingIconClass" />
    </slot>
  </component>
</template>
