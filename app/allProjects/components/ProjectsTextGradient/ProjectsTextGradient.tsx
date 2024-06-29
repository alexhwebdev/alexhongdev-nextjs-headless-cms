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


export default function ProjectsTextGradient() {
  const mainWrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // let headings = gsap.utils.toArray("h6");
    let headings: HTMLElement[] = Array.from(document.querySelectorAll("h6"));

    headings.forEach(function (element: HTMLElement, index) {
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

    gsap.to(".gradient_sec_line", {
      scrollTrigger: {
        // trigger: mainWrapper.current,
        trigger: ".gradient_sec_line",
        // start: "100%+=2000 50%", // start, scroller-start
        // end: "100%+=2000 10%",   // end, scroller-end
        start: "50% 70%",
        // end: "100% 100%",
        scrub: 0.5,
        // markers: true,
      },
      width: "100px",
      ease: "none",
    });
  }, []);

  return (
    <div className={`
      ${montserrat.className} 
      projectsTextGradientWrapper
    `}
      ref={mainWrapper}
    >
      {/* <div className="gradient_sec_line"></div> */}

      <h6>
        Investor&#39;s Business Daily is an American newspaper and website covering the stock market, international business, finance and economics.
      </h6>
      <br></br>
      <h6>
        Founded in 1984 by William O&#39;Neil as a print news publication, it is owned by News Corp, headquartered in Los Angeles, California. IBD provides news and analysis on stocks, mutual funds, exchange-traded funds, commodities, and other financial instruments aimed at individual investors and financial professionals.
      </h6>

      <br></br>

      <h6>
        Investor&#39;s Business Daily is an American newspaper and website
      </h6>
      <h6>
        covering the stock market, international business, finance
      </h6>
      <h6>
        and economics. Founded in 1984 by William O&#39;Neil as a print
      </h6>

      <br></br>

      <h6>
        news publication, it is owned by News Corp, headquartered in
      </h6>
      <h6>
        Los Angeles, California. BD provides news and analysis on stocks,
      </h6>
      <h6>
        mutual funds, exchange-traded funds, commodities, and other
      </h6>
      <h6>
        financial instruments aimed at individual investors and financial professionals.
      </h6>
      <h6>
        financial professionals.
      </h6>
    </div>
  );
}


// https://codepen.io/snorkltv/pen/dyOLGWJ/6720103d55791e83f754ce7a1a7dc008
