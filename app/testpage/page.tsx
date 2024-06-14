"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// import { raleway } from '@/app/fonts';
import { montserrat } from '@/app/fonts';
import { inter } from '@/app/fonts';

import styles from './page.module.css'
import './page.css'



export default function ProjectHoriPlxTest() {
  const triggerRef = useRef(null);
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    let mm = gsap.matchMedia(),
        breakPoint = 800;
    
    mm.add({
      // set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
      isDesktop: `(min-width: ${breakPoint}px) and (prefers-reduced-motion: no-preference)`,
      isMobile: `(max-width: ${breakPoint - 1}px) and (prefers-reduced-motion: no-preference)`
    }, (context) => {
      if (context.conditions) { // Check if conditions are defined
        let { isDesktop, isMobile } = context.conditions,
            target = isDesktop ? ".desktop" : ".mobile",
            tl = gsap.timeline({
              scrollTrigger: {
                trigger: ".gray",
                scrub: 1,
                end: "200%",
                pin: true
              }
            });
        tl.to(target, {scale: 2, rotation: 360})
          .to(target, {scale: 1});
    
        // works for non-ScrollTrigger animations too: 
        gsap.to(target, {backgroundColor: "#2c7ad2", duration: 0.8, ease: "none", repeat: -1, yoyo: true});
    
        return () => { 
          // optionally return a cleanup function that will be called when the media query no longer matches
        }
      }
    });
      












    // const pin = gsap.fromTo(
    //   sectionRef.current,
    //   {
    //     translateX: 0,
    //   },
    //   {
    //     translateX: "-600vw",
    //     ease: "none",
    //     duration: 1,
    //     scrollTrigger: {
    //       trigger: triggerRef.current,
    //       start: "top top",
    //       end: "3000 top",    // This allows horizontal scroll
    //       // start: "100%+=2000 50%", // start, scroller-start
    //       // end: "100%+=2000 10%",   // end, scroller-end
    //       scrub: 0.6,
    //       pin: true,
    //       markers: true
    //     },
    //   }
    // );
    // return () => {
    //   {/* A return function for killing the animation on component unmount */ }
    //   pin.kill();
    // };
  }, []);


  return (
    <div>
      <header>
        <h1>gsap.matchMedia()</h1>
        <p className="lead">When the viewport is less than 800px, the "Mobile" &lt;div&gt; will animate. Otherwise, "Desktop" will.</p>
      </header>
      <section className="gray">
        <div className="mobile">Mobile</div>
        <div className="desktop">Desktop</div>
      </section>

      <section className="bottom lead">
        <p><strong>Pretty cool, right?</strong></p>
        <p>Resize your screen. 800px is the break point. It's all dynamic!</p>
        <p>Check out <a href="https://greensock.com">GSAP</a> today. </p>
      </section>
    </div>


    // <section className={styles.project_hori_plx_wrapper}>
    //   {/* The section up act just as a wrapper. If the trigger (below) is the
    //   first jsx element in the component, you get an error on route change */}

    //   {/* The div below act just as a trigger. As the doc suggests, the trigger and 
    //   the animation should alway be two separated refs */}
    //   <div ref={triggerRef}>
    //     <div className={styles.project_hori_plx_container}
    //       ref={sectionRef}
    //     >
    //       <div className={`
    //         ${styles.section_one}
    //       `}>
    //         <h3>Section 1</h3>
    //       </div>

    //       <div className={`
    //         ${styles.section_two}
    //       `}>
    //         <h3>Section 2</h3>
    //       </div>

    //       <div className={`
    //         ${styles.section_three}
    //       `}>
    //         <h3>Section 3</h3>
    //       </div>

    //     </div>
    //   </div>
    // </section>
  );
}