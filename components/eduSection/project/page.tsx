import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { raleway } from '@/app/fonts';
import styles from './page.module.css';

interface ProjectProps {
  index: number;
  setModal: React.Dispatch<React.SetStateAction<{ active: boolean; index: number }>>;
  education: {
    school: string;
    date: string;
    location: string;
    major: string;
    degree: string;
    src: string;
    color: string;
  };
}

const Project: React.FC<ProjectProps> = (
  {index, setModal, education}
) => {

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // const pin = 
    gsap.fromTo(
      ".animateSchoolsRight",
      {
        opacity: 0,
        translateX: '-300px',
      },
      {
        duration: 1,
        opacity: 1,
        translateX: '0px',
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".animateSchoolsRight",
          start: "100%+=1400 50%", // start, scroller-start
          end: "100%+=1400 10%",   // end, scroller-end
          scrub: 0.6,
          // pin: true,
          // markers: true
        },
      }
    );
    // return () => {
    //   {/* A return function for killing the animation on component unmount */ }
    //   pin.kill();
    // };
  }, [])

  return (
    <div key={index} 
      className={`${styles.project} edusInnerContainer`}
      onMouseEnter={() => {
        setModal({active: true, index})}
      } 
      onMouseLeave={() => {
        setModal({active: false, index})}
      } 
    >
      <div className={`schools ${raleway.className}`} 
        // ref={testingRef}
        // setModal={setModal} 
      >
        <h5 className="animateSchoolsRight">{education.date}</h5>
        <h4 className="animateSchoolsRight">{education.school}</h4>
        <h5 className="animateSchoolsRight"><span>{education.location}</span></h5>                  
        <div className="majorDegreeContaine">
          <h4 className="animateSchoolsRight">{education.major}</h4>
          <h5 className="animateSchoolsRight">{education.degree}</h5>
        </div>
      </div>
      <div className="animateSchoolsRight line"></div>
    </div>
  )
}

export default Project;