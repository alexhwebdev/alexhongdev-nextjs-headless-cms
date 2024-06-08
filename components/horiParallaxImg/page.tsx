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


const whatIDoImgs = [
  { src: "floating_2.jpg" },
  // { src: "floating_2.jpg" },
  // { src: "floating_2.jpg" },
  // { src: "floating_2.jpg" },
]

const HoriParallaxImg = () => {
  const horiParallaxImgRef1 = useRef(null);
  const horiParallaxImgRef2 = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    // let sections = gsap.utils.toArray("panel");

    const pin = gsap.fromTo(
      horiParallaxImgRef1.current, 
      { translateX: 80 },
      {
        // xPercent: -100 * (horiParallaxImgRef1.current - 1),
        translateX: "-2vw",
        ease: "none",
        scrollTrigger: {
          trigger:  horiParallaxImgRef2.current,
          // pin: true,
          scrub: 0.1,
          //snap: directionalSnap(1 / (sections.length - 1)),

          // start: "bottom bottom",
          // end: "+=3000 bottom",      // This allows horizontal scroll

          start: "100%+=1800 50%", // start, scroller-start
          end: "100%+=1800 -20%",   // end, scroller-end

          markers: true
        }
      }
    );
  }, []);

  return (
    <div className={styles.horiImgParallaxContainer}
      ref={horiParallaxImgRef2} 
    >
      <section className={styles.boxContainer}
        ref={horiParallaxImgRef1} 
      >
        {
          whatIDoImgs.map((work, index) => {
            return (
              <div className={`${styles.box}`}
                key={index} 
              >
                <Image 
                  className={styles.laptop}
                  // fill={true}
                  alt={"image"}
                  src={`/images/floatingImgs/${work.src}`}
                  width={2500}
                  height={100}
                  // sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                />
              </div>
            )
          })
        }
      </section>
    </div>
  )
}

export default HoriParallaxImg;
