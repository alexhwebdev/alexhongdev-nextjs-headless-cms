"use client";
import React, { useEffect, useState } from 'react'
import { gsap, Power1 } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { AnimatePresence } from 'framer-motion';
import './page.css';
import Preloader from '@/components/Preloader/Preloader';
import Link from 'next/link';
import PreloaderContainer from '../PreloaderContainer/PreloaderContainer';

import { raleway } from '@/app/fonts';
import { montserrat } from '@/app/fonts';
import { inter } from '@/app/fonts';

const AhLogo = () => {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect( () => {
  //   (
  //     async () => {
  //       const LocomotiveScroll = (await import('locomotive-scroll')).default
  //       const locomotiveScroll = new LocomotiveScroll();

  //       setTimeout( () => {
  //         setIsLoading(false);
  //         document.body.style.cursor = 'default'
  //         window.scrollTo(0,0);
  //       }, 2000)
  //     }
  //   )()
  // }, [])
  // // const space = `&nbsp;`
  // // const alexhong = `ALEXHONG`.split('');
  // // const alexhong = `${'A'} ${'  '} ${'H'}`.split('');
  
  useGSAP(() => {
    gsap.registerPlugin(MotionPathPlugin)
    const textStart = document.querySelector('.textStart')
    const rect = textStart!.getBoundingClientRect()

    const destinationElements = gsap.utils.toArray('.destination') as HTMLElement[];

    const scrollItemPath = destinationElements.map((el) => {
      const b = el.getBoundingClientRect();
      const x = b.left - rect.left;
      const y = b.top - rect.top;
      return { x, y };
    });

    gsap.fromTo(".eachLetter", {
        delay: 3,
        opacity: 0, 
        stagger: 0.5,
        yPercent: 100, 
      },{
        // rotationY: 36, 
        delay: 1,
        opacity: 1, 
        duration: 1, 
        yPercent: 0, 
        stagger: 0.05,
        // stagger: 0.5,
        ease:"back.out",
        normalizeScroll: true,
      }
    )
    gsap.to('.hide-char', {
      delay: 2.4, duration: .6, ease: "ease.out",opacity: 0
    })
    gsap.to('.a_move_right', {
      left: 170, delay: 2.8, duration: .6, ease: "ease.out"
    })
    gsap.to('.h_move_left', {
      right: 0, delay: 2.8, duration: .6, ease: "ease.out"
    })

    // Move AH top left
    gsap.to(textStart, {
      motionPath: scrollItemPath,
      align: 'self',
      duration: 1,
      delay: 4
    })
    // Scale down AH
    gsap.to(
      // [".a_move_right", ".h_move_left"], 
      ".textStart",
      {
        // y: 300, 
        delay: 4,
        scale: 0.3, 
        transformOrigin: "50% 50%", 
        stagger: 0.05
      }
    )

    // let tl = gsap.timeline({delay:1});
    // tl.add('start');
    // tl.to('.a_move_right', {
    //   left: -50, 
    //   duration: .6, 
    //   ease: "ease.out"},
    //   'start'
    // );
    // tl.to('.h_move_left', {
    //   right: -50, 
    //   duration: .6, 
    //   ease: "ease.out"}, 
    //   'start'
    // );

  }, []);

  return (
    <div className="ah_wrapper">
      {/* <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence> */}
      {/* <PreloaderContainer /> */}


      <div className="destination">destination</div>
      <div className="textStart">
        <Link href="/" className={`chars_wrapper`}>
          <div className={`chars_container`}>
            <p className="eachLetter a_move_right" > 
              <span className={`${inter.className}`}>A</span>
            </p>
            <p className="eachLetter hide-char">
              <span className={`${inter.className}`}>L</span>
            </p>
            <p className="eachLetter hide-char">
              <span className={`${inter.className}`}>E</span>
            </p>
            <p className="eachLetter hide-char">
              <span className={`${inter.className}`}>X&nbsp;</span>
            </p>
          </div>
          <div className="chars_container">
            <p className="eachLetter h_move_left">
              <span className={`${inter.className}`}>H</span>
            </p>
            <p className="eachLetter hide-char">
              <span className={`${inter.className}`}>O</span>
            </p>
            <p className="eachLetter hide-char">
              <span className={`${inter.className}`}>N</span>
            </p>
            <p className="eachLetter hide-char">
              <span className={`${inter.className}`}>G</span>
            </p>
          </div>            
        </Link>
      </div>

    </div>
  )
}

export default AhLogo;
// https://codepen.io/insane_jarvis_01/pen/eYaYXdM?editors=0010

