"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from 'next/image';

import { raleway } from '@/app/fonts';
import { montserrat } from '@/app/fonts';
import { inter } from '@/app/fonts';

import styles from './page.module.css'
import './page.css'




interface SiteInfo {
  siteName: string;
  siteLink: string;
  imgs: {
    [key: string]: string; // Assuming keys are numeric strings
  };
}

const siteInfo:SiteInfo[] = [
  { 
    siteName: "Investor's Business Daily",
    siteLink: 'https://investors.com/',
    imgs: {
      1: "/images/projects/ibd-ai/ai-0.png",
      2: "/images/projects/ibd-ai/ai-1.png",
      3: "/images/projects/ibd-ai/ai-2.png",
      4: "/images/projects/ibd-ai/ai-3.png",
      5: "/images/projects/ibd-ai/ai-4.png",
      6: "/images/projects/ibd-ai/ai-5.png",
      7: "/images/projects/ibd-ai/ai-6.png",
      8: "/images/projects/ibd-ai/ai-7.png",
    }
  }
]

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
          translateX: "-700vw",
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
            // markers: true
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
            // markers: true
          },
        }
      );
    })

    // Disable Horizontal scroll on Mobile
    // https://gsap.com/community/forums/topic/29235-horizontal-and-vertical-scroll/
  }, []);


  return (
    <div className="project_hori_plx_wrapper">
      <div ref={triggerRef}>
      {siteInfo.map((eachItem, index) => (
            <div key={index} className={`project_name_link ${montserrat.className}`}>
              <h3>{eachItem.siteName}</h3>
              <a href={`${eachItem.siteLink}`}>Visit Site</a>
              <p>Close</p>
            </div>
          ))}
        <div className="project_hori_plx_container" ref={sectionRef}>

          {siteInfo.map((item, index) => (
            Object.keys(item.imgs).map((key) => (
              <section key={key} className={`all_sections section_${key}`}>
                <div className="img_container">
                  <Image
                    className="img"
                    src={item.imgs[key]}
                    alt={`Image ${key}`}
                    width={800}
                    height={800}
                    // placeholder="blur"
                    // sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                  />
                </div>
              </section>
            ))
          ))}
        </div>
      </div>
    </div>
  );
}