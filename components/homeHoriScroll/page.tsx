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
import TextAniFadeUpJS from "../textAniFadeUpJS/page";
import WhatIDoAniFadeUpJS from "../whatIDoAniFadeUpJS/page";
import WorksSection from "../worksSection/page";
import './page.css'
// import HoverCursorImgChange from "../hoverCursorImgChange/page";
import MouseHoverImgChange from "../mouseHoverImgChange/page";
import EduSection from "../eduSection/page";
import WhatIDo from "../whatIDoSection/page";
import TechWorkWith from "../techWorkWith/page";


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
        translateX: "-500vw",
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

  // useGSAP( () => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   gsap.fromTo(".boxTest", 
  //   {
  //     opacity: 0
  //   },
  //   {
  //     duration: 1, // Duration of animation
  //     opacity: 1, // Target opacity
  //     x: 100, // Move from left
  //     stagger: 0.2 // Stagger the animations
  //   });
  // }, [])

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
          <div className={`${styles.scrollSection} ${styles.sectionOne}`}>
            <h3>Section 1</h3>
            {/* 
            <div className="boxTest"></div>
            <div className="boxTest"></div>
            <div className="boxTest"></div> 
            */}
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

            <TextAniFadeUpJS>
              Portfolio&nbsp;of&nbsp;Projects
            </TextAniFadeUpJS>
            
            <div className={`${styles.sectionTwoCopy} ${montserrat.className}`}>
              <h5>Research & Innovation</h5>
              <h3>Low-impact luxury</h3>

              <div className={styles.line}></div>

              <h5>Raw Materials and Innovative Technologies</h5>

              <div className={styles.pContainer}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                {/* <p>That’s why we are committed to always finding the most exclusive but also the most eco-friendly techniques and materials.</p> */}
              </div>
            </div>

            <div className={styles.imagesContainer}>
              <HoriParallaxGsap />
            </div>
          </div>

          {/* 
          <VerticalInfiniteScroll>
            WORK&nbsp;&nbsp;&nbsp;WORK&nbsp;&nbsp;&nbsp;WORK&nbsp;
          </VerticalInfiniteScroll> 
          */}


          {/* SECTION 3 : WORKS */}
          <div className={styles.worksSectionWrapper}>
            <WorksSection />
          </div>



          {/* SECTION 4 : EDUCATION */}
          <div className={styles.eduSectionWrapper}>
            <EduSection />
          </div>


          {/* SECTION 4 : TECH WORKED WITH */}
          <div 
            className={`
              ${styles.whatIDoSectionWrapper} 
              ${inter.className}
            `}
          >
            <WhatIDoAniFadeUpJS>
              What&nbsp;I&nbsp;do&nbsp;:
            </WhatIDoAniFadeUpJS>

            <WhatIDo />
          </div>


          {/* <div className={styles.hoverModalWrapper}>
            <MouseHoverImgChange />
          </div> */}
        </div>
      </div>
    </section>
  );
}