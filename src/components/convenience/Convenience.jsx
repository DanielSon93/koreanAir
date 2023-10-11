import React, { useEffect, useState } from 'react'
import './Convenience.css';
import axios from 'axios';
// Swiper 관련
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Convenience() {
  const [slideList, setSlideList] = useState([]);

  useEffect(() => {
    axios.get('/data/slideList.json')
      .then(res => setSlideList(res.data.slideList))
      .catch(console.error);
  }, [])

  return (
    <div className='convenience'>
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        onSwiper={(swiper) => console.log()}
        onSlideChange={() => console.log()}
      >
        {
          slideList.map((slide, idx) => <SwiperSlide key={idx} className='slides'>
            <div className='slide'>
              <div>
                <img src={slide.url} alt="" className='slideImg' />
              </div>
              <h2>{slide.title}</h2>
            </div>
          </SwiperSlide>)
        }
      </Swiper>
    </div>
  )
}