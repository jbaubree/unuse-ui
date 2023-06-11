<script setup lang="ts">
const isActive = ref(false)
</script>

<template>
  <div class="h-screen w-full flex items-center justify-center">
    <UToggle v-model="isActive" />
  </div>
</template>
