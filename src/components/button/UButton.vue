<script setup lang="ts">
import type { UButtonVariant } from './button'

const { variant = 'primary' } = defineProps<{
  variant?: UButtonVariant
}>()
</script>

<template>
  <button>
    test {{ variant }}
  </button>
</template>
