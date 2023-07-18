<script setup lang="ts">
import { merge } from 'lodash-es'
import type { appConfig } from '~/config'
import type { DeepPartial } from '~/types'

const props = withDefaults(defineProps<{
  as?: string
  ui?: DeepPartial<typeof appConfig.ui.card>
}>(), {
  as: 'div',
  ui: () => useAppUi().card,
})

defineOptions({
  inheritAttrs: false,
})

const attrs = useAttrs()
const slots = useSlots()

const config = computed(() => merge({}, useAppUi().card, props.ui))
</script>

<template>
  <component
    :is="attrs.onSubmit ? 'form' : as"
    :class="[config.base, config.rounded, config.divide, config.ring, config.shadow, config.background]"
    v-bind="attrs"
  >
    <div v-if="slots.header" :class="[config.header.base, config.header.padding, config.header.background]">
      <slot name="header" />
    </div>
    <div :class="[config.body.base, config.body.padding, config.body.background]">
      <slot />
    </div>
    <div v-if="slots.footer" :class="[config.footer.base, config.footer.padding, config.footer.background]">
      <slot name="footer" />
    </div>
  </component>
</template>
