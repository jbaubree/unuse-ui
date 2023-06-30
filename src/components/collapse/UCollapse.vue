<script setup lang="ts">
import { Disclosure as HDisclosure, DisclosureButton as HDisclosureButton, DisclosurePanel as HDisclosurePanel } from '@headlessui/vue'
import { merge, omit } from 'lodash-es'
import type { Button } from '~/components/button/button'
import UIcon from '~/components/icon/UIcon.vue'
import UButton from '~/components/button/UButton.vue'
import type { appConfig } from '~/config'

const props = withDefaults(defineProps<{
  items: Partial<Button & { slot: string; isDisabled: boolean; content: string; isDefaultOpen: boolean }>[]
  isDefaultOpen?: boolean
  openIcon?: string
  closeIcon?: string
  ui?: Partial<typeof appConfig.ui.collapse>
}>(), {
  items: () => [],
  openIcon: () => useAppUi().collapse.default.openIcon,
  closeIcon: () => useAppUi().collapse.default.closeIcon,
  ui: () => useAppUi().collapse,
})
defineOptions({
  inheritAttrs: false,
})

const attrs = useAttrs()

const config = computed(() => merge({}, useAppUi().collapse, props.ui))
const configButton = computed(() => useAppUi().button)

function onEnter(el: Element, done: () => void) {
  (el as HTMLElement).style.height = '0';
  // eslint-disable-next-line no-unused-expressions
  (el as HTMLElement).offsetHeight; // Trigger a reflow, flushing the CSS changes
  (el as HTMLElement).style.height = `${el.scrollHeight}px`
  el.addEventListener('transitionend', done, { once: true })
}

function onBeforeLeave(el: Element) {
  (el as HTMLElement).style.height = `${el.scrollHeight}px`;
  // eslint-disable-next-line no-unused-expressions
  (el as HTMLElement).offsetHeight // Trigger a reflow, flushing the CSS changes
}

function onAfterEnter(el: Element) {
  (el as HTMLElement).style.height = 'auto'
}

function onLeave(el: Element, done: () => void) {
  (el as HTMLElement).style.height = '0';

  (el as HTMLElement).addEventListener('transitionend', done, { once: true })
}
</script>

<template>
  <div :class="config.wrapper">
    <HDisclosure v-for="(item, index) in items" v-slot="{ open, close }" :key="index" :default-open="isDefaultOpen || item.isDefaultOpen">
      <HDisclosureButton as="template" :disabled="item.isDisabled">
        <slot :item="item" :index="index" :open="open" :close="close">
          <UButton v-bind="{ ...omit(config.default, ['openIcon', 'closeIcon']), ...attrs, ...omit(item, ['slot', 'disabled', 'content', 'defaultOpen']) }" is-block>
            <template #trailing>
              <UIcon
                :name="!open ? openIcon : closeIcon ? closeIcon : openIcon"
                class="ms-auto transform transition-transform"
                :class="[
                  open && !closeIcon ? '-rotate-180' : '',
                  configButton.icon.size[item.size || configButton.default.size],
                ]"
              />
            </template>
          </UButton>
        </slot>
      </HDisclosureButton>

      <Transition
        v-bind="config.transition"
        @enter="onEnter"
        @after-enter="onAfterEnter"
        @before-leave="onBeforeLeave"
        @leave="onLeave"
      >
        <div v-show="open">
          <HDisclosurePanel :class="[config.item.base, config.item.size, config.item.color, config.item.padding]" static>
            <slot :name="item.slot || 'item'" :item="item" :index="index" :open="open" :close="close">
              {{ item.content }}
            </slot>
          </HDisclosurePanel>
        </div>
      </Transition>
    </HDisclosure>
  </div>
</template>
