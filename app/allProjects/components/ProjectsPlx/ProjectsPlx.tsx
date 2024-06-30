"use client";

import React, { useLayoutEffect, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { gsap, Power1 } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion } from 'framer-motion';
import Lenis from 'lenis'

import { montserrat } from '../../../../app/fonts';
import { raleway } from '../../../../app/fonts';
import { inter } from '../../../../app/fonts';
import './page.scss';


interface companyProjectsProps {
  slug: string;
  gifUrl: string;
  siteUrl: string;
  bkgdImgUrl: string;
  description: string;
  projectName: string;
}

// const ProjectPlx = () => {
export default function ProjectPlx(
  { companyProjects }: 
  { companyProjects: companyProjectsProps[] }
) {
  // console.log('companyProjects ', companyProjects)

  const mobileSize = '(max-width: 568px) and (min-width: 375px)';
  const mm = gsap.matchMedia();


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
            normalizeScroll: true,
            scrollTrigger: {
              trigger: section,
              start: "10% 50%",
              end: "50%+=100 0%",
              // start: "10% 50%",
              // end: "50% 0%",
              scrub: true,
              // markers: true
            }
          }
        );
      });
      mm.add(mobileSize, () => {
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
                normalizeScroll: true,
                scrollTrigger: {
                  trigger: section,
                  start: "10% 50%",
                  end: "50%+=100 0%",
                  // start: "10% 50%",
                  // end: "50% 0%",
                  scrub: true,
                  // markers: true
                }
              }
            );
          });
      })
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
      gsap.to(project.querySelector('.projectImg'), {
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
        companyProjects.map((project, index) => {
          return (
            <div className="project_section_wrapper" 
              data-module-parallax
              key={index + "_1"} 
            >
              <div 
                className={`project_title ${montserrat.className}`}
              >
                <p data-parallax>
                  { project.projectName }
                  {/* How to<br></br>Invest<br></br>in AI */}
                </p>
              </div>
              <div className={`project_desc ${montserrat.className}`}>
                <p>
                  { project.description }
                  {/* Artificial Intelligence, or AI, has the possibility to usher in... */}
                </p>
              </div>
              <div 
                className="project"
                // data-cursor="label" data-cursor-label="Buy me" 
              >

                {/* <a href="#"
                  className="cursor_target_overlay cursor_target"
                  data-hover="VIEW MORE"
                ></a> */}
                <Link 
                  href={`/allProjects/${project.slug}`}
                  className="cursor_target_overlay cursor_target"
                  data-hover="VIEW MORE"
                ></Link>

                <div className="project_image">
                  <Image 
                    className="projectImg" 
                    src={`${project.bkgdImgUrl}`} 
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
                    src={`${project.gifUrl}`} 
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
          );
        })
      }
    </div>
  );
};

// export default ProjectPlx;
// https://codepen.io/drummond-dev/pen/LYzzxrK
// Cursor : https://www.youtube.com/watch?v=pndIZhWHaTY


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