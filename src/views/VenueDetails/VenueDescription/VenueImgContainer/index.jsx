import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import styles from './styles.module.css'

export function VenueImgContainer ({ imgSrc }) {
  return (
    <div className={styles.venueImgContainer}>
      <img src={imgSrc} />
      <div className={styles.iconContainer}>
        <FavoriteBorderIcon />
      </div>
    </div>
  )
}
