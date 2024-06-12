"use client";

import { useEffect, useState } from 'react';
import styles from './page.module.scss';

interface Props {
  menuIsActive: boolean;
  setMenuIsActive: (isActive: boolean) => void; // This defines setMenuIsActive as a function that takes a boolean parameter and returns void;
  theme: string | undefined;
}

export default function Hamburger({
  menuIsActive, setMenuIsActive, theme
}: Props) {

  const [htmlTag, setHtmlTag] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // console.log('theme ', theme)
    const htmlElement = document.querySelector('html');
    setHtmlTag(htmlElement);

  }, [menuIsActive, theme]);

  const isLightMode = htmlTag?.classList.contains('light');
  // console.log('isLightMode ', isLightMode)
  // console.log('menuIsActive ', menuIsActive)

  return (
    <div className={`
      ${styles.hamburger_wrapper}
    `}>
      <div 
        className={`
          ${styles.hamburger}
          ${
            // isLightMode && !menuIsActive ? 
            !menuIsActive ? 
            styles.light_mode : 
            styles.dark_mode
          }
        `}
        onClick={() => {setMenuIsActive(!menuIsActive)}} 
      >
        <div 
          // onClick={() => {setMenuIsActive(!menuIsActive)}} 
          className={`
            ${styles.hamburgerLines} 
            ${
              menuIsActive ? 
              styles.hamburgerActive : 
              ""
            }
          `}
        ></div>
      </div>
    </div>
  )
}






// const getBlocks = (): JSX.Element[] => {

//   const htmlTag = document.querySelector('html');

//   if (htmlTag) {
//     return [
//       <div 
//         className={`
//           ${styles.hamburger} 
//           ${
//             htmlTag.classList.contains('light') ? 
//             styles.light_mode : 
//             styles.dark_mode
//           }
//         `}
//         onClick={() => setMenuIsActive(!menuIsActive)}
//       />
//     ]
//   }
//   return [];
// }











// export default function Hamburger({
//   menuIsActive, setMenuIsActive, theme
// }: Props) {

//   useEffect(() => {
//     console.log('theme ', theme)
//   }, [menuIsActive, theme]);

//   return (
//     <div className={`
//       ${styles.hamburger_wrapper}
//     `}>
//       <div 
//         className={`
//           ${styles.hamburger}
//           ${
//             // htmlTag!.classList.contains('light') ? 
//             // menuIsActive === false && theme == 'light' ? 
//             menuIsActive === false ? 
//             styles.light_mode : 
//             styles.dark_mode
//           }
//         `}
//         onClick={() => {setMenuIsActive(!menuIsActive)}} 
//       >
//         <div 
//           // onClick={() => {setMenuIsActive(!menuIsActive)}} 
//           className={`
//             ${styles.hamburgerLines} 
//             ${
//               menuIsActive ? 
//               styles.hamburgerActive : 
//               ""
//             }
//           `}
//         ></div>
//       </div>
//     </div>
//   )
// }





