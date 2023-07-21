export const selectMenu = {
  wrapper: 'relative',
  container: 'z-20',
  width: 'w-full',
  height: 'max-h-60',
  base: 'relative focus:outline-none overflow-y-auto scroll-py-1',
  background: 'bg-white dark:bg-black',
  divide: '',
  shadow: 'shadow',
  rounded: 'rounded-5px',
  padding: '',
  ring: 'ring-1 ring-light-300 dark:ring-dark-600',
  input: 'block w-[calc(100%+0.5rem)] focus:ring-transparent text-13px px-3.75 py-2.5 text-dark-500 dark:text-light-500 bg-white dark:bg-black border-0 border-b border-light-400 dark:border-dark-600 sticky -top-1 -mt-1 -mx-1 z-10 focus:border-light-400 dark:focus:border-dark-600 placeholder-dark-100 dark:placeholder-light-900',
  option: {
    base: 'cursor-default select-none relative flex items-center justify-between gap-1',
    wrapper: 'border-b border-light-400 dark:border-dark-600',
    rounded: '',
    padding: 'px-3.75 py-2.5',
    size: 'text-13px',
    color: 'text-dark-500 dark:text-light-500',
    container: 'flex items-center gap-2.5 min-w-0',
    active: 'bg-pilot-50 dark:bg-pilot-950',
    inactive: '',
    selected: 'pr-7',
    disabled: 'cursor-not-allowed opacity-50',
    empty: 'text-sm text-dark-200 dark:text-dark-300 px-2 py-1.5',
    icon: {
      base: 'flex-shrink-0 h-4 w-4',
      active: 'text-dark-500 dark:text-light-500',
      inactive: 'text-dark-200 dark:text-dark-300',
    },
    selectedIcon: {
      wrapper: 'absolute inset-y-0 right-0 flex items-center',
      padding: 'pr-3.75',
      color: 'text-pilot-500',
      base: 'h-3 w-3 text-dark-500 dark:text-light-500 flex-shrink-0',
    },
    avatar: {
      base: 'flex-shrink-0',
      size: '3xs',
    },
    chip: {
      base: 'flex-shrink-0 w-2 h-2 mx-1 rounded-full',
    },
  },
  placeholder: '',
  transition: {
    leaveActiveClass: 'transition ease-in duration-100',
    leaveFromClass: 'opacity-100',
    leaveToClass: 'opacity-0',
  },
  popper: {
    placement: 'bottom-end',
  },
  default: {
    selectedIcon: 'i-ph-check-bold',
  },
}
