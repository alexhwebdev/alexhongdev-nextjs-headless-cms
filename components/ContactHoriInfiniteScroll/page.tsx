'use client';
import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { raleway } from '../../app/fonts';
import { GrFormClose } from "react-icons/gr";
import { RxEnvelopeClosed } from "react-icons/rx";

import styles from './page.module.css'
// import './page.module.css';


export default function ContactHoriInfiniteScroll() {
  const slider = useRef(null);
  const firstText = useRef(null);
  const secondText = useRef(null);
  
  let xPercent = 0;
  let direction = -1;
  
  // -------------------- INFINITE SCROLL
  // useEffect( () => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   gsap.to(slider.current, {
  //     scrollTrigger: {
  //       trigger: document.documentElement,
  //       scrub: 0.25,
  //       start: 0,
  //       end: window.innerHeight,
  //       onUpdate: event => direction = event.direction * -1
  //     },
  //     x: "-500px",
  //   })
  //   requestAnimationFrame(animate);
  // }, [])

  // const animate = () => {
  //   if(xPercent < -100){
  //     xPercent = 0;
  //   }
  //   else if(xPercent > 0){
  //     xPercent = -100;
  //   }
  //   gsap.set(firstText.current, {xPercent: xPercent})
  //   gsap.set(secondText.current, {xPercent: xPercent})
  //   xPercent += 0.02 * direction;   // Speed control
  //   requestAnimationFrame(animate);
  // }

  // -------------------- CONTACT CIRCLE
  useEffect(() => {
    function circularText( 
      className: string, 
      text: string, 
      radius: number, 
      range: number, 
      startPos: number, 
      css: string, 
      bottomCss: string 
    ) {
      const textArr = text.split("");
      const envelope_wrapper = document.querySelector('.envelope_wrapper') as HTMLElement;
      console.log('envelope_wrapper ', envelope_wrapper)
      const containerHeight = envelope_wrapper.clientHeight;
      const newElement = document.createElement("div");
          newElement.setAttribute('class', className);
    
      const deg = range / textArr.length;
        textArr.forEach(function(ch){
        ch = "<p style=\"height:" + radius + "px;" + css + "; transform:rotate(" + startPos + "deg);left:50%;top:" + (containerHeight/2- radius) + "px; position:absolute; transform-origin:0 100%\">" + "<span style=\"" + bottomCss + "\">" + ch + "</span>" + "</p>";
        newElement.innerHTML += ch;
        startPos += deg;
      });
      envelope_wrapper.appendChild(newElement);
    }
    
    // -------------------- TOP
    // text position (tightness of outer circle), centeredness, centeredness
    circularText(
      "text circTxt2",
      "CONTACT", 
      125, 170, -85, 
      'font-size: 20px; color: black;', ''
    );
    circularText(
      // "text circTxt1",
      `${styles.text} ${styles.circTxt1}`,
      "Send me a message!", 
      100, 175, -85, 
      'font-size: 16px; color: silver;', ''
    );

    // -------------------- BOTTOM
    // text position (tightness of outer circle), centeredness, centeredness
    circularText(
      "text circTxt2",
      "Send me a message!", 
      // 120, -95, -135, 
      100, -95, -135, 
      'font-size: 16px; color: black;',
      'transform : scaleY(-1) scaleX(-1); position:absolute;'
    );
    circularText(
      // "text circTxt1",
      `${styles.text} ${styles.circTxt1}`,
      "CONTACT", 
      125, -170, -120, 
      'font-size: 20px; color: silver;', 
      'transform : scaleY(-1) scaleX(-1); position:absolute'
    );
  })



  return (
    <div className={styles.infiniteScrollWrapper}>
      <div style={{width: '100%', position: 'relative'}}>
        {/* <Image 
          className={styles.backgroundImage}
          src="/images/background.jpg"
          fill={true}
          alt="background"
          priority
        /> */}

        <div className={styles.sliderContainer}>
          <div className={`${styles.slider} ${raleway.className}`}
            ref={slider}
          >
            {/* <p ref={firstText}>JavaScript Developer -</p>
            <p ref={secondText}>JavaScript Developer -</p> */}
            <p ref={firstText}>GET IN TOUCH&nbsp;<GrFormClose /> &nbsp;GET IN TOUCH&nbsp;<GrFormClose /></p>
            <p ref={secondText}>GET IN TOUCH&nbsp;<GrFormClose /> &nbsp;GET IN TOUCH&nbsp;<GrFormClose /></p>
          </div>
        </div>
      </div>


      <div className={`envelope_wrapper ${styles.envelope_wrapper}`}>
        <RxEnvelopeClosed />
      </div>



      <div className={`${styles.footerNav} ${raleway.className}`}>
        <Link href="/">Home</Link>
        <Link href="/">Projects</Link>
        <Link href="/">LinkedIn</Link>
      </div>
    </div>
  )
} 
// https://codepen.io/bianiel/pen/GeOyZe
// https://codepen.io/syohei-yamaki/pen/XWdQEOw