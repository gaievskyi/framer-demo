import { type PropsWithChildren } from 'react'
import { AnimatePresence } from 'framer-motion'
import { framerLogger } from '@/shared/loggers'

export const ModalContainer = ({
  children,
  label,
}: PropsWithChildren<{ label: string }>) => (
  // Enables the animation of components that have been removed from the tree
  <AnimatePresence
    // Disable any initial animations on children that
    // are present when the component is first rendered
    initial={false}
    // Only render one component at a time.
    // The exiting component will finish its exit
    // animation before entering component is rendered
    mode="wait"
    // Fires when all exiting nodes have completed animating out
    onExitComplete={() => framerLogger(label)}
  >
    {children}
  </AnimatePresence>
)
