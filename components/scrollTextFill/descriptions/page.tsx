import React from 'react'
import styles from './page.module.scss';
import { DescriptionProps } from '../page';

export default function Description({ 
  data, selectedProject 
}: DescriptionProps) {

  const crop = (string: string, maxLength: number) => {
      return string.substring(0, maxLength);
  }
  
  return (
    <div className={styles.descriptions}>
      {
        data.map( (project, i) => {
          const { title, description } = project;
          return (
          <div 
            key={i} 
            className={styles.description}
            style={{clipPath: selectedProject == i ? "inset(0 0 0)" : "inset(50% 0 50%"}}
          >
            <p>{crop(title, 9)}</p>
            <p>{description}</p>
          </div>
          )
        })
      }
    </div>
  )
}



/*
import React from 'react'
import styles from './page.module.scss';

interface DescProps {
  data: [];
  selectedProject: null;
}

export default function Description({data, selectedProject}: DescProps) {
  // console.log('selectedProject ', selectedProject)
  
  const crop = (string: string, maxLength: number) => {
      return string.substring(0, maxLength);
  }
  
  return (
    <div className={styles.descriptions}>
      {
        data.map( (project, i) => {
          const { title, description } = project;
          return (
          <div 
            key={i} 
            className={styles.description}
            style={{
              clipPath: selectedProject == i ? 
              "inset(0 0 0)" : 
              "inset(50% 0 50%"
            }}
          >
            <p>{crop(title, 9)}</p>
            <p>{description}</p>
          </div>
          )
        })
      }
    </div>
  )
}
*/




