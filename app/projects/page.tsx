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
import ProjectPlx from './components/ProjectsPlx/page';
import ProjectsTextGradient from './components/ProjectsTextGradient/page';
// import HoverMixBlend from './components/hoverMixBlend/page';



// interface ProjectProps {
//   index: number;
// }

// const ProjectsPage: React.FC<ProjectProps> = () => {
const ProjectsPage = () => {
  useGSAP(() => {
    // ----------------- CURSOR
    // https://codepen.io/carriecarries/pen/XWEOEZG
    // const cursorTag = document.querySelector(".cursor")
    const ball = document.querySelector(".cursor_inner_div") as HTMLElement;
    const text = document.querySelector(".cursor_inner_div span");
    // const cards = document.querySelectorAll(".card[data-hover]")
    const cursorTargets = document.querySelectorAll(".cursor_target[data-hover]");
    
    let currentX = 0;
    let currentY = 0;
    let animX = 0;
    let animY = 0;
    let speed = 0.2;
    
    const animate=function(){
      currentX += (animX - currentX) * speed;
      currentY += (animY - currentY) * speed;
      ball.style.left = currentX + "px";
      ball.style.top = currentY + "px";
      requestAnimationFrame(animate);
    }
    animate();
    
    window.addEventListener("mousemove", (e)=>{
      animX = e.pageX;
      animY = e.pageY;
    })

    cursorTargets.forEach( target => {
      target.addEventListener("mouseover",() => {
        if (text) {
          text.innerHTML = target.getAttribute("data-hover") || "";
        }
        gsap.to(ball, {height: "80px", width: "80px", duration: .4});
        gsap.to(text, {opacity: 1, duration: .2});
      })
      target.addEventListener("mouseleave", () => {
        gsap.to(ball, {height: "10px", width: "10px", duration: .4});
        // gsap.to(text, {opacity: 0, duration: 0.2}, '<');
        gsap.to(text, {opacity: 0, duration: 0.2});
      })
    })

    // ----------------- LINE ANIMATION
    // gsap.registerPlugin(ScrollTrigger);
    // 
    // const pin = 
    // gsap.fromTo(
    //   ".animateLeftToRightOnScroll",
    //   {
    //     opacity: 0,
    //     translateX: '-300px',
    //   },
    //   {
    //     duration: 1,
    //     opacity: 1,
    //     translateX: '0px',
    //     stagger: 0.2,
    //     scrollTrigger: {
    //       trigger: ".animateLeftToRightOnScroll",
    //       // start: "100%+=2000 50%", // start, scroller-start
    //       // end: "100%+=2000 10%",   // end, scroller-end
    //       scrub: 0.6,
    //       // pin: true,
    //       // markers: true
    //     },
    //   }
    // );
    // return () => {
    //   {/* A return function for killing the animation on component unmount */ }
    //   pin.kill();
    // };
  }, [])

  return (
    <div className="projectsPageWrapper">
      <div className="cursor_inner_div">
        <span>see more</span>
      </div>

      {/* <ProjectsAniFadeUpJS> Projects </ProjectsAniFadeUpJS> */}
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
      <ProjectsTextGradient />

      <ProjectPlx />

      {/* <div className="parallaxTextImgContainer">
        <ParallaxScrollTextAndImg />
        <ParallaxScrollTextAndImg />
      </div> */}

    </div>
  )
}

export default ProjectsPage;