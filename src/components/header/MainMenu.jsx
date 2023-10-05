import React, { useState } from 'react'
import styles from './Header.module.css';

export default function MainMenuCard({ menu, idx, isActive, handleActiveMainMenu }) {
  const handleMouseEnter = () => {
    handleActiveMainMenu(true, idx);
  }

  const handleMouseLeave = () => {
    handleActiveMainMenu(false, idx);
  }

  return (
    <li className={isActive ? styles.active : ''} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <span>{menu.title}</span>
      <div></div>
    </li>
  )
}
