<script setup lang="ts">
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { merge } from 'lodash-es'
import type { appConfig } from '~/config'

const props = withDefaults(defineProps<{
  appear?: boolean
  side?: 'right' | 'left'
  hasOverlay?: boolean
  hasTransition?: boolean
  ui?: Partial<typeof appConfig.ui.slider>
}>(), {
  side: 'right',
  hasOverlay: true,
  hasTransition: true,
  ui: () => useAppUi().slider,
})
const emit = defineEmits<{
  (eventName: 'close'): void
}>()
const isOpen = defineModel<boolean>({ default: false })
const config = computed(() => merge({}, useAppUi().slider, props.ui))
const transitionClass = computed(() => {
  if (!props.hasTransition)
    return {}

  return {
    ...config.value.transition,
    enterFrom: props.side === 'left' ? '-translate-x-full' : 'translate-x-full',
    enterTo: 'translate-x-0',
    leaveFrom: 'translate-x-0',
    leaveTo: props.side === 'left' ? '-translate-x-full' : 'translate-x-full',
  }
})

function onClose(value: boolean) {
  isOpen.value = value
  emit('close')
}
</script>

<template>
  <TransitionRoot as="template" :appear="appear" :show="isOpen">
    <Dialog :class="[config.wrapper, { 'justify-end': side === 'right' }]" @close="onClose">
      <TransitionChild v-if="hasOverlay" as="template" :appear="appear" v-bind="config.overlay.transition">
        <div :class="[config.overlay.base, config.overlay.background]" />
      </TransitionChild>

      <TransitionChild as="template" :appear="appear" v-bind="transitionClass">
        <DialogPanel :class="[config.base, config.width, config.background, config.ring, config.padding]">
          <slot />
        </DialogPanel>
      </TransitionChild>
    </Dialog>
  </TransitionRoot>
</template>