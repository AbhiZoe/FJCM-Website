'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const controls = useAnimation()

  const getInitial = () => {
    switch (direction) {
      case 'up': return { opacity: 0, y: 40 }
      case 'down': return { opacity: 0, y: -40 }
      case 'left': return { opacity: 0, x: 40 }
      case 'right': return { opacity: 0, x: -40 }
      default: return { opacity: 0 }
    }
  }

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0, x: 0 })
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      animate={controls}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
