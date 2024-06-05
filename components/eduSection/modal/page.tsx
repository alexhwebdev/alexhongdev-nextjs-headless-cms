"use client";

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './page.module.css';
import gsap from 'gsap';
// import { ProjectProps } from '../project/page';

interface ModalProps {
  modal: { active: boolean; index: number };
  educations: {
    school: string;
    date: string;
    location: string;
    major: string;
    degree: string;
    src: string;
    color: string;
  }[];
}

const modalVariants = {
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

export default function Modal({modal, educations}: ModalProps) {
  const { active, index } = modal;
  const modalContainer = useRef<HTMLDivElement>(null);

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

    var workSectionID = document.getElementById("eduSectionID");
    var initialElementWidth = workSectionID!.offsetWidth;

    workSectionID!.addEventListener('mousemove', (e) => {
      let { clientX, clientY } = e;
      let rect = workSectionID!.getBoundingClientRect();
      let xRelativeToElement = clientX - rect.left;
      xMoveContainer(xRelativeToElement)
      yMoveContainer(clientY)
    })
  }, [])

  return (
    <>  
      <motion.div 
        className={styles.modalContainer}
        ref={modalContainer} 
        variants={modalVariants} 
        initial="initial" 
        animate={active ? "enter" : "closed"} 
      >
        <div className={styles.modalSlider} 
          style={{top: index * -100 + "%"}}
        >
        {
          educations.map( (project, index) => {
            const { src, color } = project;

            return (
              <div className={styles.modal} 
                style={{backgroundColor: color}} 
                key={`modal_${index}`}
              >
                <Image 
                  src={`/images/schools/${src}`} 
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
