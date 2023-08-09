<script setup lang="ts" generic="T extends NavItem">
import { merge } from 'lodash-es'
import type { appConfig } from '~/config'
import type { Color, DeepPartial, Size } from '~/types'

export interface NavItem {
  title: string
  value: string
  color?: Color
}

const props = withDefaults(defineProps<{
  items: T[]
  color?: Color
  size?: Size
  ui?: DeepPartial<typeof appConfig.ui.nav>
}>(), {
  size: () => useAppUi().nav.default.size,
  color: 'pilot',
  ui: () => useAppUi().nav,
})
const modelValue = defineModel<string>({ required: true })

const [DefineTemplate, ReuseTemplate] = createReusableTemplate<{ value: string; index: number }>()

const { width } = useWindowSize()

const rItems = ref()
const activeItemSizes = reactive({ w: 0, h: 0, ol: 0, or: 0 })

const config = computed(() => merge({}, useAppUi().nav, props.ui))
const activeItemIndex = computed(() => props.items.findIndex(navItem => navItem.value === modelValue.value))
const activeItem = computed(() => rItems.value ? rItems.value[activeItemIndex.value] : undefined)
const wrapperClass = computed(() => config.value.wrapper?.replaceAll('{color}', props.items[activeItemIndex.value]?.color || props.color))
const activeNavItemStyle = computed(() => `
  width: ${activeItemSizes.w}px;
  height: ${activeItemSizes.h}px;
  left: ${activeItemSizes.ol}px;
  top: ${activeItemSizes.or}px;
`)

function setItemsSizes() {
  activeItemSizes.w = activeItem.value?.offsetParent?.clientWidth
  activeItemSizes.h = activeItem.value?.offsetParent?.clientHeight
  activeItemSizes.ol = activeItem.value?.offsetParent?.offsetLeft
  activeItemSizes.or = activeItem.value?.offsetParent?.offsetTop
}

watch([activeItem, width], () => {
  nextTick(() => {
    setItemsSizes()
  })
})

onMounted(() => {
  if (!modelValue.value)
    modelValue.value = props.items[0].value
})
</script>

<template>
  <DefineTemplate v-slot="{ $slots, value, index }">
    <div :class="config.item.wrapper" @click="modelValue = value">
      <div
        :class="[config.item.base,
                 config.size[props.size], index === activeItemIndex
                   ? config.item.active
                   : config.item.inactive.replaceAll('{color}', items[activeItemIndex]?.color || color)]"
      >
        <component :is="($slots.default as unknown) as string" />
      </div>
    </div>
  </DefineTemplate>
  <div :class="wrapperClass">
    <div :class="config.active" :style="activeNavItemStyle" />
    <ReuseTemplate v-for="{ title, value }, i in items" :key="value" :value="value" :index="i">
      <span ref="rItems">{{ title }}</span>
    </ReuseTemplate>
  </div>
</template>
