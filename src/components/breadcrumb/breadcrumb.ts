export interface BreadcrumbItem {
  label: string
  to?: string
}

export const breadcrumb = {
  wrapper: 'flex flex-wrap items-center gap-1',
  link: {
    wrapper: 'text-13px',
    active: 'text-dark-300 underline-offset-4 hover:underline',
    inactive: 'text-dark-500 dark:text-light-500',
  },
}
