<script setup lang="ts">
import { merge } from 'lodash-es'
import type { InputColor, InputVariant } from '../input/input'
import type { appConfig } from '~/config'
import type { Color, Size } from '~/types'
import { classNames } from '~/utils'

const props = withDefaults(defineProps<{
  name?: string
  placeholder?: string
  isRequired?: boolean
  isDisabled?: boolean
  rows?: number
  autoresize?: boolean
  autofocus?: boolean
  autocomplete?: string
  canResize?: boolean
  isPadded?: boolean
  size?: Size
  color?: Color | InputColor
  variant?: InputVariant | InputColor
  label?: string
  ui?: Partial<typeof appConfig.ui.textarea>
}>(), {
  rows: 3,
  isPadded: true,
  size: () => useAppUi().textarea.default.size,
  color: () => useAppUi().textarea.default.color,
  variant: () => useAppUi().textarea.default.variant,
  ui: () => useAppUi().textarea,
})
const emit = defineEmits<{
  (eventName: 'focus', value: FocusEvent): void
  (eventName: 'blur', value: FocusEvent): void
}>()
const modelValue = defineModel<string | number>({ default: '' })

const textarea = ref<HTMLTextAreaElement | null>(null)

const config = computed(() => merge({}, useAppUi().textarea, props.ui))
const textareaClass = computed(() => {
  const variant = config.value.color?.[props.color]?.[props.variant] || config.value.variant[props.variant]
  return classNames(
    config.value.base,
    config.value.rounded,
    config.value.placeholder,
    config.value.size[props.size],
    props.isPadded ? config.value.padding[props.size] : 'p-0',
    variant?.replaceAll('{color}', props.color),
    !props.canResize && 'resize-none',
  )
})

function autoFocus() {
  if (props.autofocus)
    textarea.value?.focus()
}
function autoResize() {
  if (props.autoresize) {
    if (!textarea.value)
      return
    textarea.value.rows = props.rows
    const styles = window.getComputedStyle(textarea.value)
    const paddingTop = Number.parseInt(styles.paddingTop)
    const paddingBottom = Number.parseInt(styles.paddingBottom)
    const padding = paddingTop + paddingBottom
    const lineHeight = Number.parseInt(styles.lineHeight)
    const { scrollHeight } = textarea.value
    const newRows = (scrollHeight - padding) / lineHeight
    if (newRows > props.rows)
      textarea.value.rows = newRows
  }
}
function onInput(event: Event) {
  autoResize()
  modelValue.value = (event.target as any).value
}

watch(modelValue, () => nextTick(autoResize))

onMounted(() => {
  setTimeout(() => {
    autoFocus()
    autoResize()
  }, 100)
})
</script>

<template>
  <div :class="config.wrapper">
    <textarea
      :id="name"
      ref="textarea"
      :value="modelValue"
      :name="name"
      :rows="rows"
      :required="isRequired"
      :disabled="isDisabled"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :class="textareaClass"
      @input="onInput"
      @focus="emit('focus', $event)"
      @blur="emit('blur', $event)"
    />
  </div>
</template>
