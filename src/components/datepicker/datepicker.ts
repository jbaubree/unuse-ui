export const datepicker = {
  wrapper: 'w-325px',
  header: {
    wrapper: 'flex items-center justify-between border-b border-primary-200 px-3.5 py-2',
    space: 'space-x-1',
    previous: {
      icon: 'i-ph-caret-left',
      rounded: 'rounded-full',
    },
    next: {
      icon: 'i-ph-caret-right',
      rounded: 'rounded-full',
    },
  },
  padding: 'p-3.5',
  day: {
    disabled: 'px-2 py-1.5 text-center text-dark-300',
  },
  default: {
    closeIcon: 'i-ph-x',
    wrap: 'flex flex-wrap',
    minHeight: 'min-h-170px',
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
