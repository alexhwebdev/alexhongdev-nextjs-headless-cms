"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// import { raleway } from '@/app/fonts';
import { montserrat } from '@/app/fonts';
import { inter } from '@/app/fonts';

import styles from './page.module.css'
import './page.css'



export default function ProjectHoriPlxTest() {
  const triggerRef = useRef(null);
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);



    document.addEventListener("DOMContentLoaded", () => {
      let scrollContainer = document.querySelector(".scrollContainer") as HTMLElement; // Type assertion
    
      if (scrollContainer) { // Check if scrollContainer is not null
        let sections = document.querySelectorAll(".section");
    
        gsap.matchMedia({
          "(min-width: 1080px)": () => {
            console.log("enter");
    
            let scrollTween = gsap.to(sections, {
              xPercent: -100 * (sections.length - 1),
              ease: "none",
              scrollTrigger: {
                trigger: scrollContainer,
                pin: true,
                scrub: 1,
                end: () => "+=" + scrollContainer.offsetWidth,
              }
            });
    
            if (scrollTween.scrollTrigger) { // Check if scrollTrigger is defined
              const trigger = scrollTween.scrollTrigger; // Type assertion
              var dragRatio =
                scrollContainer.offsetWidth / (window.innerWidth * (sections.length - 1));
              var drag = Draggable.create(".proxy", {
                trigger: scrollContainer,
                type: "x",
                onPress() {
                  this.startScroll = trigger.scroll();
                },
                onDrag() {
                  trigger.scroll(
                    this.startScroll - (this.x - this.startX) * dragRatio
                  );
                },
              })[0];
    
              return () => {
                scrollTween.kill();
                drag.kill();
                console.log("leave");
              }
            } else {
              console.error("Scroll trigger not found");
            }
          }
        });
      } else {
        console.error("Scroll container not found");
      }
    });
    
  





    // --------------- MOBILE / DESKTOP BLINKING CHANGE
    // let mm = gsap.matchMedia(),
    //     breakPoint = 800;
    
    // mm.add({
    //   // set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
    //   isDesktop: `(min-width: ${breakPoint}px) and (prefers-reduced-motion: no-preference)`,
    //   isMobile: `(max-width: ${breakPoint - 1}px) and (prefers-reduced-motion: no-preference)`
    // }, (context) => {
    //   if (context.conditions) { // Check if conditions are defined
    //     let { isDesktop, isMobile } = context.conditions,
    //         target = isDesktop ? ".desktop" : ".mobile",
    //         tl = gsap.timeline({
    //           scrollTrigger: {
    //             trigger: ".gray",
    //             scrub: 1,
    //             end: "200%",
    //             pin: true
    //           }
    //         });
    //     tl.to(target, {scale: 2, rotation: 360})
    //       .to(target, {scale: 1});
    
    //     // works for non-ScrollTrigger animations too: 
    //     gsap.to(target, {backgroundColor: "#2c7ad2", duration: 0.8, ease: "none", repeat: -1, yoyo: true});
    
    //     return () => { 
    //       // optionally return a cleanup function that will be called when the media query no longer matches
    //     }
    //   }
    // });
      











    // --------------- HORIZONTAL MINE
    // const pin = gsap.fromTo(
    //   sectionRef.current,
    //   {
    //     translateX: 0,
    //   },
    //   {
    //     translateX: "-600vw",
    //     ease: "none",
    //     duration: 1,
    //     scrollTrigger: {
    //       trigger: triggerRef.current,
    //       start: "top top",
    //       end: "3000 top",    // This allows horizontal scroll
    //       // start: "100%+=2000 50%", // start, scroller-start
    //       // end: "100%+=2000 10%",   // end, scroller-end
    //       scrub: 0.6,
    //       pin: true,
    //       markers: true
    //     },
    //   }
    // );
    // return () => {
    //   {/* A return function for killing the animation on component unmount */ }
    //   pin.kill();
    // };
  }, []);


  return (
    <div>
      <div className='scrollContainer'>
          <div className='section'>Horizontal/Vertical Scroll</div>
          <div className='section'></div>
          <div className='section'></div>
          <div className='section'></div>
      </div>
      <div className="proxy"></div>
    </div>



    // --------------- MOBILE / DESKTOP BLINKING CHANGE
    // <div>
    //   <header>
    //     <h1>gsap.matchMedia()</h1>
    //     <p className="lead">When the viewport is less than 800px, the Mobile &lt;div&gt; will animate. Otherwise, Desktop will.</p>
    //   </header>
    //   <section className="gray">
    //     <div className="mobile">Mobile</div>
    //     <div className="desktop">Desktop</div>
    //   </section>

    //   <section className="bottom lead">
    //     <p><strong>Pretty cool, right?</strong></p>
    //     <p>Resize your screen. 800px is the break point. Its all dynamic!</p>
    //     <p>Check out <a href="https://greensock.com">GSAP</a> today. </p>
    //   </section>
    // </div>


    // --------------- MINE
    // <section className={styles.project_hori_plx_wrapper}>
    //   {/* The section up act just as a wrapper. If the trigger (below) is the
    //   first jsx element in the component, you get an error on route change */}

    //   {/* The div below act just as a trigger. As the doc suggests, the trigger and 
    //   the animation should alway be two separated refs */}
    //   <div ref={triggerRef}>
    //     <div className={styles.project_hori_plx_container}
    //       ref={sectionRef}
    //     >
    //       <div className={`
    //         ${styles.section_one}
    //       `}>
    //         <h3>Section 1</h3>
    //       </div>

    //       <div className={`
    //         ${styles.section_two}
    //       `}>
    //         <h3>Section 2</h3>
    //       </div>

    //       <div className={`
    //         ${styles.section_three}
    //       `}>
    //         <h3>Section 3</h3>
    //       </div>

    //     </div>
    //   </div>
    // </section>
  );
}