"use client";

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './page.module.css';
import gsap from 'gsap';


// const scaleAnimation = {
//   // initial: {scale: 0, x:"-100%", y:"-50%"},
//   initial: {
//     scale: 0, 
//     x:"-75%",
//     y:"-50%"
//   },
//   enter: {
//     scale: 1, 
//     // x:"-100%", 
//     x:"-75%", 
//     y:"-50%", 
//     transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}
//   },
//   closed: {
//     scale: 0, 
//     // x:"-100%", 
//     x:"-75%", 
//     y:"-50%", 
//     transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}
//   }
// }

export default function Modal({modal, projects, passVisibleWidth}) {
  const { active, index } = modal;
  const modalContainer = useRef(null);
  // console.log('*passVisibleWidth:', passVisibleWidth);

  const scaleAnimation = {
    // initial: {scale: 0, x:"-100%", y:"-50%"},
    initial: {
      scale: 0, 
      x:"0%",
      y:"-50%"
    },
    enter: {
      scale: 1, 
      // x:"-100%", 
      x:"0%", 
      y:"-50%", 
      transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}
    },
    closed: {
      scale: 0, 
      // x:"-100%", 
      x:"0%", 
      y:"-50%", 
      transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}
    }
  }

  useEffect( () => {
    let xMoveContainer = gsap.quickTo(
      modalContainer.current, 
      "left",
      {duration: 0.8, ease: "power3"}
    )
    let yMoveContainer = gsap.quickTo(
      modalContainer.current, 
      "top", 
      {duration: 0.8, ease: "power3"}
    )

    var targetElement = document.getElementById("testelement");
    var initialElementWidth = targetElement.offsetWidth;
    // console.log("initialElementWidth", initialElementWidth);

    let clientXOffset = 0;

    targetElement.addEventListener('mousemove', (e) => {
      let { clientX, clientY } = e;
      // console.log('-------------------------')
      // console.log('clientX ', clientX)
      // console.log('passVisibleWidth:', passVisibleWidth);
      // const adjustedWidth = initialElementWidth / passVisibleWidth;
      // console.log('adjustedWidth ', adjustedWidth)
      // const adjustedClientX = adjustedWidth * clientX;
      // console.log('adjustedClientX ', adjustedClientX)

      // xMoveContainer(Math.abs(viewportWidth - clientX))
      // xMoveContainer(adjustedClientX)

      let rect = targetElement.getBoundingClientRect();
      let xRelativeToElement = clientX - rect.left;

      xMoveContainer(xRelativeToElement)
      yMoveContainer(clientY)
    })
  }, [passVisibleWidth])

  return (
    <>  
      <motion.div 
        className={styles.modalContainer}
        ref={modalContainer} 
        variants={scaleAnimation} 
        initial="initial" 
        animate={active ? "enter" : "closed"} 
      >
        <div className={styles.modalSlider} 
          style={{top: index * -100 + "%"}}
        >
        {
          projects.map( (project, index) => {
            const { src, color } = project;

            return (
              <div className={styles.modal} 
                style={{backgroundColor: color}} 
                key={`modal_${index}`}
              >
                <Image 
                  src={`/images/company/${src}`} 
                  width={250} 
                  height={0} alt="image"/>
              </div>
            )
          })
        }
        </div>
      </motion.div>
    </>
  )
}
