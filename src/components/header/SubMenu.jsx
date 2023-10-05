import React from 'react'
import styles from './Header.module.css';
import SubMenuCard from './SubMenuCard';
import SubMenuPreviews from './SubMenuPreviewCard';

export default function SubMenu({ menu, idx, isActive, handleActiveMainMenu }) {
  const { menus, previews } = menu;

  const handleMouseEnter = (e) => {
    handleActiveMainMenu(true, idx);
  }

  const handleMouseLeave = (e) => {
    handleActiveMainMenu(false, idx);
  }

  return (
    <div className={`${styles.subMenus} ${isActive ? styles.active : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className={styles.subMenu}>
        {
          menus && menus.map((subMenu, idx) => <SubMenuCard key={idx} subMenu={subMenu} />)
        }
      </div>
      <div className={styles.subPreview}>
        {
          previews && previews.map((subPreview, idx) => <SubMenuPreviews key={idx} subPreview={subPreview} />)
        }
      </div>
    </div>
  )
}