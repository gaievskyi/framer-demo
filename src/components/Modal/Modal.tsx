import { motion } from 'framer-motion'

import { Backdrop } from '@/components'
import { ModalButton, ModalText } from './components'
import { dropIn, flip, newspaper, gifYouUp } from './animation'

export type ModalAnimationVariant = 'dropIn' | 'flip' | 'newspaper' | 'gifYouUp'

type ModalProps = {
  isOpened: boolean
  handleClose: React.MouseEventHandler<HTMLDivElement | HTMLButtonElement>
  text: string
  variant: ModalAnimationVariant
}

export const Modal = ({ isOpened, handleClose, text, variant }: ModalProps) => {
  if (!isOpened) return null

  return (
    <Backdrop onClick={handleClose}>
      {variant === 'dropIn' && (
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="modal orange-gradient"
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <ModalText text={text} />
          <ModalButton onClick={handleClose} label="Close" />
        </motion.div>
      )}

      {variant === 'flip' && (
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="modal  orange-gradient"
          variants={flip}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <ModalText text={text} />
          <ModalButton onClick={handleClose} label="Close" />
        </motion.div>
      )}

      {variant === 'newspaper' && (
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="modal orange-gradient"
          variants={newspaper}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <ModalText text={text} />
          <ModalButton onClick={handleClose} label="Close" />
        </motion.div>
      )}

      {variant === 'gifYouUp' && (
        <motion.div
          className="modal"
          onClick={(e) => e.stopPropagation()}
          style={{
            padding: 0,
            height: 'auto',
            width: 'auto',
            display: 'flex',
            justifyContent: 'center',
          }}
          variants={gifYouUp}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <h3
            style={{
              color: '#ffaa00',
              textTransform: 'none',
              fontWeight: 400,
              margin: 'auto auto auto 0',
              fontSize: '150%',
            }}
          >
            Tap x2 to close
          </h3>
          <motion.img
            alt=""
            onDoubleClick={handleClose}
            drag
            dragElastic={0.3}
            // src="https://i.giphy.com/media/O5ac76MtFGPHG/giphy.gif"
            // src="https://i.giphy.com/media/jmS6YojdAaYw5z1LHi/giphy.gif"
            src="https://i.giphy.com/media/hhgAbqQpm49vW/giphy.gif"
            style={{
              margin: '0 auto auto auto',
              maxHeight: '40vh',
              height: '40vh',
              width: 'auto',
              objectFit: 'cover',
              borderRadius: '6px',
              zIndex: 1000,
            }}
          />
        </motion.div>
      )}
    </Backdrop>
  )
}
