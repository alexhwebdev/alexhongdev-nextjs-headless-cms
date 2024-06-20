"use client";

import React, { useLayoutEffect, useEffect, useRef, useState } from 'react';
import { gsap, Power1 } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from 'next/image';
import Lenis from 'lenis'
import { montserrat } from '@/app/fonts';
import { raleway } from '@/app/fonts';
import { inter } from '@/app/fonts';
import './page.scss';
import { motion } from 'framer-motion';
import Link from 'next/link';


const projectsList = [
  { 
    title: "Investor's Business Daily",
    description: "IBD provides financial news, analysis, and research data for investors...",
    imgSrc: "ibd.jpg",
    gifSrc: "ibd.gif",
  },
  { 
    title: "How to Invest in AI",
    description: "Artificial Intelligence, or AI, has the possibility to usher in...",
    imgSrc: "ibd-ai.jpg",
    gifSrc: "ibd-ai.gif",
  },
  { 
    title: "Elon Musk: The most ___ Man In The World",
    description: "By some estimates, SpaceX is the most valuable privately held company in the U.S....",
    imgSrc: "ibd-elon-musk.jpg",
    gifSrc: "ibd-elon-musk.gif",
  },
]


// const ProjectPlx = () => {
export default function ProjectPlx() {
  // TEXT SECTION
  useLayoutEffect( () => {
    gsap.utils
      .toArray<HTMLElement>("[data-module-parallax]")
      .forEach((section) => {
        const parallax = section.querySelector("[data-parallax]");

        gsap.fromTo(
          parallax,
          { y: 0 },
          {
            y: -100,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "10% 50%",
              end: "50%+=100 0%",
              scrub: true,
              // markers: true
            }
          }
        );
      });
  }, [])

  // IMAGE SECTION
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });
  
    function raf(time: number) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    
    let homeProjects = document.querySelectorAll('.project_section_wrapper')
    
    homeProjects.forEach(project => {
      gsap.to(project.querySelector('.img'), {
        yPercent: 35,
        ease: 'none',
        scrollTrigger: {
          trigger: project,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      })
    })
  }, []);


  return (
    <div className="projects_plx_wrapper">
      {
        projectsList.map((project, index) => {
          return (
            <div className="project_section_wrapper" 
              data-module-parallax
              key={index} 
            >
              <div 
                className={`project_title ${montserrat.className}`}
              >
                <p data-parallax>
                  { project.title }
                  {/* How to<br></br>Invest<br></br>in AI */}
                </p>
              </div>
              <div className={`
                project_desc ${montserrat.className}
                `}
              >
                <p>
                  { project.description }
                  {/* Artificial Intelligence, or AI, has the possibility to usher in... */}
                </p>
              </div>
              <div 
                className="project"
                // data-cursor="label" 
                // data-cursor-label="Buy me" 
              >

                {/* <a href="#"
                  className="cursor_target_overlay cursor_target"
                  data-hover="VIEW MORE"
                ></a> */}
                <Link 
                  href={`/testpage`}
                  className="cursor_target_overlay cursor_target"
                  data-hover="VIEW MORE"
                ></Link>

                <div className="project_image">
                  <Image 
                    className="img" 
                    src={`/images/projects/${project.imgSrc}`} 
                    // fill={true}
                    alt={"image"}
                    // placeholder="blur"
                    width={1000}
                    height={1000}
                    // sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                  />
                  <div className="mask"></div>
                </div>
                <div className="project_gif">
                  <Image 
                    className="gif" 
                    src={`/images/projects/${project.gifSrc}`} 
                    // fill={true}
                    alt={"gif"}
                    // placeholder="blur"
                    width={300}
                    height={250}
                    // sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>            
          )
        })
      }
    </div>
  )
}

// export default ProjectPlx;
// https://codepen.io/drummond-dev/pen/LYzzxrK
// Cursor : https://www.youtube.com/watch?v=pndIZhWHaTY






// <div className="project_section_wrapper">
//   <div 
//     className={`project_title ${montserrat.className}`}
//     ref={titleContainerRef}
//   >
//     <p
//       ref={titleRef}
//     >How to<br></br>Invest<br></br>in AI</p>
//   </div>
//   <div className={`project_desc ${montserrat.className}`}>
//     <p>Artificial Intelligence, or AI, has the possibility to usher in... </p>
//   </div>
//   <div className="project">
//     <div className="project_image">
//       <Image 
//         className="img" 
//         src={'/images/projects/ibd-ai.png'} 
//         // fill={true}
//         alt={"image"}
//         // placeholder="blur"
//         width={1000}
//         height={1000}
//         // sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
//       />
//       <div className="mask"></div>
//     </div>

//     <Image 
//         className="gif" 
//         src={'/images/projects/ibd-ai.gif'} 
//         // fill={true}
//         alt={"gif"}
//         // placeholder="blur"
//         width={300}
//         height={250}
//         // sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
//       />
//   </div>
// </div>




          {/* <video className={`video`}
            // ref={ vidRef }
            controls 
            style={{width: '300px'}}
            // autoPlay={true}
            loop
          >
            <source 
              src={'/images/projects/ibd-ai.mp4'} 
              type="video/mp4" 
            />
          </video> */}