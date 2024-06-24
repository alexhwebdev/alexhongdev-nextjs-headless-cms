"use client";
import React, { useRef } from "react";
import Image from 'next/image';
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { usePathname } from 'next/navigation';
import ProjectsScrollZoomPlx from "../ProjectsScrollZoomPlx/ProjectsScrollZoomPlx";

// import { raleway } from '../../../fonts';
// import { montserrat } from '../../../fonts';
// import { inter } from '../../../fonts';
// import styles from './page.module.css';
import './page.css';
import ProjectHoriSection from "../ProjectHoriSection/ProjectHoriSection";


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
}

export default function ProjectPageWrapper(
  { projectPageData }: 
  { projectPageData: ProjectPageWrapperProps[] }
) {
  // const triggerRef = useRef(null);
  // const sectionRef = useRef(null);


  // useGSAP(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   // -------------------- Delay page on load
  //   // https://gsap.com/community/forums/topic/35762-how-to-add-delay-first-page-load-only/
  //   let isStartup = true;
  //   window.addEventListener("load", () => {
  //     setTimeout(() => isStartup = false, 3000); // after 3 seconds, set isStartup to false
  //   });
  //   ScrollTrigger.batch(".fadeup-startup", {
  //     onEnter: elements => {
  //       gsap.from(elements, {
  //         autoAlpha: 0,
  //         // y: 60,
  //         // stagger: 0.2,
  //         delay: isStartup ? 1 : 0
  //       });
  //     },
  //     once: true
  //   });

  //   const deskTopSize = '(min-width: 1280px)';
  //   const tabletSize = '(max-width: 800px) and (min-width: 768px)';
  //   const mobileSize = '(min-width: 425px)';

  //   const mm = gsap.matchMedia();

  //   mm.add(deskTopSize, () => {
  //     const horiScroll = gsap.fromTo(
  //       sectionRef.current,
  //       // sections,
  //       {
  //         translateX: 0,
  //       },
  //       {
  //         translateX: "-600vw",
  //         // translateX: `-${imgCount - 1}00vw`,
  //         ease: "none",
  //         duration: 1,
  //         normalizeScroll: true,
  //         scrollTrigger: {
  //           trigger: triggerRef.current,
  //           start: "top top",
  //           end: "3000 top",    // This allows horizontal scroll
  //           // start: "100%+=2000 50%", // start, scroller-start
  //           // end: "100%+=2000 10%",   // end, scroller-end
  //           scrub: 0.6,
  //           pin: true,
  //           // markers: true
  //         },
  //       }
  //     );
  //     return () => {
  //       {/* A return function for killing the animation on component unmount */ }
  //       horiScroll.kill();
  //     };
  //   })

  //   mm.add(tabletSize, () => {
  //     const mobileHoriScroll = gsap.fromTo(
  //       sectionRef.current,
  //       {
  //         translateY: 0,
  //       },
  //       {
  //         translateY: "-200vh",
  //         ease: "none",
  //         duration: 1,
  //         normalizeScroll: true,
  //         scrollTrigger: {
  //           trigger: triggerRef.current,
  //           start: "top top",
  //           end: "3000 top",    // This allows horizontal scroll
  //           // start: "100%+=2000 50%", // start, scroller-start
  //           // end: "100%+=2000 10%",   // end, scroller-end
  //           scrub: 0.6,  // Dont use on mobile
  //           pin: true,
  //           // markers: true
  //         },
  //       }
  //     );
  //     return () => {
  //       {/* A return function for killing the animation on component unmount */ }
  //       mobileHoriScroll.kill();
  //     };
  //   })

  //   // Disable Horizontal scroll on Mobile
  //   // https://gsap.com/community/forums/topic/29235-horizontal-and-vertical-scroll/
  // }, []);

  const pathname = usePathname();
  // console.log('pathname :', pathname)

  const matchedProjectObj = projectPageData.find(
    item =>
      // console.log('item.slug', `/allProjects/${item.slug}`.toString())
      `/allProjects/${item.slug}`.toString() === pathname
  );
  // console.log(
  //   'AAAmatchedProjectObj ', 
  //   // matchedProjectObj
  //   // matchedProjectObj.pageImagesCollection
  //   matchedProjectObj.pageImagesCollection.items.length
  // );

  // Handle case where no matching project is found
  if (!matchedProjectObj) {
    return <div>Loading... matchedProjectObj</div>;
  }

  // const matchedImageJson = matchedProjectObj?.imageJson;
  // console.log('matchedImageJson ', matchedImageJson);
  // if (!Array.isArray(matchedImageJson)) {
  //   return <div>Loading... matchedImageJson</div>; // Handle case where imageJson is not an array
  // }




  return (
    <div className="project_hori_plx_wrapper fadeup-startup">
      <ProjectsScrollZoomPlx 
        matchedProjectObj={matchedProjectObj}
      />

      <ProjectHoriSection
        matchedProjectObj={matchedProjectObj}
      />
    </div>
  );
}
