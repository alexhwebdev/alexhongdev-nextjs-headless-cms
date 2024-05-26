import React from 'react'
import styles from './page.module.scss';
import { motion } from 'framer-motion';

export interface Props {
  menuIsActive: boolean;
}

const anim = {
  initial: { opacity: 0 },
  open: { opacity: 1 },
  exit: { opacity: 0 }
}

export default function Menu({menuIsActive}: Props) {
  return (
    <motion.div 
      className={styles.menu}
      variants={anim}
      initial="initial"
      animate={menuIsActive ? "open" : "closed"}
    >
      <p>Home</p>
      <p>About</p>
      <p>Contact</p>
    </motion.div>
  )
}




