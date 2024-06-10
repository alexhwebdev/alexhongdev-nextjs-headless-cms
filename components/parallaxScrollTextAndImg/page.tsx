'use client'
import styles from './page.module.scss'
import Lenis from 'lenis'
import { useEffect } from 'react';
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
// import styles from '../../app/page.module.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Picture1 from '../../public/medias/1.jpg';
import Picture2 from '../../public/medias/2.jpg';
import Picture3 from '../../public/medias/3.jpg';
import { inter } from '@/app/fonts';
import { montserrat } from '@/app/fonts';
import { raleway } from '@/app/fonts';

gsap.registerPlugin(ScrollTrigger) 
const word = "with gsap";


export default function ParallaxScrollTextAndImg() {

  useEffect( () => {
    const lenis = new Lenis()
    
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
  }, [])

  const container = useRef(null);
  const images = [Picture1, Picture2, Picture3];
  const lettersRef = useRef([])
  const imagesRef = useRef([])
  const title1 = useRef(null);
  useLayoutEffect( () => {
    const context = gsap.context( () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "5% 70%",
          // end: "100% 10%",
          // start: "100%+=2000 50%", // start, scroller-start
          // end: "100%+=2000 10%",   // end, scroller-end
          scrub: true,
          // markers: true,
        },
      })
      .to(title1.current, {y: -50}, 0)
      .to(imagesRef.current[0], {y: -100}, 0)
      .to(imagesRef.current[1], {y: -150}, 0)
      .to(imagesRef.current[2], {y: -255}, 0)
      lettersRef.current.forEach((letter, i) => {
        tl.to(letter, {
          top: Math.floor(Math.random() * -75) - 25,
        }, 0)
      })
    })
    return () => context.revert();
  }, [])

  return (
    <div className={styles.plxScrollTextImg_Container}
    ref={container}
    >
      <div className={styles.h3_container}>
        <h3 className={`${montserrat.className}`}
          ref={title1}
        >IBD</h3>

        <h3 className={`${montserrat.className}`}>
          investors.com
        </h3>
        {/* <div className={styles.word}>
          <p>
            {
              word.split("").map((letter, i) => {
                return (
                  <span 
                    key={`l_${i}`} 
                    ref={
                      el => lettersRef.current[i] = el
                    }
                  >{letter}</span>
                )
              })
            }
          </p>
        </div> */}
      </div>
      <div className={styles.images}>
        {
          images.map( (image, i) => {
            return (
              <div className={styles.imageContainer}
                key={`i_${i}`} 
                ref={
                  el => imagesRef.current[i] = el
                }
              >
                <Image 
                  src={image}
                  placeholder="blur"
                  alt="image"
                  fill
                />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}