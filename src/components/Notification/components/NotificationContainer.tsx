import { type PropsWithChildren } from 'react'
import { AnimatePresence } from 'framer-motion'
import { type ToastPosition } from '@/shared/toast-utils'
import { framerLogger } from '@/shared/loggers'

type NotificationContainerProps = { position: ToastPosition }

export const NotificationContainer = ({
  children,
  position,
}: PropsWithChildren<NotificationContainerProps>) => {
  return (
    <div className="container">
      <ul className={position}>
        <AnimatePresence
          initial={false}
          onExitComplete={() => framerLogger('Notifications container')}
        >
          {children}
        </AnimatePresence>
      </ul>
    </div>
  )
}
