"use client";

import React, { useState, useRef, useEffect, MutableRefObject } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
// import styles from './menu.module.css'
import './page.css'
import { motion } from 'framer-motion';

import { raleway } from '@/app/fonts';
import { montserrat } from '@/app/fonts';
import { inter } from '@/app/fonts';
import TransitionLinkNoQuery from '../TransitionLink/TransitionLinkNoQuery';

export interface Props {
  menuIsActive: boolean;
  setMenuIsActive: (isActive: boolean) => void;
}


const menuLinks = [
  { path: "/", label: "Home", prefetching: false },
  { path: "/about", label: "About", prefetching: true },
  { path: "/allProjects", label: "Projects", prefetching: false },
  { path: "/pageOne", label: "pageOne", prefetching: false },
  { path: "/pageTwo", label: "pageTwo", prefetching: false },
  // { path: "/testpage", label: "TestPage", prefetching: false },
];

export default function Menu({menuIsActive, setMenuIsActive}: Props) {
  // const handleButtonClick = () => {
  //   setMenuIsActive(!menuIsActive);
  // };
  const container = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(menuIsActive);
  const tl = useRef<gsap.core.Timeline | null>(null);

  const handleButtonClick = () => {
    console.log('handleButtonClick menuIsActive ', menuIsActive)
    console.log('handleButtonClick isMenuOpen ', isMenuOpen)

    setMenuIsActive(!menuIsActive);
    setIsMenuOpen(!isMenuOpen);
  };
  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen)
  // }

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

  // const menuContainerElement = document.querySelector('menu_container');
  // menuIsActive ? 

  // console.log('menuLinks ', menuLinks)

  return (
    <div className={`menu_container ${menuIsActive ? `menuActive` : ''}`} ref={container}>

      <div className="menu-links">
          {/* <div className="menu-link-item">
            <div className="menu-link-item-holder" 
              onClick={toggleMenu}
            >
              <div onClick={handleButtonClick} 
                className={`menu-link ${raleway.className}`} 
                style={{
                  width: "200px",
                  height: "50px",
                }}
              >
                <TransitionLinkNoQuery href="/" label="home ->" />
              </div>
            </div>
          </div>
          <div className="menu-link-item">
            <div className="menu-link-item-holder" 
              onClick={toggleMenu}
            >
              <div onClick={handleButtonClick} 
                className={`menu-link ${raleway.className}`} 
                style={{
                  width: "200px",
                  height: "50px",
                }}
              >
                <TransitionLinkNoQuery href="/pageOne" label="pageOne ->" />
              </div>
            </div>
          </div>
          <div className="menu-link-item">
            <div className="menu-link-item-holder" 
              onClick={toggleMenu}
            >
              <div onClick={handleButtonClick} 
                className={`menu-link ${raleway.className}`}
                style={{
                  width: "200px",
                  height: "50px",
                }}
              >
                <TransitionLinkNoQuery href="/pageTwo" label="pageTwo ->" />
              </div>
            </div>
          </div>
          <div className="menu-link-item">
            <div className="menu-link-item-holder" 
              onClick={toggleMenu}
            >
              <div onClick={handleButtonClick} 
                className={`menu-link ${raleway.className}`}
                style={{
                  width: "200px",
                  height: "50px",
                }}
              >
                <TransitionLinkNoQuery href="/projects" label="projects ->" />
              </div>
            </div>
          </div> */}


        {menuLinks.map((link, index) => (
          <div className="menu-link-item" key={index}>
            <div className="menu-link-item-holder" 
              // onClick={toggleMenu}
              onClick={handleButtonClick}
            >
              <TransitionLinkNoQuery 
                className={`menu-link`} 
                href={link.path}
                label={link.label}
                prefetch={link.prefetching}
              >
                {link.label}
              </TransitionLinkNoQuery>

              {/* <Link className={`menu-link ${raleway.className}`} 
                href={link.path}
                onClick={handleButtonClick}
                prefetch={link.prefetching}
              >
                {link.label}
              </Link> */}
            </div>
          </div>
        ))}
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