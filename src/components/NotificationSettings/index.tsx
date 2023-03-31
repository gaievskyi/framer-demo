import { motion } from 'framer-motion'
import { Input } from '@/components'

type NotificationSettingsProps = {
  text: string
  onTextChange: React.ChangeEventHandler<HTMLInputElement>
  onVariantChange: React.ChangeEventHandler<HTMLSelectElement>
  onPositionChange: React.ChangeEventHandler<HTMLSelectElement>
  onEnqueue: React.MouseEventHandler<HTMLButtonElement>
}

export const NotificationSettings = ({
  text,
  onTextChange,
  onVariantChange,
  onPositionChange,
  onEnqueue,
}: NotificationSettingsProps) => {
  return (
    <>
      <Input
        label={<span>Text</span>}
        placeholder="Snackbar text 🚀"
        value={text}
        onChange={onTextChange}
      />

      <label htmlFor="variant">
        <span>Variant</span>
        <motion.select
          id="variant"
          aria-label="variant"
          className="input"
          onChange={onVariantChange}
        >
          <option value="success">✅ Success</option>
          <option value="warning">⚠️ Warning</option>
          <option value="error">🛑 Error</option>
          <option value="light">☀️ Light</option>
          <option value="">🌙 Dark</option>
        </motion.select>
      </label>

      <label htmlFor="position">
        <span>Position</span>
        <motion.select
          aria-label="toast-position"
          className="input"
          onChange={onPositionChange}
        >
          <option value="bottom">👇🏼 Bottom</option>
          <option value="top">☝🏼 Top</option>
        </motion.select>
      </label>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="enqueue-button"
        onClick={onEnqueue}
      >
        + Enqueue snackbar
      </motion.button>
    </>
  )
}
