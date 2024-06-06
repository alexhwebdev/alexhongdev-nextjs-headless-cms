"use client";

import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import './page.css';

// import { TextPlugin } from 'gsap/TextPlugin'; // Import the TextPlugin
import TechWorkWithList from '../techWorkWithList/page';

import { raleway } from '@/app/fonts';
import { montserrat } from '@/app/fonts';
import { inter } from '@/app/fonts';

const TechWorkWith = () => {
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
        start: "100%+=2700 50%", // start, scroller-start
        end: "100%+=2700 10%",   // end, scroller-end
        markers: true
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
    ], { xPercent: -2, autoAlpha: 0 }) // -->
    
    gsap.set([
      lineTwo, lineFour, lineSix, lineEight, lineTen
    ], { xPercent: 2, autoAlpha: 0 }) 

    gsap.set(allLinks, { y: -100, autoAlpha: 0, scale: 1.5, 
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
      
      .to(lineOne, { xPercent: 0, autoAlpha: 1, duration: 0.15 }) // -->
      .to(lineTwo, { xPercent: 0, autoAlpha: 1, duration: 0.15 }) // <--
      .to(lineThree, { xPercent: 0, autoAlpha: 1, duration: 0.15 }) // -->
      
      .to(lineFour, { xPercent: 0, autoAlpha: 1, duration: 0.15 })
      .to(lineFive, { xPercent: 0, autoAlpha: 1, duration: 0.15 })
      .to(lineSix, { xPercent: 0, autoAlpha: 1, duration: 0.15 })
      
      .to(lineSeven, { xPercent: 0, autoAlpha: 1, duration: 0.15 })
      .to(lineEight, { xPercent: 0, autoAlpha: 1, duration: 0.15 })
      .to(lineNine, { xPercent: 0, autoAlpha: 1, duration: 0.15 })
      
      .to(lineTen, { xPercent: 0, autoAlpha: 1, duration: 0.15 })
      .to(lineEleven, { xPercent: 0, autoAlpha: 1, duration: 0.15 })
      .to(allLinks, { y: 0, autoAlpha: 1, scale: 1,  stagger: 0.1, rotationX: 0 })
  }, []);

  return (
    <div className="techWorkWithContainer"
      ref={techWorkWithRef}
    >
      <div className="techAndLangContainer">
        <div 
          className={`techLangLeftContainer ${montserrat.className}`}
        >
          <p style={{paddingBottom: '10px'}}>Languages</p>
          <p style={{paddingBottom: '10px'}}>Frameworks & Environments</p>
          <p style={{paddingBottom: '41px'}}>Libraries & Build Tools</p>
          <p style={{paddingBottom: '12px'}}>Platforms & Softwares</p>
          <p style={{paddingBottom: '12px'}}>CMS</p>
          <p style={{paddingBottom: '38px'}}>Other Tools</p>
          <p style={{paddingBottom: '10px'}}>Other Skills</p>
        </div>
        <div 
          // className="techLangRightContainer"
          className={`techLangRightContainer ${raleway.className}`}
        >
          <ul>
            <li>
              <h4 className={`${montserrat.className}`}>
                Languages
              </h4>
              <p className="one" style={{paddingBottom: '10px'}}>
                <a href="#">HTML&nbsp;</a> 
                <span>/&nbsp;</span>
                <a href="#">CSS&nbsp;</a> 
                <span>/&nbsp;</span>
                <a href="#">JavaScript&nbsp;</a> 
                <span>/&nbsp;</span>
                <a href="#">TypeScript&nbsp;</a> 
                <span>/ PHP / SQL&nbsp;</span>
              </p>
            </li>
            <li>
              <h4 className={`${montserrat.className}`}>
                Frameworks & Environments
              </h4>
              <p className="two" style={{paddingBottom: '30px'}}>
                <a href="#">React&nbsp;</a> 
                <span>/ GatsbyJS /&nbsp;</span>
                <a href="#">NextJS&nbsp;</a>
                <span>/ AngularJS / Ember / Express / SailsJS / Node</span>
              </p>
            </li>
            <li>
              <h4 className={`${montserrat.className}`}>
                Libraries & Build Tools
              </h4>
              <div>
                <p className="three">
                  <a href="#">GraphQL&nbsp;</a>
                  <span>/ Redux / Redux-Saga / React Router / Webpack / jQuery /&nbsp;</span>
                  <a href="#">GreenSock&nbsp;</a>
                </p>                
              </div>
              <div>
                <p className="four">
                  <span>React-Spring / React-Slick /&nbsp;</span>
                  <a href="#">React Animated / Sass&nbsp;</a>
                  <span>/ Styled-Components</span>
                </p>
              </div>
              <div>
                <p className="five" style={{paddingBottom: '10px'}}>
                  <a href="#">Framer Motion&nbsp;</a>
                  <span>/ Less / Gulp / Grunt / Git / Jenkins</span>
                </p>
              </div>
            </li>
            <li>
              <h4 className={`${montserrat.className}`}>
                Platforms & Softwares
              </h4>
              <p className="six">
                <span>Netlify /&nbsp;</span>
                <a href="#">Vercel&nbsp;</a>
                <span>/ Shopify / Elementor / JIRA - Bitbucket /&nbsp;</span>
                <a href="#">Github&nbsp;</a>
              </p>
              <p className="seven" style={{paddingBottom: '10px'}}>
                <span>Firebase / MongoDB / MySQL Workbench / Heroku</span>
              </p>
            </li>
            <li>
              <h4 className={`${montserrat.className}`}>
                CMS
              </h4>
              <p className="eight" style={{paddingBottom: '10px'}}>
                <a href="#">Contentful&nbsp;</a>
                <span>/ Strapi / Wordpress / Sanity</span>
              </p>
            </li>
            <li>
              <h4 className={`${montserrat.className}`}>
                OTHER TOOLS
              </h4>
              <p className="nine">
                <span>Docker /&nbsp;</span>
                <a href="#">Figma&nbsp;</a>
                <span>/ Photoshop / Illustrator / Salesforce</span>
              </p>
              <p className="ten" style={{paddingBottom: '10px'}}>
                <span>Adobe Target / Trello / Asana / FullStory</span>
              </p>
            </li>
            <li>
              <h4 className={`${montserrat.className}`}>
                OTHER SKILLS
              </h4>
              <p className="eleven">
                <span>Ruby - Ruby on Rails / Python / Visual Basic</span>
              </p> 
            </li>
          </ul>


{/* 
          <p className="one" style={{paddingBottom: '10px'}}>
            <span>HTML / CSS /&nbsp;</span>
            <a href="#">JavaScript / TypeScript&nbsp;</a> 
            <span>/ PHP / SQL&nbsp;</span>
          </p>
          <p className="two" style={{paddingBottom: '10px'}}>
            <a href="#">React / GatsbyJS / NextJS&nbsp;</a>
            <span>/ AngularJS / Ember / Express / SailsJS / Node</span>
          </p>
          <p className="three">
            <a href="#">GraphQL&nbsp;</a>
            <span>/ Redux / Redux-Saga / React Router / Webpack / jQuery /&nbsp;</span>
            <a href="#">GreenSock&nbsp;</a>
          </p>
          <p className="four">
            <span>React-Spring / React-Slick /&nbsp;</span>
            <a href="#">React Animated / Sass&nbsp;</a>
            <span>/ Styled-Components</span>
          </p>
          <p className="five" style={{paddingBottom: '10px'}}>
            <a href="#">Framer Motion&nbsp;</a>
            <span>/ Less / Gulp / Grunt / Git / Jenkins</span>
          </p>

          <p className="six">
            <span>Netlify /&nbsp;</span>
            <a href="#">Vercel&nbsp;</a>
            <span>/ Shopify / Elementor / JIRA - Bitbucket /&nbsp;</span>
            <a href="#">Github&nbsp;</a>
          </p>
          <p className="seven" style={{paddingBottom: '10px'}}>
            <span>Firebase / MongoDB / MySQL Workbench / Heroku</span>
          </p>

          <p className="eight" style={{paddingBottom: '10px'}}>
            <a href="#">Contentful&nbsp;</a>
            <span>/ Strapi / Wordpress / Sanity</span>
          </p>

          <p className="nine">
            <span>Docker /&nbsp;</span>
            <a href="#">Figma&nbsp;</a>
            <span>/ Photoshop / Illustrator / Salesforce</span>
          </p>
          <p className="ten" style={{paddingBottom: '10px'}}>
            <span>Adobe Target / Trello / Asana / FullStory</span>
          </p>

          <p className="eleven">
            <span>Ruby - Ruby on Rails / Python / Visual Basic</span>
          </p> 
*/}
        </div>
      </div>
    </div>
  )
}

export default TechWorkWith;