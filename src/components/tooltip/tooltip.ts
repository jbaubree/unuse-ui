export const tooltip = {
  wrapper: 'relative inline-flex',
  container: 'z-20',
  width: 'max-w-xs',
  background: 'bg-dark-500 dark:bg-light-500',
  shadow: '',
  rounded: 'rounded-2px',
  ring: '',
  base: 'h-6 px-2 py-1.25 text-10px truncate text-light-500 dark:text-dark-500',
  transition: {
    enterActiveClass: 'transition ease-out duration-200',
    enterFromClass: 'opacity-0 translate-y-1',
    enterToClass: 'opacity-100 translate-y-0',
    leaveActiveClass: 'transition ease-in duration-150',
    leaveFromClass: 'opacity-100 translate-y-0',
    leaveToClass: 'opacity-0 translate-y-1',
  },
  popper: {
    strategy: 'fixed',
  },
}
