"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";


// const duration = 0.25;
const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      // duration: 0.25,
      duration: 1,

      // delay: 0.25, // WORKS
      delay: 0.3,

      when: "afterChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: { 
      delay: 1,
      // delay: 0.5,

      // duration: 0.25,
      duration: 1, // WORKS
      when: "beforeChildren",
    },
  },
};

// const PageTransitionEffect = ({ children }: { children: React.ReactNode }) => {
const PageTransitionEffect = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  // The `key` is tied to the url using the 
  // `usePathname` hook.
  // 'usePathname' gives you currently active path.
  const pathname = usePathname();
  // console.log('PageTransitionEffect.js path ', path)

  return (
    <AnimatePresence 
      // https://www.framer.com/motion/animate-presence/
      mode="wait" 
      // sync, wait, popLayout, 
    >
      <motion.div
        key={pathname}
        // key={path}
        variants={variants}

        initial="initial"
        animate="enter"
        exit="exit"
        // transition={{ type: "linear" }}
        className="page_transition_effect"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransitionEffect;


