import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import styles from './styles.module.css'

export function CarouselImgContainer ({ imgSrc }) {
  return (
    <div className={styles.venueImgContainer}>
      <div className={styles.venueImg}
           style={{
             backgroundImage: `url(${imgSrc})`
           }}>
        <div className={styles.iconContainer}>
          <FavoriteBorderIcon />
        </div>
      </div>
    </div>
  )
}
