'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, useMotionValue, useTransform, useAnimation } from 'framer-motion'

interface SwipeableCardProps {
  children: React.ReactNode;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
}

const SwipeableCard: React.FC<SwipeableCardProps> = ({ children, onSwipeLeft, onSwipeRight }) => {
  const [exitX, setExitX] = useState<number | null>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  const x = useMotionValue(0)
  const rotate = useTransform(x, [-150, 0, 150], [-30, 0, 30])
  const opacity = useTransform(x, [-150, -100, 0, 100, 150], [0, 1, 1, 1, 0])

  const yellowGradient = useTransform(
    x,
    [0, 150],
    ['rgba(253, 229, 128, 0)', 'rgba(253, 229, 128, 0.5)']
  )
  const redGradient = useTransform(
    x,
    [-150, 0],
    ['rgba(255, 0, 0, 0.5)', 'rgba(255, 0, 0, 0)']
  )

  const handleDragEnd = (event: any, info: any) => {
    if (info.offset.x > 100) {
      setExitX(200)
      onSwipeRight()
    } else if (info.offset.x < -100) {
      setExitX(-200)
      onSwipeLeft()
    }
  }

  useEffect(() => {
    if (exitX) {
      controls.start({ x: exitX, opacity: 0 })
    }
  }, [exitX, controls])

  return (
    <motion.div
      ref={cardRef}
      style={{
        x,
        rotate,
        opacity,
        backgroundImage: `linear-gradient(to right, ${redGradient}, ${yellowGradient})`,
      }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      animate={controls}
      className="absolute top-0 left-0 w-full cursor-grab active:cursor-grabbing"
    >
      {children}
    </motion.div>
  )
}

export default SwipeableCard