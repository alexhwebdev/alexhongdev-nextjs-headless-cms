"use client"

import React, { useState, useEffect } from 'react'
import styles from './style.module.scss';
import { motion } from 'framer-motion';

interface Props {
  menuIsActive: boolean;
}

interface WindowSize {
  width?: number; // optional properties
  height?: number; // optional properties
}

const anim = {
  initial: {
    opacity: 0
  },
  open: (delay: number[]) => ({
    opacity: 1,
    transition: {duration: 0, delay: 0.02 * delay[0]}
  }),
  closed: (delay: number[]) => ({
    opacity: 0,
    transition: {duration: 0, delay: 0.02 * delay[1]}
  })
}

export default function HoriPixel({menuIsActive}: Props) {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    // Set initial dimensions
    handleResize();
    
    // Add event listener to update dimensions on resize
    window.addEventListener('resize', handleResize);

    // Remove event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Shuffles array in place (Fisher–Yates shuffle).
  // @param {Array} a items An array containing the items.
  const shuffle = (a: number[]): number[] => {
    // Type guard to check if 'a' is an array
    if (Array.isArray(a)) {
      var j, x, i;
      for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
      }
      return a;
    } else {
      // Handle the case where 'a' is a string
      // For example, you might return the string itself or convert it to an array of characters
      return a; // Returning 'a' as is for demonstration
    }
  }

  const getBlocks = (indexOfColum: number): JSX.Element[] => {
    if (!windowSize.width || !windowSize.height) return []; // If window size is not available, return an empty array
    // const { innerWidth, innerHeight } = window;
    const blockSize = innerWidth * 0.05;
    const nbOfBlocks = Math.ceil(innerHeight / blockSize);
    const shuffledIndexes = shuffle([...Array(nbOfBlocks)].map( (_, i) => i))
    return shuffledIndexes.map( (randomIndex: number, index: number) => {
      return (
        <motion.div 
          key={index} 
          className={styles.block}
          variants={anim}
          initial="initial"
          animate={menuIsActive ? "open" : "closed"}
          custom={[indexOfColum + randomIndex, (20 - indexOfColum + randomIndex)]}
        />
      )
    })
  }

  return (
    <div className={styles.pixelBackground}>
      {
        [...Array(20)].map( (_, index) => {
          return <div key={index} className={styles.column}>
            { getBlocks(index) }
          </div>
        })
      }
    </div>
  )
}


/*
import React, { useState, useEffect } from 'react'
import styles from './style.module.scss';
import { motion } from 'framer-motion';

const anim = {
  initial: {
    opacity: 0
  },
  open: (delay) => ({
    opacity: 1,
    transition: {duration: 0, delay: 0.02 * delay[0]}
  }),
  closed: (delay) => ({
    opacity: 0,
    transition: {duration: 0, delay: 0.02 * delay[1]}
  })
}

export default function HoriPixel({menuIsActive}) {
  // Shuffles array in place (Fisher–Yates shuffle).
  // @param {Array} a items An array containing the items.
  const shuffle = (a) => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }

  const getBlocks = (indexOfColum) => {
    const { innerWidth, innerHeight } = window;
    const blockSize = innerWidth * 0.05;
    const nbOfBlocks = Math.ceil(innerHeight / blockSize);
    const shuffledIndexes = shuffle([...Array(nbOfBlocks)].map( (_, i) => i))
    return shuffledIndexes.map( (randomIndex, index) => {
      return (
        <motion.div 
          key={index} 
          className={styles.block}
          variants={anim}
          initial="initial"
          animate={menuIsActive ? "open" : "closed"}
          custom={[indexOfColum + randomIndex, (20 - indexOfColum + randomIndex)]}
        />
      )
    })
  }

  return (
    <div className={styles.pixelBackground}>
      {
        [...Array(20)].map( (_, index) => {
          return <div key={index} className={styles.column}>
            {
              getBlocks(index)
            }
          </div>
        })
      }
    </div>
  )
}
*/