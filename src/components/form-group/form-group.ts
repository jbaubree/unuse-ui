export const formGroup = {
  wrapper: '',
  label: {
    wrapper: 'flex content-center justify-between mb-1.25',
    base: 'block text-13px text-dark-500 dark:text-light-500',
    required: 'after:content-[\'*\'] after:ml-0.5 after:text-red-500 dark:after:text-red-400',
    disabled: 'opacity-50',
  },
  container: {
    base: 'relative',
    space: 'mt-1',
  },
  error: 'mt-1.25 text-xs text-red-500 dark:text-red-400',
}
