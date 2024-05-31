'use client';

import { useEffect } from 'react'
import Lenis from 'lenis'

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({children}: SmoothScrollProps) {

  useEffect( () => {
    window.scrollTo(0,0);
    
    const lenis = new Lenis()
    
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
  }, [])

  return children
}
