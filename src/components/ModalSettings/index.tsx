import { motion } from 'framer-motion'

type ModalSettingsProps = {
  onVariantChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  onOpen: () => void
}

export const ModalSettings = ({
  onVariantChange,
  onOpen,
}: ModalSettingsProps) => (
  <>
    <motion.select
      aria-label="modal-animation"
      className="input"
      onChange={onVariantChange}
    >
      <option value="dropIn">🪂 Drop in</option>
      <option value="flip">🛹 Flip</option>
      <option value="newspaper">🗞 Newspaper</option>
      <option value="gifYouUp">🎸 GIF you up</option>
    </motion.select>
    <motion.button
      className="save-button"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onOpen}
    >
      Launch modal
    </motion.button>
  </>
)
