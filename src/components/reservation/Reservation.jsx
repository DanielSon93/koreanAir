import React, { useState } from 'react'
import styles from './Reservation.module.css';

export default function Reservation() {
  const [reservationMenuList, setReservationMenuList] = useState(initReservationMenuList);

  const handleClick = (selectedIdx) => {
    setReservationMenuList((prev) => {
      return prev.map((menu, idx) => ({
        ...menu,
        status: idx === selectedIdx,
      }));
    });
  };

  return (
    <div className={styles.reservation}>
      <section>
        <div className={styles.notice}>
          <div className={styles.noticeImg}>
            <img src="https://www.koreanair.com/icon-main__alert.svg" alt="" />
          </div>
          <span>태풍 영향 항공편 비정상 운항 예상 (대만)</span>
        </div>
        <div className={styles.reservationAll}>
          <ul className={styles.reservationMainMenu}>
            {
              reservationMenuList.map((menu, idx) => <li key={idx} className={menu.status ? styles.active : ''} onClick={() => handleClick(idx)}>{menu.about}</li>)
            }
          </ul>
          <div className={styles.reservationSubMenu}>

          </div>
        </div>
      </section>
    </div>
  )
}

const initReservationMenuList = [
  {
    "about": "항공권 예매",
    "status": true
  },
  {
    "about": "예약 조회",
    "status": false
  },
  {
    "about": "체크인",
    "status": false
  },
  {
    "about": "항공권 현황",
    "status": false
  },
];