import React, { useState } from 'react'
import styles from './CheckForm.module.css';
import ButtonSubmit from '../../shared/ButtonSubmit';
import useNowDate from '../../../hooks/nowDate';

export default function CheckInForm({ idx, isSelected }) {
  const [placeholder, setPlaceholder] = useState(true);
  const [dateBefore, date, dateAfter] = useNowDate(1, 3);

  return (
    <form className={`${styles.form} ${isSelected ? styles.active : ''}`}>
      <div className={styles.reservationNumber}>
        <h3>예약번호 또는 항공권 번호</h3>
        {
          idx === 1 &&
          <input
            type="text"
            placeholder={placeholder ? '예) A1B2C3 또는 1801234567890' : ''}
            onFocus={() => setPlaceholder(false)}
            onBlur={() => setPlaceholder(true)} />
        }
        {
          idx === 2 &&
          <input
            type="text"
            placeholder={placeholder ? '예) 123ABC 또는 12345678' : ''}
            onFocus={() => setPlaceholder(false)}
            onBlur={() => setPlaceholder(true)} />
        }
      </div>
      <div className={styles.travelDate}>
        <h3>출발일</h3>
        {
          idx === 1 &&
          <button type='button'>
            <span></span>
          </button>
        }
        {
          idx === 2 &&
          <select defaultValue={date}>
            {
              dateBefore.map((date, idx) => <option key={idx} value={date}>{date}</option>)
            }
            <option value={date}>{date}</option>
            {
              dateAfter.map((date, idx) => <option key={idx} value={date}>{date}</option>)
            }
          </select>
        }
      </div>
      <div className={styles.passengerLastName}>
        <h3>승객 성</h3>
        <input type="text" />
        <div className={styles.notice}>국내선 한글 예약인 경우, 한글 성과 이름을 입력하세요.</div>
      </div>
      <div className={styles.passengerFirstName}>
        <h3>승객 이름</h3>
        <input type="text" />
      </div>
      <ButtonSubmit text='조회' />
    </form>
  )
}
