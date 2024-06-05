"use client";

import React, { useEffect } from 'react'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import './page.css';

import { TextPlugin } from 'gsap/TextPlugin'; // Import the TextPlugin


const WhatIDo = () => {

  useGSAP(() => {
    gsap.registerPlugin(TextPlugin);

    const words = [
      "JavaScript Dev.", 
      "React", 
      "NextJS", 
      "GatsbyJS", 
      "Wordpress Dev.",
      "Headless CMS", 
    ];
    let cursor = gsap.to('.cursor', {opacity: 0, ease: "power2.inOut", repeat:- 1});
    let boxTL = gsap.timeline();
    
    boxTL.to('.box', {
      duration: 1, 
      width: "400px", 
      delay: 0.5, 
      ease: "power4.inOut"
    })
      .from('.whatIDo', {
        duration: 1, 
        y:"7vw", 
        ease: "power3.out", 
        onComplete: () => {
          // console.log("timeline completed")
          masterTL.play()
        }
      })
      // .to('.box', {
      //   duration: 1, 
      //   height: "9vw", 
      //   ease: "elastic.out"
      // })
      // .to('.box', {
      //   duration: 2, 
      //   autoAlpha: 0.5, 
      //   yoyo: true, 
      //   repeat: -1, 
      //   ease: "rough({ template: none.out, strength: 1, points: 20, taper: 'none', randomize: true, clamp: false})"
      // })
    
    let masterTL = gsap.timeline({repeat: -1}).pause()
    
    words.forEach(word => {
      let tl = gsap.timeline({repeat: 1, yoyo: true, delay: 0})
      tl.to('.text', {duration: 1, text: word})
      masterTL.add(tl)
    })
  }, []);

  return (
    <div className="whatIDoContainer">
      {/* <span className="box"></span>
      <span className="whatIDo">
        What I do :
      </span> */}
      {/* <span className="text"></span>
      <span className="cursor">_</span> */}
    </div>
  )
}

export default WhatIDo;