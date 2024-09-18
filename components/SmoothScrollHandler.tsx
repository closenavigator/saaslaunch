'use client'

import { useEffect } from 'react'
import { enableSmoothScroll } from '@/utils/smoothScroll'

export default function SmoothScrollHandler() {
  useEffect(() => {
    enableSmoothScroll()
  }, [])

  return null
}