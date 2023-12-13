<script setup lang="ts">
import { merge } from 'lodash-es'
import type { appConfig } from '~/config'
import { DATEPICKER_DAYS, DATEPICKER_MONTHS, type DateType } from '~/components/datepicker/datepicker'
import type { DeepPartial, PopperOptions } from '~/types'

const props = withDefaults(defineProps<{
  isClearable?: boolean
  days?: string[]
  defaultStep?: DateType
  months?: string[]
  disabledTypes?: DateType[]
  label?: string
  icon?: string
  popper?: PopperOptions
  clearLabel?: string
  ui?: DeepPartial<typeof appConfig.ui.datepicker>
}>(), {
  defaultStep: 'year',
  icon: 'icon-ph-calendar-blank',
  popper: () => ({}),
  disabledTypes: () => [],
  days: () => DATEPICKER_DAYS,
  months: () => DATEPICKER_MONTHS,
  ui: () => useAppUi().datepicker,
})

const date = defineModel<Date | null>()

const years = ref<Array<number>>([])
const currentSelection = ref<DateType>()
const month = ref(0)
const year = ref(0)
const noOfDays = ref<Array<number>>([])
const lastBlankDays = ref<Array<number>>([])
const nextBlankDays = ref<Array<number>>([])

const config = computed(() => merge({}, useAppUi().datepicker, props.ui))
const popper = computed<PopperOptions>(() => merge({}, config.value.popper, props.popper))

function initDate() {
  const d = date.value ? new Date(date.value) : new Date()
  month.value = props.disabledTypes.includes('month') ? 0 : d.getMonth()
  year.value = d.getFullYear()
}
function setNoOfDays() {
  const nbDaysOfMonth = new Date(year.value, month.value + 1, 0).getDate()
  const dayOfLastWeek = new Date(year.value, month.value).getDay()
  const dayOfNextWeek = new Date(year.value, month.value + 1).getDay()
  const nbDaysOfLastMonth = new Date(year.value, month.value, 0).getDate()
  const lastBlankdaysArray: number[] = []
  for (let i = 1; i <= dayOfLastWeek; i++)
    lastBlankdaysArray.unshift(nbDaysOfLastMonth - i + 1)

  const nextBlankdaysArray: number[] = []
  if (dayOfNextWeek > 0) {
    for (let i = 1; i <= 7 - dayOfNextWeek; i++)
      nextBlankdaysArray.push(i)
  }

  const daysArray: number[] = []
  for (let i = 1; i <= nbDaysOfMonth; i++)
    daysArray.push(i)
  lastBlankDays.value = lastBlankdaysArray
  nextBlankDays.value = nextBlankdaysArray
  noOfDays.value = daysArray
}
function setYears() {
  let startingYear = Math.ceil(year.value / 10) * 10
  const yearsArray: number[] = []
  for (let i = 0; i < 11; i++, startingYear--)
    yearsArray.push(startingYear)
  years.value = yearsArray.reverse()
}
function setDate(dateNumber = 1) {
  date.value = new Date(year.value, month.value, dateNumber)
}
function isToday(date: number): boolean {
  const today = new Date()?.toDateString()
  const d = new Date(year.value, month.value, date)?.toDateString()
  return today === d
}
function isSelectedDate(d: number) {
  return date.value?.toDateString() === new Date(year.value, month.value, d)?.toDateString()
}
function onPreviousButtonClick() {
  if (currentSelection.value === 'day') {
    if (month.value === 0) {
      month.value = 11
      year.value--
    }
    else {
      month.value--
    }
    setNoOfDays()
  }
  if (currentSelection.value === 'month') {
    year.value--
    setNoOfDays()
  }
  if (currentSelection.value === 'year') {
    year.value -= 10
    setYears()
  }
}
function onNextButtonClick() {
  if (currentSelection.value === 'day') {
    if (month.value === 11) {
      month.value = 0
      year.value++
    }
    else {
      month.value++
    }
    setNoOfDays()
  }
  if (currentSelection.value === 'month') {
    year.value++
    setNoOfDays()
  }
  if (currentSelection.value === 'year') {
    year.value += 10
    setYears()
  }
}
function onTitleClick() {
  if (currentSelection.value === 'day') {
    currentSelection.value = 'month'
  }
  else if (currentSelection.value === 'month') {
    currentSelection.value = 'year'
    setYears()
  }
}
function onDayClick(e: Event, d: number, close: (e: Event) => void) {
  setDate(d)
  close(e)
}
function onMonthClick(e: Event, monthIndex: number, close: (e: Event) => void) {
  month.value = monthIndex
  if (props.disabledTypes.includes('day')) {
    setDate()
    close(e)
  }
  else {
    currentSelection.value = 'day'
    setNoOfDays()
  }
}
function onYearClick(e: Event, yearNumber: number, close: (e: Event) => void) {
  year.value = yearNumber
  if (props.disabledTypes.includes('month')) {
    setDate()
    close(e)
  }
  else { currentSelection.value = 'month' }
}
function commit() {
  currentSelection.value = props.defaultStep
  initDate()
  setNoOfDays()
}

onMounted(() => {
  commit()
  setYears()
})
</script>

<template>
  <UPopover :popper="popper">
    <slot>
      <UButton color="pilot" :icon="icon" :label="label || date?.toLocaleDateString() || 'Select date'">
        <template v-if="date && isClearable" #trailing>
          <UTooltip :text="clearLabel || 'Clear date'" :popper="{ placement: 'right' }" :ui="{ transition: config.tooltip.transition }">
            <UIcon :name="config.default.closeIcon" @click.stop="date = undefined" />
          </UTooltip>
        </template>
      </UButton>
    </slot>
    <template #panel="{ close }">
      <div :class="config.wrapper">
        <div :class="config.header.wrapper">
          <slot name="header" :current-selection="currentSelection" :on-title-click="onTitleClick" :on-previous-button-click="onPreviousButtonClick" :on-next-button-click="onNextButtonClick">
            <UButton
              :label="currentSelection === 'day' ? `${months[month]} ${year}` : `${year}`"
              :is-disabled="currentSelection === 'year'"
              color="dark"
              variant="ghost"
              size="sm"
              :ui="{ disabled: 'disabled:hover:bg-transparent', size: { xs: 'text-13px' } }"
              @click="onTitleClick()"
            />
            <div :class="config.header.space">
              <slot name="previous" :on-previous-button-click="onPreviousButtonClick">
                <UButton color="pilot" variant="soft" size="sm" :icon="config.header.previous.icon" @click="onPreviousButtonClick()" />
              </slot>
              <slot name="next" :on-next-button-click="onNextButtonClick">
                <UButton color="pilot" variant="soft" size="sm" :icon="config.header.next.icon" @click="onNextButtonClick()" />
              </slot>
            </div>
          </slot>
        </div>
        <div :class="config.padding">
          <template v-if="currentSelection === 'day'">
            <div :class="config.default.wrap">
              <div v-for="day in days" :key="day" class="w-14.28% flex justify-center">
                <UButton
                  :label="day.charAt(0)"
                  is-disabled
                  color="pilot"
                  variant="ghost"
                  size="sm"
                  :ui="{ disabled: 'disabled:hover:bg-transparent', size: { xs: 'text-13px' } }"
                />
              </div>
            </div>
            <div :class="config.default.wrap">
              <div v-for="blankday, index in lastBlankDays" :key="index" class="w-14.28% flex justify-center">
                <UButton
                  :label="blankday.toString()"
                  is-disabled
                  color="dark"
                  variant="ghost"
                  size="sm"
                  :ui="{ disabled: 'disabled:hover:bg-transparent disabled:opacity-20', size: { xs: 'text-13px' } }"
                />
              </div>
              <div v-for="d in noOfDays" :key="d" class="w-14.28% flex items-center justify-center">
                <slot name="item" :day="d" :on-day-click="onDayClick" :is-active="isSelectedDate(d)" :is-today="isToday(d)">
                  <UButton
                    :label="d.toString()"
                    :color="isSelectedDate(d) || isToday(d) ? 'pilot' : 'dark'"
                    :variant="isSelectedDate(d) ? 'solid' : isToday(d) ? 'soft' : 'ghost'" size="xs"
                    @click="onDayClick($event, d, close)"
                  />
                </slot>
              </div>
              <div v-for="blankday, index in nextBlankDays" :key="index" class="w-14.28% flex justify-center">
                <UButton
                  :label="blankday.toString()"
                  is-disabled
                  color="dark"
                  variant="ghost"
                  size="sm"
                  :ui="{ disabled: 'disabled:hover:bg-transparent disabled:opacity-20', size: { xs: 'text-13px' } }"
                />
              </div>
            </div>
          </template>
          <template v-else-if="currentSelection === 'month'">
            <div :class="[config.default.minHeight, config.default.wrap]">
              <div v-for="monthNumber, index in months" :key="index" class="w-25% flex items-center justify-center">
                <UButton
                  :label="monthNumber.slice(0, 4)"
                  color="dark"
                  variant="ghost"
                  size="xs"
                  @click="onMonthClick($event, index, close)"
                />
              </div>
            </div>
          </template>
          <template v-else>
            <div :class="[config.default.minHeight, config.default.wrap]">
              <div v-for="yearNumber in years" :key="yearNumber" class="w-25% flex items-center justify-center">
                <UButton
                  :label="yearNumber.toString()"
                  color="dark"
                  variant="ghost"
                  size="sm"
                  @click="onYearClick($event, yearNumber, close)"
                />
              </div>
            </div>
          </template>
        </div>
      </div>
    </template>
  </UPopover>
</template>
