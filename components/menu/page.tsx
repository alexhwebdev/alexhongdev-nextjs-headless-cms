"use client";

import React, { useState, useRef, useEffect, MutableRefObject } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
// import styles from './menu.module.css'
import './page.css'
import { motion } from 'framer-motion';

export interface Props {
  menuIsActive: boolean;
  setMenuIsActive: (isActive: boolean) => void;
}

const menuLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

export default function Menu({menuIsActive, setMenuIsActive}: Props) {
  const handleButtonClick = () => {
    setMenuIsActive(!menuIsActive);
  };
  const container = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(menuIsActive);
  const tl = useRef<gsap.core.Timeline | null>(null);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useGSAP(() => {
    gsap.set(".menu-link-item-holder", { y: 100 });

    tl.current = gsap.timeline({ paused: false })
      .to(".menu-link-item-holder", {
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.inOut",
        delay: -0.75,
        // opacity: 0
      })
  }, { scope: container })

  useEffect(() => {
    if (tl.current !== null) { // Check if tl.current is not null
      if (menuIsActive) {
        tl.current.play();
      } else {
        tl.current.reverse();
      }
    }
  }, [menuIsActive])

  return (
    <div className="menu-container" ref={container}>
      <div className="menu-copy">
        <div className="menu-links">
          {menuLinks.map((link, index) => (
            <div className="menu-link-item" key={index}>
              <div className="menu-link-item-holder" 
                onClick={toggleMenu}
              >
                <Link className="menu-link" 
                  href={link.path}
                  onClick={handleButtonClick}
                  prefetch={true}
                >
                  {link.label}                      
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* <Link href="/about" prefetch={true}>
          About Prefetching
        </Link> */}
      </div>
    </div>
  )
}

// export default Menu



/*
import React from 'react'
import Link from 'next/link'
// import styles from './page.module.scss';
import './page.css';
import { motion } from 'framer-motion';

export interface Props {
  menuIsActive: boolean;
  setMenuIsActive: (isActive: boolean) => void;
}

const anim = {
  initial: { opacity: 0 },
  open: { opacity: 1 },
  exit: { opacity: 0 }
}

export default function Menu({menuIsActive, setMenuIsActive}: Props) {
  const handleButtonClick = () => {
    setMenuIsActive(!menuIsActive); // Toggles the menuIsActive state
  };

  return (
    <motion.div 
      // className={styles.menu}
      className="menu"
      variants={anim}
      initial="initial"
      animate={menuIsActive ? "open" : "closed"}
    >
      <Link href="/" onClick={handleButtonClick}><p>Home</p></Link>
      <Link href="/contact" onClick={handleButtonClick}><p>Contact</p></Link>
    </motion.div>
  )
}
*/