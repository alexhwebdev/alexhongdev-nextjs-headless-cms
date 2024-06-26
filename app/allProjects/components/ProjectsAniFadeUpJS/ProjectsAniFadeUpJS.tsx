"use client";

import React, { useRef } from 'react'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import './page.css'
import { companyInfoTitleProps } from '../../page';

const ProjectsAniFadeUpJS = ({ companyInfoTitle }: companyInfoTitleProps) => {
  // const companyTitle = [...companyInfoTitle];
  const companyTitle = Array.from(companyInfoTitle);

  useGSAP(() => {
    const deskTopSize = '(max-width: 1280px) and (min-width: 569px)';
    const mobileSize = '(max-width: 568px) and (min-width: 375px)';
    // const mobileSize = '(min-width: 430px)';
    const mm = gsap.matchMedia();

    // mm.add(deskTopSize, () => {
      gsap.fromTo(".eachCharH2", {
        delay: 3,
        opacity: 0, 
        stagger: 0.5,
        yPercent: 100, 
      },{
        // rotationY: 36, 
        delay: 1,
        opacity: 1, 
        duration: 1, 
        yPercent: 0, 
        stagger: 0.05,
        // stagger: 0.5,
        ease:"back.out",
        normalizeScroll: true,
      })
    // })
  }, []);

  return (
    <div className="projectsAniFadeUpWrapper">
      <div className="projectsAniFadeUpContainer">
        {/* <h2 ref={sectionCharRef} className="portOfProjectsH2">
          <p className="text-anim">{companyTitle}</p>
        </h2> */}

        <div className="portOfProjectsH2">
          {companyInfoTitle.split('').map((char, index) => (
            <h2 key={index} className="eachCharH2">
              {char === ' ' ? <span>&nbsp;</span> : char}
            </h2>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectsAniFadeUpJS;
// https://codepen.io/chris-ain-the-bashful/pen/abNjgZE




















// const ProjectsAniFadeUpJS = (
//   // {children}: ProjectsAniFadeUpProps
//   { companyInfoTitle }
// ) => {
//   const companyTitle = companyInfoTitle.toString()
//   console.log('ProjectsAniFadeUpJS companyTitle ', companyTitle)

//   const sectionCharRef = useRef(null);
  
//   useGSAP(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const splitText = (selector: string) => {
//       const elem = document.querySelector(selector) as HTMLElement;
//       if (!elem) return []

//       const text = elem.innerText;
//       const chars = text.split("");
//       console.log('ProjectsAniFadeUpJS ----- chars ', chars)

//       const charsContainer = document.createElement("div");
//       const charsArray:HTMLDivElement[] = [];
    
//       charsContainer.style.position = "relative";
//       charsContainer.style.display = "inline-block";
    
//       chars.forEach((char: string) => {
//         const charContainer = document.createElement("div");
    
//         charContainer.style.position = "relative";
//         charContainer.style.display = "inline-block";
//         charContainer.innerText = char;
//         charsContainer.appendChild(charContainer);
    
//         charsArray.push(charContainer);
//       });
//       // remove current text
//       elem.innerHTML = "";
//       // append new structure
//       elem.appendChild(charsContainer);
    
//       return charsArray;
//     };
    
//     const animate = function (text: string) {
//       const chars = splitText(".portOfProjectsH2");
//       return gsap.from(chars, {
//         // duration: 0.2,
//         duration: 1,
//         ease: "back.out",
//         y: 100,
//         opacity: 0,
//         // stagger: 0.1,
//         stagger: 0.05,
//         delay: 1,
//         scrollTrigger: {
//           trigger: sectionCharRef.current,
//           // start: "30% 10%",
//           // end: "100% 10%",
//           // markers: true
//         }
//       });
//     };
    
//     animate(".portOfProjectsH2");
//   }, []);

//   return (
//     <div className="projectsAniFadeUpWrapper">
//       <div className="projectsAniFadeUpContainer">
//         <h2 ref={sectionCharRef} className="portOfProjectsH2">
//           {/* {children} */}
//           {companyTitle}
//         </h2>
//       </div>
//     </div>
//   )
// }

// export default ProjectsAniFadeUpJS;