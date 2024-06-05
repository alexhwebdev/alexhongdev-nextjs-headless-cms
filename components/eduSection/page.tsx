"use client";

import React, { ReactNode, useEffect, useRef, useState } from 'react';
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
import Project from './project/page'
import Modal from './modal/page'

const educations = [
  { 
    school: "General Assembly",
    date: "11/2013",
    location: "Los Angeles, California",
    major: "Full Stack Development",
    degree: "Coding Bootcamp",
    src: "ga.png",
    color: ""
  },
  { 
    school: "University of Southern California",
    date: "07/2013",
    location: "Los Angeles, California",
    major: "SAP Specialization",
    degree: "SAP Licensing",
    src: "usc.png",
    color: ""
  },
  { 
    school: "University of California, Los Angeles",
    date: "07/2012",
    location: "Westwood, California",
    major: "Anthropology",
    degree: "Bachelor of Science",
    src: "ucla.png",
    color: ""
  },
]

// const WorksSection = () => {
export default function EduSection() {
  const [modal, setModal] = useState(
    {active: false, index: 0}
  )

  return (
    <div id="eduSectionID" className="eduSectionContainer">
      <div className="scrollContainer">
        <div className="scrollInnerContainer2">
          <div className="transitionLeft">Education&nbsp;&nbsp; <span>Education</span>&nbsp;&nbsp; Education&nbsp;&nbsp; <span>Education</span>&nbsp;&nbsp; Education&nbsp;&nbsp; <span>Education</span>&nbsp;&nbsp;</div>
          <div className="transitionLeft">Education&nbsp;&nbsp; <span>Education</span>&nbsp;&nbsp; Education&nbsp;&nbsp; <span>Education</span>&nbsp;&nbsp; Education&nbsp;&nbsp; <span>Education</span>&nbsp;&nbsp;</div>
        </div>
        <div className="scrollInnerContainer1">
          <div className="transitionRight">Education&nbsp;&nbsp; <span>Education</span>&nbsp;&nbsp; Education&nbsp;&nbsp; <span>Education</span>&nbsp;&nbsp; Education&nbsp;&nbsp; <span>Education</span>&nbsp;&nbsp;</div>
          <div className="transitionRight">Education&nbsp;&nbsp; <span>Education</span>&nbsp;&nbsp; Education&nbsp;&nbsp; <span>Education</span>&nbsp;&nbsp; Education&nbsp;&nbsp; <span>Education</span>&nbsp;&nbsp;</div>
        </div>
        <div className="scrollInnerContainer2">
          <div className="transitionLeft">Education&nbsp;&nbsp; <span>Education</span>&nbsp;&nbsp; Education&nbsp;&nbsp; <span>Education</span>&nbsp;&nbsp; Education&nbsp;&nbsp; <span>Education</span>&nbsp;&nbsp;</div>
          <div className="transitionLeft">Education&nbsp;&nbsp; <span>Education</span>&nbsp;&nbsp; Education&nbsp;&nbsp; <span>Education</span>&nbsp;&nbsp; Education&nbsp;&nbsp; <span>Education</span>&nbsp;&nbsp;</div>
        </div>
      </div>


      <div className={`titleContainer ${montserrat.className}`} >
        <h3>STUDY</h3>

        {/* <div className="resumeContainer">
          <a href="/public/HI_Alex_Hong_Resume.pdf" download>
            <p>Resume</p>
            <GrDocumentDownload className="resumeIcon" />          
          </a>
        </div> */}
      </div>

      <div className="edusContainer">
        {
          educations.map((education, index) => {
            return (
              <Project 
                index={index} 
                setModal={setModal} 
                key={index}
                education={education}
              />
            )
          })
        }
      </div>
      <Modal modal={modal} educations={educations} />
    </div>
  )
}

// export default WorksSection;
// https://codepen.io/briancedillo/pen/qBWmXoW






  // SAVE THIS CODE : passVisibleWidth
  // const [passVisibleWidth, setVisibleWidth] = useState(0);
  // useEffect( () => {
  //   function getVisibleWidth(element) {
  //     var rect = element.getBoundingClientRect();
  //     var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  //     var visibleWidth = Math.min(rect.right, viewportWidth) - Math.max(rect.left, 0);
  //     return visibleWidth;
  //   }
    
  //   function updateVisibleWidth() {
  //     var element = document.getElementById('worksSectionID');
  //     var visibleWidth = getVisibleWidth(element);
  //     setVisibleWidth(visibleWidth);
  //     console.log('Element width:', visibleWidth);
  //   }

  //   // Initial calculation
  //   updateVisibleWidth();

  //   // Update visibleWidth when scrolling
  //   window.addEventListener('scroll', updateVisibleWidth);

  //   // Cleanup
  //   return () => {
  //     window.removeEventListener('scroll', updateVisibleWidth);
  //   };

  // }, [])