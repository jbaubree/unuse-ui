<script setup lang="ts">
import { merge } from 'lodash-es'
import { classNames } from '~/utils'
import type { Avatar } from '~/components/avatar/avatar'

const props = withDefaults(defineProps<Avatar>(), {
  size: () => useAppUi().avatar.default.size,
  chipPosition: () => useAppUi().avatar.default.chipPosition,
  ui: () => useAppUi().avatar,
  icon: 'icon-ph-check-bold',
})

const error = ref(false)

const config = computed(() => merge({}, useAppUi().avatar, props.ui))
const url = computed(() => typeof props.src === 'boolean' ? undefined : props.src)
const placeholder = computed(() => (props.alt || '').split(' ').map(word => word.charAt(0)).join('').substring(0, 2))
const wrapperClass = computed(() => classNames(
  config.value.wrapper,
  config.value.background,
  config.value.rounded,
  config.value.size[props.size],
))
const avatarClass = computed(() => classNames(
  config.value.rounded,
  config.value.image,
  config.value.size[props.size],
))
const chipClass = computed(() => classNames(
  config.value.chip.base,
  config.value.chip.size[props.size],
  config.value.chip.position[props.chipPosition],
  props.chipColor && config.value.chip.background.replaceAll('{color}', props.chipColor),
))

watch(() => props.src, () => {
  if (error.value)
    error.value = false
})
</script>

<template>
  <span :class="wrapperClass">
    <img v-if="url && !error" :class="avatarClass" :src="url" :alt="alt" :onerror="() => error = true">
    <span v-else-if="text || placeholder" :class="config.placeholder">{{ text || placeholder }}</span>
    <span v-if="chipColor" :class="chipClass" />
    <slot />
  </span>
</template>
