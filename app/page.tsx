// import InfiniteScroll from "@/components/infiniteScroll/page";
// import Hero from "../components/horiScrollHero/page";
// import ScrollSection from "../components/horiScrollSection/page";
// import HoriFooter from "../components/horiFooter/page";
// import ScrollZoomParallax from "../components/scrollZoomParallax/page";
// import UpDownParallax from "@/components/upDownParallax/page";
// import VerticalInfiniteScroll from "@/components/verticalInfiniteScroll/page";
// import Projects from "@/components/scrollTextFill/page";
// import TextClipMask from "@/components/textClipMask/page";
// import ScrollTextGradient from "@/components/scrollTextGradient/page";
// import ScrollSplitImg from "@/components/scrollSplitImg/page";

// import SmoothScroll from "@/components/smoothScroll/page";
import HomeHoriScroll from "@/components/homeHoriScroll/page";
// import HoriParallax from "@/components/horiParallax/page";
// import HoriParallaxGsap from "@/components/horiParallaxGsap/page";

// import './page.module.css'
import HomeHoverMixBlend from "@/components/homeHoverMixBlend/page";
import HomeScrollTextGradient from "@/components/HomeScrollTextGradient/page";
import NameAnimation from "@/components/nameAnimation/page";

import { getPortfolioPageDocuments } from "../lib/contentfulApi";
import getPageData from "../lib/getPageData";
import getImgCollection from "../lib/getImgCollection";
import PageTransitionEffect from "@/components/PageTransEffect/page";


export default async function Home() {
  const portfolioPageData = await getPortfolioPageDocuments();
  // console.log('portfolioPageData.companyJson ', portfolioPageData[0].companyJson)
  
  const companyData = portfolioPageData[0].companyJson;
  console.log('Home companyData ', companyData)

  // let lineData = getPageData("Portfolio", portfolioPageData)
  // // console.log('lineData ', lineData)
  
  // let imgDataArray = [
  //   // ...getImgCollection("Portfolio", portfolioPageData)
  //   ...getImgCollection("Portfolio", portfolioPageData)
  // ];
  // // console.log('imgDataArray ', imgDataArray)


  return (
    <PageTransitionEffect>
    <main style={{overflow: 'hidden'}}>
      <HomeHoverMixBlend />

      <HomeHoriScroll 
        companyData={companyData}
        // lineData={lineData} 
        // imgDataArray={imgDataArray}
        // portfolioPageData={portfolioPageData}
      />
      {/* <UpDownParallax /> */}
      {/* <ScrollSplitImg /> */}
      {/* <HoriParallax /> */}
      {/* <InfiniteScroll /> */}
      {/* <Projects /> */}
      {/* <ScrollTextGradient /> */}
      {/* <TextClipMask /> */}
      {/* <Hero /> */}
      {/* <ScrollSection /> */}
      {/* <HoriFooter /> */}

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
    </PageTransitionEffect>
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





// export default async function Home() {
//   const portfolioPageData = await getPortfolioPageDocuments();
//   const companyData = portfolioPageData[0].companyJson;
//   return (
//     <main style={{overflow: 'hidden'}}>
//       <HomeHoverMixBlend />

//       <HomeHoriScroll 
//         companyData={companyData}
//       />
//     </main>
//   )
// }