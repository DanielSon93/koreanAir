import React, { useReducer } from 'react'
import styles from './ReservationForm.module.css';
import ButtonDouble from '../../shared/ButtonDouble';
import ListMultiple from '../../shared/ListMultiple';
import selectedChangeReducer from '../../../reducer/selectedChangeReducer';

export default function ReservationForm({ isSelected }) {
  const [reservationType, dispatchRT] = useReducer(selectedChangeReducer, initReservationTypeList);
  const [boarding, dispatchB] = useReducer(selectedChangeReducer, initBoarding);

  const handleClickRT = (selectedIdx) => {
    dispatchRT({ selectedIdx });
  };

  const handleClickB = (selectedIdx) => {
    dispatchB({ selectedIdx });
  }

  return (
    <form className={`${styles.form} ${isSelected ? styles.active : ''}`}>
      <div>
        <ButtonDouble datas={reservationType} handleClickBtn={handleClickRT} />
        <ListMultiple datas={boarding} handleClickList={handleClickB} />
      </div>
      <div>

      </div>
    </form>
  )
}

const initReservationTypeList = [
  {
    "about": "예매",
    "isSelected": true
  },
  {
    "about": "마일리지 예매",
    "isSelected": false
  }
]

const initBoarding = [
  {
    "about": "왕복",
    "isSelected": true
  },
  {
    "about": "편도",
    "isSelected": false
  },
  {
    "about": "다구간 >",
    "isSelected": false
  }
]