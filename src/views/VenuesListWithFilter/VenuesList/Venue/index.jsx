import React from 'react'
import styles from './styles.module.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import PlaceIcon from '@mui/icons-material/Place'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import GroupIcon from '@mui/icons-material/Group'

export function Venue ({ venue, photo }) {
  return (
    <div className={styles.venueContainer}>
      <div className={styles.photoWithName}>
        <img src={photo} alt={venue.name} />
        <div className={styles.iconAndNameWrap}>
          <div className={styles.iconContainer}>
            <FavoriteBorderIcon />
          </div>
          <div className={styles.nameContainer}>
            <p>{venue.name}</p>
          </div>
        </div>
        <div className={styles.priceAndLocalizationContainer}>
          <p>{venue.pricePerNightInEur}zł / doba</p>
          <div className={styles.iconWithLocalization}>
            <PlaceIcon />
            <p>{venue.location.name}</p>
          </div>
        </div>
        <div className={styles.ratingAndCapacityContainer}>
          <div className={styles.ratingWithIcon}>
            <StarBorderIcon />
            <p>rating {venue.rating}</p>
          </div>
          <div className={styles.capacityWithIcon}>
            <GroupIcon />
            <p>capacity {venue.capacity}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
