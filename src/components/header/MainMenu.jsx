import React from 'react'
import styles from './Header.module.css';

export default function MainMenu({ menu, idx, isActive, handleActiveMainMenu }) {

  return (
    <li className={isActive ? styles.active : ''} onMouseEnter={() => handleActiveMainMenu(true, idx)} onMouseLeave={() => handleActiveMainMenu(false, idx)}>
      <span>{menu.title}</span>
      <div></div>
    </li>
  )
}
