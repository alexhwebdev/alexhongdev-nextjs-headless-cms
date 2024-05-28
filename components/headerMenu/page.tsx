'use client';
import styles from './page.module.css'
import { useState } from 'react';
import Hamburger from '../hamburger/page';
import Menu from '../menu/page';
// import CenteredPixelTransition from '../components/pixelTransition/centered';
import HorizontalPixelTransition from '../pixelTransition/horizontal/page';
// import VerticalPixelTransition from '../components/pixelTransition/vertical';


export default function HeaderMenu() {
  const [menuIsActive, setMenuIsActive] = useState<boolean>(false);

  const handleMenuButtonClick = (isActive: boolean) => {
    setMenuIsActive(isActive);
  };

  return (
    <div className={styles.headerMenuWrapper}>
      <Hamburger 
        menuIsActive={menuIsActive} 
        setMenuIsActive={setMenuIsActive}
      />
      
      <Menu 
        menuIsActive={menuIsActive}
        setMenuIsActive={handleMenuButtonClick}
      />
      
      
      <HorizontalPixelTransition menuIsActive={menuIsActive}/>
      {/* <VerticalPixelTransition menuIsActive={menuIsActive}/> */}
      {/* <CenteredPixelTransition menuIsActive={menuIsActive}/> */}
    </div>
  )
}
