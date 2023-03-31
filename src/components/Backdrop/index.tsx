import { motion } from 'framer-motion'

type BackdropProps = {
  onClick: React.MouseEventHandler<HTMLDivElement>
}

export const Backdrop = ({
  children,
  onClick,
}: React.PropsWithChildren<BackdropProps>) => (
  <motion.div
    className="backdrop"
    onClick={onClick}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    {children}
  </motion.div>
)
