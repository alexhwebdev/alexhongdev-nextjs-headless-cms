"use client";
import { useRef, useEffect, MutableRefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './style.module.scss';

interface Props {
  companyDesc: string;
}

const TextScrollReveal: React.FC<Props> = ({ companyDesc }) => {
  let refs = useRef<Array<MutableRefObject<HTMLElement | null>>>([]);
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

  const createAnimation = () => {
    gsap.to(refs.current.map(ref => ref.current), {
      scrollTrigger: {
        trigger: container.current!,
        scrub: true,
        start: "5% 50%",
        end: `+=${window.innerHeight / 1.5}`,
        markers: true
      },
      opacity: 1,
      ease: "none",
      stagger: 0.1
    });
  };

  const splitWords = (companyDesc: string) => {
    let description: JSX.Element[] = [];

    companyDesc.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);
      description.push(<p key={word + "_" + i}>{letters}</p>);
    });

    return description;
  };

  const splitLetters = (word: string) => {
    let letters: JSX.Element[] = [];
    word.split("").forEach((letter, i) => {
      const ref: MutableRefObject<HTMLSpanElement | null> = useRef(null);
      letters.push(
        <span key={letter + "_" + i} ref={ref}>{letter}</span>
      );
      refs.current.push(ref);
    });
    return letters;
  };

  return (
    <main ref={container} className={styles.text_scroll_reveal_wrapper}>
      <div className={styles.description}>
        {splitWords(companyDesc)}
      </div>
    </main>
  );
};

export default TextScrollReveal;
