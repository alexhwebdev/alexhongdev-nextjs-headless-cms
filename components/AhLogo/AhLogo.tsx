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

    // // Move AH top left
    // gsap.to(textStart, {
    //   motionPath: scrollItemPath,
    //   align: 'self',
    //   duration: 1,
    //   delay: 5
    // })

    // const deskTopSize = '(max-width: 1280px)';
    // const mobileSize = '(min-width: 430px)';

    // (min-width: 1351px) and (max-width: 630px)
    const deskTopSize = '(max-width: 1280px) and (min-width: 569px)';
    const mobileSize = '(max-width: 568px) and (min-width: 375px)';
    // const mobileSize = '(min-width: 430px)';
    const mm = gsap.matchMedia();

    mm.add(deskTopSize, () => {
      gsap.fromTo(".eachLetter", {
        delay: 3,
        opacity: 0, 
        stagger: 0.5,
        yPercent: 100, 
        normalizeScroll: true,
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
      })
      gsap.to('.hide-char', {
        delay: 2.4, duration: .6, ease: "ease.out",opacity: 0
      })
      gsap.to(".chars_wrapper",{
        width: "150px",
        delay: 3,
        stagger: 0.05,
        normalizeScroll: true,
      })
      gsap.to(".ah_container",{
        width: "130px",
        delay: 3,
        stagger: 0.05,
        normalizeScroll: true,
      })
      gsap.to(".textStart", {
        width: "50px",
        height: "50px",
        delay: 4,
        duration: 0.6,
        stagger: 0.05,
        right: "unset",
        bottom: "unset",
        normalizeScroll: true,
      })
      gsap.to(".ah_wrapper", {
        width: "135px",
        height: "50px",
        top: "25px",
        delay: 4,
        duration: 0.6,
        stagger: 0.05
      })
      gsap.to(".ah_container",{
        width: "50px",
        delay: 4,
        stagger: 0.05,
        normalizeScroll: true,
      })
      // Scale down Font AH
      gsap.fromTo([".charA", ".charH", ".remove_char"], {
        delay: 4,
        fontSize: '5em',
        stagger: 0.05,
        normalizeScroll: true,
      },{
        delay: 4,
        fontSize: '2em',
        stagger: 0.05,
        normalizeScroll: true,
      })
      gsap.to(".textStart", {
        position: "fixed", delay: 5
      })
    })

    mm.add(mobileSize, () => {
      gsap.fromTo(".eachLetter", {
        delay: 3,
        opacity: 0, 
        stagger: 0.5,
        yPercent: 100, 
        normalizeScroll: true,
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
      })
      gsap.to(".textStart", {
        width: "297px"
      })
      gsap.to(".ah_container", {
        width: "187px"
      })
      gsap.to(".chars_container2", {
        left: "40px"
      })
      gsap.to('.hide-char', {
        delay: 2.4, duration: .6, ease: "ease.out",opacity: 0
      })
      gsap.to(".chars_wrapper",{
        width: "75px",
        height: "75px",
        delay: 3,
        stagger: 0.05
      })
      gsap.to(".ah_container",{
        width: "75px",
        delay: 3,
        stagger: 0.05
      })
      gsap.to(".textStart", {
        width: "50px",
        height: "75px",
        delay: 4,
        duration: 0.6,
        stagger: 0.05,
        right: "unset",
        bottom: "unset"
      })
      gsap.to(".ah_wrapper", {
        width: "105px",
        height: "75px",
        top: "22px",
        delay: 4,
        duration: 0.6,
        stagger: 0.05
      })
      gsap.to(".ah_container",{
        width: "37px",
        delay: 4,
        stagger: 0.05
      })
      // Scale down Font AH
      gsap.fromTo([".charA", ".charH", ".remove_char"], {
        delay: 4,
        fontSize: '3em',
        stagger: 0.05
      },{
        delay: 4,
        fontSize: '1.5em',
        stagger: 0.05
      })
      gsap.to(".textStart", {
        position: "fixed", delay: 5
      })
    })


    // function removeElement(element) {
    //   if (typeof(element) === "string") {
    //     element = document.querySelector(element);
    //   }
    //   return function() {
    //     element.parentNode.removeChild(element);
    //   };
    // }
    // // let tl = gsap.timeline({delay: 4.1});
    // // tl.call(removeElement(".remove_char1"))
    // // tl.call(removeElement(".remove_char2"))
    // // tl.call(removeElement(".remove_char3"))
    // // tl.call(removeElement(".remove_char4"))
    // // tl.call(removeElement(".remove_char5"))
    // // tl.call(removeElement(".remove_char6"))

    // let tl = gsap.timeline({delay:1});
    // tl.add('start');
    // tl.to('.a_move_right', {
    //   left: -50, 
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


      {/* <div className="destination">destination</div> */}
      <div className="textStart">
        <Link href="/" className={`chars_wrapper`}>
          <div className={`ah_container`}>
            <p className="eachLetter a_move_right" > 
              <span className={`charA ${inter.className}`}>A</span>
            </p>
            <p className="eachLetter a_move_right" > 
              <span className={`charA ${inter.className}`}>H</span>
            </p>
          </div>
          <div className={`chars_container1`}>
            <p className="eachLetter hide-char">
              <span className={`remove_char remove_char1 ${inter.className}`}>L</span>
            </p>
            <p className="eachLetter hide-char">
              <span className={`remove_char remove_char2 ${inter.className}`}>E</span>
            </p>
            <p className="eachLetter hide-char">
              <span className={`remove_char remove_char3 ${inter.className}`}>X&nbsp;</span>
            </p>
          </div>
          <div className="chars_container2">
            <p className="eachLetter hide-char">
              <span className={`remove_char remove_char4 ${inter.className}`}>O</span>
            </p>
            <p className="eachLetter hide-char">
              <span className={`remove_char remove_char5 ${inter.className}`}>N</span>
            </p>
            <p className="eachLetter hide-char">
              <span className={`remove_char remove_char6 ${inter.className}`}>G</span>
            </p>
          </div>            
        </Link>
      </div>

    </div>
  )
}
export default AhLogo;
// https://codepen.io/insane_jarvis_01/pen/eYaYXdM?editors=0010

