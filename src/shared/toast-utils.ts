// Generate and remove notifications

let newId = 0

export type ToastVariant = 'success' | 'warning' | 'error' | 'light' | 'dark'

export type ToastPosition = 'top' | 'bottom'

export type Toast = {
  id: number
  text: string
  variant: ToastVariant
}

export type ToastStore = Toast[]

export const dequeueToast = (
  toastStore: ToastStore,
  toast: Toast,
): ToastStore => {
  const newToastStore = [...toastStore]
  newToastStore.splice(
    newToastStore.findIndex((i) => i === toast),
    1,
  )
  return newToastStore
}

export const enqueueToast = (
  toastStore: ToastStore,
  text: string,
  variant: ToastVariant,
): ToastStore => {
  newId = newId + 1
  return [...toastStore, { id: newId, text, variant }]
}
