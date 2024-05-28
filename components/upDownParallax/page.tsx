'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './page.module.scss'
import Image from 'next/image';
// import Lenis from '@studio-freight/lenis'
import Lenis from 'lenis'
import { useTransform, useScroll, motion, MotionValue } from 'framer-motion';


interface ImageProps {
  images: string[];
  y: string | number | MotionValue<number>;
}

const images = [ "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg" ]

const Column = ({images, y}: ImageProps) => {
  return (
    <motion.div 
      className={styles.column}
      style={{y}}
    >
      { images.map( (src, i) => {
          return (
            <div key={i} className={styles.imageContainer}>
              <Image 
                src={`/images/updownparallax/${src}`} 
                alt='image' 
                fill 
                sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
              />
            </div>
          )
        })
      }
    </motion.div>
  )
}

export default function UpDownParallax() {
  
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({width:0, height:0});

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start'] // [start of container and end of window, stop tracking end of container and start of window]
  })
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

  useEffect( () => {
    const lenis = new Lenis()
    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const resize = () => {
      setDimension({
        width: window.innerWidth, 
        height: window.innerHeight
      })
    }
    window.addEventListener("resize", resize)
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    }
  }, [])

  return (
    <div className={styles.upDownParallaxWrapper}>
      <div className={styles.spacer}></div>

      <div ref={gallery} 
        className={styles.gallery}
      >
        <Column images={[images[0], images[1], images[2]]} y={y}/>
        <Column images={[images[3], images[4], images[5]]} y={y2}/>
        <Column images={[images[6], images[7], images[8]]} y={y3}/>
        <Column images={[images[9], images[10], images[11]]} y={y4}/>
      </div>
      
      <div className={styles.spacer}></div>
    </div>
  )
}




// import React, { ReactNode, useLayoutEffect, useRef } from 'react'
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';
// import styles from './style.module.css';

// interface Props {
//   children: ReactNode;
// }

// const phrases = [
//   "Los Flamencos National Reserve", 
//   "is a nature reserve located", 
//   "in the commune of San Pedro de Atacama", 
//   "The reserve covers a total area", 
//   "of 740 square kilometres (290 sq mi)"
// ]

// function AnimatedText({children}: Props) {
//   const text = useRef(null);

//   useGSAP( () => {
//     gsap.registerPlugin(ScrollTrigger);

//     gsap.from(text.current, {
//       duration: 5,
//       opacity: 0,
//       left: "-200px",
//       ease: "power3.Out",
//       scrollTrigger: {
//         trigger: text.current,
//         scrub: true,
//         start: "0px bottom",
//         end: "bottom+=400px bottom",
//         // markers: true
//       },
//     })
//   }, [])

//   return <p ref={text}>{children}</p>
// }

// export default function Index() {

//   return (
//     <div id="Trigger" className={styles.description} >
//       {
//         phrases.map( (phrase, index) => {
//           return (
//             <AnimatedText key={index}>
//               {phrase}
//             </AnimatedText>
//           )
//         })
//       }
//     </div>
//   )
// }