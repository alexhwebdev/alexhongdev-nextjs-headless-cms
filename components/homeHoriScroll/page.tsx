"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from './page.module.css';
import VerticalInfiniteScroll from "../verticalInfiniteScroll/page";
// import { raleway } from '@/app/fonts';
import { montserrat } from '@/app/fonts';
import { inter } from '@/app/fonts';
// import HoriParallax from "../horiParallaxFramerMotion/page";
import HoriParallaxGsap from "@/components/horiParallaxGsap/page";
import TextAniFadeUp from "../textAniFadeUp/page";

export default function HomeHoriScroll() {
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
        translateX: "-400vw",
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
    <section className={styles.scrollSectionOuter}>
      {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

      {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should alway be two separated refs */}
      <div ref={triggerRef}>
        <div className={styles.scrollSectionInner}
          ref={sectionRef}
        >
          <div className={styles.scrollSection}>
            <h3>Section 1</h3>
          </div>



          {/* SECTION 2 : PROJECTS */}
          <VerticalInfiniteScroll>
            Projects&nbsp;&nbsp;&nbsp;Projects&nbsp;
          </VerticalInfiniteScroll>
          <div className={`
              ${styles.scrollSection} 
              ${styles.sectionTwo}
              ${inter.className}
          `}>

            <TextAniFadeUp>
              Portfolio of Projects
            </TextAniFadeUp>
            
            <div className={`${styles.sectionTwoCopy} ${montserrat.className}`}>
              <h5>Research & Innovation</h5>
              <h3>Low-impact luxury</h3>

              <div className={styles.line}></div>

              <h5>Raw Materials and Innovative Technologies</h5>

              <div className={styles.pContainer}>
                <p>We develop prestigious and at the same time sustainable projects, because Sustainability also means protecting what’s beautiful, detail and traditional expert craftsmanship.</p>
                <p>That’s why we are committed to always finding the most exclusive but also the most eco-friendly techniques and materials.</p>
              </div>
            </div>

            <div className={styles.imagesContainer}>
              <HoriParallaxGsap />
            </div>
          </div>


          <VerticalInfiniteScroll>
            Section 3&nbsp;&nbsp;&nbsp;Section 3&nbsp;
          </VerticalInfiniteScroll>
          <div className="scrollSection">
            <h3>Section 3</h3>
          </div>
          <div className="scrollSection">
            <h3>Section 4</h3>
          </div>
        </div>
      </div>
    </section>
  );
}