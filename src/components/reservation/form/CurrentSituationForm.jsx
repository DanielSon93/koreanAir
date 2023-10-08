import React, { useCallback, useReducer, useState } from 'react'
import styles from './CurrentSituationForm.module.css';
import ButtonDouble from '../../shared/ButtonDouble';
import ListMultiple from '../../shared/ListMultiple';
import selectedChangeReducer from '../../../reducer/selectedChangeReducer';
import ButtonDestination from '../../shared/ButtonDestination';
import ButtonReverseDestination from '../../shared/ButtonReverseDestination';
import ButtonSubmit from '../../shared/ButtonSubmit';
import useNowDate from '../../../hooks/nowDate';

export default function CurrentSituationForm({ isSelected, datas }) {
  const [currentSituationType, dispatchBtn] = useReducer(selectedChangeReducer, datas.currentSituation);
  const [destination, dispatchList] = useReducer(selectedChangeReducer, datas.destination);
  const [cityName, setCityName] = useState(datas.cityName);
  const [dateBefore, date, dateAfter] = useNowDate(0, 0);

  const handleClickBtn = useCallback((selectedIdx) => {
    dispatchBtn({ selectedIdx });
  }, []);

  const handleClickList = useCallback((selectedIdx) => {
    dispatchList({ selectedIdx });
  }, []);

  const handleCityName = () => {
    setCityName();
  }

  return (
    <form className={`${styles.form} ${isSelected ? styles.active : ''}`}>
      <div className={styles.majorInfo}>
        <ButtonDouble datas={currentSituationType} handleClickBtn={handleClickBtn} />
        <ListMultiple datas={destination} handleClickList={handleClickList} />
      </div>
      <div className={styles.detailInfo}>
        <div className={styles.destinationSearch}>
          <ButtonDestination datas={cityName[0]} handleCityName={handleCityName} />
          <ButtonReverseDestination datas={cityName} handleCityName={handleCityName} />
          <ButtonDestination datas={cityName[1]} handleCityName={handleCityName} />
        </div>
        <div className={styles.travelPlans}>
          <div className={styles.travelDate}>
            <h3>출발일</h3>
            <button type='button' className={styles.travelDateSelector}>
              <span>
                <span>{date}</span>
              </span>
            </button>
          </div>
          <ButtonSubmit text='조회' />
        </div>
      </div>
    </form>
  )
}