<script setup lang="ts">
import { colors, useAppTheme, useToast } from 'unuse-ui'

const isActive = ref(false)
const isChecked = ref(false)
const isDarkModeActive = ref(isDark.value)
const isDialogOpen = ref(false)
const input = ref('')
const activeItem = ref()
const { primaryColor } = useAppTheme()
const toast = useToast()
const primaryOptions = computed(() => (Object.keys(colors) as (keyof typeof colors)[]).filter((color) => {
  return !['inherit', 'current', 'black', 'white', 'light', 'dark', 'transparent', 'primary', 'pilot', 'success', 'danger'].includes(color)
}))
const dropdownItems = [
  [{
    label: 'Profile',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/50230578?s=40&v=4',
    },
  }], [{
    label: 'Edit',
    icon: 'icon-ph-note-pencil',
    onClick: () => {
      // eslint-disable-next-line no-console
      console.log('Edit')
    },
  }, {
    label: 'Duplicate',
    icon: 'icon-ph-copy',
    isDisabled: true,
  }], [{
    label: 'Archive',
    icon: 'icon-ph-archive-box',
  }, {
    label: 'Move',
    icon: 'icon-ph-arrow-right',
  }], [{
    label: 'Delete',
    icon: 'icon-ph-trash',
  }],
]
const currentPage = ref(1)
const countries = ['United States', 'Canada', 'Mexico']
const country = ref(countries[0])
const isSliderOpen = ref(false)
const columns = [{
  key: 'id',
  label: 'ID',
}, {
  key: 'name',
  label: 'Name',
  sortable: true,
}, {
  key: 'title',
  label: 'Title',
  sortable: true,
}, {
  key: 'email',
  label: 'Email',
  sortable: true,
  direction: 'desc',
}, {
  key: 'role',
  label: 'Role',
}]
const people = [{
  id: 1,
  name: 'Lindsay Walton',
  title: 'Front-end Developer',
  email: 'lindsay.walton@example.com',
  role: 'Member',
}, {
  id: 2,
  name: 'Courtney Henry',
  title: 'Designer',
  email: 'courtney.henry@example.com',
  role: 'Admin',
}, {
  id: 3,
  name: 'Tom Cook',
  title: 'Director of Product',
  email: 'tom.cook@example.com',
  role: 'Member',
}, {
  id: 4,
  name: 'Whitney Francis',
  title: 'Copywriter',
  email: 'whitney.francis@example.com',
  role: 'Admin',
}]
const tableCheck = ref([people[1]])
const textArea = ref('')
const selected = ref<{ id: number; name: string; title: string; email: string; role: string }>()
const methods = [{
  name: 'email',
  value: 'email',
  label: 'Email',
}, {
  name: 'sms',
  value: 'sms',
  label: 'Phone (SMS)',
}, {
  name: 'push',
  value: 'push',
  label: 'Push notification',
}]
const radio = ref('sms')
const collapse = [{
  label: 'Getting Started',
  icon: 'icon-ph-info-bold',
  isDefaultOpen: true,
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.',
}, {
  label: 'Installation',
  icon: 'icon-ph-download-bold',
  isDisabled: true,
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.',
}, {
  label: 'Theming',
  icon: 'icon-ph-eyedropper-bold',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.',
}, {
  label: 'Layouts',
  icon: 'icon-ph-layout-bold',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.',
}]
const files = ref([])
const links = [{
  label: 'Profile',
  avatar: {
    src: 'https://avatars.githubusercontent.com/u/50230578?s=40&v=4',
  },
  tag: 100,
}, {
  label: 'Installation',
  icon: 'icon-ph-house',
}, {
  label: 'Vertical Navigation',
  icon: 'icon-ph-chart-bar',
  to: '/',
  tag: 12,
  isDisabled: true,
}, {
  label: 'Command Palette',
  icon: 'icon-ph-terminal-window',
}]
const plans = [
  {
    icon: 'icon-ph-folder',
    title: 'Startup',
    subtitle: '12GB/6 CPUs - 160 GB SSD disk',
    value: '1',
  },
  {
    icon: 'icon-ph-folder',
    title: 'Business',
    subtitle: '16GB/8 CPUs - 512 GB SSD disk',
    value: '2',
  },
  {
    icon: 'icon-ph-folder',
    title: 'Enterprise',
    subtitle: '32GB/12 CPUs - 1024 GB SSD disk',
    value: '3',
  },
]
const selectedPlan = ref('1')
const date = ref()
</script>

<template>
  <div>
    <div class="sticky top-0 z-30 w-full border-b border-dark-100 bg-white dark:border-dark-400 dark-bg-dark-900">
      <UContainer class="flex items-center justify-between py-2.5">
        <div class="mr-5 flex flex flex-wrap gap-2.5">
          <div
            v-for="color, index in primaryOptions"
            :key="index"
            class="flex cursor-pointer items-center gap-1"
            @click="primaryColor = color"
          >
            <span
              class="font-medium capitalize transition-colors"
              :class="primaryColor === color && `text-${color}-700 dark:text-${color}-300`"
            >
              {{ color }}
            </span>
            <div class="min-h-4 min-w-4 rounded-full" :class="`bg-${color}-400`" />
          </div>
        </div>
        <UToggle v-model="isDarkModeActive" name="dark-mode" off-icon="icon-ph-sun" on-icon="icon-ph-moon" @update:model-value="(value: boolean) => toggleDark(value)" />
      </UContainer>
    </div>
    <UContainer>
      <div class="flex flex-col items-center justify-center gap-5">
        <UIcon name="icon-ph-check-circle" color="primary" />
        <UText label="I'm a text" color="primary" />
        <div class="flex flex-col gap-1">
          <div class="font-thin">
            Font 100
          </div>
          <div class="font-light">
            Font 300
          </div>
          <div>Font 400</div>
          <div class="font-medium">
            Font 500
          </div>
          <div class="font-bold">
            Font 700
          </div>
          <div class="font-black">
            Font 900
          </div>
        </div>
        <UButton label="Open dialog" color="pilot" @click="isDialogOpen = true" />
        <UDialog v-model="isDialogOpen">
          Content
        </UDialog>
        <UToggle v-model="isActive" label="Primary toggle" name="dark-mode" size="sm" />
        <UToggle v-model="isActive" label="Primary toggle" name="dark-mode" off-icon="icon-ph-sun" on-icon="icon-ph-moon" />

        <UCheckbox v-model="isChecked" label="Primary checkbox" is-required />
        <UButton label="Primary button" trailing-icon="icon-ph-phone" />
        <UInput v-model="input" placeholder="Coucou" icon="icon-ph-phone" />
        <UFormGroup label="Phone" is-required error="Error">
          <UInput v-model="input" icon="icon-ph-phone" type="number" />
        </UFormGroup>
        <UNav
          v-model="activeItem"
          :items="[
            { title: 'First tab', value: '1' },
            { title: 'Second tab', value: '2' },
            { title: 'Last', value: '3' },
          ]"
        />
        <UBreadcrumb
          :items="[
            { label: 'Annonces', to: '#' },
            { label: 'Location', to: '#' },
            { label: 'Local d\'activité', to: '#' },
            { label: '45140 Ormes', to: '#' },
            { label: 'GWMSTKE' },
          ]"
        />
        <UDropdown :items="dropdownItems">
          <UButton label="Options" trailing-icon="icon-ph-caret-down-bold" />
        </UDropdown>
        <UPagination v-model="currentPage" :total="100" :per-page="20" />
        <USelect v-model="country" :options="countries" />
        <div>
          <UButton label="Open slider" @click="isSliderOpen = true" />
          <USlider v-model="isSliderOpen" />
        </div>
        <UTable v-model="tableCheck" :columns="columns" :rows="people" :sort="{ column: 'name' }" />
        <UTag size="xs" label="I'm a tag" />
        <UTag label="I'm a tag" />
        <div class="flex gap-2.5">
          <UTooltip text="Hi bro !" :popper="{ placement: 'left' }">
            <UButton label="Trigger left" />
          </UTooltip>
          <UTooltip text="Hi bro !" :popper="{ placement: 'top' }">
            <UButton label="Trigger top" />
          </UTooltip>
          <UTooltip text="Hi bro !" :popper="{ placement: 'right' }">
            <UButton label="Trigger right" />
          </UTooltip>
          <UTooltip text="Hi bro !">
            <UButton label="Trigger bottom" />
          </UTooltip>
        </div>
        <UTextarea v-model="textArea" placeholder="I am a textarea" />
        <USelectMenu v-model="selected" :options="people" option-attribute="name" is-creatable searchable />
        <div>
          <URadio v-for="method of methods" :key="method.name" v-model="radio" v-bind="method" />
        </div>
        <div class="flex items-center space-x-4">
          <USkeleton class="h-12 w-12" :ui="{ rounded: 'rounded-full' }" />
          <div class="space-y-2">
            <USkeleton class="h-4 w-250px" />
            <USkeleton class="h-4 w-200px" />
          </div>
        </div>
        <UPopover>
          <UButton label="Open popover" />
          <template #panel>
            Popover content
          </template>
        </UPopover>
        <UCard class="min-w-300px">
          <template #header>
            Header
          </template>
          Body
          <template #footer>
            Footer
          </template>
        </UCard>
        <UCollapse :items="collapse" />
        <UButton
          label="Show toast"
          @click="toast.add({
            title: 'Do you want to share it?',
            icon: 'icon-ph-check-circle',
            color: 'success',
          })"
        />
        <UFileUpload v-model="files" is-multiple>
          <UButton label="Upload" variant="outline" />
        </UFileUpload>
        <UVerticalNavigation :links="links" />
        <URadioGroup v-model="selectedPlan" :items="plans" />
        <UDatepicker v-model="date" is-clearable />
      </div>
    </UContainer>
  </div>
</template>
