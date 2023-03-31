import { motion } from 'framer-motion'

type ModalButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>
  label: string
}

export const ModalButton = ({ onClick, label }: ModalButtonProps) => (
  <motion.button
    className="modal-button"
    type="button"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    {label}
  </motion.button>
)
