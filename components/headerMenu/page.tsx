'use client';
import styles from './page.module.css'
import { useState } from 'react';
import AhLogo from "@/components/AhLogo/AhLogo";
import Hamburger from '../hamburger/page';
import Menu from '../menu/page';
// import LightDarkToggle from '../LightDarkToggle/page';
// import CenteredPixelTransition from '../components/pixelTransition/centered';
import HorizontalPixelTransition from '../pixelTransition/horizontal/page';
import LightDarkToggle from '../LightDarkToggle/page';
// import VerticalPixelTransition from '../components/pixelTransition/vertical';
import { useTheme } from "next-themes";

interface ThemeProps {
  theme: string;
}

// export default function HeaderMenu() {
const HeaderMenu = () => {
  const [menuIsActive, setMenuIsActive] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  const handleMenuButtonClick = (isActive: boolean) => {
    setMenuIsActive(isActive);
  };

  const handleThemeToggle = () => {
    // Logic to toggle theme
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={styles.headerMenuWrapper}>
      {/* <AhLogo /> */}

      <Hamburger 
        menuIsActive={menuIsActive} 
        setMenuIsActive={setMenuIsActive}
        theme={theme}
      />

      <LightDarkToggle 
        menuIsActive={menuIsActive}
        theme={theme}
        // setTheme={setTheme}
        toggleTheme={handleThemeToggle}
      />
      
      <div className={`
        ${styles.menu_wrapper}
        ${menuIsActive ? `active` : ''}
      `}>
        <Menu 
          menuIsActive={menuIsActive}
          setMenuIsActive={handleMenuButtonClick}
        />
      </div>
      
      
      <HorizontalPixelTransition 
        menuIsActive={menuIsActive}
        theme={theme}
      />
      {/* <VerticalPixelTransition menuIsActive={menuIsActive}/> */}
      {/* <CenteredPixelTransition menuIsActive={menuIsActive}/> */}
    </div>
  )
}
export default HeaderMenu;