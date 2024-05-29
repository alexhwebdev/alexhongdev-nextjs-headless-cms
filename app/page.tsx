import InfiniteScroll from "@/components/infiniteScroll/page";

import Hero from "../components/horiScrollHero/page";
import ScrollSection from "../components/horiScrollSection/page";
import HoriFooter from "../components/horiFooter/page";

import ScrollZoomParallax from "../components/scrollZoomParallax/page";
import UpDownParallax from "@/components/upDownParallax/page";
import VerticalInfiniteScroll from "@/components/verticalInfiniteScroll/page";
import Projects from "@/components/scrollTextFill/page";
import TextClipMask from "@/components/textClipMaskText/page";


export default function Home() {
  return (
    <main >
      
      <VerticalInfiniteScroll />
      {/* <InfiniteScroll /> */}

      <Projects />

      <TextClipMask />

      <Hero />
      <ScrollSection />
      <HoriFooter />

      <ScrollZoomParallax />

      <UpDownParallax />

      {/* <div style={{
        border: '5px solid orange', 
        width: '100vw', 
        height: '100vh',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <VerticalInfiniteScroll />
      </div> */}
    </main>
  )
}




/*
'use client';
// import styles from './page.module.scss'
import { useState } from 'react';
import Header from '../components/header';
import Menu from '../components/menu';
// import CenteredPixelTransition from '../components/pixelTransition/centered';
import HorizontalPixelTransition from '../components/pixelTransition/horizontal';
// import VerticalPixelTransition from '../components/pixelTransition/vertical';


export default function Home() {
  const [menuIsActive, setMenuIsActive] = useState<boolean>(false);
  return (
    <main 
      // className={styles.main}
    >
      <Header 
        menuIsActive={menuIsActive} 
        setMenuIsActive={setMenuIsActive}
      />
      
      <Menu menuIsActive={menuIsActive}/>
      
      // <CenteredPixelTransition menuIsActive={menuIsActive}/>
      // <HorizontalPixelTransition menuIsActive={menuIsActive}/>
      // <VerticalPixelTransition menuIsActive={menuIsActive}/>
    </main>
  )
}
*/