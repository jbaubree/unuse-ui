<script setup lang="ts">
import { merge } from 'lodash-es'
import type { appConfig } from '~/config'
import type { DeepPartial, PopperOptions } from '~/types'

const props = withDefaults(defineProps<{
  text?: string
  prevent?: boolean
  openDelay?: number
  closeDelay?: number
  popper?: PopperOptions
  ui?: DeepPartial<typeof appConfig.ui.tooltip>
}>(), {
  openDelay: 0,
  closeDelay: 0,
  popper: () => ({}),
  ui: () => useAppUi().tooltip,
})

const open = ref(false)
let openTimeout: NodeJS.Timeout | null = null
let closeTimeout: NodeJS.Timeout | null = null

const config = computed(() => merge({}, useAppUi().tooltip, props.ui))
const popper = computed<PopperOptions>(() => merge({}, props.popper, config.value.popper))

const [trigger, container] = usePopper(popper.value)

function onMouseOver() {
  if (closeTimeout) {
    clearTimeout(closeTimeout)
    closeTimeout = null
  }
  if (open.value)
    return
  openTimeout = openTimeout || setTimeout(() => {
    open.value = true
    openTimeout = null
  }, props.openDelay)
}
function onMouseLeave() {
  if (openTimeout) {
    clearTimeout(openTimeout)
    openTimeout = null
  }
  if (!open.value)
    return
  closeTimeout = closeTimeout || setTimeout(() => {
    open.value = false
    closeTimeout = null
  }, props.closeDelay)
}
</script>

<template>
  <div ref="trigger" :class="config.wrapper" @mouseover="onMouseOver" @mouseleave="onMouseLeave">
    <slot :open="open">
      hover
    </slot>

    <div v-if="open && !prevent" ref="container" :class="[config.container, config.width]">
      <Transition appear v-bind="config.transition">
        <div :class="[config.base, config.background, config.rounded, config.shadow, config.ring]">
          <slot name="text">
            {{ text }}
          </slot>
        </div>
      </Transition>
    </div>
  </div>
</template>
