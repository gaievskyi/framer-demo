import { useState } from 'react'
import { type ModalAnimationVariant } from '@/components'

export function useModal() {
  const [isOpened, setIsOpen] = useState<boolean>(false)
  const [variant, setVariant] = useState<ModalAnimationVariant>('dropIn')

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)
  const toggle = () => setIsOpen((prev) => !prev)

  const handleVariant = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setVariant(e.target.value as ModalAnimationVariant)
  }

  return { isOpened, open, close, toggle, variant, handleVariant }
}
