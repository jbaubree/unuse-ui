<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { merge } from 'lodash-es'
import type { DropdownItem } from './dropdown'
import ULinkCustom from '~/components/link/ULinkCustom.vue'
import UIcon from '~/components/icon/UIcon.vue'
import UAvatar from '~/components/avatar/UAvatar.vue'
import type { appConfig } from '~/config'
import type { DeepPartial, PopperOptions } from '~/types'
import { omit } from '~/utils'

const props = withDefaults(defineProps<{
  items?: DropdownItem[][]
  mode?: 'click' | 'hover'
  isDisabled?: boolean
  popper?: PopperOptions
  openDelay?: number
  closeDelay?: number
  ui?: DeepPartial<typeof appConfig.ui.dropdown>
}>(), {
  items: () => [],
  mode: 'click',
  openDelay: 50,
  closeDelay: 0,
  popper: () => ({}),
  ui: () => useAppUi().dropdown,
})

const config = computed(() => merge({}, useAppUi().dropdown, props.ui))
const popper = computed<PopperOptions>(() => merge(props.mode === 'hover' ? { offsetDistance: 0 } : {}, config.value.popper, props.popper))
const [trigger, rContainer] = usePopper(popper.value)
const containerStyle = computed(() => {
  const offsetDistance = props.popper.offsetDistance || config.value.popper.offsetDistance || 8
  return props.mode === 'hover' ? { paddingTop: `${offsetDistance}px`, paddingBottom: `${offsetDistance}px` } : {}
})
// https://github.com/tailwindlabs/headlessui/blob/f66f4926c489fc15289d528294c23a3dc2aee7b1/packages/%40headlessui-vue/src/components/menu/menu.ts#L131
const menuApi = ref<any>(null)

let openTimeout: NodeJS.Timeout | null = null
let closeTimeout: NodeJS.Timeout | null = null

function onMouseOver() {
  if (props.mode !== 'hover' || !menuApi.value)
    return
  if (closeTimeout) {
    clearTimeout(closeTimeout)
    closeTimeout = null
  }
  if (menuApi.value.menuState === 0)
    return
  openTimeout = openTimeout || setTimeout(() => {
    menuApi.value.openMenu && menuApi.value.openMenu()
    openTimeout = null
  }, props.openDelay)
}

function onMouseLeave() {
  if (props.mode !== 'hover' || !menuApi.value)
    return
  if (openTimeout) {
    clearTimeout(openTimeout)
    openTimeout = null
  }
  if (menuApi.value.menuState === 1)
    return
  closeTimeout = closeTimeout || setTimeout(() => {
    menuApi.value.closeMenu && menuApi.value.closeMenu()
    closeTimeout = null
  }, props.closeDelay)
}

onMounted(() => {
  setTimeout(() => {
    // @ts-expect-error internals
    const menuProvides = trigger.value?.$.provides
    if (!menuProvides)
      return
    const menuProvidesSymbols = Object.getOwnPropertySymbols(menuProvides)
    menuApi.value = menuProvidesSymbols.length && menuProvides[menuProvidesSymbols[0]]
  }, 200)
})
</script>

<template>
  <Menu v-slot="{ open }" as="div" :class="config.wrapper" @mouseleave="onMouseLeave">
    <MenuButton
      ref="trigger"
      as="div"
      :disabled="isDisabled"
      class="w-full inline-flex"
      role="button"
      @mouseover="onMouseOver"
    >
      <slot :open="open" :is-disabled="isDisabled">
        <button :disabled="isDisabled">
          Open
        </button>
      </slot>
    </MenuButton>

    <div v-if="open && items.length" ref="rContainer" :class="[config.container, config.width]" :style="containerStyle" @mouseover="onMouseOver">
      <Transition appear v-bind="config.transition">
        <MenuItems :class="[config.base, config.divide, config.ring, config.rounded, config.shadow, config.background, config.height]" static>
          <div v-for="(subItems, index) of items" :key="index" :class="config.padding">
            <MenuItem v-for="(item, subIndex) of subItems" :key="subIndex" v-slot="{ active: isItemActive, disabled: isItemDisabled }" :disabled="item.isDisabled">
              <ULinkCustom
                v-bind="omit(item, ['label', 'icon', 'iconClass', 'avatar', 'onClick'])"
                :class="[config.item.base, config.item.padding, config.item.size, config.item.rounded, isItemActive ? config.item.active : config.item.inactive, isItemDisabled && config.item.disabled]"
                @click="item.onClick"
              >
                <slot :name="item.slot || 'item'" :item="item">
                  <UIcon v-if="item.icon" :name="item.icon" :class="[config.item.icon.base, isItemActive ? config.item.icon.active : config.item.icon.inactive, item.iconClass]" />
                  <UAvatar v-else-if="item.avatar" v-bind="{ size: config.item.avatar.size, ...item.avatar }" :class="config.item.avatar.base" />
                  <span class="truncate">{{ item.label }}</span>
                </slot>
              </ULinkCustom>
            </MenuItem>
          </div>
        </MenuItems>
      </Transition>
    </div>
  </Menu>
</template>
