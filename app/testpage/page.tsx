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
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const pin = gsap.fromTo(
      sectionRef.current,
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
          // end: "top top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      {/* A return function for killing the animation on component unmount */ }
      pin.kill();
    };
  }, []);


  return (
    <section className={styles.project_hori_plx_wrapper}>
      {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

      {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should alway be two separated refs */}
      <div ref={triggerRef}>
        <div className={styles.project_hori_plx_container}
          ref={sectionRef}
        >
          <div className={`
            ${styles.section_one}
          `}>
            <h3>Section 1</h3>
          </div>

          <div className={`
            ${styles.section_two}
          `}>
            <h3>Section 2</h3>
          </div>

          <div className={`
            ${styles.section_three}
          `}>
            <h3>Section 3</h3>
          </div>

        </div>
      </div>
    </section>
  );
}