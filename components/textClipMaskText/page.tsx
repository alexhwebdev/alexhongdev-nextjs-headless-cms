'use client'
import { useRef, useEffect, useState } from 'react';
import styles from './page.module.css'


export default function TextClipMask() {
  const initialMaskSize = 0.8; // Declare initialMaskSize before its usage
  const container = useRef<HTMLDivElement>(null);
  const stickyMask = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const [maskSize, setMaskSize] = useState<number>(initialMaskSize);

  // const initialMaskSize = 0.8;
  const targetMaskSize = 60;
  const easing = 0.55;
  let easedScrollProgress = 0;

  useEffect(() => {
    if (stickyMask.current) {
      animationFrameRef.current = requestAnimationFrame(animate);
    }
    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const animate = () => {
    const maskSizeProgress = targetMaskSize * getScrollProgress();
    if (stickyMask.current) {
      stickyMask.current.style.webkitMaskSize = (initialMaskSize + maskSizeProgress) * 100 + "%";
    }
    requestAnimationFrame(animate);
  };

  const getScrollProgress = () => {
    if (stickyMask.current && container.current) {
      const scrollProgress = stickyMask.current.offsetTop / (container.current.getBoundingClientRect().height - window.innerHeight);
      const delta = scrollProgress - easedScrollProgress;
      easedScrollProgress += delta * easing;
      return easedScrollProgress;
    }
    return 0; // or any default value if refs are not yet initialized
  };

  return (
    <div className={styles.mainContainer}>
      <div ref={container} className={styles.container}>
        <div ref={stickyMask} className={styles.stickyMask}>
          <video autoPlay muted loop>
            <source src="/medias/wave3.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}


// export default function TextClipMask() {

//   const container = useRef(null);
//   const stickyMask = useRef(null);

//   // const initialMaskSize = .8;
//   // const targetMaskSize = 30;
//   // const easing = 0.15;
//   const initialMaskSize = .8;
//   const targetMaskSize = 60;
//   const easing = 0.55;
//   let easedScrollProgress = 0;

//   useEffect( () => {
//     requestAnimationFrame(animate)
//   }, [])

//   const animate = () => {
//     const maskSizeProgress = targetMaskSize * getScrollProgress();
//     stickyMask.current.style.webkitMaskSize = (
//       initialMaskSize + maskSizeProgress
//     ) * 100 + "%";
//     requestAnimationFrame(animate)
//   }

//   const getScrollProgress = () => {
//     const scrollProgress = stickyMask.current.offsetTop / (container.current.getBoundingClientRect().height - window.innerHeight)
//     const delta = scrollProgress - easedScrollProgress;
//     easedScrollProgress += delta * easing;
//     return easedScrollProgress
//   }

//   return (
//     <div className={styles.mainContainer}>
//       <div ref={container} className={styles.container}>
//         <div ref={stickyMask} className={styles.stickyMask}>
//           <video autoPlay muted loop>
//             <source src="/medias/wave2.mp4" type="video/mp4"/>
//           </video>
//         </div>
//       </div>
//     </div>
//   )
// }
