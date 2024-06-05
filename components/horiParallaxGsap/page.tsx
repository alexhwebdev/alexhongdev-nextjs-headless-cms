// SECTION : Portfolio of Projects 
"use client";

// import { useRef } from 'react';
// import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './page.module.css';
// import './page.css';
import Image from 'next/image';
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from 'react';
import { montserrat } from '@/app/fonts';


const works = [
  { 
    company: "Dow Jones, Investor's Business Daily",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    src: "work1.png",
  },
  { 
    company: "MGA Entertainment",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    src: "work2.png",
  },
  { 
    company: "Webpromo",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    src: "work3.png",
  },
  { 
    company: "Thunderbolt Studios",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    src: "work3.png",
  },
]

export default function HoriParallaxGsap() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  // const boxRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    // let sections = gsap.utils.toArray("panel");

    const pin = gsap.fromTo(
      sectionRef.current, 
      { translateX: 1500 },
      {
        // xPercent: -100 * (sectionRef.current - 1),
        translateX: "-50vw",
        ease: "none",
        scrollTrigger: {
          trigger:  triggerRef.current,
          // pin: true,
          scrub: 0.1,
          //snap: directionalSnap(1 / (sections.length - 1)),
          start: "bottom bottom",
          end: "+=3000 bottom",      // This allows horizontal scroll
          // markers: true
        }
      }
    );
    // return () => {
    //   {/* A return function for killing the animation on component unmount */ }
    //   pin.kill();
    // };
  
    // gsap.set(".box-2", {y: 100});
    // ScrollTrigger.defaults({markers: {startColor: "red", endColor: "red"}});
    
    // gsap.to(
    //   boxRef.current, 
    //   {
    //     x: -120,
    //     backgroundColor: "#1e90ff",
    //     ease: "none",
    //     scrollTrigger: {
    //       trigger: boxRef.current,
    //       containerAnimation: scrollTween,
    //       start: "center 80%",
    //       end: "center 20%",
    //       scrub: true,
    //       id: "2"
    //     }
    //   }
    // );
  }, []);

  return (
    <div ref={triggerRef} className={styles.horiParallaxGsapContainer}>
      <section ref={sectionRef} className={styles.boxContainer}>

        {
          works.map((work, index) => {
            return (
              <div key={index} className={`${styles.box} ${montserrat.className}`}>
                <h5>{ work.company }</h5>
                <h3>
                  Paper
                </h3>
                <Image 
                  // fill={true}
                  alt={"image"}
                  src={`/images/${work.src}`}
                  width={300}
                  height={200}
                  // sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                />
                <p>{ work.description }</p>
              </div>
            )
          })
        }
      </section>
    </div>
  )
}

