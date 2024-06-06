"use client";

import React, { useEffect } from 'react'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import './page.css';
import WhatIDoTyping from '../whatIDoTyping/page';
import TechWorkWith from "../techWorkWith/page";
import FloatingImgs from '../floatingImgs/page';

const WhatIDo = () => {


  return (
    <div className="whatIDoContainer">
      <WhatIDoTyping />
      <TechWorkWith />
      <FloatingImgs />
    </div>
  )
}

export default WhatIDo;