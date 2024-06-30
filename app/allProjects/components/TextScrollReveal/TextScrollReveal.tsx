'use client';
import { useRef, useEffect, JSX } from 'react';
import Image from 'next/image';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { companyInfoDescProps } from '../../page';
import styles from './style.module.scss'
// const phrase = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.";


export default function TextScrollReveal(
  {companyDesc, companyImgs}: companyInfoDescProps
) {
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
        start: "-20% 50%",
        end: `+=${window.innerHeight / 1.5}`,
        markers: true
      },
      opacity: 1,
      ease: "none",
      stagger: 0.1
    })
  }

  const splitWords = (companyDesc: string) => {
    if (!companyDesc) return [];
    let description: JSX.Element[] = [];

    companyDesc.split(" ").forEach( (word, i) => {
      const letters = splitLetters(word);
      description.push(<p key={word + "_" + i}>{letters}</p>)
    })
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

  // console.log('companyImgs ', companyImgs)


  return (
    <div ref={container} className={styles.text_scroll_reveal_wrapper}>
      <div ref={description} className={styles.description}>
        {
          splitWords(companyDesc)
        }
      </div>

      <div className={styles.company_imgs_container}>
        <Image 
          // className={`img_one`}
          className={styles.img_one}
          src={`${companyImgs[0]?.url}`} 
          // fill={true}
          alt={"img"}
          // placeholder="blur"
          width={200}
          height={350}
          // sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
        />
        <Image 
          // className={`img_two`}
          className={styles.img_two}
          src={`${companyImgs[1].url}`} 
          // fill={true}
          alt={"img"}
          // placeholder="blur"
          width={200}
          height={150}
          // sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
        />    
      </div>

    </div>
  )
}
