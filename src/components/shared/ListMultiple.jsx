import React from 'react'
import styles from './ListMultiple.module.css';

export default function ListMultiple({ datas, handleClickList }) {

  return (
    <ul className={styles.listMultipleWrapper}>
      {
        datas && datas.map((menu, idx) =>
          <li key={idx}
            className={`${styles.listMultiple} ${menu.isSelected ? styles.active : ''}`}
            onClick={() => handleClickList(idx)}>
            {menu.about}
          </li>
        )
      }
    </ul >
  )
}
