<script setup lang="ts">
const isActive = ref(false)
const isChecked = ref(false)
const isDarkModeActive = ref(isDark.value)
</script>

<template>
  <div class="bg-white transition-colors dark:bg-gray-950">
    <div class="w-full flex justify-end p-5">
      <UToggle v-model="isDarkModeActive" off-icon="i-ph-sun" on-icon="i-ph-moon" @update:model-value="(value: boolean) => toggleDark(value)" />
    </div>
    <div class="h-screen w-full flex flex-col items-center justify-center gap-5">
      <UToggle v-model="isActive" />
      <UCheckbox v-model="isChecked" label="check this" />
      <UButton color="red">
        aez
      </UButton>
    </div>
  </div>
</template>
