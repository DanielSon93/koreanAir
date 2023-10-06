import React, { useReducer } from 'react'
import styles from './CurrentSituationForm.module.css';
import ButtonDouble from '../../shared/ButtonDouble';
import ListMultiple from '../../shared/ListMultiple';
import selectedChangeReducer from '../../../reducer/selectedChangeReducer';

export default function CurrentSituationForm({ isSelected }) {
  const [currentSituationType, dispatchCST] = useReducer(selectedChangeReducer, initCurrentSituationTypeList);
  const [destination, dispatchD] = useReducer(selectedChangeReducer, initDestination);
  
  const handleClickCST = (selectedIdx) => {
    dispatchCST({ selectedIdx });
  };

  const handleClickD = (selectedIdx) => {
    dispatchD({ selectedIdx });
  }

  return (
    <form className={`${styles.form} ${isSelected ? styles.active : ''}`}>
      <div>
        <ButtonDouble datas={currentSituationType} handleClickBtn={handleClickCST} />
        <ListMultiple datas={destination} handleClickList={handleClickD} />
      </div>
      <div>

      </div>
    </form>
  )
}

const initCurrentSituationTypeList = [
  {
    "about": "출도착 현황",
    "isSelected": true
  },
  {
    "about": "주간 스케줄",
    "isSelected": false
  }
]

const initDestination = [
  {
    "about": "출/도착지",
    "isSelected": true
  },
  {
    "about": "편명",
    "isSelected": false
  }
]