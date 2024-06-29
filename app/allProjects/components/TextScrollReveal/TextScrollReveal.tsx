'use client';
import styles from './style.module.scss'
import { useRef, useEffect, JSX } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { companyInfoDescProps } from '../../page';

// const phrase = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.";

export default function TextScrollReveal({companyDesc}: companyInfoDescProps) {

  let refs = useRef<HTMLSpanElement[]>([]);
  const description = useRef(null);
  const container = useRef(null);

  useEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, [])

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        // start: "100%+=2000 50%", // start, scroller-start
        // end: "100%+=2000 10%",   // end, scroller-end
        start: "5% 50%",
        end: `+=${window.innerHeight / 1.5}`,
        // markers: true
      },
      opacity: 1,
      ease: "none",
      stagger: 0.1
    })
  }

  const splitWords = (companyDesc: string) => {
    let description: JSX.Element[] = [];

    companyDesc.split(" ").forEach( (word, i) => {
      const letters = splitLetters(word);
      description.push(<p key={word + "_" + i}>{letters}</p>)
    })
    console.log('description ', description)
    return description;
  }
  
  const splitLetters = (word: string) => {
    let letters: JSX.Element[] = [];
    word.split("").forEach( (letter, i) => {
      letters.push(
        <span 
          key={letter + "_" + i} 
          ref={(el: HTMLSpanElement | null) => {if (el) refs.current.push(el)}}
        >{letter}</span>)
    })
    return letters;
  }

  return (
    <main ref={container} className={styles.text_scroll_reveal_wrapper}>
      <div ref={description} className={styles.description}>
        {
          splitWords(companyDesc)
        }
      </div>
    </main>
  )
}
