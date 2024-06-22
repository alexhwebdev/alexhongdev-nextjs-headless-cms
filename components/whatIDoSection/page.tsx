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

// import { ImageDataObject } from '../homeHoriScroll/page';

// interface WhatIDoProps {
//   imgDataArray: ImageDataObject[];
// }

const WhatIDo = (
  // {imgDataArray}: WhatIDoProps
) => {

  // console.log('WhatIDo imgDataArray ', imgDataArray)
  return (
    <div className="whatIDoContainer">
      <WhatIDoTyping />
      <TechWorkWith2 />
      {/* <FloatingImgs /> */}
      <HoriParallaxImg 
        // imgDataArray={imgDataArray}
      />

      <Image 
        className={`cupImg`}
        // fill={true}
        alt={"image"}
        src={`/images/floatingImgs/floating_1.jpg`}
        // src={imgDataArray[4].url}
        width={500}
        height={300}
        // sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
      />
    </div>
  )
}

export default WhatIDo;