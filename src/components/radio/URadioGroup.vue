<script setup lang="ts">
import { merge } from 'lodash-es'
import { RadioGroup, RadioGroupOption } from '@headlessui/vue'
import type { appConfig } from '~/config'

const props = withDefaults(defineProps<{
  items?: ({
    title: string
    subtitle?: string
    isDisabled?: boolean
  } & Record<any, any>)[]
  selectedIcon?: string
  ui?: Partial<typeof appConfig.ui.radioGroup>
}>(), {
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
            <UButton class="w-full" size="xl" :color="isChecked ? 'primary' : 'white'" :is-disabled="disabled">
              <div :class="config.item.wrapper">
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
                  <span v-if="isChecked" :class="[config.selectedIcon.wrapper, config.selectedIcon.rounded, config.selectedIcon.padding]">
                    <UIcon :name="selectedIcon" :class="config.selectedIcon.base" />
                  </span>
                </slot>
              </div>
            </UButton>
          </slot>
        </RadioGroupOption>
      </div>
    </RadioGroup>
  </div>
</template>
