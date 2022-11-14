import React from 'react'
import styles from './styles.module.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import PlaceIcon from '@mui/icons-material/Place'
import StarIcon from '@mui/icons-material/Star'
import GroupIcon from '@mui/icons-material/Group'

export function Venue ({ venue, currencyExchange }) {
  return (
    <div className={styles.venueContainer}>
      <div className={styles.photoWithName}>
        <img src={venue.landingImgUrl} alt={venue.name} />
        <div className={styles.iconAndNameWrap}>
          <div className={styles.iconContainer}>
            <FavoriteBorderIcon />
          </div>
          <div className={styles.nameContainer}>
            <p>{venue.name}</p>
          </div>
        </div>
        <div className={styles.priceAndLocalizationContainer}>
          <p>{parseFloat(venue.pricePerNightInEur * currencyExchange.result).toFixed(2)} zł / doba</p>
          <div className={styles.iconWithLocalization}>
            <PlaceIcon />
            <p>{venue.location.name}</p>
          </div>
        </div>
        <div className={styles.ratingAndCapacityContainer}>
          <div className={styles.ratingWithIcon}>
            <StarIcon />
            <span>rating</span>
            <p>{venue.rating}</p>
          </div>
          <div className={styles.capacityWithIcon}>
            <GroupIcon />
            <span>capacity</span>
            <p>{venue.capacity}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
