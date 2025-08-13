import React from 'react'
import { motion, useInView } from 'framer-motion'

type Props = {
  children: React.ReactNode
  y?: number
  delay?: number
  duration?: number
  amount?: number   // 0..1 portion visible to trigger; default 0.35
}

export default function Reveal({
  children,
  y = 24,
  delay = 0,
  duration = 0.6,
  amount = 0.35,
}: Props) {
  const ref = React.useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { amount, margin: '0px 0px -10% 0px' }) // triggers a bit before center

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'} // ← re-triggers when leaving/entering
      variants={{
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0, transition: { duration, ease: 'easeOut', delay } },
      }}
    >
      {children}
    </motion.div>
  )
}
