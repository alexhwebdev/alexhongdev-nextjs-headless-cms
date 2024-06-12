"use client";

import React, { useLayoutEffect, useEffect, useRef } from 'react';
import { gsap, Power1 } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from 'next/image';
import Lenis from 'lenis'
import { montserrat } from '@/app/fonts';
import { raleway } from '@/app/fonts';
import { inter } from '@/app/fonts';
import './page.scss';

// const ProjectPlx = () => {
export default function ProjectPlx() {
  // const vidRef = useRef();
  // useEffect(() => { vidRef.current.play(); },[]);
  const title1 = useRef(null);
  const container = useRef(null);
  
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

  useLayoutEffect( () => {
    const context = gsap.context( () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "10% 50%",
          end: "50%+=100 0%",
          // start: "100%+=2000 50%", // start, scroller-start
          // end: "100%+=2000 10%",   // end, scroller-end
          scrub: true,
          markers: true,
        },
      })
      .to(title1.current, {y: -100}, 0)
    })
    return () => context.revert();
  }, [])

  return (

    <div className="home">
      <div className="project_section_wrapper">
        <div 
          className={`project_title ${montserrat.className}`}
          ref={container}
        >
          <p
            ref={title1}
          >How to<br></br>Invest<br></br>in AI</p>
        </div>
        <div className={`project_desc ${montserrat.className}`}>
          <p>Artificial Intelligence, or AI, has the possibility to usher in... </p>
        </div>
        <div className="project">
          <div className="project_image">
            <Image 
              className="img" 
              src={'/images/projects/ibd-ai.png'} 
              // fill={true}
              alt={"image"}
              // placeholder="blur"
              width={1000}
              height={1000}
              // sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
            />
            <div className="mask"></div>
          </div>

          <Image 
              className="gif" 
              src={'/images/projects/ibd-ai.gif'} 
              // fill={true}
              alt={"gif"}
              // placeholder="blur"
              width={300}
              height={250}
              // sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
            />

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
        </div>
      </div>

      

    </div>   


  )
}

// export default ProjectPlx;
// https://codepen.io/drummond-dev/pen/LYzzxrK