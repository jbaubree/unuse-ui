<script setup lang="ts">
import { merge } from 'lodash-es'
import { Switch } from '@headlessui/vue'
import { appConfig } from '~/config'

const { ui = appConfig.ui.toggle } = defineProps<{
  label?: string
  name?: string
  onIcon?: string
  offIcon?: string
  ui?: Partial<typeof appConfig.ui.toggle>
}>()

const isActive = defineModel<boolean>({ default: false })

const config = computed(() => merge({}, ui, appConfig.ui.toggle))
</script>

<template>
  <Switch v-model="isActive" :name="name" :class="config.wrapper">
    <span v-if="label" :class="config.label">{{ label }}</span>
    <div :class="[isActive ? config.button.active : config.button.inactive, config.button.base]">
      <span :class="[isActive ? config.slider.active : config.slider.inactive, config.slider.base]">
        <span v-if="onIcon" :class="[isActive ? config.icon.active : config.icon.inactive, config.icon.base]" aria-hidden="true">
          <UIcon :name="onIcon" :class="config.icon.on" />
        </span>
        <span v-if="offIcon" :class="[isActive ? config.icon.inactive : config.icon.active, config.icon.base]" aria-hidden="true">
          <UIcon :name="offIcon" :class="config.icon.off" />
        </span>
      </span>
    </div>
  </Switch>
</template>
