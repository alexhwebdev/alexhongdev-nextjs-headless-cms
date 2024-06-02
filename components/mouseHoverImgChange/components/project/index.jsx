'use client';
import React from 'react'
import styles from './style.module.css';

export default function Project({index, title, setModal}) {

  return (
    <div className={styles.project}
      onMouseEnter={() => {
        // console.log('index', index)
        setModal({active: true, index})}
      } 
      onMouseLeave={() => {setModal({active: false, index})}} 
    >
      <h2>{title}</h2>
      <p>Design & Development</p>
    </div>
  )
}
