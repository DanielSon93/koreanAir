import React, { useEffect, useRef, useState } from 'react'
import styles from './Convenience.module.css';
import Slide from '../shared/Slide';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import axios from 'axios';

export default function Convenience() {
  const [slideList, setSlideList] = useState([]);
  const [isMouseDrag, setIsMouseDrag] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [prevPageX, setPrevPageX] = useState(0);
  const [prevScrollLeft, setPrevScrollLeft] = useState(0);
  const [positionDiff, setPositionDiff] = useState(0);
  const [isAllowedBtn, setIsAllowedBtn] = useState({
    "prevBtn": false,
    "nextBtn": true
  });
  const slideWrapperRef = useRef();
  const slidesRef = useRef();

  useEffect(() => {
    axios.get('/data/slideList.json')
      .then(res => setSlideList(res.data.slideList))
      .catch(console.error);
  }, [])

  // 중간 지점에서 MouseUp 시 위치 조정
  const autoSlide = () => {
    if(slidesRef.current.scrollLeft === slidesRef.current.scrollWidth - slidesRef.current.clientWidth) return;

    const posDiff = Math.abs(positionDiff);
    const slideWidth = slideWrapperRef.current.clientWidth / 3 + 10;
    const valDiff = slideWidth - posDiff;
    console.log(valDiff);

    if(slidesRef.current.scrollLeft > prevScrollLeft) {
      slidesRef.current.scrollLeft += posDiff > slideWidth / 3 ? valDiff : -posDiff;
    } else {
      slidesRef.current.scrollLeft -= posDiff > slideWidth / 3 ? valDiff : -posDiff;
    }
  }

  // 처음과 끝에서는 버튼 클릭 중지
  const checkBtnAllowed = () => {
    const scrollWidth = slidesRef.current.scrollWidth - slidesRef.current.clientWidth;

    if (slidesRef.current.scrollLeft === 0) {
      setIsAllowedBtn(() => ({
        prevBtn: false,
        nextBtn: true
      }))
    } else if (slidesRef.current.scrollLeft === scrollWidth) {
      setIsAllowedBtn(() => ({
        prevBtn: true,
        nextBtn: false
      }))
    } else {
      setIsAllowedBtn(() => ({
        prevBtn: true,
        nextBtn: true
      }))
    }
  }

  const handleClick = (e) => {
    const slideWidth = slideWrapperRef.current.clientWidth / 3 + 10;
    slidesRef.current.scrollLeft += e.target.id === 'prev' ? -slideWidth : slideWidth;
    checkBtnAllowed();
  }

  const handleMouseDown = (e) => {
    setIsMouseDrag(true);
    setPrevPageX(e.pageX);
    setPrevScrollLeft(slidesRef.current.scrollLeft);
  }

  const handleMouseMove = (e) => {
    if (isMouseDrag) {
      e.preventDefault();
      setIsDragging(true);
      setPositionDiff(e.pageX - prevPageX);
      slidesRef.current.scrollLeft = prevScrollLeft - positionDiff;
      checkBtnAllowed();
    }
  }

  const handleMouseUp = (e) => {
    setIsMouseDrag(false);
    if(!isDragging) return;
    setIsDragging(false);
    autoSlide();
  }

  const handleMouseLeave = (e) => {
    setIsMouseDrag(false);
  }

  return (
    <div className={styles.convenience}>
      <div className={styles.slideWrapper} ref={slideWrapperRef}>
        <MdKeyboardArrowLeft
          className={`${styles.prev} ${isAllowedBtn.prevBtn ? styles.active : ''}`}
          id='prev'
          onClick={handleClick} />
        <div
          className={`${styles.slides} ${isMouseDrag ? styles.active : ''}`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          ref={slidesRef}>
          {
            slideList.map((slide, idx) => <Slide key={idx} slide={slide} />)
          }
        </div>
        <MdKeyboardArrowRight
          className={`${styles.next} ${isAllowedBtn.nextBtn ? styles.active : ''}`}
          id='next'
          onClick={handleClick} />
      </div>
    </div>
  )
}