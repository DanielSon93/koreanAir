import React, { useCallback, useReducer, useState } from 'react'
import styles from './ReservationForm.module.css';
import ButtonDouble from '../../shared/ButtonDouble';
import ListMultiple from '../../shared/ListMultiple';
import selectedChangeReducer from '../../../reducer/selectedChangeReducer';
import ButtonDestination from '../../shared/ButtonDestination';
import ButtonReverseDestination from '../../shared/ButtonReverseDestination';
import ButtonSubmit from '../../shared/ButtonSubmit';

export default function ReservationForm({ isSelected, datas }) {
  const [reservationType, dispatchBtn] = useReducer(selectedChangeReducer, datas.reservationType);
  const [boarding, dispatchList] = useReducer(selectedChangeReducer, datas.boarding);
  const [cityName, setCityName] = useState(datas.cityName);

  const handleClickBtn = useCallback((selectedIdx) => {
    dispatchBtn({ selectedIdx });
  }, []);

  const handleClickList = useCallback((selectedIdx) => {
    dispatchList({ selectedIdx });
  }, []);

  return (
    <form className={`${styles.form} ${isSelected ? styles.active : ''}`}>
      <div className={styles.majorInfo}>
        <ButtonDouble datas={reservationType} handleClickBtn={handleClickBtn} />
        <ListMultiple datas={boarding} handleClickList={handleClickList} />
      </div>
      <div className={styles.detailInfo}>
        <div className={styles.destinationSearch}>
          <ButtonDestination datas={cityName[0]} handleSearch={setCityName} title='출발지 검색' />
          <ButtonReverseDestination datas={cityName} handleSearch={setCityName} />
          <ButtonDestination datas={cityName[1]} handleSearch={setCityName} title='도착지 검색' />
        </div>
        <div className={styles.travelPlans}>
          <div className={styles.travelDate}>
            <h3>출발일</h3>
            <button type='button' className={styles.travelDateSelector}>
              <span>
                <span>가는 날</span>
                <span>&nbsp;~&nbsp;</span>
                <span>오는 날</span>
              </span>
            </button>
          </div>
          <div className={styles.passengers}>
            <h3>탑승객</h3>
            <button type='button' className={styles.passengersSelector}>
              <span></span>
            </button>
          </div>
          <div className={styles.seatClass}>
            <h3>좌석 등급</h3>
            <button type='button' className={styles.seatClassSelector}>
              <span></span>
            </button>
          </div>
          <ButtonSubmit text='항공편 검색' />
        </div>
      </div>
    </form>
  )
}