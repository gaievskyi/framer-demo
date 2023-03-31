import { motion } from 'framer-motion'
import { Path } from './Path'

type CloseButtonProps = {
  handleClose: React.MouseEventHandler<HTMLDivElement>
  color: string
}

export const CloseButton = ({ handleClose, color }: CloseButtonProps) => (
  <motion.div
    whileHover={{ scale: 1.2 }}
    onClick={handleClose}
    className="close"
  >
    <svg width="18" height="18" viewBox="0 0 23 23">
      <Path color={color} d="M 3 16.5 L 17 2.5" />
      <Path color={color} d="M 3 2.5 L 17 16.346" />
    </svg>
  </motion.div>
)
