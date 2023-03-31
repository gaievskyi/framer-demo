import { motion } from 'framer-motion'

type HeaderProps = {
  text: string
  technology?: string
}

export const Header = ({ text, technology }: HeaderProps) => (
  <motion.h1 className="pink mt-5">
    {text}
    {technology && <span className="light-blue">{technology}</span>}
  </motion.h1>
)
