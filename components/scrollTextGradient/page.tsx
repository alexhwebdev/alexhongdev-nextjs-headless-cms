'use client';
import styles from './page.module.css'
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';


const sentence =
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.";

export default function ScrollTextGradient() {
  let refs = useRef<(HTMLSpanElement | null)[]>([]);
  const mainWrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    startAnimation();
  }, []);

  const startAnimation = () => {
    gsap.to(refs.current.filter(Boolean), {
      scrollTrigger: {
        trigger: mainWrapper.current,
        scrub: true,
        start: 'top',
        end: `+=${window.innerHeight / 2}`,
      },
      opacity: 1,
      ease: 'none',
      stagger: 0.1,
    });
  };

  const splitEachWords = (sentence: string) => {
    let body: JSX.Element[] = [];
    sentence.split(' ').forEach((eachWord, i) => {
      const letters = splitLetters(eachWord);
      body.push(<p key={eachWord + '_' + i}>{letters}</p>);
    });
    return body;
  };

  const splitLetters = (word: string) => {
    let letters: JSX.Element[] = [];
    word.split('').forEach((eachLetter, i) => {
      letters.push(
        <span
          key={eachLetter + '_' + i}
          ref={(el) => {
            if (el) refs.current.push(el);
          }}
        >
          {eachLetter}
        </span>
      );
    });
    return letters;
  };

  return (
    <div className={styles.scrollTextGradientWrapper}
      ref={mainWrapper}
    >
      <div className={styles.scrollTextGradientContainer}>
        {splitEachWords(sentence)}
      </div>
    </div>
  );
}

