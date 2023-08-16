export const table = {
  wrapper: 'relative w-full overflow-auto',
  base: 'min-w-full table-fixed',
  divide: 'divide-y divide-pilot-50 dark:divide-pilot-950',
  thead: '',
  tbody: 'divide-y divide-light-400 dark:divide-dark-600',
  tr: {
    base: '',
    selected: 'bg-light-200 dark:bg-dark-700',
    hover: 'hover:bg-light-200 hover:dark:bg-dark-700',
  },
  th: {
    base: 'text-left font-normal',
    padding: 'px-3 py-2.5',
    color: 'text-dark-500 dark:text-light-500',
    font: '',
    size: 'text-13px',
  },
  td: {
    base: 'whitespace-nowrap',
    padding: 'px-3 py-4',
    color: 'text-dark-500 dark:text-light-500',
    font: '',
    size: 'text-13px',
  },
  emptyState: {
    wrapper: 'flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14',
    label: 'text-sm text-center text-dark-900 dark:text-white',
    icon: 'w-6 h-6 mx-auto text-dark-400 dark:text-dark-200 mb-4',
  },
  default: {
    sortAscIcon: 'icon-ph-arrow-line-up',
    sortDescIcon: 'icon-ph-arrow-line-down',
    sortButton: {
      icon: 'icon-ph-caret-up-down-bold',
      isTrailing: true,
      isSquare: true,
      color: 'dark',
      variant: 'link',
      class: '-m-1.5',
      ui: {
        icon: { size: { md: 'h-2.5 w-2.5' } },
        color: { dark: { link: 'text-dark-500 dark:text-light-500' } },
      },
    },
    emptyState: {
      icon: 'icon-ph-database-bold',
      label: 'Aucun élément.',
    },
  },
}
