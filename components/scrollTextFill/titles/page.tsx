import React, { useRef } from 'react'
import styles from './page.module.scss';
import { useScroll, motion, useTransform, useMotionTemplate } from 'framer-motion';
import { Project } from '../page';

interface TitlesProps {
  data: Project[];
  setSelectedProject: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Titles({ 
  data, setSelectedProject 
}: TitlesProps) {

  return (
    <div className={styles.titles}>
      {
        data.map( (project, i) => {
          return <Title key={i} data={{...project, i}} setSelectedProject={setSelectedProject}/>
        })
      }
    </div>
  )
}

function Title({ 
  data, setSelectedProject 
}: { 
  data: Project & { i: number }; 
  setSelectedProject: React.Dispatch<React.SetStateAction<number | null>> 
}) {
  const { title, speed, i } = data;
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', `${25 / speed}vw end`]
  })

  const clipProgress = useTransform(scrollYProgress, [0,1], [100, 0]);
  const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;
  
  return (
    <div ref={container} className={styles.title}>
      <div 
        className={styles.wrapper}
        onMouseOver={() => {setSelectedProject(i)}}
        onMouseLeave={() => {setSelectedProject(null)}}
      >
        <motion.p style={{clipPath: clip}}>
          {title}
        </motion.p>
        <p>
          {title}
        </p>
      </div>
    </div>
  )
}



/*
import React, { useRef } from 'react'
import styles from './page.module.scss';
import { useScroll, motion, useTransform, useMotionTemplate } from 'framer-motion';

interface TitlesProps {
  data: { [key: string]: any };
  setSelectedProject: (project: { [key: string]: any } | null) => void;
}

export default function Titles({data, setSelectedProject}: TitlesProps) {
  // console.log('setSelectedProject ', typeof setSelectedProject)
  return (
    <div className={styles.titles}>
      {
        data.map( (project: [], i: number) => {
          return (
            <Title 
              key={i} 
              data={{...project, i}} 
              setSelectedProject={setSelectedProject}
            />
          )
        })
      }
    </div>
  )
}

function Title({data, setSelectedProject}: TitlesProps) {

  const { title, speed, i } = data;
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', `${25 / speed}vw end`]
  })

  const clipProgress = useTransform(scrollYProgress, [0,1], [100, 0]);
  const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;
  
  return (
    <div ref={container} className={styles.title}>
      <div 
        className={styles.wrapper}
        onMouseOver={() => {setSelectedProject(i)}}
        onMouseLeave={() => {setSelectedProject(null)}}
      >
        <motion.p style={{clipPath: clip}}>
          {title}
        </motion.p>
        <p>
          {title}
        </p>
      </div>
    </div>
  )
}
*/


