"use client";

// import { useRef } from 'react';
// import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './page.module.css';
// import './page.css';
import Image from 'next/image';
// import { useRouter } from 'next/navigation';
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from 'react';
import { montserrat } from '@/app/fonts';
import Link from 'next/link';

import { 
  CompanyDataProps, 
  // ImageDataObject 
} from '../homeHoriScroll/page';
import { testGetImg } from '../../lib/testGetImg'

import { getPortfolioPageDocuments } from "../../lib/contentfulApi";
import TransitionLink from '../TransitionLink/TransitionLink';


const works = [
  { 
    title: "Dow Jones, Investor's Business Daily",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    src: "work1.png",
    url: "https://alexhongdev.com"
  },
  { 
    title: "MGA Entertainment",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    src: "work2.png",
    url: "https://alexhongdev.com"
  },
  { 
    title: "Webpromo",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    src: "work3.png",
    url: "https://alexhongdev.com"
  },
  { 
    title: "Thunderbolt Studios",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    src: "work3.png",
    url: "https://alexhongdev.com"
  },
]

// interface HoriParallaxGsapProps {
//   imgDataArray: ImageDataObject[];
// }

export default function HoriParallaxGsap(
  // { imgDataArray }: HoriParallaxGsapProps
  { companyData }: { companyData: CompanyDataProps[] }
) {
  // console.log('HoriParallaxGsap companyData ', companyData);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    // let sections = gsap.utils.toArray("panel");

    const pin = gsap.fromTo(
      // sectionRef.current,
      ".sectionRef",
      { translateX: 1500 },
      {
        // xPercent: -100 * (sectionRef.current - 1),
        translateX: "-50vw",
        ease: "none",
        scrollTrigger: {
          // trigger: triggerRef.current,
          trigger: ".triggerRef",
          // pin: true,
          scrub: 0.1,
          //snap: directionalSnap(1 / (sections.length - 1)),
          // start: "bottom bottom",
          // end: "+=3000 bottom",      // This allows horizontal scroll
          start: "bottom bottom", // start, scroller-start
          end: "100%+=1500 bottom",   // end, scroller-end
          // markers: true
        }
      }
    );
    // return () => {
    //   {/* A return function for killing the animation on component unmount */ }
    //   pin.kill();
    // };
  
    // gsap.set(".box-2", {y: 100});
    // ScrollTrigger.defaults({markers: {startColor: "red", endColor: "red"}});
    
    // gsap.to(
    //   boxRef.current, 
    //   {
    //     x: -120,
    //     backgroundColor: "#1e90ff",
    //     ease: "none",
    //     scrollTrigger: {
    //       trigger: boxRef.current,
    //       containerAnimation: scrollTween,
    //       start: "center 80%",
    //       end: "center 20%",
    //       scrub: true,
    //       id: "2"
    //     }
    //   }
    // );
  }, []);

  return (
    <div className={`triggerRef ${styles.horiParallaxGsapContainer}`}>
      <section className={`sectionRef ${styles.boxContainer}`}>

        {
          companyData.map((company, index) => {
            // console.log('index ', index)
            return (
              <div key={index} className={styles.undo_mix_blend_mode}>
                {/* <Link 
                  // href={`/reviews/${review.slug}`}
                  href={{
                    pathname: '/allProjects',
                    query: {"id": `${companyData[index].slug}`}
                  }}
                  className={`${styles.box} ${montserrat.className}`}
                  
                > */}



                <div className={`${styles.box} ${montserrat.className}`}>
                  <h5>{ company.company }</h5>
                  
                  {/* <TransitionLink href="/pageOne" label="pageOne" /> */}
                  
                  <h3>
                    {/* View */}
                    <TransitionLink
                      // href="/allProjects" 
                      href={{
                        pathname: '/allProjects',
                        // query: {"id": `${companyData[index].slug}`}
                        query: { id: companyData[index].slug }
                      }}
                      label="View"
                    />
                  </h3>
                  <Image 
                    // fill={true}
                    alt={"image"}
                    // src={`/images/${company.src}`}
                    src={ company.imgSrc }
                    // src={ imgDataArray[1].url }
                    width={300}
                    height={200}
                    // placeholder="blur"
                    // sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                  />
                  <p>{ company.cardDesc }</p>                  
                </div>
                {/* </Link> */}
              </div>
            )
          })
        }
      </section>
    </div>
  )
};