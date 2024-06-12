import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { raleway } from '@/app/fonts';
import styles from './page.module.css';

interface ProjectProps {
  index: number;
  setModal: React.Dispatch<React.SetStateAction<{ active: boolean; index: number }>>;
  work: {
    company: string;
    date: string;
    location: string;
    position: string;
    tech: string;
    src: string;
    color: string;
  };
}

const Project: React.FC<ProjectProps> = (
  {index, setModal, work}
) => {

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // const pin = 
    gsap.fromTo(
      ".transitionRight",
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
          trigger: ".transitionRight",
          start: "100%+=1300 50%", // start, scroller-start
          end: "100%+=1300 10%",   // end, scroller-end
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
      // className="companiesInnerContainer"
      className={`${styles.project} companiesInnerContainer`}
      onMouseEnter={() => {
        setModal({active: true, index})}
      } 
      onMouseLeave={() => {
        setModal({active: false, index})}
      } 
    >
      <div className={`companies ${raleway.className}`} 
        // ref={testingRef}
        // setModal={setModal} 
      >
        <h5 className="transitionRight">{work.date}</h5>
        <h4 className="transitionRight">{work.company}</h4>
        <h5 className="transitionRight"><span>{work.location}</span></h5>                  
        <div className="workPosition">
          <h4 className="transitionRight">{work.position}</h4>
          <h5 className="transitionRight h5_tech">{work.tech}</h5>
        </div>
      </div>
      <div className="transitionRight line"></div>
    </div>
  )
}

export default Project;