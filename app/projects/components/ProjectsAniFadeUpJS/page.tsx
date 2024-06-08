import React, { useRef } from 'react'
import './page.css'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

interface ProjectsAniFadeUpProps {
  children: React.ReactNode;
}

const ProjectsAniFadeUpJS = ({children}: ProjectsAniFadeUpProps) => {
  const sectionCharRef = useRef(null);
  
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const splitText = (selector: string) => {
      const elem = document.querySelector(selector) as HTMLElement;
      if (!elem) return []

      const text = elem.innerText;
      const chars = text.split("");
      const charsContainer = document.createElement("div");
      const charsArray:HTMLDivElement[] = [];
    
      charsContainer.style.position = "relative";
      charsContainer.style.display = "inline-block";
    
      chars.forEach((char: string) => {
        const charContainer = document.createElement("div");
    
        charContainer.style.position = "relative";
        charContainer.style.display = "inline-block";
        charContainer.innerText = char;
        charsContainer.appendChild(charContainer);
    
        charsArray.push(charContainer);
      });
      // remove current text
      elem.innerHTML = "";
      // append new structure
      elem.appendChild(charsContainer);
    
      return charsArray;
    };
    
    const animate = function (text: string) {
      const chars = splitText(".portOfProjectsH2");
      return gsap.from(chars, {
        // duration: 0.2,
        duration: 1,
        ease: "back.out",
        y: 100,
        opacity: 0,
        // stagger: 0.1,
        stagger: 0.05,
        delay: 1,
        scrollTrigger: {
          trigger: sectionCharRef.current,
          // start: "30% 10%",
          // end: "100% 10%",
          // markers: true
        }
      });
    };
    
    animate(".portOfProjectsH2");
  }, []);

  return (
    <div className="projectsAniFadeUpWrapper">
      <div className="projectsAniFadeUpContainer">
        <h2 ref={sectionCharRef}  className="portOfProjectsH2">
          {children}
        </h2>
      </div>
    </div>
  )
}

export default ProjectsAniFadeUpJS