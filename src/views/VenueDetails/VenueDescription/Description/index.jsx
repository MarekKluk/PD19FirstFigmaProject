import React from 'react'
import BedIcon from '@mui/icons-material/Bed'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import LocationCityIcon from '@mui/icons-material/LocationCity'
import List from '@mui/material/List'
import styles from './styles.module.css'
import { CustomListItem } from './CustomListItem'

export function Description ({ venueDetails }) {
  return (
    <div className={styles.descriptionContainer}>
      <div className={styles.textDescription}>
        <p>{venueDetails.description}</p>
      </div>
      <div className={styles.venuesAmenities}>
        <List>
          {venueDetails.features.map(feature => (
            <CustomListItem key={feature} feature={feature} />
          ))}
        </List>
      </div>
      <div className={styles.locationInfoContainer}>
        <div className={styles.iconWithDescription}>
          <BedIcon fontSize={'large'}/>
          <p>{venueDetails.capacity} sleeping places - {Math.ceil(venueDetails.capacity / 2)} beds / {Math.floor(venueDetails.capacity / 4)} fold-out sofas</p>
        </div>
        <div className={styles.iconWithDescription}>
          <AccessTimeIcon fontSize={'large'}/>
          <p>check-in {venueDetails.checkInHour} / check-out {venueDetails.checkOutHour}</p>
        </div>
        <div className={styles.iconWithDescription}>
          <LocationCityIcon fontSize={'large'}/>
          <p>{venueDetails.distanceFromCityCenterInKM} km to the city</p>
        </div>
      </div>
    </div>
  )
}
