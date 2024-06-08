'use client';
import styles from './page.module.css'
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';


// const sentence = "Investor's Business Daily is an American newspaper and website covering the stock market, international business, finance and economics. Founded in 1984 by William O'Neil as a print news publication, it is owned by News Corp and is headquartered in Los Angeles, California.";
const sentence = "Investor's Business Daily is an American newspaper and website covering the stock market, international business, finance and economics. Founded in 1984 by William O'Neil as a print news publication, it is owned by News Corp, headquartered in Los Angeles, California. IBD provides news and analysis on stocks, mutual funds, exchange-traded funds, commodities, and other financial instruments aimed at individual investors and financial professionals."

export default function ProjectsScrollTextGradient() {
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
        // start: 'top',
        // end: `+=${window.innerHeight / 2}`,
        // start: "100%+=2000 50%", // start, scroller-start
        // end: "100%+=2000 10%",   // end, scroller-end
        start: '100% 80%',
        end: '100% 50%',
        // markers: true,
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
    <div className={styles.projectsScrollTextGradientWrapper}
      ref={mainWrapper}
    >
      <div className={styles.projectsScrollTextGradientContainer}>
        {splitEachWords(sentence)}
      </div>
    </div>
  );
}

