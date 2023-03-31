import { motion } from 'framer-motion'
import { useMemo } from 'react'

import { dequeueToast, type Toast, type ToastStore } from '@/shared/toast-utils'
import { CloseButton } from './components'
import { notificationVariants } from './animation'

type NotificationProps = {
  notifications: ToastStore
  setNotifications: React.Dispatch<React.SetStateAction<ToastStore>>
  notification: Toast
}

export const Notification = ({
  notifications,
  setNotifications,
  notification,
}: NotificationProps) => {
  const { text, variant } = notification

  const handleClose = () => {
    setNotifications(dequeueToast(notifications, notification))
  }

  const notificationStyle = useMemo(() => {
    switch (variant) {
      case 'success':
        return { background: 'linear-gradient(15deg, #6adb00, #04e800)' }
      case 'error':
        return { background: 'linear-gradient(15deg, #ff596d, #d72c2c)' }
      case 'warning':
        return { background: 'linear-gradient(15deg, #ffac37, #ff9238)' }
      case 'light':
        return { background: 'linear-gradient(15deg, #e7e7e7, #f4f4f4)' }
      default:
        return { background: 'linear-gradient(15deg, #202121, #292a2d)' }
    }
  }, [])

  return (
    <motion.li
      layout
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.9}
      dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
      style={notificationStyle} // Change the style based on style selection
      variants={notificationVariants} // Defined animation states
      whileHover="hover" // Animation on hover gesture
      initial="initial" // Starting animation
      animate="animate" // Values to animate to
      exit="exit" // Target to animate to when removed from the tree
    >
      <h3
        style={{ color: variant ? '#030303' : '#929292' }}
        className="notification-text"
      >
        {text}
      </h3>
      <CloseButton
        color={variant ? '#030303' : '#989898'}
        handleClose={handleClose}
      />
    </motion.li>
  )
}
