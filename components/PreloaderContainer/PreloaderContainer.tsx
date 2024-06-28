"use client";
import React, { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import Preloader from '@/components/Preloader/Preloader';
import Link from 'next/link';
import './page.css';

const PreloaderContainer = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();

        setTimeout( () => {
          setIsLoading(false);
          document.body.style.cursor = 'default'
          window.scrollTo(0,0);
        }, 2000)
      }
    )()
  }, [])

  return (
    <div className="preloader_container_wrapper">
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
    </div>
  )
}

export default PreloaderContainer;
// https://codepen.io/insane_jarvis_01/pen/eYaYXdM?editors=0010

