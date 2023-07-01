<script setup lang="ts">
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { merge } from 'lodash-es'
import { appConfig } from '~/config'
import type { Color, PopperOptions, Size } from '~/types'
import type { InputColor, InputVariant } from '~/components/input/input'
import { classNames } from '~/utils'

type Option = { [key: string]: any; isDisabled?: boolean } | string

const props = withDefaults(defineProps<{
  sortBy?: string
  options?: Option[]
  name?: string
  isRequired?: boolean
  icon?: string
  loadingIcon?: string
  leadingIcon?: string
  trailingIcon?: string
  isTrailing?: boolean
  isLeading?: boolean
  isLoading?: boolean
  selectedIcon?: string
  isDisabled?: boolean
  isMultiple?: boolean
  isSearchable?: boolean
  isCreatable?: boolean
  placeholder?: string
  isPadded?: boolean
  size?: Size
  color?: Color | InputColor
  variant?: InputVariant | InputColor
  optionAttribute?: string
  searchablePlaceholder?: string
  searchAttributes?: any[]
  popper?: PopperOptions
  ui?: Partial<typeof appConfig.ui.selectMenu>
  uiSelect?: Partial<typeof appConfig.ui.select>
}>(), {
  options: () => [],
  loadingIcon: () => useAppUi().input.default.loadingIcon,
  trailingIcon: () => useAppUi().select.default.trailingIcon,
  selectedIcon: () => useAppUi().selectMenu.default.selectedIcon,
  searchablePlaceholder: 'Search...',
  optionAttribute: 'label',
  isPadded: true,
  size: () => useAppUi().select.default.size,
  color: () => useAppUi().select.default.color,
  variant: () => useAppUi().select.default.variant,
  popper: () => ({}),
  ui: () => useAppUi().selectMenu,
  uiSelect: () => useAppUi().select,
})

const emit = defineEmits<{
  (eventName: 'open'): void
  (eventName: 'close'): void
}>()

function reduceOptions(options: Option[]): Option[] {
  return options.reduce((c, v) => {
    if (!(c as Option[]).find(el => typeof el === 'string' ? el === v : el[props.optionAttribute] === v[props.optionAttribute]))
      (c as Option[]).push(v)
    return c
  }, []) as Option[]
}

const modelValue = defineModel<string | number | object | any[]>({ default: '' })

const query = ref('')
const searchInput = ref<ComponentPublicInstance<HTMLElement>>()

const slots = useSlots()

const config = computed(() => merge({}, useAppUi().selectMenu, props.ui))
const configSelect = computed(() => merge({}, useAppUi().select, props.uiSelect))
const popper = computed<PopperOptions>(() => merge({}, config.value.popper, props.popper))
const isLeading = computed(() => (props.icon && props.isLeading) || (props.icon && !props.isTrailing) || (props.isLoading && !props.isTrailing) || props.leadingIcon)
const isTrailing = computed(() => (props.icon && props.isTrailing) || (props.isLoading && props.isTrailing) || props.trailingIcon)
const leadingIconName = computed(() => props.isLoading ? props.loadingIcon : props.leadingIcon || props.icon)
const trailingIconName = computed(() => props.isLoading && !isLeading.value ? props.loadingIcon : props.trailingIcon || props.icon)
const selectMenuClass = computed(() => {
  const variant = configSelect.value.color?.[props.color]?.[props.variant] || configSelect.value.variant[props.variant]
  return classNames(
    configSelect.value.base,
    configSelect.value.rounded,
    'text-left cursor-default',
    configSelect.value.size[props.size],
    configSelect.value.gap[props.size],
    props.isPadded ? configSelect.value.padding[props.size] : 'p-0',
    variant?.replaceAll('{color}', props.color),
    (isLeading.value || slots.leading) && configSelect.value.leading.padding[props.size],
    (isTrailing.value || slots.trailing) && configSelect.value.trailing.padding[props.size],
    'inline-flex items-center',
  )
})
const leadingWrapperIconClass = computed(() => classNames(
  configSelect.value.icon.leading.wrapper,
  configSelect.value.icon.leading.pointer,
  configSelect.value.icon.leading.padding[props.size],
))
const leadingIconClass = computed(() => classNames(
  configSelect.value.icon.base,
  Object.keys(appConfig.ui.colors).includes(props.color) && configSelect.value.icon.color.replaceAll('{color}', props.color),
  configSelect.value.icon.size[props.size],
  props.isLoading && 'animate-spin',
))
const trailingWrapperIconClass = computed(() => classNames(
  configSelect.value.icon.trailing.wrapper,
  configSelect.value.icon.trailing.pointer,
  configSelect.value.icon.trailing.padding[props.size],
))
const trailingIconClass = computed(() => classNames(
  configSelect.value.icon.base,
  Object.keys(appConfig.ui.colors).includes(props.color) && configSelect.value.icon.color.replaceAll('{color}', props.color),
  configSelect.value.icon.size[props.size],
  props.isLoading && !isLeading.value && 'animate-spin',
))
const filteredOptions = computed(() => {
  const opt = Array.isArray(modelValue.value) && props.isMultiple
    ? reduceOptions([...props.options, ...modelValue.value])
    : props.options as any

  return query.value === ''
    ? opt
    : opt.filter((option: any) => {
      return (props.searchAttributes?.length ? props.searchAttributes : [props.optionAttribute]).some((searchAttribute: any) => {
        return typeof option === 'string' ? option.search(new RegExp(query.value, 'i')) !== -1 : (option[searchAttribute] && option[searchAttribute].search(new RegExp(query.value, 'i')) !== -1)
      })
    })
})
const queryOption = computed(() => {
  return query.value === '' ? null : { [props.optionAttribute]: query.value }
})

const [trigger, container] = usePopper(popper.value)

function onUpdate(event: any) {
  if (query.value && searchInput.value?.$el) {
    query.value = ''
    searchInput.value.$el.value = ''
  }
  modelValue.value = event
}

watch(container, value => value ? emit('open') : emit('close'))
</script>

<template>
  <component
    :is="isSearchable ? Combobox : Listbox"
    v-slot="{ open }"
    :by="sortBy"
    :name="name"
    :model-value="modelValue"
    :multiple="isMultiple"
    :disabled="isDisabled || isLoading"
    as="div"
    :class="ui.wrapper"
    @update:model-value="onUpdate"
  >
    <input
      v-if="isRequired"
      :value="modelValue"
      :required="isRequired"
      class="absolute inset-0 w-px cursor-default opacity-0"
      tabindex="-1"
      aria-hidden="true"
    >
    <component
      :is="isSearchable ? ComboboxButton : ListboxButton"
      ref="trigger"
      as="div"
      role="button"
      class="w-full inline-flex"
    >
      <slot :open="open" :disabled="isDisabled" :loading="isLoading">
        <button :class="selectMenuClass" :disabled="isDisabled || isLoading" type="button">
          <span v-if="(isLeading && leadingIconName) || $slots.leading" :class="leadingWrapperIconClass">
            <slot name="leading" :disabled="isDisabled" :loading="isLoading">
              <UIcon :name="leadingIconName" :class="leadingIconClass" />
            </slot>
          </span>
          <slot name="label">
            <span v-if="isMultiple && Array.isArray(modelValue) && modelValue.length" class="block truncate">{{ modelValue.length }} selected</span>
            <span v-else-if="!isMultiple && modelValue" class="block truncate">{{ typeof modelValue === 'string' ? modelValue : modelValue[optionAttribute] }}</span>
            <span v-else class="block truncate" :class="config.placeholder">{{ placeholder || '&nbsp;' }}</span>
          </slot>
          <span v-if="(isTrailing && trailingIconName) || $slots.trailing" :class="trailingWrapperIconClass">
            <slot name="trailing" :disabled="isDisabled" :loading="isLoading">
              <UIcon :name="trailingIconName" :class="trailingIconClass" aria-hidden="true" />
            </slot>
          </span>
        </button>
      </slot>
    </component>
    <div v-if="open" ref="container" :class="[config.container, config.width]">
      <Transition v-bind="config.transition">
        <component :is="isSearchable ? ComboboxOptions : ListboxOptions" static :class="[config.base, config.divide, config.ring, config.rounded, config.shadow, config.background, config.padding, config.height]">
          <ComboboxInput
            v-if="isSearchable"
            ref="searchInput"
            :display-value="() => query"
            name="q"
            :placeholder="searchablePlaceholder"
            autofocus
            autocomplete="off"
            :class="config.input"
            @change="query = $event.target.value"
          />
          <component
            :is="isSearchable ? ComboboxOption : ListboxOption"
            v-for="(option, index) in filteredOptions"
            v-slot="{ active, selected, disabled: optionDisabled }"
            :key="index"
            as="template"
            :value="option"
            :disabled="option.isDisabled"
          >
            <li :class="[config.option.base, config.option.rounded, config.option.padding, config.option.size, config.option.color, active ? config.option.active : config.option.inactive, selected && config.option.selected, optionDisabled && config.option.disabled]">
              <div :class="config.option.container">
                <slot name="option" :option="option" :active="active" :selected="selected">
                  <UIcon v-if="option.icon" :name="option.icon" :class="[config.option.icon.base, active ? config.option.icon.active : config.option.icon.inactive, option.iconClass]" aria-hidden="true" />
                  <UAvatar
                    v-else-if="option.avatar"
                    v-bind="{ size: config.option.avatar.size, ...option.avatar }"
                    :class="config.option.avatar.base"
                    aria-hidden="true"
                  />
                  <span v-else-if="option.chip" :class="config.option.chip.base" :style="{ background: `#${option.chip}` }" />
                  <span class="truncate">{{ typeof option === 'string' ? option : option[optionAttribute] }}</span>
                </slot>
              </div>
              <span v-if="selected" :class="[config.option.selectedIcon.wrapper, config.option.selectedIcon.padding]">
                <UIcon :name="selectedIcon" :class="config.option.selectedIcon.base" aria-hidden="true" />
              </span>
            </li>
          </component>
          <component :is="isSearchable ? ComboboxOption : ListboxOption" v-if="isCreatable && queryOption && !filteredOptions.length" v-slot="{ active, selected }" :value="queryOption" as="template">
            <li :class="[config.option.base, config.option.rounded, config.option.padding, config.option.size, config.option.color, active ? config.option.active : config.option.inactive]">
              <div :class="config.option.container">
                <slot name="option-create" :option="queryOption" :active="active" :selected="selected">
                  <span class="block truncate">Create "{{ queryOption[optionAttribute] }}"</span>
                </slot>
              </div>
            </li>
          </component>
          <p v-else-if="isSearchable && query && !filteredOptions.length" :class="config.option.empty">
            <slot name="option-empty" :query="query">
              No results for "{{ query }}".
            </slot>
          </p>
        </component>
      </Transition>
    </div>
  </component>
</template>
