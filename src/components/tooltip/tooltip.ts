export const tooltip = {
  wrapper: 'relative inline-flex',
  container: 'z-20',
  width: 'max-w-xs',
  background: 'bg-white dark:bg-dark-600',
  shadow: 'shadow',
  rounded: 'rounded',
  ring: 'ring-1 ring-dark-100 dark:ring-dark-400',
  base: 'invisible lg:visible h-6 px-2 py-1 text-xs font-normal truncate',
  shortcuts: 'hidden md:inline-flex flex-shrink-0 gap-0.5',
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
