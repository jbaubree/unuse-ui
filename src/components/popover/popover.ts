export const popover = {
  wrapper: 'relative',
  container: 'z-20',
  width: '',
  background: 'bg-white dark:bg-black',
  rounded: 'rounded-5px',
  padding: '',
  ring: 'ring-1 ring-light-300 dark:ring-dark-500',
  shadow: 'shadow',
  base: 'overflow-hidden focus:outline-none text-13px text-dark-500 dark:text-light-500',
  transition: {
    enterActiveClass: 'transition ease-out duration-200',
    enterFromClass: 'opacity-0',
    enterToClass: 'opacity-100',
    leaveActiveClass: 'transition ease-in duration-150',
    leaveFromClass: 'opacity-100',
    leaveToClass: 'opacity-0',
  },
  popper: {
    strategy: 'fixed',
  },
}
