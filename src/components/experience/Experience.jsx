import React from 'react'
import styles from './Experience.module.css';
import ExperienceCard from './ExperienceCard';

export default function Experience() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h1>여행의 완성을 위한 경험</h1>
        <ul>
          {
            initExperience.map((data, idx) => <ExperienceCard key={idx} data={data} />)
          }
        </ul>
      </div>
    </section>
  )
}

const initExperience = [
  {
    "about": "대한항공카드",
    "imgUrl": "https://www.koreanair.com/wwwupload/maincontents/completejourney/masl__credit-card-pc.png",
    "detail": ["대한항공카드"]
  },
  {
    "about": "호텔",
    "imgUrl": "https://www.koreanair.com/wwwupload/maincontents/completejourney/masl__hotel-pc.png",
    "detail": ["아고다", "Hotel.com"]
  },
  {
    "about": "렌터카",
    "imgUrl": "https://www.koreanair.com/wwwupload/maincontents/completejourney/masl__rental-car-pc.png",
    "detail": ["Hertz", "SK렌터카", "롯데렌터카", "RentalCars.com"]
  },
  {
    "about": "기내 면세점",
    "imgUrl": "https://www.koreanair.com/wwwupload/maincontents/completejourney/masl__duty-free-pc.png",
    "detail": ["SKYSHOP"]
  },
  {
    "about": "여행자 보험",
    "imgUrl": "https://www.koreanair.com/wwwupload/maincontents/completejourney/masl__insurance-pc.png",
    "detail": ["Chubb 여행보험"]
  },
  {
    "about": "여행 상품",
    "imgUrl": "https://www.koreanair.com/wwwupload/maincontents/completejourney/masl__guide-book-pc.png",
    "detail": ["한진관광", "KALPAK"]
  }
]