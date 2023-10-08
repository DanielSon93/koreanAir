import React from 'react'
import styles from './ButtonDouble.module.css';

export default function ButtonDouble({ datas, handleClickBtn }) {

  return (
    <ul className={styles.btnDouble}>
      {
        datas && datas.map((data, idx) =>
          <li key={idx} className={data.isSelected ? styles.active : ''}>
            <label onClick={() => handleClickBtn(idx)}>{data.about}</label>
          </li>)
      }
    </ul>
  )
}
