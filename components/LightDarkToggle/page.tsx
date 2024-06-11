"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";
import styles from './page.module.css';

const LightDarkToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // This Button is just placeholder so screen doesnt jump when Sun or Moon loads
    return (
      <div className={styles.light_dark_toggle_wrapper}>
        <Button className={styles.light_dark_toggle} variant="outline" size="icon" disabled={true}></Button>;
      </div>
    )
  }

  const dark = theme === "dark"; // is theme equal to dark?

  return (
    <div className={styles.light_dark_toggle_wrapper}>
      <Button
        className={styles.light_dark_toggle}
        variant="outline"
        size="icon"
        onClick={() => setTheme(`${dark ? "light" : "dark"}`)}
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
