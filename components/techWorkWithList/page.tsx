'use client';
import styles from './page.module.css'
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

const techList = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.";

export default function TechWorkWithList() {

  let refs = useRef<(HTMLSpanElement | null)[]>([]);
  const bodyRef = useRef(null);
  const techWorkWithListContainer = useRef(null);

  useEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, [])

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: techWorkWithListContainer.current,
        scrub: true,
        // start: `top`,
        // end: `+=${window.innerHeight / 1.5}`,
        start: "100%+=1500 50%", // start, scroller-start
        end: "100%+=1500 10%",   // end, scroller-end
        // markers: true
      },
      opacity: 1,
      ease: "none",
      stagger: 0.1
    })
  }

  const splitWords = (techList: string) => {
    let wordRefs: JSX.Element[] = [];
    techList.split(" ").forEach( (word, i) => {
      const letters = splitLetters(word);
      wordRefs.push(<p key={word + "_" + i}>{letters}</p>)
    })
    return wordRefs
  }

  const splitLetters = (word:string) => {
    let letters: JSX.Element[] = [];
    word.split("").forEach( (letter, i) => {
      letters.push(<span key={letter + "_" + i} ref={el => {
        refs.current.push(el)
      }}>{letter}</span>)
    })
    return letters;
  }

  return (
    <div 
      ref={techWorkWithListContainer} 
      className={styles.techWorkWithListContainer}
    >
      <div 
        ref={bodyRef} 
        className={styles.techWorkWithListBody}
      >
        { splitWords(techList) }
      </div>
    </div>
  )
}
