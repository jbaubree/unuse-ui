<script setup lang="ts">
const isActive = ref(false)
const isChecked = ref(false)
</script>

<template>
  <div class="h-screen w-full flex flex-col items-center justify-center gap-5">
    <UToggle v-model="isActive" label="toggle this" />
    <UCheckbox v-model="isChecked" label="check this" />
  </div>
</template>
