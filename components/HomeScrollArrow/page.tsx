"use client";

import React from 'react'
import { inter } from '@/app/fonts';
import { montserrat } from '@/app/fonts';
import { raleway } from '@/app/fonts';
import './page.css';

const HomeScrollArrow = () => {

  return (
    <div 
      // className={styles.chevron_container}
      className="chevron_container">
    <div 
      // className={styles.chevron}
      className="chevron"
    ></div>
    <div 
      // className={styles.chevron}
      className="chevron"
    ></div>
    <div 
      // className={styles.chevron}
      className="chevron"
    ></div>

    <p className="text_scroll"
      // href="#"
    >Scroll</p>

  </div>
  )
}

export default HomeScrollArrow;
// https://www.use-scramble.dev/