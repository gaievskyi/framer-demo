import { motion } from 'framer-motion'

export const SubHeader = ({
  text,
  marker,
}: {
  text: string
  marker?: React.ReactNode
}) => {
  const isMarkerString = typeof marker === 'string'
  const isMarkerNumber = !!Number(marker)

  if (!marker) {
    return <motion.h2 className="sub-header">{text}</motion.h2>
  } else if (isMarkerString) {
    return <motion.h2 className="sub-header">{`${marker} ${text}`}</motion.h2>
  } else if (isMarkerNumber) {
    return <motion.h2 className="sub-header">{`${marker}. ${text}`}</motion.h2>
  } else {
    return (
      <motion.h2 className="sub-header">
        {marker} {text}
      </motion.h2>
    )
  }
}
