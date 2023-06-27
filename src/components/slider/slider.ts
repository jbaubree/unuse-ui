export const slider = {
  wrapper: 'fixed inset-0 flex z-50',
  overlay: {
    base: 'fixed inset-0 transition-opacity',
    background: 'bg-dark-100/75 dark:bg-dark-400/75',
    transition: {
      enter: 'ease-in-out duration-500',
      enterFrom: 'opacity-0',
      enterTo: 'opacity-100',
      leave: 'ease-in-out duration-500',
      leaveFrom: 'opacity-100',
      leaveTo: 'opacity-0',
    },
  },
  base: 'relative flex-1 flex flex-col w-full focus:outline-none',
  background: 'bg-white dark:bg-dark-500',
  ring: '',
  rounded: '',
  padding: '',
  shadow: 'shadow-xl',
  width: 'w-screen max-w-md',
  transition: {
    enter: 'transform transition ease-in-out duration-300',
    leave: 'transform transition ease-in-out duration-200',
  },
}
