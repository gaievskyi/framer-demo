import { motion } from 'framer-motion'

import {
  Header,
  SubHeader,
  Modal,
  ModalContainer,
  Notification,
  NotificationContainer,
  ModalSettings,
  NotificationSettings,
  AutoAnimateList,
  AutoAnimateTodo,
} from '@/components'

import { useModal, useToasts } from '@/hooks'

export const FramerMotionDemo: React.FC = () => {
  const {
    isOpened,
    close,
    open,
    variant,
    handleVariant: handleModalVariant,
  } = useModal()

  const {
    toasts,
    setToasts,
    enqueue,
    text,
    handleText,
    handleVariant: handleToastVariant,
    position,
    handlePosition,
  } = useToasts()

  return (
    <>
      <motion.main>
        <Header />
        <SubHeader text="Animated modals" />
        <ModalSettings onVariantChange={handleModalVariant} onOpen={open} />
        <SubHeader text="Toasts / snackbars / notifiers" />
        <NotificationSettings
          text={text}
          onTextChange={handleText}
          onVariantChange={handleToastVariant}
          onPositionChange={handlePosition}
          onEnqueue={enqueue}
        />
        <AutoAnimateList />
        <AutoAnimateTodo />
      </motion.main>

      <ModalContainer label="modalType">
        <Modal
          isOpened={isOpened}
          text={text}
          variant={variant}
          handleClose={close}
        />
      </ModalContainer>

      <NotificationContainer position={position}>
        {toasts?.map((toast) => (
          <Notification
            key={toast.id}
            notification={toast}
            notifications={toasts}
            setNotifications={setToasts}
          />
        ))}
      </NotificationContainer>
    </>
  )
}
