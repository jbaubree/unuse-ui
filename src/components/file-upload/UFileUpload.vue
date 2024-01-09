<script setup lang="ts">
import { merge } from 'lodash-es'
import type { appConfig } from '~/config'
import type { DeepPartial, UploadFile } from '~/types'

const props = withDefaults(defineProps<{
  accept?: string[]
  isDisabled?: boolean
  isMultiple?: boolean
  ui?: DeepPartial<typeof appConfig.ui.fileUpload>
}>(), {
  ui: () => useAppUi().fileUpload,
})
const emit = defineEmits<{
  (eventName: 'drop', value: UploadFile[]): void
}>()

const files = defineModel<UploadFile | UploadFile[]>()
const rInputFile = ref<HTMLInputElement>()

const config = computed(() => merge({}, useAppUi().fileUpload, props.ui))

function mapFile(file: File) {
  return {
    file,
    url: URL.createObjectURL(file),
  }
}
function handleFileUpload() {
  if (!rInputFile.value?.files?.length)
    return

  const f: UploadFile[] = Array.from(rInputFile.value.files).map(file => mapFile(file))
  emit('drop', f)
  if (!files.value)
    files.value = props.isMultiple ? [...f] : f[0]
  else
    files.value = props.isMultiple ? [...(files.value as UploadFile[]), ...f] : f[0]
  rInputFile.value.type = 'text'
  rInputFile.value.type = 'file'
}
</script>

<template>
  <div :class="config.wrapper" @click.stop="!props.isDisabled && rInputFile?.click()">
    <input
      ref="rInputFile"
      type="file"
      :class="config.base"
      :disabled="isDisabled"
      :multiple="isMultiple"
      :accept="accept?.join(',')"
      @change="handleFileUpload"
      @drop="handleFileUpload"
    >
    <slot :is-disabled="isDisabled">
      <button :disabled="isDisabled">
        Upload
      </button>
    </slot>
  </div>
</template>
