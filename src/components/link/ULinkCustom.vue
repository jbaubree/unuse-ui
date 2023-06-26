<script setup lang="ts">
const props = withDefaults(defineProps<{
  activeClass?: string
  inactiveClass?: string
}>(), {
  activeClass: '',
  inactiveClass: '',
})

function resolveLinkClass({ isActive, isExactActive }: { isActive: boolean; isExactActive: boolean }) {
  if (isActive || isExactActive)
    return props.activeClass
  return props.inactiveClass
}
</script>

<template>
  <button v-if="!$attrs.to" v-bind="$attrs" :class="inactiveClass">
    <slot />
  </button>
  <RouterLink
    v-else
    v-slot="{ href, navigate, isActive, isExactActive }"
    :to="{}"
    custom
  >
    <a
      :href="href"
      v-bind="{ ...$attrs }"
      :class="resolveLinkClass({ isActive, isExactActive })"
      @click="navigate"
    >
      <slot v-bind="{ isActive: isExactActive || isActive }" />
    </a>
  </RouterLink>
</template>
