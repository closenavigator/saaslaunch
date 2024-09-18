"use client"

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

interface GradientHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientHeading({ children, className = '' }: GradientHeadingProps) {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // or a simple non-gradient h1
  }

  const gradientClass = resolvedTheme === 'dark' ? 'gradient-text-dark' : 'gradient-text-light';

  return (
    <motion.h1 
      className={`text-4xl md:text-6xl font-extrabold leading-tight tracking-tighter
                  ${gradientClass}
                  ${className}`}
      style={{ fontFamily: "'Impact', sans-serif" }}
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
    >
      {children}
    </motion.h1>
  )
}