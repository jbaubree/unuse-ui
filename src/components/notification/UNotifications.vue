<script setup lang="ts">
import { merge } from 'lodash-es'
import type { appConfig } from '~/config'
import type { DeepPartial } from '~/types'

const props = withDefaults(defineProps<{
  ui?: DeepPartial<typeof appConfig.ui.notifications>
}>(), {
  ui: () => useAppUi().notifications,
})

const { notifications, remove } = useToast()

const config = computed(() => merge({}, useAppUi().notifications, props.ui))
</script>

<template>
  <div :class="[config.wrapper, config.position, config.width]">
    <div v-if="notifications.length" :class="config.container">
      <div v-for="notification of notifications" :key="notification.id">
        <UNotification
          v-bind="notification"
          :class="notification.click && 'cursor-pointer'"
          @click="notification.click && notification.click(notification)"
          @close="remove(notification.id)"
        />
      </div>
    </div>
  </div>
</template>
