'use client'

import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import styles from './page.module.css'
import { useState } from 'react';  
import { motion } from 'framer-motion';
import useMousePosition from '../utils/useMousePosition';
import { raleway } from '@/app/fonts';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 500 : 40;

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    // -------------------- Delay page on load
    // https://gsap.com/community/forums/topic/35762-how-to-add-delay-first-page-load-only/
    let isStartup = true;
    window.addEventListener("load", () => {
      setTimeout(() => isStartup = false, 3000); // after 3 seconds, set isStartup to false
    });
    ScrollTrigger.batch(".delay_page_load", {
      onEnter: elements => {
        gsap.from(elements, {
          autoAlpha: 0,
          // y: 60,
          // stagger: 0.2,
          delay: isStartup ? 1 : 0
        });
      },
      once: true
    });
  }, []);

  return (
    <div className={`delay_page_load ${styles.contact} ${raleway.className}`}>
      {/* {x !== null && y !== null && ( */}
        <motion.div className={styles.mask}
          animate={{
            WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ 
            type: "tween", // Tween is duration based transition
            ease: "circOut", 
            // duration: 0.5
            duration: 0.2
          }}
        >
            <p 
              onMouseEnter={() => {setIsHovered(true)}} 
              onMouseLeave={() => {setIsHovered(false)}}
            >
              Feel free to reach out! Send me a message and let&apos;s get in touch.
            </p>
        </motion.div>
      {/* )} */}

      <div className={styles.body}>
        <p>Let&apos;s <span>pool our talents</span> and build something extraordinary!</p>
      </div>

    </div>
  )
}
/*
Send me a message and let's get in touch. 
"Feel free to reach out, and we'll touch base."
"Drop me a note, and let's get in touch."
"Reach out to me, and let's stay connected."
"Ping me, and we'll get in touch."
"Hit me up, and we can arrange something."
"Don't hesitate to message me; let's connect."

Let's build something cool together!
"Let's collaborate and create something awesome!"
"Together, we can build something remarkable!"
"Let's team up and make something really cool!"
"Let's pool our talents and build something extraordinary!"
"Let's work together to create something truly special!"
"Collaborate with me, and let's build something incredible!"

-------------------------------------- https://minhpham.design/
------------------- About Me :
I'm a selectively skilled product designer with strong focus on producing 
high quality & impactful digital experience.

A visual designer with skills that haven't been replaced by A.I. (yet)
- making good shit only if the paycheck is equally good.


Over a decade of experience in teractive design 
and working with some of the most talented people in the business

Only 7 seven years of actively producing cool shit.
Other years were me messing around and navigating through 
my captureRejectionSymbol.



-------------------------------------- https://sannisahil.com/

As a passionate Digital Designer and independent Design
Director, I am committed to creating visual narratives that engage
and inspire

A DEDICATED WEB DESIGNER AND DESIGN
DIRECTOR WITH OVER 8 YEARS OF
EXPERIENCE IN THE INDUSTRY.

My approach centers around problem-solving through interactive design. 
I believe that effective design goes beyond aesthetics and should 
seamlessly address the unique challenges faced by each client. 
By combining functionality with visual appeal, I strive to 
create interactive designs that not only catch the eye but also 
engage users in meaningful ways.

Thanks for dropping by!
Stay connected and join me on my thrilling journey by exploring 
my network. Together, we'll embark on exciting new adventures!



-------------------------------------- https://matthieuojeanson.com/


SPECIALIZED IN CREATING LANDING PAGES, WEBSITES AND MOBILE 
APPLICATIONS, I TRANSFORM YOUR IDEAS INTO REAL SHOWCASES. 
MY UNIQUE TECHNICAL EXPERTISE AND CREATIVITY FOCUS ON YOUR 
BRAND TO EFFECTIVELY ENGAGE YOUR AUDIENCE.


UX
THE CREATION OF MODULAR STATIC WEBSITES USING CUTTING-EDGE 
TECHNOLOGIES SUCH AS REACT, NEXT, AND GATSBY. EACH OF THESE 
SITES IS DESIGNED TO OFFER AN EXCEPTIONAL USER EXPERIENCE.
[01]

SEO
THE IMPLEMENTATION OF CMS DATA SCHEMAS AND SEO OPTIMIZATION TO 
ENSURE MAXIMUM ONLINE VISIBILITY. MASTERY OF THESE ASPECTS IS 
ESSENTIAL FOR THE SUCCESS OF ANY ONLINE PROJECT.
[02]

MOBILE
THE DESIGN AND DEVELOPMENT OF MOBILE APPLICATIONS FOR THE 
E-COMMERCE SECTOR, USING REACT NATIVE. THESE APPLICATIONS 
PROVIDE A SMOOTH AND USER-FRIENDLY SHOPPING EXPERIENCE.
[03]

INNOVATIVE
THE CREATION OF INNOVATIVE WEB APPLICATIONS USING APPROACHES 
SUCH AS ATOMIC DESIGN SLICING, INTEGRATION, AND END-TO-END 
TESTING WITH TOOLS LIKE STORYBOOK, CHROMATIC, JEST, AND VITE. 
THIS ENSURES THAT EACH ELEMENT FUNCTIONS SEAMLESSLY AND EFFECTIVELY.
[04]

TECHNO
I AM PASSIONATE ABOUT MASTERING THE LATEST WEB DEVELOPMENT 
TECHNOLOGIES. I EXCEL IN CREATING STATIC SITES (JAMSTACK), 
AND I AM COMFORTABLE WITH THREE.JS, GSAP, RTK, AND GRAPHQL, 
WHICH ALLOWS ME TO CREATE HIGH-PERFORMING WEBSITES THAT MEET MY CLIENTS' NEEDS.
[05]

I LOOK FORWARD TO
DISCUSSING YOUR NEEDS AND
HOW I CAN CONTRIBUTE TO
YOUR NEXT PROJECT.

PLEASE DON'T HESITATE TO CONTACT ME
TO DISCUSS YOUR IDEAS AND GOALS FURTHER.
I AM EXCITED ABOUT THE OPPORTUNITY
TO CONNECT WITH YOU!



*/



// ------------------- About Me :


// ------------------- What I Do :



// ------------------- Experience



// ------------------- History


// ------------------- Connect / Contact / Get in touch





