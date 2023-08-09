<script setup lang="ts" generic="T extends BreadcrumbItem">
import { merge } from 'lodash-es'
import type { appConfig } from '~/config'
import type { Color, DeepPartial } from '~/types'

export interface BreadcrumbItem {
  label: string
  to?: string
}

const props = withDefaults(defineProps<{
  items: T[]
  color?: Color
  ui?: DeepPartial<typeof appConfig.ui.breadcrumb>
}>(), {
  ui: () => useAppUi().breadcrumb,
  color: 'primary',
})

const { items } = toRefs(props)

const config = computed(() => merge({}, useAppUi().breadcrumb, props.ui))
</script>

<template>
  <div :class="config.wrapper">
    <template v-for="{ label, to }, index in items" :key="index">
      <component :is="to ? 'a' : 'div'" :href="to" :class="config.link.wrapper">
        <span :class="to ? config.link.active.replaceAll('{color}', color) : config.link.inactive">
          {{ label }}
        </span>
      </component>
      <span v-if="index < items.length - 1">/</span>
    </template>
  </div>
</template>
