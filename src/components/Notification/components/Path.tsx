import { motion } from 'framer-motion'

export const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke={props.color}
    strokeLinecap="square"
    {...props}
  />
)
