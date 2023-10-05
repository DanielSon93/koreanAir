import React from 'react'
import styles from './SubMenuPreviewCard.module.css';

export default function SubMenuPreviewCard({ subPreview }) {
  const { previewMenuText, previewMenuImg } = subPreview;
  return (
    <div className={styles.subPreviewCard}>
      <h2>{previewMenuText}</h2>
      <a href='#'><img src={previewMenuImg} alt="" /></a>
    </div>
  )
}