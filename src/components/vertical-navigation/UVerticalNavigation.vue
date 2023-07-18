<script setup lang="ts">
import { merge, omit } from 'lodash-es'
import type { RouteLocationRaw } from 'vue-router'
import type { appConfig } from '~/config'
import type { Avatar } from '~/components/avatar/avatar'
import type { DeepPartial } from '~/types'

const props = withDefaults(defineProps<{
  links?: {
    to?: string | RouteLocationRaw
    isExact?: boolean
    label: string
    icon?: string
    iconClass?: string
    avatar?: Avatar
    onClick?: Function
    badge?: string | number
  }[]
  ui?: DeepPartial<typeof appConfig.ui.verticalNavigation>
}>(), {
  links: () => [],
  ui: () => useAppUi().verticalNavigation,
})

const config = computed(() => merge({}, useAppUi().verticalNavigation, props.ui))
</script>

<template>
  <nav :class="config.wrapper">
    <ULinkCustom
      v-for="(link, index) of links"
      v-slot="{ isActive }"
      :key="index"
      v-bind="omit(link, ['label', 'icon', 'iconClass', 'avatar', 'badge', 'click'])"
      :class="[config.base, config.padding, config.width, config.ring, config.rounded, config.font, config.size]"
      :active-class="config.active"
      :inactive-class="config.inactive"
      @click="link.onClick"
      @keyup.enter="$event.target.blur()"
    >
      <slot name="avatar" :link="link">
        <UAvatar
          v-if="link.avatar"
          v-bind="{ size: config.avatar.size, ...link.avatar }"
          :class="[config.avatar.base]"
        />
      </slot>
      <slot name="icon" :link="link" :is-active="isActive">
        <UIcon
          v-if="link.icon"
          :name="link.icon"
          :class="[config.icon.base, isActive ? config.icon.active : config.icon.inactive, link.iconClass]"
        />
      </slot>
      <slot :link="link">
        <span v-if="link.label" :class="config.label">{{ link.label }}</span>
      </slot>
      <slot name="badge" :link="link" :is-active="isActive">
        <span v-if="link.badge" :class="[config.badge.base, isActive ? config.badge.active : config.badge.inactive]">
          {{ link.badge }}
        </span>
      </slot>
    </ULinkCustom>
  </nav>
</template>
