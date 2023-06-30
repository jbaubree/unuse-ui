<script setup lang="ts">
import { merge } from 'lodash-es'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import type { appConfig } from '~/config'

const props = withDefaults(defineProps<{
  appear?: boolean
  hasOverlay?: boolean
  hasTransition?: boolean
  ui?: Partial<typeof appConfig.ui.dialog>
}>(), {
  hasOverlay: true,
  hasTransition: true,
  ui: () => useAppUi().dialog,
})
const emit = defineEmits<{
  (eventName: 'close'): void
}>()
const isOpen = defineModel<boolean>({ default: false })

const rDialogContent = ref<HTMLDivElement>()

const config = computed(() => merge({}, useAppUi().dialog, props.ui))
const transitionClass = computed(() => {
  if (!props.hasTransition)
    return {}
  return {
    ...config.value.transition,
  }
})

function close(value: boolean) {
  isOpen.value = value
  emit('close')
}
</script>

<template>
  <TransitionRoot :appear="appear" :show="isOpen" as="template">
    <Dialog :class="config.wrapper" :initial-focus="rDialogContent" @close="close">
      <TransitionChild v-if="hasOverlay" as="template" :appear="appear" v-bind="config.overlay.transition">
        <div :class="[config.overlay.base, config.overlay.background]" />
      </TransitionChild>
      <div ref="rDialogContent" :class="config.inner">
        <div :class="[config.container, config.padding]">
          <TransitionChild as="template" :appear="appear" v-bind="transitionClass">
            <DialogPanel :class="[config.base, config.width, config.height, config.background, config.ring, config.rounded, config.shadow]">
              <slot />
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
