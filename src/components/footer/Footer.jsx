import React from 'react'
import styles from './Footer.module.css';
import AboutUsCard from './AboutUsCard';

export default function footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <div className={styles.mainAbout}>
          <div>
            {
              initAboutUs.map((menu, idx) => <AboutUsCard key={idx} menu={menu} />)
            }
          </div>
          <div>
            <div className={styles.sns}>
              {
                sns.map((item, idx) => <a href='#' key={idx}>
                  <img src={item} alt=""></img>
                </a>)
              }
            </div>
            <div className={styles.store}>
              <a href='#'>
                <img src="https://www.koreanair.com/wwwupload/maincontents/footer/banner-googleplay.png" alt="" />
              </a>
              <a href='#'>
                <img src="https://www.koreanair.com/wwwupload/maincontents/footer/banner-appstore.png" alt="" />
              </a>
            </div>
            <div className={styles.etc}>
              <a href='#'>
                <img src="https://www.koreanair.com/assets/images/banner-busan2030.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sub}>
        <div className={styles.subAbout}>
          <div className={styles.address}>
            <strong>(주) 대한항공</strong>
            <span>대표 : 우기홍 외 1명 <span></span> 주소 : 서울특별시 강서구 하늘길 620 <span></span> 전화 : 1588-2001 / 02-2656-2001</span><br></br>
            <span>사업자등록번호 : 110-81-14794 <span></span> 통신판매업신고 : 강서 제 16-3010 <span></span> 개인정보보호책임자 : 장성현 대한항공 부사장</span><br></br>
            <p>© 1997-2023 KOREAN AIR</p>
          </div>
          <div className={styles.achievements}>
              {
                logo.map((item, idx) => <img key={idx} src={item} alt=''></img>)
              }
          </div>
        </div>
      </div>
    </footer>
  )
}

const initAboutUs = [
  {
    "title": "회사소개",
    "menuList": ["대한항공에 대하여", "기업지배구조", "투자정보", "지속가능경영", "뉴스룸"]
  },
  {
    "title": "고객지원",
    "menuList": ["공지사항", "고객의 말씀", "서비스 센터", "e-서식함", "웹 접근성"]
  },
  {
    "title": "약관 및 규정",
    "menuList": ["개인정보 처리방침", "이용 약관", "운송약관 및 고지사항", "소비자 안전 관련 정보", "운임 및 서비스 요금표"]
  },
  {
    "title": "기타 안내",
    "menuList": ["기업 출장 여행", "고객 안내 서비스", "항공교통이용자 서비스 계획", "항공교통이용자 피해 구제", "관련 사이트", "사이트맵"]
  },
];

const sns = [
  "https://www.koreanair.com/sns__link--youtube.svg",
  "https://www.koreanair.com/sns__link--instagram.svg",
  "https://www.koreanair.com/sns__link--facebook.svg",
  "https://www.koreanair.com/sns__link--twitter.svg"
]

const logo = [
  "https://www.koreanair.com/logo__wa.svg",
  "https://www.koreanair.com/logo__isms.png",
  "https://www.koreanair.com/logo__ccm.png",
  "https://www.koreanair.com/logo__skytrax.png"
]