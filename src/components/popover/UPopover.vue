<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { merge } from 'lodash-es'
import type { appConfig } from '~/config'
import type { DeepPartial, PopperOptions } from '~/types'

const props = withDefaults(defineProps<{
  mode?: 'click' | 'hover'
  isDisabled?: boolean
  popper?: PopperOptions
  openDelay?: number
  closeDelay?: number
  ui?: DeepPartial<typeof appConfig.ui.popover>
}>(), {
  items: () => [],
  mode: 'click',
  openDelay: 50,
  closeDelay: 0,
  popper: () => ({}),
  ui: () => useAppUi().popover,
})

let openTimeout: NodeJS.Timeout | null = null
let closeTimeout: NodeJS.Timeout | null = null

const config = computed(() => merge({}, useAppUi().popover, props.ui))
const popper = computed<PopperOptions>(() => merge({}, props.popper, config.value.popper))
const [trigger, rContainer] = usePopper(popper.value)

// https://github.com/tailwindlabs/headlessui/blob/f66f4926c489fc15289d528294c23a3dc2aee7b1/packages/%40headlessui-vue/src/components/popover/popover.ts#L151
const popoverApi = ref<any>(null)

function onMouseOver() {
  if (props.mode !== 'hover' || !popoverApi.value)
    return
  if (closeTimeout) {
    clearTimeout(closeTimeout)
    closeTimeout = null
  }
  if (popoverApi.value.popoverState === 0)
    return
  openTimeout = openTimeout || setTimeout(() => {
    popoverApi.value.togglePopover && popoverApi.value.togglePopover()
    openTimeout = null
  }, props.openDelay)
}
function onMouseLeave() {
  if (props.mode !== 'hover' || !popoverApi.value)
    return
  if (openTimeout) {
    clearTimeout(openTimeout)
    openTimeout = null
  }
  if (popoverApi.value.popoverState === 1)
    return
  closeTimeout = closeTimeout || setTimeout(() => {
    popoverApi.value.closePopover && popoverApi.value.closePopover()
    closeTimeout = null
  }, props.closeDelay)
}

onMounted(() => {
  setTimeout(() => {
    // @ts-expect-error internals
    const popoverProvides = trigger.value?.$.provides
    if (!popoverProvides)
      return
    const popoverProvidesSymbols = Object.getOwnPropertySymbols(popoverProvides)
    popoverApi.value = popoverProvidesSymbols.length && popoverProvides[popoverProvidesSymbols[0]]
  }, 200)
})
</script>

<template>
  <Popover v-slot="{ open, close }" :class="config.wrapper" @mouseleave="onMouseLeave">
    <PopoverButton
      ref="trigger"
      as="div"
      :disabled="isDisabled"
      class="w-full inline-flex"
      role="button"
      aria-label="popover"
      @mouseover="onMouseOver"
    >
      <slot :open="open" :close="close">
        <button :disabled="isDisabled">
          Open
        </button>
      </slot>
    </PopoverButton>

    <div v-if="open" ref="rContainer" :class="[config.container, config.width]" @mouseover="onMouseOver">
      <Transition appear v-bind="config.transition">
        <PopoverPanel :class="[config.base, config.background, config.padding, config.ring, config.rounded, config.shadow]" static>
          <slot name="panel" :open="open" :close="close" />
        </PopoverPanel>
      </Transition>
    </div>
  </Popover>
</template>
