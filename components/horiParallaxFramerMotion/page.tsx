"use client";

import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './page.module.scss';
import Image from 'next/image';

const slider1 = [
  {
    color: "#e3e5e7",
    src: "c2.jpg"
  },
  {
    color: "#d6d7dc",
    src: "decimal.jpg"
  },
  {
    color: "#e3e3e3",
    src: "funny.jpg"
  },
  {
    color: "#21242b",
    src: "google.jpg"
  }
]

const slider2 = [
  {
    color: "#d4e3ec",
    src: "maven.jpg"
  },
  {
    color: "#e5e0e1",
    src: "panda.jpg"
  },
  {
    color: "#d7d4cf",
    src: "powell.jpg"
  },
  {
    color: "#e1dad6",
    src: "wix.jpg"
  }
]

export default function HoriParallaxFramerMotion() {
  const imgcontainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imgcontainer,
    offset: ["start end", "end start"]
  })

  // const x1 = useTransform(scrollYProgress, [0, 1], [0, 150])
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -500])
  // const height = useTransform(scrollYProgress, [0, 3.9], [50, 0])

  return (
    <div 
      // ref={imgcontainer}
      className={styles.slidingImages}
    >
      <motion.div 
        ref={imgcontainer} 
        style={{x: x2}} 
        className={styles.slider}
      >
        {
          slider2.map( (project, index) => {
            return (
              <div className={styles.project} 
                style={{backgroundColor: project.color}} 
                key={index}
              >
                <div key={index} className={styles.imageContainer}>
                  <Image 
                  fill={true}
                  alt={"image"}
                  src={`/images/horiParallax/${project.src}`}/>
                </div>
              </div>
            )
          })
        }
      </motion.div>
      {/* <motion.div style={{x: x1}} className={styles.slider}>
        {
          slider1.map( (project, index) => {
            return (
              <div className={styles.project}
                style={{backgroundColor: project.color}}
                key={index} 
              >
                <div className={styles.imageContainer}>
                  <Image 
                  fill={true}
                  alt={"image"}
                  src={`/images/horiParallax/${project.src}`}/>
                </div>
              </div>              
            )
          })
        }
      </motion.div> */}
    </div>
  )
}

