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

interface Props {
  children: ReactNode;
}

const projects = [
  { 
    company: "Dow Jones - Investor's Business Daily",
    date: "Jun 2020 - current",
    location: "Los Angeles, California",
    position: "Frontend / Wordpress Developer",
    tech: "React, GatsbyJS, NextJS, Wordpress",
    src: "ibd-blue.svg",
  },
  { 
    company: "MGA Entertainment",
    date: "Dec 2017 - Jul 2019",
    location: "Van Nuys, California",
    position: "Frontend Developer",
    tech: "React, AngularJS, EmberJS",
    src: "mga.png",
  },
  { company: "Webpromo",
    date: "Feb 2016 - Dec 2017",
    location: "Los Angeles, California",
    position: "Frontend / Wordpress Developer",
    tech: "AngularJS, Wordpress",
    src: "webpromo.png",
  },
  { 
    company: "Thunderbolt Studios",
    date: "Mar 2015 - Dec 2015",
    location: "Beverly, California",
    position: "Front End Developer",
    tech: "AngularJS, SailsJS",
    src: "thunderbolt.png",
  },
  { 
    company: "GPS / Charta Global",
    date: "Sep 2013 - Jan 2015",
    location: "Anaheim, California",
    position: "SAP WM Engineer",
    tech: "SAP WMS",
    src: "chartaglobal.png",
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
  const testingRef = useRef(null);
  const [passVisibleWidth, setVisibleWidth] = useState(0);

  // useGSAP(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   // const pin = 
  //   gsap.fromTo(
  //     ".transitionRight",
  //     {
  //       opacity: 0,
  //       translateX: '-300px',
  //     },
  //     {
  //       duration: 1,
  //       opacity: 1,
  //       translateX: '0px',
  //       stagger: 0.2,
  //       scrollTrigger: {
  //         trigger: ".transitionRight",
  //         start: "100%+=1800 50%", // start, scroller-start
  //         end: "100%+=1800 10%",   // end, scroller-end
  //         scrub: 0.6,
  //         // pin: true,
  //         // markers: true
  //       },
  //     }
  //   );
  //   // return () => {
  //   //   {/* A return function for killing the animation on component unmount */ }
  //   //   pin.kill();
  //   // };
  // }, [])
  
  useEffect( () => {
    // var element = document.getElementById('testelement');  
    // document.addEventListener('mousemove', function(event) {
    //     var width = element.offsetWidth;
    //     console.log('Element Width:', width);
    // });

    // var windowWidth = window.innerWidth;
    // console.log('Window Width:', windowWidth);

    function getVisibleWidth(element) {
      var rect = element.getBoundingClientRect();
      var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
      var visibleWidth = Math.min(rect.right, viewportWidth) - Math.max(rect.left, 0);
      return visibleWidth;
    }
    
    function updateVisibleWidth() {
      var element = document.getElementById('testelement');
      var visibleWidth = getVisibleWidth(element);
      setVisibleWidth(visibleWidth);
      console.log('Element width:', visibleWidth);
    }

    // Initial calculation
    updateVisibleWidth();

    // Update visibleWidth when scrolling
    window.addEventListener('scroll', updateVisibleWidth);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', updateVisibleWidth);
    };

  }, [])

  // console.log('passVisibleWidth:', passVisibleWidth);

  return (
    <div id="testelement" className="worksSectionContainer">
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
      <Modal modal={modal} projects={projects} 
        passVisibleWidth={passVisibleWidth}
      />


{/* 
      <div className="companiesContainer">
        {
          projects.map((work, index) => {
            return (
              <div key={index} className="companiesInnerContainer">
                <div className={`companies ${raleway.className}`} 
                  // ref={testingRef}
                  // setModal={setModal} 
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
      </div> */}


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


