"use client";

import { useState, useEffect } from "react";
// import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";
import styles from './page.module.css';


interface Props {
  menuIsActive: boolean;
  theme: string | undefined;
  toggleTheme: () => void;
}

const LightDarkToggle = ({
  menuIsActive, theme, toggleTheme
}: Props) => {
  // const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  // console.log('LightDarkToggle theme ', theme)

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // This Button is just placeholder so screen doesnt jump when Sun or Moon loads
    return (
      <div className={styles.light_dark_toggle_wrapper}>
        <Button className={styles.light_dark_toggle} variant="outline" size="icon" disabled={true}></Button>
      </div>
    )
  }

  const dark = theme === "dark"; // is theme equal to dark?

  return (
    <div className={styles.light_dark_toggle_wrapper}>
      <Button
        className={`
          ${styles.light_dark_toggle}
          ${
            theme == 'light' ? 
            styles.light_mode : 
            styles.dark_mode
          }
        `}
        variant="outline"
        size="icon"
        // onClick={() => toggleTheme(`${dark ? "light" : "dark"}`)}
        onClick={() => toggleTheme()}

      >
        {dark ? (
          // <Sun className="hover:cursor-pointer hover:text-primary" />
          'Light Mode'
        ) : (
          // <Moon className="hover:cursor-pointer hover:text-primary" />
          'Dark Mode'
        )}
      </Button>
    </div>
  );
};

export default LightDarkToggle;
