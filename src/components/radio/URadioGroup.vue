<script setup lang="ts">
import { merge } from 'lodash-es'
import { RadioGroup, RadioGroupOption } from '@headlessui/vue'
import type { RouteLocationRaw } from 'vue-router'
import type { ButtonColor } from '../button/button'
import type { appConfig } from '~/config'
import type { Color, DeepPartial } from '~/types'

const props = withDefaults(defineProps<{
  color?: Color | ButtonColor
  items?: ({
    title: string
    subtitle?: string
    isDisabled?: boolean
    icon?: string
    onClick?: () => void
    to?: RouteLocationRaw
  } & Record<any, any>)[]
  selectedIcon?: string
  valueAttribute?: string
  ui?: DeepPartial<typeof appConfig.ui.radioGroup>
}>(), {
  color: 'primary',
  valueAttribute: 'value',
  items: () => [],
  selectedIcon: () => useAppUi().radioGroup.default.selectedIcon,
  ui: () => useAppUi().radioGroup,
})
const selected = defineModel<any>({ default: '' })

const config = computed(() => merge({}, useAppUi().radioGroup, props.ui))
</script>

<template>
  <div :class="config.wrapper">
    <RadioGroup v-model="selected">
      <div :class="config.space">
        <RadioGroupOption v-for="(item, index) in items" :key="index" v-slot="{ checked: isChecked, disabled }" as="template" :value="item[valueAttribute]" :disabled="item.isDisabled">
          <slot name="item" :item="item">
            <UButton
              class="w-full"
              size="xl"
              variant="soft"
              color="light"
              :is-disabled="disabled"
              :ui="isChecked
                ? { custom: `!bg-light-300 !dark:bg-dark-500 ring ring-${color}-500` }
                : {
                  color: {
                    light: {
                      soft: `ring-1 ring-transparent text-dark-500 dark:text-${color}-300 bg-light-300 hover:ring-${color}-500 dark:bg-dark-500`,
                    },
                  },
                }"
              :to="item.to"
              @click="item.onClick"
            >
              <div :class="config.item.wrapper">
                <slot name="icon" :item="item">
                  <span v-if="item.icon" :class="[config.item.icon.wrapper.replaceAll('{color}', color), config.item.icon.rounded, config.item.icon.padding]">
                    <UIcon :name="item.icon" :class="config.item.icon.base" />
                  </span>
                </slot>
                <div :class="config.item.contentWrapper">
                  <div :class="config.item.base">
                    <slot name="title" :item="item">
                      <span :class="[config.item.title.base, isChecked ? config.item.title.active : config.item.title.inactive]">
                        {{ item.title }}
                      </span>
                    </slot>
                    <slot name="subtitle" :item="item">
                      <span :class="[config.item.subtitle.base, isChecked ? config.item.subtitle.active : config.item.subtitle.inactive]">
                        {{ item.subtitle }}
                      </span>
                    </slot>
                  </div>
                  <slot name="check">
                    <span v-if="isChecked" :class="[config.selectedIcon.wrapper.replaceAll('{color}', color), config.selectedIcon.rounded, config.selectedIcon.padding]">
                      <UIcon :name="selectedIcon" :class="config.selectedIcon.base" />
                    </span>
                  </slot>
                </div>
              </div>
            </UButton>
          </slot>
        </RadioGroupOption>
      </div>
    </RadioGroup>
  </div>
</template>
