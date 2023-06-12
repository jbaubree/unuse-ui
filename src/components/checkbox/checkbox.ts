export const checkbox = {
  wrapper: 'inline-flex items-center gap-3 cursor-pointer disabled:cursor-default',
  button: {
    base: 'transition-colors h-4 w-4 border flex items-center justify-center',
    active: 'bg-primary-500 border-primary-500',
    inactive: 'bg-white border-primary-400',
    rounded: 'rounded',
    disabled: 'opacity-50 cursor-not-allowed',
  },
  icon: 'h-2.5 w-2.5 transition-opacity text-white',
  label: 'text-gray-700 text-sm cursor-unset',
  required: 'text-red-500',
}
