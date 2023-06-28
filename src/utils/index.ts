export function classNames(...classes: any[string]): string {
  return classes.filter(Boolean).join(' ')
}

export function omit(obj: object, keys: string[]) {
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => !keys.includes(key)),
  )
}

export function defaultComparator<T>(a: T, z: T): boolean {
  return a === z
}
