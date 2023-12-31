export const datepicker = {
  wrapper: 'w-275px',
  header: {
    wrapper: 'flex items-center justify-between border-b border-pilot-200 px-3.5 py-2',
    space: 'space-x-1',
    previous: {
      icon: 'icon-ph-caret-left',
      rounded: 'rounded-full',
    },
    next: {
      icon: 'icon-ph-caret-right',
      rounded: 'rounded-full',
    },
  },
  padding: 'p-2.5',
  default: {
    closeIcon: 'icon-ph-x-bold',
    wrap: 'flex flex-wrap',
    minHeight: 'min-h-130px',
  },
  popper: {
    placement: 'auto',
  },
  tooltip: {
    transition: {
      enterFromClass: 'opacity-0 -translate-x-1',
      enterToClass: 'opacity-100 translate-x-0',
      leaveFromClass: 'opacity-100 translate-x-0',
      leaveToClass: 'opacity-0 -translate-x-1',
    },
  },
}

export const DATEPICKER_MONTHS = ['Janvier', 'Février', 'Mars', 'Avris', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
export const DATEPICKER_DAYS = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']

export type DateType =
| 'day'
| 'month'
| 'year'
