"use client"

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import Image from 'next/image';

interface GradientHeadingProps {
  children: React.ReactNode;
  className?: string;
  backgroundImage?: string;
}

export function GradientHeading({ children, className = '', backgroundImage }: GradientHeadingProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const gradientClass = resolvedTheme === 'dark' ? 'gradient-text-dark' : 'gradient-text-light';

  return (
    <div className="relative">
      {backgroundImage && (
        <Image
          src={backgroundImage}
          fill
          style={{ objectFit: 'cover' }}
          quality={90}
          priority
          alt=""
        />
      )}
      <motion.h1 
        className={`relative z-10 text-4xl md:text-6xl font-extrabold leading-tight tracking-tighter ${gradientClass} ${className}`}
        style={{ fontFamily: "'Impact', sans-serif" }}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      >
        {children}
      </motion.h1>
    </div>
  )
}