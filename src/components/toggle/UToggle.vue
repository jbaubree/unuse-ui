<script setup lang="ts">
import { merge } from 'lodash-es'
import { Switch } from '@headlessui/vue'
import type { appConfig } from '~/config'
import type { DeepPartial } from '~/types'

const props = withDefaults(defineProps<{
  isDisabled?: boolean
  label?: string
  name?: string
  onIcon?: string
  offIcon?: string
  size?: 'sm' | 'md'
  ui?: DeepPartial<typeof appConfig.ui.toggle>
}>(), {
  size: () => useAppUi().toggle.default.size,
  ui: () => useAppUi().toggle,
})
const isActive = defineModel<boolean | null>({ default: false })

const config = computed(() => merge({}, useAppUi().toggle, props.ui))

watch(isActive, () => {
  if (!isActive.value)
    isActive.value = false
}, { immediate: true })
</script>

<template>
  <Switch v-if="isActive" v-model="isActive" :disabled="isDisabled" :name="name" :aria-label="name" :class="config.wrapper">
    <span v-if="label" :class="[config.label.base, config.label.size[size]]">{{ label }}</span>
    <div :class="[isActive ? config.button.active : config.button.inactive, config.button.size[size], config.button.base, { [config.button.disabled]: isDisabled }]">
      <span :class="[isActive ? [config.slider.active, config.slider.translate[size]] : config.slider.inactive, config.slider.base, config.slider.size[size]]">
        <span v-if="onIcon" :class="[isActive ? config.icon.active : config.icon.inactive, config.icon.base]">
          <UIcon :name="onIcon" :class="[config.icon.on, config.icon.size[size]]" />
        </span>
        <span v-if="offIcon" :class="[isActive ? config.icon.inactive : config.icon.active, config.icon.base]">
          <UIcon :name="offIcon" :class="[config.icon.off, config.icon.size[size]]" />
        </span>
      </span>
    </div>
  </Switch>
</template>
