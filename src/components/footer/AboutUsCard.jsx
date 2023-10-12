import React from 'react'
import styles from './AboutUsCard.module.css';

export default function AboutUsCard({ menu }) {

  return (
    <ul className={styles.menuList}>
      <h2>{menu.title}</h2>
      {
        menu.menuList.map((item, idx) => <li key={idx}><a>{item}</a></li>)
      }
    </ul>
  )
}
