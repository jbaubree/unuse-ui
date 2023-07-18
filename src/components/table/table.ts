import type { Button } from '~/components/button/button'

export const table = {
  wrapper: 'relative overflow-auto',
  base: 'min-w-full table-fixed',
  divide: 'divide-y divide-dark-300 dark:divide-dark-300',
  thead: '',
  tbody: 'divide-y divide-dark-200 dark:divide-dark-400',
  tr: {
    base: '',
    selected: 'bg-dark-50/25 dark:bg-dark-600/50',
  },
  th: {
    base: 'text-left',
    padding: 'px-3 py-3.5',
    color: 'text-dark-900 dark:text-white',
    font: 'font-semibold',
    size: 'text-sm',
  },
  td: {
    base: 'whitespace-nowrap',
    padding: 'px-3 py-4',
    color: 'text-dark-500 dark:text-dark-200',
    font: '',
    size: 'text-sm',
  },
  emptyState: {
    wrapper: 'flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14',
    label: 'text-sm text-center text-dark-900 dark:text-white',
    icon: 'w-6 h-6 mx-auto text-dark-400 dark:text-dark-200 mb-4',
  },
  default: {
    sortAscIcon: 'i-ph-arrow-line-up-bold',
    sortDescIcon: 'i-ph-arrow-line-down-bold',
    sortButton: {
      icon: 'i-ph-arrows-down-up-bold',
      trailing: true,
      square: true,
      color: 'gray',
      variant: 'ghost',
      class: '-m-1.5',
    } as Button,
    emptyState: {
      icon: 'i-ph-database-bold',
      label: 'No items.',
    },
  },
}
