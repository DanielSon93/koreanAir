import React, { useState } from 'react'
import styles from './SubMenuCard.module.css';

export default function SubMenuCard({ subMenu }) {
  const { subTitle, subMenus } = subMenu;

  return (
    <div className={styles.subMenuCard}>
      <h2>{subTitle}</h2>
      <ul className={styles.subMenu}>
        {
          subMenus && subMenus.map((subMenu, idx) => <li key={idx}><a href='#'>{subMenu}</a></li>)
        }
      </ul>
    </div>
  )
}
