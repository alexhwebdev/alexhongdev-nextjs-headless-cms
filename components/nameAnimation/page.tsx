"use client";
import React, { useEffect, useRef } from 'react'
import { useScramble } from "use-scramble";
import { inter } from '@/app/fonts';
import { montserrat } from '@/app/fonts';
import { raleway } from '@/app/fonts';
import './page.css'

const NameAnimation = () => {
  const { ref, replay } = useScramble({
    playOnMount: true,
    speed: 0.5,
    text: "Alex Hong Web Development",
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      replay();
    }, 4000); // 4000 milliseconds = 4 seconds

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, [replay]);

  return (
    <div className="name_animation_wrapper">
      <a className={`${montserrat.className}`}
        ref={ref} 
        onMouseOver={replay} 
        onFocus={replay} 
      />
    </div>
  )
}

export default NameAnimation;
// https://www.use-scramble.dev/