<script setup lang="ts">
import { merge } from 'lodash-es'
import { Switch } from '@headlessui/vue'
import type { appConfig } from '~/config'

const props = withDefaults(defineProps<{
  isDisabled?: boolean
  label?: string
  name?: string
  onIcon?: string
  offIcon?: string
  ui?: Partial<typeof appConfig.ui.toggle>
}>(), {
  ui: () => useAppUi().toggle,
})

const isActive = defineModel<boolean>({ default: false })

const config = computed(() => merge({}, useAppUi().toggle, props.ui))
</script>

<template>
  <Switch v-model="isActive" :disabled="isDisabled" :name="name" :class="config.wrapper">
    <span v-if="label" :class="config.label">{{ label }}</span>
    <div :class="[isActive ? config.button.active : config.button.inactive, config.button.base, { [config.button.disabled]: isDisabled }]">
      <span :class="[isActive ? config.slider.active : config.slider.inactive, config.slider.base]">
        <span v-if="onIcon" :class="[isActive ? config.icon.active : config.icon.inactive, config.icon.base]">
          <UIcon :name="onIcon" :class="config.icon.on" />
        </span>
        <span v-if="offIcon" :class="[isActive ? config.icon.inactive : config.icon.active, config.icon.base]">
          <UIcon :name="offIcon" :class="config.icon.off" />
        </span>
      </span>
    </div>
  </Switch>
</template>
