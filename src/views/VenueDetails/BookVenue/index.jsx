import React from 'react'
import styles from './styles.module.css'

export function BookVenue () {
  return (
    <div className={styles.bookVenueContainer}>
      <div className={styles.titleWithBorder}>
        <p>Book this venue</p>
      </div>
    </div>
  )
}
