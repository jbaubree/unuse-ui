export interface BreadcrumbItem {
  label: string
  to?: string
}

export const breadcrumb = {
  wrapper: 'flex flex-wrap items-center gap-1',
  link: {
    wrapper: 'font-roboto text-sm',
    active: 'text-{color}',
    inactive: 'text-dark-500',
  },
}
