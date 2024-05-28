'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { raleway } from '@/app/fonts';
import './page.module.css';


export default function InfiniteScroll() {
  const slider = useRef(null);
  const firstText = useRef(null);
  const secondText = useRef(null);
  
  let xPercent = 0;
  let direction = -1;

  useEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: event => direction = event.direction * -1
      },
      x: "-500px",
    })
    requestAnimationFrame(animate);
  }, [])

  const animate = () => {
    if(xPercent < -100){
      xPercent = 0;
    }
    else if(xPercent > 0){
      xPercent = -100;
    }
    gsap.set(firstText.current, {xPercent: xPercent})
    gsap.set(secondText.current, {xPercent: xPercent})
    xPercent += 0.04 * direction;
    requestAnimationFrame(animate);
  }

  return (
    <div className={styles.infiniteScrollWrapper}>
      <div style={{width: '100%', position: 'relative'}}>
        <Image 
          className={styles.backgroundImage}
          src="/images/background.jpg"
          fill={true}
          alt="background"
          priority
        />

        <div className={styles.sliderContainer}>
          <div ref={slider} className={`${styles.slider} ${raleway.className}`}>
            <p ref={firstText}>JavaScript Developer -</p>
            <p ref={secondText}>JavaScript Developer -</p>
          </div>
        </div>        
      </div>
    </div>
  )
}