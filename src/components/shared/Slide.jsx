import React from 'react'
import styles from './Slide.module.css';

export default function Slide({ slide }) {

  return (
    <div className={styles.slide}>
      <div className={styles.slideImgWrapper}>
        <img src={slide.url} alt="" className={styles.slideImg} draggable={false} />
      </div>
      <div className={styles.title}>
        {slide.title}
      </div>
    </div>
  )
}
