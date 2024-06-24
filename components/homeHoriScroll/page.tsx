"use client";

import React, { useRef } from "react";
// import React from "react";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import VerticalInfiniteScroll from "../verticalInfiniteScroll/page";
// import HoriParallax from "../horiParallaxFramerMotion/page";
import HoriParallaxGsap from "@/components/horiParallaxGsap/page";
import TextAniFadeUpJS from "../textAniFadeUpJS/page";
import WhatIDoAniFadeUpJS from "../whatIDoAniFadeUpJS/page";
import WorksSection from "../worksSection/page";
// import HoverCursorImgChange from "../hoverCursorImgChange/page";
import MouseHoverImgChange from "../mouseHoverImgChange/page";
import EduSection from "../eduSection/page";
import WhatIDo from "../whatIDoSection/page";
import TechWorkWith from "../techWorkWith/page";
import ContactSection from "../contactSection/page";
import HomeScrollTextGradient from "../HomeScrollTextGradient/page";

// import { raleway } from '@/app/fonts';
import { montserrat } from '@/app/fonts';
import { inter } from '@/app/fonts';

import styles from './page.module.css';
import './page.css'

export interface CompanyDataProps {
  company: string;
  cardDesc: string;
  introDesc: string;
  description: string;
  fromTo: string;
  location: string;
  role: string;
  imgSrc: string;
  siteUrl: string;
  slug: string;
}
export interface PageImage {
    url: string;
  // pageImagesCollection: {
    items: {
      title: string;
      description: string;
      contentType: string;
      fileName: string;
      size: number;
      url: string;
      width: number;
      height: number;    
    }[];
  // }
}
export interface HomeHoriScrollProps {
  companyData: CompanyDataProps[];
  pageImagesCollection: PageImage[];
}

export default function HomeHoriScroll(
  { 
    // lineData, imgDataArray,
    companyData,
    pageImagesCollection
  }: HomeHoriScrollProps
) {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  console.log(
    'HomeHoriScroll pageImagesCollection ', 
    pageImagesCollection
  )

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const pin = gsap.fromTo(
      sectionRef.current,
      // ".scrollSectionInner",
      { translateX: 0 },
      {
        translateX: "-600vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          // trigger: ".triggerRef",
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
      <div 
        ref={triggerRef} 
        // className={`triggerRef`}
      >
        <div className={`scrollSectionInner ${styles.scrollSectionInner}`}
          ref={sectionRef}
        >
          <div className={`${styles.scrollSection} ${styles.sectionOne}`}>
            <h3>Section 1</h3>
            <HomeScrollTextGradient />
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
              {/* <h5>Research & Innovation</h5> */}
              {/* {lineData[0]} */}
              
              <h3>Low-impact luxury</h3>
              {/* {lineData[1]} */}

              <div className={styles.line}></div>

              <h5>Raw Materials and Innovative Technologies</h5>
              {/* {lineData[2]} */}

              <div className={styles.pContainer}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                {/* {lineData[3]} */}
                {/* <p>That’s why we are committed to always finding the most exclusive but also the most eco-friendly techniques and materials.</p> */}
              </div>
            </div>

            <div className={styles.imagesContainer}>
              <HoriParallaxGsap 
                companyData={companyData}
                // imgDataArray={imgDataArray}
              />
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

          {/* SECTION 5 : TECH WORKED WITH */}
          <VerticalInfiniteScroll>
            Development&nbsp;&nbsp;&nbsp;Development&nbsp;
          </VerticalInfiniteScroll>
          <div 
            className={`
              ${styles.whatIDoSectionWrapper} 
              ${inter.className}
            `}
          >
            <WhatIDoAniFadeUpJS>
              {/* What&nbsp;I&nbsp;do&nbsp;: */}
              {/* Tech.&nbsp;Ive&nbsp;Worked&nbsp;With&nbsp;: */}
              <div className="mix-blend-difference">
                Development&nbsp;Experience&nbsp;:
              </div>
            </WhatIDoAniFadeUpJS>

            <WhatIDo 
              // imgDataArray={imgDataArray}
              companyData={companyData}
              pageImagesCollection={pageImagesCollection}
            />
          </div>

          {/* SECTION 6 : CONTACT */}
          <div className={styles.contactSectionWrapper}>
            <ContactSection />
          </div>

          {/* <div className={styles.hoverModalWrapper}>
            <MouseHoverImgChange />
          </div> */}
        </div>
      </div>
    </section>
  );
};