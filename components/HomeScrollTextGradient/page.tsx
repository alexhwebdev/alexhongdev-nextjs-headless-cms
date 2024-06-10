'use client';

import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { inter } from '@/app/fonts';
import { montserrat } from '@/app/fonts';
import { raleway } from '@/app/fonts';
import { GiStarShuriken } from "react-icons/gi";
// import styles from './page.module.css';
import './page.css';


export default function HomeScrollTextGradient() {
  const mainWrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // gsap.registerPlugin(ScrollTrigger);
    let headings = gsap.utils.toArray("h6");
    headings.forEach(function (element, index) {
      gsap.to(element, {
        // backgroundImage: "linear-gradient(45deg, #000 100%, #fff 200%, #000 300%)",
        backgroundImage: "linear-gradient(45deg, #000 100%, #000 200%, #fff 300%)",
        duration: 2,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          // end: "top 25%",
          scrub: true,
          // markers: true,
        }
      });
    });

    gsap.to(".line", {
      scrollTrigger: {
        // trigger: mainWrapper.current,
        trigger: ".line",
        // start: "100%+=2000 50%", // start, scroller-start
        // end: "100%+=2000 10%",   // end, scroller-end
        start: "50% 70%",
        // end: "100% 100%",
        scrub: 0.5,
        markers: true,
      },
      width: "100px",
      ease: "none",
    });
  }, []);

  return (
    <div className={`
      ${montserrat.className} 
      homeScrollTextGradientWrapper
    `}
      ref={mainWrapper}
    >
      <div className="line"></div>
      
      <h6>
        Talented frontend web and mobile <span>developer</span>
      </h6>
      <h6>
         crafting, modern designs. Blending creativity
      </h6>
      <h6>
        with tech to deliver captivating user <span>experience.</span>
      </h6>

      <br></br>

      <h6>
        We experiences built, guitar played, the <span>universe</span>
      </h6>
      <h6>
        researched - I constantly weave my passions 
      </h6>
      <h6>
        into life's tapestry.
      </h6>
    </div>
  );
}


// https://codepen.io/snorkltv/pen/dyOLGWJ/6720103d55791e83f754ce7a1a7dc008
