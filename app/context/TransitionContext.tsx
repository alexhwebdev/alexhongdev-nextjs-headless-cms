"use client"

import React, { useState, createContext } from "react"
import gsap from "gsap"


export interface TransitionContextType {
  timeline: gsap.core.Timeline;
  setTimeline: React.Dispatch<React.SetStateAction<gsap.core.Timeline>>;
}

// const TransitionContext = createContext({})
const TransitionContext = createContext<TransitionContextType>({
  timeline: gsap.timeline(),
  setTimeline: () => {},
});



const TransitionProvider = ({ children }: Readonly<{
  children: React.ReactNode;
}>) => {
  const [timeline, setTimeline] = useState(() =>
    gsap.timeline({ paused: true })
  )

  return (
    <TransitionContext.Provider
      value={{
        timeline,
        setTimeline,
      }}
    >
      {children}
    </TransitionContext.Provider>
  )
}

export { TransitionContext, TransitionProvider }
