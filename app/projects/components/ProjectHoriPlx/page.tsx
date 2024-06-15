"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// import { raleway } from '@/app/fonts';
import { montserrat } from '@/app/fonts';
import { inter } from '@/app/fonts';

import styles from './page.module.css'
// import './page.css'


export default function ProjectHoriPlxTest() {
  const triggerRef = useRef(null);
  const sectionRef = useRef(null);
  
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const deskTopSize = '(min-width: 1280px)';
    const tabletSize = '(max-width: 768px)';
    const mobileSize = '(min-width: 425px)';

    const mm = gsap.matchMedia();

    mm.add(deskTopSize, () => {
      const horiScroll = gsap.fromTo(
        sectionRef.current,
        // sections,
        {
          translateX: 0,
        },
        {
          translateX: "-600vw",
          ease: "none",
          duration: 1,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "3000 top",    // This allows horizontal scroll
            // start: "100%+=2000 50%", // start, scroller-start
            // end: "100%+=2000 10%",   // end, scroller-end
            scrub: 0.6,
            pin: true,
            markers: true
          },
        }
      );
      return () => {
        {/* A return function for killing the animation on component unmount */ }
        horiScroll.kill();
      };
    })

    mm.add(tabletSize, () => {
      gsap.fromTo(
        sectionRef.current,
        {
          translateY: 0,
        },
        {
          translateY: "-200vh",
          ease: "none",
          duration: 1,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "3000 top",    // This allows horizontal scroll
            // start: "100%+=2000 50%", // start, scroller-start
            // end: "100%+=2000 10%",   // end, scroller-end
            scrub: 0.6,
            pin: true,
            markers: true
          },
        }
      );
    })

    // Disable Horizontal scroll on Mobile
    // https://gsap.com/community/forums/topic/29235-horizontal-and-vertical-scroll/
  }, []);


  return (

    // --------------- MINE
    <section className={styles.project_hori_plx_wrapper}>
      {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

      {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should alway be two separated refs */}
      <div ref={triggerRef}>
        <div className={styles.project_hori_plx_container}
          ref={sectionRef}
        >
          <div className={`${styles.section_one}`}>
            <h3>Section 1</h3>
          </div>
          <div className={`${styles.section_two}`}>
            <h3>Section 2</h3>
          </div>
          <div className={`${styles.section_three}`}>
            <h3>Section 3</h3>
          </div>
        </div>
      </div>
    </section>
  );
}