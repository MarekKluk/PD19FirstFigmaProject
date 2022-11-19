import React, { useState, useEffect } from 'react'
import Rating from '@mui/material/Rating';
import styles from './styles.module.css'

export function VenueDescription ({ venueDetails }) {

  return (
    <div className={styles.descriptionContainer}>
      <div className={styles.nameAndRating}>
        <div className={styles.nameAndAddress}>
          <h3>{venueDetails.name}</h3>
          <h4>{venueDetails.location.postalCode}</h4>
        </div>
        <div className={styles.rating}>
          <p>132 reviews</p>
          <Rating value={venueDetails.rating} />
        </div>
      </div>
    </div>
  )
}
