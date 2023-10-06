import React from 'react'
import styles from './CheckForm.module.css';

export default function CheckInForm({ isSelected }) {
  return (
    <form className={`${styles.form} ${isSelected ? styles.active : ''}`}>

    </form>
  )
}
