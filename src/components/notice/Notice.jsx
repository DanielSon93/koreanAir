import React from 'react'
import styles from './Notice.module.css';

export default function Notice() {

  return (
    <section className={styles.section}>
      <div className={styles.title}>
        <h1>알려드립니다</h1>
        <a href="#">목록보기</a>
      </div>
      <div className={styles.menus}>
        <ul>
          {
            initNotice.map((data, idx) => <li key={idx} className={styles.list}>
              <a href="#">
                <h3>{data.title}</h3>
                <span>{data.date}</span>
              </a>
            </li>)
          }
        </ul>
        <picture className={styles.picture}>
          <a href="#">
            <img src="/image/A_PC.png" alt="" />
            <div className={styles.pictureInfo}>
              <div>대한항공 My 앱</div>
              <span>내 여행에 최적화된 맞춤 정보를 <br></br>확인하세요.</span>
            </div>
          </a>
        </picture>
      </div>
    </section>
  )
}

const initNotice = [
  {
    "title": "이스라엘 텔아비브 출도착 항공권 환불 및 재발행 수수료 면제",
    "date": "2023.10.11."
  },
  {
    "title": "여수-제주 운항 재개",
    "date": "2023.10.06."
  },
  {
    "title": "국내선 유류할증료 (2023년 11월)",
    "date": "2023.10.05."
  },
  {
    "title": "동남아 노선 신규 취항 및 단거리 노선 재운항 안내",
    "date": "2023.09.27."
  }
]