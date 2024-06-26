"use client";
import React, { useRef } from "react";
import Image from 'next/image';
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { usePathname } from 'next/navigation';
import { raleway } from '../../../fonts';
import { montserrat } from '../../../fonts';
import { inter } from '../../../fonts';

import styles from './page.module.scss'

export interface ProjectHoriSectionProps {
  matchedProjectObj: {
    projectName: string;
    slug: string;
    description: string;
    projectJson: {
      companyName: string;
      projectName: string;
      slug: string;
      description: string;
      siteUrl: string;
    }[];
    introImageJson: {
      url: string;
      title: string;
    }[];
    imageJson: {
      url: string;
      title: string;
    }[];
    pageImagesCollection: {
      items: {
        url: string;
        description: string;
        title: string;
      }[];
    };
  };
}

const ProjectHoriSection = (
  {matchedProjectObj}: ProjectHoriSectionProps
) => {
  const triggerRef = useRef(null);
  const sectionRef = useRef(null);


  const horiScrollImgs: { 
    url: string; 
    description: string; 
    title: string; 
  }[] = [];
  matchedProjectObj.pageImagesCollection.items.map((eachImg) => {
    if (eachImg.description === "horiScroll") {
      horiScrollImgs.push(eachImg);
    }
  })

  let imgCount = 0;
  matchedProjectObj.pageImagesCollection.items.map((eachImg) => {
    if (eachImg.description === "horiScroll") {
      imgCount += 1;
    }
  })
  // console.log('imgCount ', imgCount)

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // -------------------- Delay page on load
    // https://gsap.com/community/forums/topic/35762-how-to-add-delay-first-page-load-only/
    let isStartup = true;
    window.addEventListener("load", () => {
      setTimeout(() => isStartup = false, 3000); // after 3 seconds, set isStartup to false
    });
    ScrollTrigger.batch(".fadeup-startup", {
      onEnter: elements => {
        gsap.from(elements, {
          autoAlpha: 0,
          // y: 60,
          // stagger: 0.2,
          delay: isStartup ? 1 : 0
        });
      },
      once: true
    });

    const deskTopSize = '(min-width: 1280px)';
    const tabletSize = '(max-width: 800px) and (min-width: 768px)';
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
          // translateX: "-600vw",
          translateX: `-${imgCount - 1}00vw`,
          ease: "none",
          duration: 1,
          normalizeScroll: true,
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
      const mobileHoriScroll = gsap.fromTo(
        sectionRef.current,
        {
          translateY: 0,
        },
        {
          translateY: "-200vh",
          ease: "none",
          duration: 1,
          normalizeScroll: true,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "3000 top",    // This allows horizontal scroll
            // start: "100%+=2000 50%", // start, scroller-start
            // end: "100%+=2000 10%",   // end, scroller-end
            scrub: 0.6,  // Dont use on mobile
            pin: true,
            // markers: true
          },
        }
      );
      return () => {
        {/* A return function for killing the animation on component unmount */ }
        mobileHoriScroll.kill();
      };
    })

    // Disable Horizontal scroll on Mobile
    // https://gsap.com/community/forums/topic/29235-horizontal-and-vertical-scroll/
  }, []);

  return (
    <div className={styles.project_hori_section_wrapper} ref={triggerRef}>
      <div className={`project_name_link ${montserrat.className}`}>
        <h3>{matchedProjectObj!.projectName}</h3>

        <div className="btns_link_close">
          <Link href={`${matchedProjectObj.projectJson[0].siteUrl}`} target="_blank">
            Visit Site
          </Link>
          <span></span>
          <p>Close</p>
        </div>
      </div>

      <div className="project_hori_plx_container" ref={sectionRef}>
        {horiScrollImgs.map((item, index) => (
          <div key={index} className={`all_sections section_${index}`}>
            <div className="img_container">
              <Image
                className="img"
                src={item.url}
                alt={`Image`}
                width={800}
                height={800}
                // placeholder="blur"
                // sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};
export default ProjectHoriSection;