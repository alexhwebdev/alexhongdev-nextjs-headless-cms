"use client";

import React, { useRef } from 'react';
import styles from './page.module.scss';

// import Picture1 from '../../../../public/images/1.jpeg';
// import Picture2 from '../../../../public/images/2.jpeg';
// import Picture3 from '../../../../public/images/3.jpg';
// import Picture4 from '../../../../public/images/4.jpg'
// import Picture5 from '../../../../public/images/5.jpg'
// import Picture6 from '../../../../public/images/6.jpg'
// import Picture7 from '../../../../public/images/7.jpeg'

import Picture1 from '../../../../public/images/projects/ibd-ai/ai-0.png';
import Picture2 from '../../../../public/images/projects/ibd-ai/ai-1.png';
import Picture3 from '../../../../public/images/projects/ibd-ai/ai-6-long.png';
import Picture4 from '../../../../public/images/projects/ibd-ai/ai-3.png';
import Picture5 from '../../../../public/images/projects/ibd-ai/ai-4.png';
import Picture6 from '../../../../public/images/projects/ibd-ai/ai-5.png';
import Picture7 from '../../../../public/images/projects/ibd-ai/ai-2.png';
import Image from 'next/image';
import { useScroll, useTransform, motion} from 'framer-motion';



interface Props {
  siteInfoCompany: string;
  siteInfoLink: string;
}

export default function ProjectsScrollZoomPlx({ 
  siteInfoCompany, siteInfoLink
}: Props) {
  // console.log('params ', params)

  const siteCompany = siteInfoCompany;
  const siteLink = siteInfoLink;

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 2.5]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: Picture1,
      scale: scale4
    },
    {
      src: Picture2,
      scale: scale5
    },
    {
      src: Picture3,
      scale: scale6
    },
    {
      src: Picture4,
      scale: scale5
    },
    {
      src: Picture5,
      scale: scale6
    },
    {
      src: Picture6,
      scale: scale8
    },
    {
      src: Picture7,
      scale: scale9
    }
  ]

  return (
    <div ref={container} className={styles.scrollZoomContainer}>
      <div className={styles.site_name_link}>
        <a href={siteLink}>
          {siteCompany}
        </a>
      </div>
      <div className={styles.sticky}>
        {
          pictures.map( ({src, scale}, index) => (

              <motion.div 
                key={index} 
                style={{scale}} 
                className={styles.el}
              >
                <div className={styles.imageContainer}>
                  <Image
                    src={src}
                    fill
                    alt="image"
                    // placeholder='blur'
                    sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                  />
                </div>
              </motion.div>

          ))
        }
      </div>
    </div>
  );
};
// export default ProjectsScrollZoomPlx;