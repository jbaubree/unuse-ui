<script setup lang="ts">
import { merge } from 'lodash-es'
import type { Notification, NotificationAction } from '~/components/notification/notification'
import { classNames } from '~/utils'

const props = withDefaults(defineProps<Notification>(), {
  timeout: 5000,
  actions: () => [],
  icon: () => useAppUi().notification.default.icon,
  closeButton: () => useAppUi().notification.default.closeButton,
  color: () => useAppUi().notification.default.color,
  ui: () => useAppUi().notification,
})
const emit = defineEmits<{
  (eventName: 'close'): void
}>()

const config = computed(() => merge({}, useAppUi().notification, props.ui))

let timer: any = null
const remaining = ref(props.timeout)

const progressStyle = computed(() => {
  const remainingPercent = remaining.value / props.timeout * 100

  return { width: `${remainingPercent || 0}%` }
})

const progressClass = computed(() => classNames(
  config.value.progress.base,
  config.value.progress.background?.replaceAll('{color}', props.color),
))

const iconClass = computed(() => classNames(
  config.value.icon.base,
  config.value.icon.color?.replaceAll('{color}', props.color),
))

function onMouseover() {
  if (timer)
    timer.pause()
}

function onMouseleave() {
  if (timer)
    timer.resume()
}

function onClose() {
  if (timer)
    timer.stop()
  if (props.callback)
    props.callback()
  emit('close')
}

function onAction(action: NotificationAction) {
  if (timer)
    timer.stop()
  if (action.click)
    action.click()
  emit('close')
}

onMounted(() => {
  if (!props.timeout)
    return
  timer = useTimer(() => {
    onClose()
  }, props.timeout)
  watchEffect(() => {
    remaining.value = timer.remaining.value
  })
})

onUnmounted(() => {
  if (timer)
    timer.stop()
})
</script>

<template>
  <Transition appear v-bind="config.transition">
    <div :class="[config.wrapper, config.background, config.rounded, config.shadow]" @mouseover="onMouseover" @mouseleave="onMouseleave">
      <div :class="[config.container, config.rounded, config.ring.replaceAll('{color}', props.color)]">
        <div :class="config.padding">
          <div class="flex items-center gap-3">
            <UIcon v-if="!!icon" :name="icon" :class="iconClass" />
            <UAvatar v-if="avatar" v-bind="{ size: config.avatar.size, ...avatar }" :class="config.avatar.base" />
            <div class="w-0 flex-1">
              <p :class="config.title">
                {{ title }}
              </p>
              <p v-if="description" :class="config.description">
                {{ description }}
              </p>
              <div v-if="description && actions.length" class="mt-2.5 flex items-center gap-2.5">
                <UButton v-for="(action, index) of actions" :key="index" v-bind="{ ...config.default.actionButton, ...action }" @click.stop="onAction(action)" />
              </div>
            </div>
            <div class="flex flex-shrink-0 items-center gap-3">
              <div v-if="!description && actions.length" class="flex items-center gap-2.5">
                <UButton v-for="(action, index) of actions" :key="index" v-bind="{ ...config.default.actionButton, ...action }" @click.stop="onAction(action)" />
              </div>
              <UButton v-if="closeButton" v-bind="{ ...config.default.closeButton, ...closeButton }" @click.stop="onClose" />
            </div>
          </div>
        </div>
        <div v-if="timeout" :class="progressClass" :style="progressStyle" />
      </div>
    </div>
  </Transition>
</template>
