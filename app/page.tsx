'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { raleway } from '@/app/fonts';

export default function Home() {
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
    <main className={styles.main}>

      <Image 
        className={styles.backgroundImage}
        src="/images/background.jpg"
        fill={true}
        alt="background"
      />

      <div className={styles.sliderContainer}>
        <div ref={slider} className={`${styles.slider} ${raleway.className}`}>
          <p ref={firstText}>JAVASCRIPT DEVELOPER -</p>
          <p ref={secondText}>JAVASCRIPT DEVELOPER -</p>
        </div>
      </div>
    </main>
  )
}




/*
'use client';
// import styles from './page.module.scss'
import { useState } from 'react';
import Header from '../components/header';
import Menu from '../components/menu';
// import CenteredPixelTransition from '../components/pixelTransition/centered';
import HorizontalPixelTransition from '../components/pixelTransition/horizontal';
// import VerticalPixelTransition from '../components/pixelTransition/vertical';


export default function Home() {
  const [menuIsActive, setMenuIsActive] = useState<boolean>(false);
  return (
    <main 
      // className={styles.main}
    >
      <Header 
        menuIsActive={menuIsActive} 
        setMenuIsActive={setMenuIsActive}
      />
      
      <Menu menuIsActive={menuIsActive}/>
      
      // <CenteredPixelTransition menuIsActive={menuIsActive}/>
      // <HorizontalPixelTransition menuIsActive={menuIsActive}/>
      // <VerticalPixelTransition menuIsActive={menuIsActive}/>
    </main>
  )
}
*/