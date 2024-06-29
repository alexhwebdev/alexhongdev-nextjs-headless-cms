"use client";
import React from 'react';
import { montserrat } from '@/app/fonts';
import './page.css';


const CurrentTime = () => {
  var time = new Date();
  // console.log('time ', time)
  const currentTime = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })

  return (
    <div>
      <div className={`
        ${montserrat.className} 
        current_time
      `}>
        <p>{`${currentTime}`}</p>
      </div>
    </div>
  )
}

export default CurrentTime;