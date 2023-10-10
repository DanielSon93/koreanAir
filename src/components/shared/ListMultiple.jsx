import React from 'react'
import styles from './ListMultiple.module.css';

export default function ListMultiple({ datas, handleClickList }) {

  return (
    <ul className={styles.listMultipleWrapper}>
      {
        datas && datas.map((data, idx) =>
          <li key={idx} className={`${styles.listMultiple} ${data.isSelected ? styles.active : ''}`} onClick={() => handleClickList(idx)}> 
            <label>{data.about}</label>
          </li>
        )
      }
    </ul >
  )
}
