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

import HomeHoverMixBlend from "@/components/homeHoverMixBlend/page";
import HomeScrollTextGradient from "@/components/HomeScrollTextGradient/page";
import NameAnimation from "@/components/nameAnimation/page";

import { getPortfolioPageDocuments } from "../lib/contentfulApi";
import getPageData from "../lib/getPageData";
import getImgCollection from "../lib/getImgCollection";
import CursorComponent from "@/components/CursorComponent/CursorComponent";
import AhLogo from "@/components/AhLogo/AhLogo";
import PreloaderContainer from "@/components/PreloaderContainer/PreloaderContainer";
import TransitionLink from "@/components/TransitionLink/TransitionLink";
// import CircularLogoText from "@/components/CircularLogoText/page";

// import styles from './page.module.css'




export default async function Home() {
  const portfolioPageData = await getPortfolioPageDocuments();
  // console.log(
  //   'portfolioPageData[0].pageImagesCollection ', 
  //   portfolioPageData[0].pageImagesCollection
  // )
  
  const companyData = portfolioPageData[0].companyJson;
  // console.log('Home companyData ', companyData)

  const pageImagesCollection = portfolioPageData[0].pageImagesCollection;
  // console.log(
  //   'Home pageImagesCollection.items ', 
  //   pageImagesCollection.items
  // )
  return (
    <main 
    style={{
      // background: 'brown', 
      width: '100vw',
      // height: '100vh',
      overflow: 'hidden'
    }}
      // className={styles.main}
    >
      {/* <PreloaderContainer />
      <AhLogo /> */}

      {/* <InfiniteScroll /> */}
      {/* <CircularLogoText /> */}

      {/* <CursorComponent /> */}
      
      <HomeHoverMixBlend />
      {/* <TransitionLink href="http://localhost:3000/allProjects?id=ibd-projects" label="allProjects ->" /> */}

      <HomeHoriScroll 
        companyData={companyData} 
        pageImagesCollection={pageImagesCollection.items}
      />
      {/* <UpDownParallax /> */}
      {/* <ScrollSplitImg /> */}
      {/* <HoriParallax /> */}
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
  )
};