import React, { useEffect, useState } from 'react'
import styles from './Reservation.module.css';
import ReservationForm from './form/ReservationForm';
import CheckForm from './form/CheckForm';
import CurrentSituationForm from './form/CurrentSituationForm';
import axios from 'axios';

export default function Reservation() {
  const [reservationMenuList, setReservationMenuList] = useState([]);

  const handleClick = (selectedIdx) => {
    setReservationMenuList((prev) => {
      return prev.map((menu, idx) => ({
        ...menu,
        isSelected: idx === selectedIdx,
      }));
    });
  };

  useEffect(() => {
    axios.get('/data/reservationList.json')
      .then(res => setReservationMenuList(res.data.reservationMenuList))
      .catch(console.error);
  }, [])

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
              reservationMenuList.map((menu, idx) => <li key={idx} className={menu.isSelected ? styles.active : ''} onClick={() => handleClick(idx)}>{menu.about}</li>)
            }
          </ul>
          <div className={styles.reservationSubMenu}>
            {
              reservationMenuList.map((menu, idx) => {
                if (idx === 0) return <ReservationForm key={idx} isSelected={menu.isSelected} datas={menu.datas} />
                if (idx === 1 || idx === 2) return <CheckForm key={idx} idx={idx} isSelected={menu.isSelected} />
                if (idx === 3) return <CurrentSituationForm key={idx} isSelected={menu.isSelected} datas={menu.datas} />
                return null;
              })
            }
          </div>
        </div>
      </section>
    </div>
  )
}