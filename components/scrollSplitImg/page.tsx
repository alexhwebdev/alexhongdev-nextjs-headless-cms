'use client';
// import styles from './page.module.scss'
import Gallery from './gallery';
import Lenis from 'lenis'
import { useEffect } from 'react';
import { useSpring } from 'framer-motion';
import Description from './description';

const projects = [
  {
    name: "Dyal Thak",
    handle: "dyal_thak"
  },
  {
    name: "Leidinger Matthias",
    handle: "leidinger_matthias"
  },
  {
    name: "Mark Rammers",
    handle: "mark_rammers"
  },
  {
    name: "Landon Speers",
    handle: "landon_speers"
  }
]

export default function ScrollSplitImg() {

  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.1
  }

  const mousePosition = {
    x: useSpring(0, spring),
    y: useSpring(0, spring)
  }

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
  }, [])

  const mouseMove = (e: { clientX: any; clientY: any; }) => {
    const { clientX, clientY } = e;
    const targetX = clientX - (window.innerWidth / 2 * 0.25);
    const targetY = clientY - (window.innerWidth / 2 * 0.30);
    mousePosition.x.set(targetX);
    mousePosition.y.set(targetY);
  }

  return (
    <main onMouseMove={mouseMove} 
      // className={styles.main}
    >
      {
        projects.map( ({handle}, i) => {
          return <Gallery mousePosition={mousePosition} handle={handle} key={i}/>
        })
      }
      <Description mousePosition={mousePosition} projects={projects}/>
    </main>
  )
}
