import React from 'react'
import styles from './ButtonDouble.module.css';

export default function ButtonDouble({ datas, handleClickBtn }) {

  return (
    <ul className={styles.btnDouble}>
      {
        datas.map((data, idx) =>
          <li key={idx} className={data.isSelected ? styles.active : ''}>
            <span onClick={() => handleClickBtn(idx)}>{data.about}</span>
          </li>)
      }
    </ul>
  )
}
