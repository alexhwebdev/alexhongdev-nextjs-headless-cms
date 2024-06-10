"use client";

import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { inter } from '@/app/fonts';
import { montserrat } from '@/app/fonts';
import { raleway } from '@/app/fonts';
// import styles from './page.module.css';

import './page.scss';
// import './page.scss';
import ProjectsAniFadeUpJS from './components/ProjectsAniFadeUpJS/page';
import ProjectsScrollTextGradient from './components/scrollTextGradient/page';
import ParallaxScrollTextAndImg from '@/components/parallaxScrollTextAndImg/page';
// import HoverMixBlend from './components/hoverMixBlend/page';



interface ProjectProps {
  index: number;
}

// const ProjectsPage: React.FC<ProjectProps> = () => {
  const ProjectsPage = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // const pin = 
    gsap.fromTo(
      ".animateLeftToRightOnScroll",
      {
        opacity: 0,
        translateX: '-300px',
      },
      {
        duration: 1,
        opacity: 1,
        translateX: '0px',
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".animateLeftToRightOnScroll",
          // start: "100%+=2000 50%", // start, scroller-start
          // end: "100%+=2000 10%",   // end, scroller-end
          scrub: 0.6,
          // pin: true,
          // markers: true
        },
      }
    );
    // return () => {
    //   {/* A return function for killing the animation on component unmount */ }
    //   pin.kill();
    // };
  }, [])

  return (
    <div className="projectsPageWrapper">
      {/* <ProjectsAniFadeUpJS>
        Projects
      </ProjectsAniFadeUpJS> */}

      <ProjectsAniFadeUpJS />

      <div 
        // className="animateLeftToRightOnScroll line"
        className=" line"
      ></div>

      <div className="titleSection">
        <h5 className={`${montserrat.className}`}>Dow Jones</h5>
        <h3 className={`${montserrat.className}`}>Investors Business Daily</h3>
        <div className="titleSectionLine"></div>
      </div>

      {/* <div className="">
        <ProjectsScrollTextGradient />
      </div> */}
      <div className="parallaxTextImgContainer">
        <ParallaxScrollTextAndImg />
        <ParallaxScrollTextAndImg />
      </div>

    </div>
  )
}

export default ProjectsPage;