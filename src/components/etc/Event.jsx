import React, { useState } from 'react'
import styles from './Event.module.css';

export default function Event() {
  const [isClick, setIsClick] = useState(true);

  return (
    <ul className={`${styles.buttons} ${isClick ? styles.active : ''}`}>
      <li>
        <button
          type='button'
          className={styles.controller}
          onClick={() => setIsClick(prev => !prev)}>
          <div></div>
          <div></div>
        </button>
      </li>
      <li>
        <a href='#'>
          <button type='button' className={styles.chatbot}>
            <img src="https://www.koreanair.com/icon-float__chatbot.svg" alt="" />
          </button>
        </a>
      </li>
      <li>
        <a href='#'>
          <button type='button' className={styles.event}>
            <img src="https://www.koreanair.com/icon-float__event-ko.svg" alt="" />
          </button>
        </a>
      </li>
    </ul>
  )
}
