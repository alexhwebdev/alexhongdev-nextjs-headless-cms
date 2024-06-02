"use client";

import React, { ReactNode, useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import styles from './page.module.scss';
import './page.scss';
import { raleway } from '@/app/fonts';
import { montserrat } from '@/app/fonts';
import { inter } from '@/app/fonts';
// import { vollkorn } from '@/app/fonts';
import { GrDocumentDownload } from "react-icons/gr";


interface Props {
  children: ReactNode;
}

const worksObj = [
  { 
    company: "Dow Jones - Investor's Business Daily",
    date: "Jun 2020 - current",
    location: "Los Angeles, California",
    position: "Frontend / Wordpress Developer",
    tech: "React, GatsbyJS, NextJS, Wordpress"
  },
  { 
    company: "MGA Entertainment",
    date: "Dec 2017 - Jul 2019",
    location: "Van Nuys, California",
    position: "Frontend Developer",
    tech: "React, AngularJS, EmberJS"
  },
  { company: "Webpromo",
    date: "Feb 2016 - Dec 2017",
    location: "Los Angeles, California",
    position: "Frontend / Wordpress Developer",
    tech: "AngularJS, Wordpress"
  },
  { 
    company: "Thunderbolt Studios",
    date: "Mar 2015 - Dec 2015",
    location: "Beverly, California",
    position: "Front End Developer",
    tech: "AngularJS, SailsJS"
  },
  { 
    company: "Global Paper Solutions",
    date: "Sep 2013 - Jan 2015",
    location: "Anaheim, California",
    position: "SAP WM Engineer",
    tech: "SAP WMS"
  },
  // { 
  //   company: "SAP - Korea",
  //   date: "June - Sep 2013",
  //   location: "Seoul, Korea",
  //   position: "SAP Engineer Intern"
  // },
]


// const WorksSection = () => {
export default function WorksSection() {
  const testingRef = useRef(null);

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
          start: "100%+=1800 50%", // start, scroller-start
          end: "100%+=1800 10%",   // end, scroller-end
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
    <div className="worksSectionContainer">
      <div className={`titleContainer ${montserrat.className}`} >
        <h3>Work</h3>

        <div className="resumeContainer">
          <a href="/public/HI_Alex_Hong_Resume.pdf" download>
            <p>Resume</p>
            <GrDocumentDownload className="resumeIcon" />          
          </a>
        </div>
      </div>

      <div className="companiesContainer">
        {
          worksObj.map((work, index) => {
            return (
              <div key={index} className="companiesInnerContainer">
                <div className={`companies ${raleway.className}`} 
                  // ref={testingRef}
                >
                  <h5 className="transitionRight">{work.date}</h5>
                  <h4 className="transitionRight">{work.company}</h4>
                  <h5 className="transitionRight"><span>{work.location}</span></h5>                  
                  <div className="workPosition">
                    <h4 className="transitionRight">{work.position}</h4>
                    <h5 className="transitionRight">{work.tech}</h5>
                  </div>
                </div>
                <div className="transitionRight line"></div>
              </div>
            )
          })
        }
      </div>


      <div className="scrollContainer text2">
        <div>Experience&nbsp;&nbsp; Experience&nbsp;&nbsp; Experience&nbsp;&nbsp; Experience&nbsp;&nbsp; Experience&nbsp;&nbsp; Experience&nbsp;&nbsp;</div>
        <div>Experience&nbsp;&nbsp; Experience&nbsp;&nbsp; Experience&nbsp;&nbsp; Experience&nbsp;&nbsp; Experience&nbsp;&nbsp; Experience&nbsp;&nbsp;</div>
      </div>




      {/* 
      <div className="scroll text1">
        <div>
              Special Offer!<span> Blah Blah Blah Blah! </span>Special Offer!<span> Blah Blah Blah Blah! Blah!</span>
        </div>
        <div>
              Special Offer!<span> Blah Blah Blah Blah! </span>Special Offer!<span>Blah Blah Blah Blah! Blah! </span>
        </div>
      </div> 
      */}
    </div>
  )
}

// export default WorksSection;
// https://codepen.io/briancedillo/pen/qBWmXoW


