"use client";

import React from 'react'
import { gsap } from "gsap";
// import { useGSAP } from '@gsap/react';
import { useScramble } from "use-scramble";
import { inter } from '@/app/fonts';
import { montserrat } from '@/app/fonts';
import { raleway } from '@/app/fonts';
import './page.css'

const NameAnimation = () => {
  const { ref, replay } = useScramble({ 
    text: "Alex Hong Web Development",
    speed: 0.5
  });

  // useGSAP(() => {

  // })

  return (
    <div className="name_animation_wrapper">
      <a 
        className={`${montserrat.className}`}
        ref={ref} 
        onMouseOver={replay} 
        onFocus={replay} 
      />

    </div>
  )
}

export default NameAnimation;
// https://www.use-scramble.dev/