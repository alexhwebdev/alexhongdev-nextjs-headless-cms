'use client';
// import styles from './page.module.scss'
import { useState } from 'react';
import Header from '../header/page';
import Menu from '../menu/page';
// import CenteredPixelTransition from '../components/pixelTransition/centered';
import HorizontalPixelTransition from '../pixelTransition/horizontal';
// import VerticalPixelTransition from '../components/pixelTransition/vertical';


export default function HeaderMenu() {
  const [menuIsActive, setMenuIsActive] = useState<boolean>(false);
  return (
    < 
      // className={styles.div}
    >
      <Header 
        menuIsActive={menuIsActive} 
        setMenuIsActive={setMenuIsActive}
      />
      
      <Menu menuIsActive={menuIsActive}/>
      
      {/* <CenteredPixelTransition menuIsActive={menuIsActive}/> */}
      <HorizontalPixelTransition menuIsActive={menuIsActive}/>
      {/* <VerticalPixelTransition menuIsActive={menuIsActive}/> */}
    </>
  )
}