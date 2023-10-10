import styles from './ButtonDestination.module.css';

export default function ButtonDestination({ datas, handleSearch, title }) {

  return (
    <>
      <button type='button' className={styles.button}>
        <span className={styles.cityNameEng}>{datas.destinationEng}</span>
        <span className={styles.cityNameKor}>{datas.destinationKor}</span>
      </button>
    </>
  )
}
