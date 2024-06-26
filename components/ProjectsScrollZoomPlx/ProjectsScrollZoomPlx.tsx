"use client";

import React, { useRef } from 'react';
import styles from './page.module.scss';

import Image from 'next/image';
import { useScroll, useTransform, motion} from 'framer-motion';


interface ProjectsScrollZoomPlxProps {
  matchedProjectObj: {
    projectName: string;
    slug: string;
    description: string;
    projectJson: {
      companyName: string;
      projectName: string;
      slug: string;
      description: string;
      siteUrl: string;
    }[];
    introImageJson: {
      url: string;
      title: string;
    }[];
    imageJson: {
      url: string;
      title: string;
    }[];
    pageImagesCollection: {
      items: {
        url: string;
        description: string;
        title: string;
      }[];
    };
  };
}

export default function ProjectsScrollZoomPlx({ 
  matchedProjectObj
}: ProjectsScrollZoomPlxProps) {

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

  const scales = [
    { scale: scale4 },
    { scale: scale5 },
    { scale: scale6 },
    { scale: scale5 },
    { scale: scale6 },
    { scale: scale8 },
    { scale: scale9 }
  ]

  // const matchedIntroImageJson = matchedProjectObj?.introImageJson;
  // // console.log(
  // //   'ProjectsScrollZoomPlx matchedProjectObj ', 
  // //   matchedProjectObj
  // // )

  const imgCollection = matchedProjectObj.pageImagesCollection;
  // console.log('imgCollection ', imgCollection.items)
  const firstSevenImgs = imgCollection.items.slice(0, 7)
  // console.log('firstSevenImgs ', firstSevenImgs)

  return (
    <div ref={container} className={styles.scrollZoomContainer}>
      <div className={styles.site_name_link}>
        <p>
          {matchedProjectObj.projectJson[0].companyName}
        </p>
      </div>
      <div className={styles.sticky}>
        {
          // matchedIntroImageJson.map( ({url, scale}, index: number) => (
          // matchedIntroImageJson.map( ({url}, index: number) => (
          firstSevenImgs.map( ({url}, index: number) => (
            <motion.div 
              key={ index }
              style={{ scale: scales[index].scale }}
              className={ `${styles.el} ` }
            >
              <div className={styles.imageContainer}>
                <Image
                  src={url}
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