import type { Notification } from '~/components/notification/notification'

export const useToast = createSharedComposable(() => {
  const notifications = ref<Notification[]>([])

  function add(notification: Partial<Notification>) {
    const body = {
      id: new Date().getTime().toString(),
      ...notification,
    }
    const index = notifications.value.findIndex((n: Notification) => n.id === body.id)
    if (index === -1)
      notifications.value.push(body as Notification)
    return body
  }

  function remove(id: string) {
    notifications.value = notifications.value.filter((n: Notification) => n.id !== id)
  }

  return {
    add,
    notifications,
    remove,
  }
})
