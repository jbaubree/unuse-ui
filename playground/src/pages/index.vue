<script setup lang="ts">
import { colors, useAppTheme } from 'unuse-ui'

const isActive = ref(false)
const isChecked = ref(false)
const isDarkModeActive = ref(isDark.value)
const isDialogOpen = ref(false)
const input = ref('')
const activeItem = ref()
const { primaryColor } = useAppTheme()
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
    icon: 'i-ph-note-pencil-bold',
    shortcuts: ['E'],
    onClick: () => {
      // eslint-disable-next-line no-console
      console.log('Edit')
    },
  }, {
    label: 'Duplicate',
    icon: 'i-ph-copy-bold',
    shortcuts: ['D'],
    isDisabled: true,
  }], [{
    label: 'Archive',
    icon: 'i-ph-archive-box-bold',
  }, {
    label: 'Move',
    icon: 'i-ph-arrow-right-bold',
  }], [{
    label: 'Delete',
    icon: 'i-ph-trash-bold',
    shortcuts: ['⌘', 'D'],
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
const selected = ref<{ id: number; name: string; title: string; email: string; role: string }[]>([])
</script>

<template>
  <div>
    <div class="sticky top-0 z-10 w-full flex items-center justify-end border-b border-dark-100 bg-white p-5 dark:border-dark-400 dark-bg-dark-900">
      <div class="mr-5 flex flex flex-wrap gap-2.5">
        <div
          v-for="color, index in primaryOptions"
          :key="index"
          class="flex cursor-pointer items-center gap-1"
          @click="primaryColor = color"
        >
          <span
            class="font-500 capitalize transition-colors"
            :class="primaryColor === color && `text-${color}-700 dark:text-${color}-300`"
          >
            {{ color }}
          </span>
          <div class="min-h-4 min-w-4 rounded-full" :class="`bg-${color}-400`" />
        </div>
      </div>
      <UToggle v-model="isDarkModeActive" name="dark-mode" off-icon="i-ph-sun" on-icon="i-ph-moon" @update:model-value="(value: boolean) => toggleDark(value)" />
    </div>
    <div class="w-full flex flex-col items-center justify-center gap-5 p-10">
      <UButton label="Open dialog" color="pilot" @click="isDialogOpen = true" />
      <UDialog v-model="isDialogOpen">
        Content
      </UDialog>
      <UToggle v-model="isActive" label="Primary toggle" />
      <UCheckbox v-model="isChecked" label="Primary checkbox" />
      <UButton label="Primary button" trailing-icon="i-ph-phone" />
      <UInput v-model="input" icon="i-ph-phone" type="number" />
      <UFormGroup label="Phone" is-required error="Error">
        <UInput v-model="input" icon="i-ph-phone" type="number" />
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
        <UButton label="Options" trailing-icon="i-ph-caret-down-bold" />
      </UDropdown>
      <UPagination v-model="currentPage" :total="100" :per-page="20" />
      <USelect v-model="country" :options="countries" />
      <div>
        <UButton label="Open slider" @click="isSliderOpen = true" />
        <USlider v-model="isSliderOpen" />
      </div>
      <UTable v-model="tableCheck" class="w-full" :columns="columns" :rows="people" :sort="{ column: 'name' }" />
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
      <USelectMenu v-model="selected" :options="people" is-multiple option-attribute="name" is-searchable is-creatable>
        <template #label>
          <span v-if="selected.length" class="truncate">{{ selected.map(s => s.name).join(', ') }}</span>
          <span v-else>Select people</span>
        </template>
      </USelectMenu>
    </div>
  </div>
</template>
