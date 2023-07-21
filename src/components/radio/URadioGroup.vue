<script setup lang="ts">
import { merge } from 'lodash-es'
import { RadioGroup, RadioGroupOption } from '@headlessui/vue'
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
  } & Record<any, any>)[]
  selectedIcon?: string
  ui?: DeepPartial<typeof appConfig.ui.radioGroup>
}>(), {
  color: 'primary',
  items: () => [],
  selectedIcon: () => useAppUi().radioGroup.default.selectedIcon,
  ui: () => useAppUi().radioGroup,
})
const selected = defineModel<string | number | object>({ default: '' })

const config = computed(() => merge({}, useAppUi().radioGroup, props.ui))
</script>

<template>
  <div :class="config.wrapper">
    <RadioGroup v-model="selected">
      <div :class="config.space">
        <RadioGroupOption v-for="(item, index) in items" :key="index" v-slot="{ checked: isChecked, disabled }" as="template" :value="item" :disabled="item.isDisabled">
          <slot name="item">
            <UButton
              class="w-full"
              size="xl"
              variant="soft"
              :color="isChecked ? color : 'light'"
              :is-disabled="disabled"
              :ui="isChecked
                ? { custom: `ring-1 ring-${color}` }
                : {
                  color: {
                    light: {
                      soft: `text-dark-500 dark:text-${color}-300 bg-light-300 hover:bg-${color}-100 dark:bg-dark-500 dark:hover:bg-${color}-900`,
                    },
                  },
                }"
            >
              <div :class="config.item.wrapper">
                <slot name="icon">
                  <span v-if="item.icon" :class="[config.item.icon.wrapper.replaceAll('{color}', color), config.item.icon.rounded, config.item.icon.padding]">
                    <UIcon :name="item.icon" :class="config.item.icon.base" />
                  </span>
                </slot>
                <div :class="config.item.contentWrapper">
                  <div :class="config.item.base">
                    <slot name="title">
                      <span :class="[config.item.title.base, isChecked ? config.item.title.active : config.item.title.inactive]">
                        {{ item.title }}
                      </span>
                    </slot>
                    <slot name="subtitle">
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
