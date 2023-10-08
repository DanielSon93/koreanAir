import React from 'react'
import styles from './ButtonSubmit.module.css';

export default function ButtonSubmit({ text }) {
  return (
    <div className={styles.buttonSubmit}>
      <button>
        {text}
      </button>
    </div>
  )
}
