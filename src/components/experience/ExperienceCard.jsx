import React, { useState } from 'react'
import styles from './ExperienceCard.module.css';

export default function ExperienceCard({ data }) {
  const { about, imgUrl, detail } = data;
  const [isEnter, setIsEnter] = useState(false);

  return (
    <li
      className={`${styles.list} ${isEnter ? styles.active : ''}`}
      onMouseEnter={() => setIsEnter(true)}
      onMouseLeave={() => setIsEnter(false)}>
      <div className={`${styles.main} ${isEnter ? styles.active : ''}`}>
        <span>{about}</span>
        <img src={imgUrl} alt="" />
      </div>
      <ul className={isEnter ? styles.active : ''}>
        {
          detail.map((item, idx) => <li key={idx}>{item}</li>)
        }
      </ul>
    </li>
  )
}
