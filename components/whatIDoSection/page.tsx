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
import { CompanyDataProps, HomeHoriScrollProps, PageImage } from '../homeHoriScroll/page';


const WhatIDo = (
  {
    companyData, 
    pageImagesCollection
  }: HomeHoriScrollProps
) => {
  // console.log(
  //   'WhatIDo pageImagesCollection ', 
  //   pageImagesCollection
  // )
  
  const devPreviewShipImg = pageImagesCollection[4].url;
  // console.log('WhatIDo devPreviewShipImg ', devPreviewShipImg)
  const macBlackWhiteImg = pageImagesCollection[5];
  // console.log('WhatIDo macBlackWhiteImg ', typeof macBlackWhiteImg)

  return (
    <div className="whatIDoContainer">
      <WhatIDoTyping />
      <TechWorkWith2 />
      {/* <FloatingImgs /> */}
      <HoriParallaxImg 
        // imgDataArray={imgDataArray}
        // macBlackWhite={macBlackWhite}
        macBlackWhiteImg={macBlackWhiteImg}
      />

      <Image 
        className={`cupImg`}
        // fill={true}
        alt={"image"}
        // src={`/images/floatingImgs/floating_1.jpg`}
        src={ devPreviewShipImg }
        width={500}
        height={300}
        // sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
      />
    </div>
  )
}

export default WhatIDo;