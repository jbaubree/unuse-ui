<script setup lang="ts">
import { merge } from 'lodash-es'
import type { appConfig } from '~/config'
import type { Color, DeepPartial } from '~/types'
import { classNames } from '~/utils'

const props = withDefaults(defineProps<{
  name?: string
  color?: Color
  ui?: DeepPartial<typeof appConfig.ui.icon>
}>(), {
  ui: () => useAppUi().icon,
})

const { primaryColor } = useAppTheme()

const config = computed(() => merge({}, useAppUi().icon, props.ui))

const iconClass = computed(() => {
  const color = props.color && (
    config.value.color?.[props.color]
      || (props.color === 'primary' && config.value.color?.[primaryColor.value])
      || config.value.color.default
  )
  return classNames(
    props.name,
    color?.replaceAll('{color}', props.color),
  )
})
</script>

<template>
  <span :class="iconClass" />
</template>
