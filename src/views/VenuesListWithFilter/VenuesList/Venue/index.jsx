import React from 'react'
import { Link } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import PlaceIcon from '@mui/icons-material/Place'
import StarIcon from '@mui/icons-material/Star'
import GroupIcon from '@mui/icons-material/Group'
import { linkPaths } from '../../../../LinksPaths'
import styles from './styles.module.css'

export function Venue ({ venue, currencyExchange }) {
  return (
    <div className={styles.venueContainer}>
      <div className={styles.photoWithName}>
        <Link to={`${linkPaths.venue}/${venue.id}`}>
          <div
            className={styles.venueBackground}
            style={{ backgroundImage: `url(${venue.landingImgUrl})` }} >
          </div>
        </Link>
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
