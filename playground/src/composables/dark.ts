export const isDark = useDark()
export const toggleDark = useDebounceFn((value) => {
  isDark.value = value
}, 100)
export const preferredDark = usePreferredDark()
