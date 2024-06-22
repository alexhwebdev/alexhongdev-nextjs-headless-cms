"use client";

import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import './page.scss';

const CursorComponent = () => {
  useGSAP(() => {
    // ----------------- CURSOR
    // https://codepen.io/carriecarries/pen/XWEOEZG
    // const cursorTag = document.querySelector(".cursor")
    const ball = document.querySelector(".cursor_inner_div") as HTMLElement;
    const text = document.querySelector(".cursor_inner_div span");
    // const cards = document.querySelectorAll(".card[data-hover]")
    const cursorTargets = document.querySelectorAll(".cursor_target[data-hover]");
    
    let currentX = 0;
    let currentY = 0;
    let animX = 0;
    let animY = 0;
    let speed = 0.2;
    
    const animate=function(){
      currentX += (animX - currentX) * speed;
      currentY += (animY - currentY) * speed;
      ball.style.left = currentX + "px";
      ball.style.top = currentY + "px";
      requestAnimationFrame(animate);
    }
    animate();
    
    window.addEventListener("mousemove", (e)=>{
      animX = e.pageX;
      animY = e.pageY;
    })

    cursorTargets.forEach( target => {
      target.addEventListener("mouseover",() => {
        if (text) {
          text.innerHTML = target.getAttribute("data-hover") || "";
        }
        gsap.to(ball, {height: "80px", width: "80px", duration: .4});
        gsap.to(text, {opacity: 1, duration: .2});
      })
      target.addEventListener("mouseleave", () => {
        gsap.to(ball, {height: "10px", width: "10px", duration: .4});
        // gsap.to(text, {opacity: 0, duration: 0.2}, '<');
        gsap.to(text, {opacity: 0, duration: 0.2});
      })
    })
  }, [])

  return (
    <div className="projectsPageWrapper">
      <div className="cursor_inner_div">
        <span>see more</span>
      </div>
    </div>
  )
}

export default CursorComponent;