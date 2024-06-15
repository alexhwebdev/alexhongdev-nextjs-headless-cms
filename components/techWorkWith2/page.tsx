"use client";

import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import './page.css';

// import { TextPlugin } from 'gsap/TextPlugin'; // Import the TextPlugin
// import TechWorkWithList from '../techWorkWithList/page';

import { raleway } from '@/app/fonts';
import { montserrat } from '@/app/fonts';
import { inter } from '@/app/fonts';

const TechWorkWith2 = () => {
  const techWorkWithRef = useRef(null);

  useGSAP(() => {
    // gsap.registerPlugin(TextPlugin);

    //CSS TEXT REVEALING ANIMATION
    const tl = gsap.timeline({ 
      duration: 0, // Time before animation starts. Its not duration.
      ease: "back",
      scrollTrigger: {
        trigger: techWorkWithRef.current,
        // start: "0% 0%",
        start: "100%+=2000 50%", // start, scroller-start
        end: "100%+=2000 10%",   // end, scroller-end
        // markers: true
      }
    })
    const allLinks = gsap.utils.toArray("p a")
    const lineOne = document.querySelector(".one")
    const lineTwo = document.querySelector(".two")
    const lineThree = document.querySelector(".three")
    const lineFour = document.querySelector(".four")
    const lineFive = document.querySelector(".five")
    const lineSix = document.querySelector(".six")
    const lineSeven = document.querySelector(".seven")
    const lineEight = document.querySelector(".eight")
    const lineNine = document.querySelector(".nine")
    const lineTen = document.querySelector(".ten")
    const lineEleven = document.querySelector(".eleven")

    gsap.set([
      lineOne, lineThree, lineFive, lineSeven, lineNine, lineEleven
    ], { xPercent: -25, autoAlpha: 0 }) // -->
    
    gsap.set([
      lineTwo, lineFour, lineSix, lineEight, lineTen
    ], { xPercent: 25, autoAlpha: 0 }) 

    gsap.set(allLinks, { y: -500, autoAlpha: 0, scale: 1.5, 
      rotationX: 15
    })


    // gsap.set(lineTwo, { xPercent: 101, autoAlpha: 0 }) 
    // gsap.set(lineFour, { xPercent: 101, autoAlpha: 0 })
    // gsap.set(lineSix, { xPercent: 101, autoAlpha: 0 }) 
    // gsap.set(lineEight, { xPercent: 101, autoAlpha: 0 }) 
    // gsap.set(lineTen, { xPercent: 101, autoAlpha: 0 }) 
    // gsap.set(allLinks, { y: -100, autoAlpha: 0, scale: 1.5, rotationX: 45 })

    tl
      // .to(lineOne, { xPercent: 0, autoAlpha: 1 }) // -->
      // .to(lineTwo, { xPercent: 0, autoAlpha: 1 }, "-=.1") // <--
      // .to(lineThree, { xPercent: 0, autoAlpha: 1 }, "-=.15" ) // -->
      
      .to(lineOne, { xPercent: 0, autoAlpha: 1, duration: 0.2 }) // -->
      .to(lineTwo, { xPercent: 0, autoAlpha: 1, duration: 0.2 }) // <--
      .to(lineThree, { xPercent: 0, autoAlpha: 1, duration: 0.2 }) // -->
      
      .to(lineFour, { xPercent: 0, autoAlpha: 1, duration: 0.2 })
      .to(lineFive, { xPercent: 0, autoAlpha: 1, duration: 0.2 })
      .to(lineSix, { xPercent: 0, autoAlpha: 1, duration: 0.2 })
      
      .to(lineSeven, { xPercent: 0, autoAlpha: 1, duration: 0.2 })
      .to(lineEight, { xPercent: 0, autoAlpha: 1, duration: 0.2 })
      .to(lineNine, { xPercent: 0, autoAlpha: 1, duration: 0.2 })
      
      .to(lineTen, { xPercent: 0, autoAlpha: 1, duration: 0.2 })
      .to(lineEleven, { xPercent: 0, autoAlpha: 1, duration: 0.2 })
      .to(allLinks, { y: 0, autoAlpha: 1, scale: 1,  stagger: 0.1, rotationX: 0 })
  }, []);

  return (
    <div className="techWorkWithContainer"
      ref={techWorkWithRef}
    >
      <div className="techAndLangContainer">
        {/* <div 
          className={`techLangLeftContainer ${montserrat.className}`}
        >
          <p style={{paddingBottom: '10px'}}>Languages</p>
          <p style={{paddingBottom: '10px'}}>Frameworks & Environments</p>
          <p style={{paddingBottom: '41px'}}>Libraries & Build Tools</p>
          <p style={{paddingBottom: '12px'}}>Platforms & Softwares</p>
          <p style={{paddingBottom: '12px'}}>CMS</p>
          <p style={{paddingBottom: '38px'}}>Other Tools</p>
          <p style={{paddingBottom: '10px'}}>Other Skills</p>
        </div> */}
        
        <div 
          // className="techLangRightContainer"
          className={`techLangRightContainer ${raleway.className}`}
        >



          <ul>
            <li>
              <h4 className={`${montserrat.className}`}>
              [ 01 ]&nbsp;&nbsp;Languages
              </h4>
              <p className="one" style={{paddingBottom: '10px'}}>
                <a href="#">HTML,&nbsp;</a> 
                {/* <span>/&nbsp;</span> */}
                <a href="#">CSS,&nbsp;</a> 
                {/* <span>/&nbsp;</span> */}
                <a href="#">JavaScript,&nbsp;</a> 
                {/* <span>/&nbsp;</span> */}
                <a href="#">TypeScript,&nbsp;</a> 
                <span>PHP, SQL&nbsp;</span>
              </p>
              {/* <h4 className={`number ${montserrat.className}`}>
                [ 01 ]
              </h4> */}
            </li>
            <li>
              <h4 className={`${montserrat.className}`}>
              [ 02 ]&nbsp;&nbsp;Frameworks & Environments
              </h4>
              <p className="two" style={{paddingBottom: '30px'}}>
                <a href="#">React,&nbsp;</a> 
                <span>GatsbyJS,&nbsp;</span>
                <a href="#">NextJS,&nbsp;</a>
                <span>AngularJS, Ember, Express, SailsJS, Node</span>
              </p>
              {/* <h4 className={`number ${montserrat.className}`}>
                [ 02 ]
              </h4> */}
            </li>
            <li>
              <h4 className={`${montserrat.className}`}>
                [ 03 ]&nbsp;&nbsp;Libraries & Build Tools
              </h4>
              <div>
                <p className="three">
                  <a href="#">GraphQL,&nbsp;</a>
                  <span>Redux, React Router, Webpack, jQuery,&nbsp;</span>
                  <a href="#">GreenSock,&nbsp;</a>
                  <span>React-Spring, React-Slick,&nbsp;</span>
                  <a href="#">React Animated,&nbsp;</a>
                  <span>Styled-Components,&nbsp;</span>
                  <a href="#">Sass,&nbsp;</a>
                  <a href="#">Framer Motion,&nbsp;</a>
                  <span>Less, Gulp, Grunt, Git, Jenkins</span>
                </p>
                {/* <h4 className={`number ${montserrat.className}`}>
                [ 03 ]
                </h4> */}
              </div>
              {/* <div>
                <p className="four">
                  <span>React-Spring, React-Slick,&nbsp;</span>
                  <a href="#">React Animated,&nbsp;</a>
                  <span>Styled-Components,&nbsp;</span>
                  <a href="#">Sass,&nbsp;</a>
                </p>
              </div> */}
              {/* <div>
                <p className="five" style={{paddingBottom: '10px'}}>
                  <a href="#">Framer Motion&nbsp;</a>
                  <span>Less, Gulp, Grunt, Git, Jenkins</span>
                </p>
              </div> */}
            </li>
            <li>
              <h4 className={`${montserrat.className}`}>
                [ 04 ]&nbsp;&nbsp;Platforms & Softwares
              </h4>
              <p className="six">
                <span>Netlify,&nbsp;</span>
                <a href="#">Vercel,&nbsp;</a>
                <span>Shopify, Elementor, JIRA - Bitbucket, Firebase, MongoDB, MySQL Workbench, Heroku,&nbsp;</span>
                <a href="#">Github&nbsp;</a>
              </p>
              {/* <h4 className={`number ${montserrat.className}`}>
                [ 04 ]
              </h4> */}
            </li>
            <li>
              <h4 className={`${montserrat.className}`}>
                [ 05 ]&nbsp;&nbsp;CMS
              </h4>
              <p className="eight" style={{paddingBottom: '10px'}}>
                <a href="#">Contentful,&nbsp;</a>
                <span>Strapi, Wordpress, Sanity</span>
              </p>
              {/* <h4 className={`number ${montserrat.className}`}>
                [ 05 ]
              </h4> */}
            </li>
            <li>
              <h4 className={`${montserrat.className}`}>
              [ 06 ]&nbsp;&nbsp;OTHER TOOLS
              </h4>
              <p className="nine">
                <span>Docker,&nbsp;</span>
                <a href="#">Figma,&nbsp;</a>
                <span>Photoshop, Illustrator, Salesforce, Adobe Target, Trello, Asana, FullStory</span>
              </p>
              {/* <h4 className={`number ${montserrat.className}`}>
                [ 06 ]
              </h4> */}
            </li>
            <li>
              <h4 className={`${montserrat.className}`}>
                [ 07 ]&nbsp;&nbsp;OTHER SKILLS
              </h4>
              <p className="eleven">
                <span>Ruby - Ruby on Rails, Python, Visual Basic</span>
              </p> 
              {/* <h4 className={`number ${montserrat.className}`}>
                [ 07 ]
              </h4> */}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TechWorkWith2;