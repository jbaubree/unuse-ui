<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useAppTheme } from 'unuse-ui'

const { root } = useAppTheme()

useHead({
  style: [{ innerHTML: root }],
})
</script>

<template>
  <RouterView />
  <UNotifications />
</template>
