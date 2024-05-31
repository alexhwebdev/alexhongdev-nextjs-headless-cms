// "use client";

// import React, { useRef } from 'react'
// import './page.css'
// import { gsap } from "gsap";
// import { useGSAP } from '@gsap/react';
// import { SplitText } from 'gsap-trial/SplitText';
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// interface TextAniFadeUpProps {
//   children: React.ReactNode;
// }

// const TextAniFadeUp = (
//   {children}: TextAniFadeUpProps
// ) => {
//   const sectionCharRef = useRef(null);
//   console.log('sectionCharRef ', sectionCharRef)
  
//   useGSAP(() => {
//     gsap.registerPlugin(SplitText);
//     gsap.registerPlugin(ScrollTrigger);

//     let mySplitText = new SplitText(sectionCharRef.current, {type: 'chars'});
//     let chars = mySplitText.chars;
//     gsap.from(chars, {
//       yPercent: 130,
//       stagger: 0.05,
//       ease: "back.out",
//       duration: 1,
//       scrollTrigger: {
//         trigger: sectionCharRef.current,
//         start: "30% 10%",
//         // end: "100% 10%",
//         // markers: true
//       }
//     })
//   }, []);

//   return (
//     <div className="textAniFadeUpWrapper">
//       <div className="textAniFadeUpContainer">
//         <h2 ref={sectionCharRef} className="split">
//           {children}
//         </h2>
//       </div>
//     </div>
//   )
// }

// export default TextAniFadeUp
// // TUTS : https://www.youtube.com/watch?v=fce5B2DicN0
