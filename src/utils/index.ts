export function classNames(...classes: any[string]): string {
  return classes.filter(Boolean).join(' ')
}
