<script setup lang="ts">
import { colors } from 'unuse-ui/src/preset'
import { useAppTheme } from 'unuse-ui'

const isActive = ref(false)
const isChecked = ref(false)
const isDarkModeActive = ref(isDark.value)
const input = ref('')
const { primaryColor } = useAppTheme()
const primaryOptions = computed(() => (Object.keys(colors) as (keyof typeof colors)[]).filter((color) => {
  return !['inherit', 'current', 'black', 'white', 'light', 'dark', 'transparent', 'primary', 'pilot'].includes(color)
}))
</script>

<template>
  <div>
    <div class="w-full flex justify-end p-5">
      <div class="mr-5 flex flex flex-wrap gap-2.5">
        <div
          v-for="color, index in primaryOptions"
          :key="index"
          class="flex cursor-pointer items-center gap-1"
          @click="primaryColor = color"
        >
          <span
            class="font-500 capitalize transition-colors"
            :class="primaryColor === color ? `text-${color}-700 dark:text-${color}-300` : 'dark:text-white'"
          >
            {{ color }}
          </span>
          <div class="min-h-4 min-w-4 rounded-full" :class="`bg-${color}-400`" />
        </div>
      </div>
      <UToggle v-model="isDarkModeActive" name="dark-mode" off-icon="i-ph-sun" on-icon="i-ph-moon" @update:model-value="(value: boolean) => toggleDark(value)" />
    </div>
    <div class="w-full flex flex-col items-center justify-center gap-5 p-10">
      <UButton label="Lisy color button" color="pilot" />
      <UToggle v-model="isActive" label="Primary toggle" />
      <UCheckbox v-model="isChecked" label="Primary checkbox" />
      <UButton label="Primary button" trailing-icon="i-ph-phone" />
      <UInput v-model="input" icon="i-ph-phone" type="number" />
    </div>
  </div>
</template>
