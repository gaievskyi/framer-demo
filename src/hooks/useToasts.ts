import { useState } from 'react'

import {
  enqueueToast,
  type ToastVariant,
  type ToastStore,
  type ToastPosition,
} from '@/shared/toast-utils'

export function useToasts() {
  const [toasts, setToasts] = useState<ToastStore>([] as ToastStore)
  const enqueue = () => {
    setToasts(enqueueToast(toasts, text, variant))
  }

  const [text, setText] = useState<string>('Awesome job! 🚀')
  const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const [variant, setVariant] = useState<ToastVariant>('success')
  const handleVariant = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setVariant(e.target.value as ToastVariant)
  }

  const [position, setPosition] = useState<ToastPosition>('bottom')
  const handlePosition = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPosition(e.target.value as ToastPosition)
  }

  return {
    toasts,
    setToasts,
    enqueue,
    text,
    handleText,
    variant,
    handleVariant,
    position,
    handlePosition,
  }
}
