import { onMounted, ref, watchEffect } from 'vue'
import type { Ref } from 'vue'
import type { VirtualElement } from '@popperjs/core/lib/popper-lite'
import { defaultModifiers, popperGenerator } from '@popperjs/core/lib/popper-lite'
import type { Instance } from '@popperjs/core'
import { isUndefined, omitBy } from 'lodash-es'
import flip from '@popperjs/core/lib/modifiers/flip'
import offset from '@popperjs/core/lib/modifiers/offset'
import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow'
import computeStyles from '@popperjs/core/lib/modifiers/computeStyles'
import eventListeners from '@popperjs/core/lib/modifiers/eventListeners'
import type { MaybeElement } from '@vueuse/core'
import { unrefElement } from '@vueuse/core'
import type { PopperOptions } from '~/types'

export const createPopper = popperGenerator({
  defaultModifiers: [...defaultModifiers, offset, flip, preventOverflow, computeStyles, eventListeners],
})

export function usePopper({
  locked = false,
  overflowPadding = 8,
  offsetDistance = 8,
  offsetSkid = 0,
  gpuAcceleration = true,
  adaptive = true,
  scroll = true,
  resize = true,
  placement,
  strategy,
}: PopperOptions, virtualReference?: Ref<Element | VirtualElement>) {
  const reference = ref<MaybeElement>(null)
  const popper = ref<MaybeElement>(null)
  const instance = ref<Instance | null>(null)

  onMounted(() => {
    watchEffect((onInvalidate) => {
      if (!popper.value)
        return
      if (!reference.value && !virtualReference?.value)
        return

      const popperEl = unrefElement(popper)
      const referenceEl = virtualReference?.value || unrefElement(reference)

      if (!(popperEl instanceof HTMLElement))
        return
      if (!referenceEl)
        return

      instance.value = createPopper(referenceEl, popperEl, omitBy({
        placement,
        strategy,
        modifiers: [{
          name: 'flip',
          enabled: !locked,
        }, {
          name: 'preventOverflow',
          options: {
            padding: overflowPadding,
          },
        }, {
          name: 'offset',
          options: {
            offset: [offsetSkid, offsetDistance],
          },
        }, {
          name: 'computeStyles',
          options: {
            adaptive,
            gpuAcceleration,
          },
        }, {
          name: 'eventListeners',
          options: {
            scroll,
            resize,
          },
        }],
      }, isUndefined))

      onInvalidate(instance.value.destroy)
    })
  })

  return [reference, popper, instance] as const
}
