import { useEffect, useState } from 'react'

// 현재 날짜, 이전 날짜, 이후 날짜 원하는 횟수만큼 반환 및 1분마다 날짜 업데이트
export default function useNowDate(beforeLoop, afterLoop) {
  const [date, setDate] = useState(() => getNowDateFormat());
  const [dateBefore, setDateBefore] = useState(() => getDateBeforeFormat(beforeLoop));
  const [dateAfter, setDateAfter] = useState(() => getDateAfterFormat(afterLoop));

  useEffect(() => {
    const interval = setInterval(() => {
      setDateBefore(getDateBeforeFormat(beforeLoop));
      setDate(getNowDateFormat());
      setDateAfter(getDateAfterFormat(afterLoop));
    }, 1000 * 60)

    return () => clearInterval(interval);
  }, []);

  return [dateBefore, date, dateAfter];
}

function getNowDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = Number(String(date.getMonth() + 1).padStart(2, '0'));
  const day = Number(String(date.getDate()).padStart(2, '0'));

  return [year, month, day];
}

// 현재 날짜 반환 (형식 : 2023년 10월 08일)
function getNowDateFormat() {
  const [year, month, day] = getNowDate();

  return `${year}년 ${month}월 ${day}일`;
}

// 이전 날짜 반환
function getDateBeforeFormat(beforeLoop) {
  let [year, month, day] = getNowDate();
  let dateArr = [];

  for (let i = 1; i <= beforeLoop; i++) {
    day = day - 1;
    if (day === 0) {
      month = month - 1;
      if (month === 0) {
        year = year - 1;
        month = 12;
      }
      if (monthChecker[0].includes(month)) {
        day = 31;
      } else if (monthChecker[1].includes(month)) {
        day = 30;
      } else if (monthChecker[2].includes(month)) {
        if (year % 4 === 0) {
          day = 29;
        } else {
          day = 28;
        }
      }
    }
    dateArr.push(`${year}년 ${month}월 ${day}일`);
  }

  return dateArr;
}

// 이후 날짜 반환
function getDateAfterFormat(afterLoop) {
  let [year, month, day] = getNowDate();
  let dateArr = [];

  for (let i = 1; i <= afterLoop; i++) {
    day = day + 1;
    if (monthChecker[0].includes(month)) {
      if (day === 32) {
        month = month + 1;
        day = 1;
      }
    } else if (monthChecker[1].includes(month)) {
      if (day === 31) {
        month = month + 1;
        day = 1;
      }
    } else if (monthChecker[2].includes(month)) {
      if (day === 29) {
        if (year % 4 !== 0) {
          month = month + 1;
          day = 1;
        }
      } else if (day === 30) {
        month = month + 1
        day = 1;
      }
    }
    if (month === 13) {
      year = year + 1;
      month = 1;
    }
    dateArr.push(`${year}년 ${month}월 ${day}일`);
  }

  return dateArr;
}

const monthChecker = [[1, 3, 5, 7, 8, 10, 12], [4, 6, 9, 11], [2]];