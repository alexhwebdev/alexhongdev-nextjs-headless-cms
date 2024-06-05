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

const projects = [
  { 
    company: "Dow Jones - Investor's Business Daily",
    date: "Jun 2020 - current",
    location: "Los Angeles, California",
    position: "Frontend / Wordpress Developer",
    tech: "React, GatsbyJS, NextJS, Wordpress",
    src: "ibd-blue2.svg",
    color: ""
  },
  { 
    company: "MGA Entertainment",
    date: "Dec 2017 - Jul 2019",
    location: "Van Nuys, California",
    position: "Frontend Developer",
    tech: "React, AngularJS, EmberJS",
    src: "mga.png",
    color: ""
  },
  { company: "Webpromo",
    date: "Feb 2016 - Dec 2017",
    location: "Los Angeles, California",
    position: "Frontend / Wordpress Developer",
    tech: "AngularJS, Wordpress",
    src: "webpromo.png",
    color: ""
  },
  { 
    company: "Thunderbolt Studios",
    date: "Mar 2015 - Dec 2015",
    location: "Beverly, California",
    position: "Front End Developer",
    tech: "AngularJS, SailsJS",
    src: "thunderbolt.png",
    color: ""
  },
  { 
    company: "GPS / Charta Global",
    date: "Sep 2013 - Jan 2015",
    location: "Anaheim, California",
    position: "SAP WM Engineer",
    tech: "SAP WMS",
    src: "chartaglobal.png",
    color: "back"
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
  const [modal, setModal] = useState(
    {active: false, index: 0}
  )

  return (
    <div id="worksSectionID" className="worksSectionContainer">
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
          projects.map((work, index) => {
            return (
              <Project 
                index={index} 
                setModal={setModal} 
                key={index}
                work={work}
              />
            )
          })
        }
      </div>
      <Modal modal={modal} projects={projects} />

      <div className="scrollContainer text2">
        <div className="transitionLeft">Experience&nbsp;&nbsp; Experience&nbsp;&nbsp; Experience&nbsp;&nbsp; Experience&nbsp;&nbsp; Experience&nbsp;&nbsp; Experience&nbsp;&nbsp;</div>
        <div className="transitionLeft">Experience&nbsp;&nbsp; Experience&nbsp;&nbsp; Experience&nbsp;&nbsp; Experience&nbsp;&nbsp; Experience&nbsp;&nbsp; Experience&nbsp;&nbsp;</div>
      </div>
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