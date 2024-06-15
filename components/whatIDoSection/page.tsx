"use client";

import React, { useEffect } from 'react'
import Image from 'next/image';
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import './page.css';
import WhatIDoTyping from '../whatIDoTyping/page';
import TechWorkWith2 from "../techWorkWith2/page";
import FloatingImgs from '../floatingImgs/page';
import HoriParallaxImg from '../horiParallaxImg/page';

const WhatIDo = () => {


  return (
    <div className="whatIDoContainer">
      <WhatIDoTyping />
      <TechWorkWith2 />
      {/* <FloatingImgs /> */}
      <HoriParallaxImg />

      <Image 
        className={`cupImg`}
        // fill={true}
        alt={"image"}
        src={`/images/floatingImgs/floating_1.jpg`}
        width={500}
        height={300}
        // sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
      />
    </div>
  )
}

export default WhatIDo;