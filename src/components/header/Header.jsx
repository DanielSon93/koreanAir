import React, { useEffect, useState } from 'react'
import styles from './Header.module.css';
import axios from 'axios';
import MainMenu from './MainMenu';
import SubMenu from './SubMenu';

export default function Header() {
  const [navMenuList, setNavMenuList] = useState([]);
  const [isActiveMainMenu, setIsActiveMainMenu] = useState([false, false, false, false]);

  const handleActiveMainMenu = (eventStatus, changeIdx) => {
    if (eventStatus) {
      setIsActiveMainMenu(prev => prev.map((menu, idx) => (changeIdx === idx ? true : false)));
    } else {
      setIsActiveMainMenu(prev => prev.map(menu => false));
    }
  }

  useEffect(() => {
    axios.get('/data/navMenuList.json')
      .then((res) => setNavMenuList(res.data.navMenuList))
      .catch(console.error);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.convenience}>
        <ul>
          <li>
            <a href='#'>
              <img src="https://www.koreanair.com/icon-common-16-x-16-event.svg" alt="event" />
              <span>이벤트</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <img src="https://www.koreanair.com/icon-common-16-x-16-customer.svg" alt="customer" />
              <span>자주 묻는 질문</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <img src="https://www.koreanair.com/lang__button.svg" alt="language" />
              <span>대한민국&nbsp;</span>
              <strong>한국어</strong>
            </a>
          </li>
        </ul>
      </div>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <a href="#">
            <img src="https://www.koreanair.com/logo--koreanair-pc.png" alt="" />
          </a>
          <a href="#">
            <img src="https://www.koreanair.com/logo--skyteam-pc.png" alt="" />
          </a>
        </div>
        <ul className={styles.mainMenus}>
          {
            navMenuList && navMenuList.map((menu, idx) =>
              <MainMenu key={idx} menu={menu} idx={idx} isActive={isActiveMainMenu[idx]} handleActiveMainMenu={handleActiveMainMenu} />)
          }
        </ul>
        <div className={styles.utils}>
          <div className={styles.login}>
            <button type='button'>로그인</button>
          </div>
          <div className={styles.search}>
            <img src="https://www.koreanair.com/icon-gnb-40-x-40-search.svg" alt="" />
          </div>
        </div>
      </nav>
      {
        navMenuList && navMenuList.map((menu, idx) =>
          <SubMenu key={idx} menu={menu} idx={idx} isActive={isActiveMainMenu[idx]} handleActiveMainMenu={handleActiveMainMenu} />)
      }
    </header>
  )
}