"use client";
import React, { useRef } from "react";
import Image from 'next/image';
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { usePathname } from 'next/navigation';
import ProjectsScrollZoomPlx from "../projectsScrollZoomPlx/ProjectsScrollZoomPlx";

import { raleway } from '../../../fonts';
import { montserrat } from '../../../fonts';
import { inter } from '../../../fonts';
// import styles from './page.module.css'
import './page.css'



interface SiteInfo {
  siteCompany: string;
  siteName: string;
  siteLink: string;
  imgs: {
    [key: string]: string; // Assuming keys are numeric strings
  };
}

const siteInfo: SiteInfo[] = [
  { 
    siteCompany: "Investor's Business Daily",
    siteName: "How to Invest in AI",
    siteLink: 'https://investors.com/',
    imgs: {
      // 1: "/images/projects/ibd-ai/ai-0.png",
      // 2: "/images/projects/ibd-ai/ai-1.png",
      // 3: "/images/projects/ibd-ai/ai-2.png",
      // 4: "/images/projects/ibd-ai/ai-3.png",
      // 5: "/images/projects/ibd-ai/ai-4.png",
      // 6: "/images/projects/ibd-ai/ai-5.png",
      // 7: "/images/projects/ibd-ai/ai-6.png",
      // 8: "/images/projects/ibd-ai/ai-7.png",

      1: "/images/projects/ibd-ai/ai-1.png",
      2: "/images/projects/ibd-ai/ai-2.png",
      3: "/images/projects/ibd-ai/ai-3.png",
      4: "/images/projects/ibd-ai/ai-4.png",
      5: "/images/projects/ibd-ai/ai-5.png",
      6: "/images/projects/ibd-ai/ai-6.png",
      7: "/images/projects/ibd-ai/ai-7.png",
    }
  }
]

// interface ProjectJson {
//   siteUrl: string;
// }
// interface ImageJson {
//   url: string;
// }
// interface ProjectPageWrapperProps {
//   projectName: string;
//   slug: string;
//   description: string;
//   projectJson: ProjectJson;
//   imageJson: ImageJson;
// }
interface ProjectPageWrapperProps {
  // matchedProjectObj: {
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
  // };
}

export default function ProjectPageWrapper(
  { projectPageData }: 
  { projectPageData: ProjectPageWrapperProps[] }
) {
  const triggerRef = useRef(null);
  const sectionRef = useRef(null);
  
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
          translateX: "-600vw",
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

  const pathname = usePathname();
  // console.log('pathname :', pathname)

  const matchedProjectObj = projectPageData.find(
    item =>
      // console.log('item.slug', `/allProjects/${item.slug}`.toString())
      `/allProjects/${item.slug}`.toString() === pathname
  );
  console.log('matchedProjectObj ', matchedProjectObj);
  // console.log('matchedProjectObj ', matchedProjectObj.projectJson[0].siteUrl);

  // Handle case where no matching project is found
  if (!matchedProjectObj) {
    return <div>Loading...</div>;
  }

  const matchedImageJson = matchedProjectObj?.imageJson;
  if (!Array.isArray(matchedImageJson)) {
    return <div>Loading...</div>; // Handle case where imageJson is not an array
  }

  return (
    <div className="project_hori_plx_wrapper fadeup-startup">
      <ProjectsScrollZoomPlx 
        matchedProjectObj={matchedProjectObj}
        // siteInfoCompany={siteInfo[0].siteCompany}
        // siteInfoLink={siteInfo[0].siteLink}
      />

      <div ref={triggerRef}>
        {/* {siteInfo.map((eachItem, index) => (
          <div key={index} className={`project_name_link ${montserrat.className}`}>
            <h3>{eachItem.siteName}</h3>

            <div className="btns_link_close">
              <a href={`${eachItem.siteLink}`} target="_blank">Visit Site</a>
              <span></span>
              <p>Close</p>
            </div>
          </div>
        ))} */}

        <div className={`project_name_link ${montserrat.className}`}>
          <h3>{matchedProjectObj!.projectName}</h3>

          <div className="btns_link_close">
            {/* <a href={`${matchedProjectObj.projectJson.siteUrl}`} target="_blank">Visit Site</a> */}
            <Link href={`${matchedProjectObj.projectJson[0].siteUrl}`} target="_blank">
              Visit Site
            </Link>
            <span></span>
            <p>Close</p>
          </div>
        </div>

        <div className="project_hori_plx_container" ref={sectionRef}>
          {matchedImageJson.map((item, index) => (

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
          {/* {siteInfo.map((item, index) => (
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
          ))} */}
        </div>
      </div>
    </div>
  );
}
