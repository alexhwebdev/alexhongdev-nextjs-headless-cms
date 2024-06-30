"use client";

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './page.module.css';
import gsap from 'gsap';
// import { ProjectProps } from '../project/page';

interface ModalProps {
  modal: { active: boolean; index: number };
  projects: {
    company: string;
    date: string;
    location: string;
    position: string;
    tech: string;
    src: string;
    siteUrl: string;
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

export default function Modal({modal, projects}: ModalProps) {
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

    var workSectionID = document.getElementById("worksSectionID");
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
          projects.map( (project, index) => {
            const { src } = project;

            return (
              <div className={styles.modal} 
                // style={{backgroundColor: color}} 
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
