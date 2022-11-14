import React from 'react'
import { Venue } from './Venue'
import styles from './styles.module.css'

export function VenuesList ({ venues, currencyExchange }) {
  return (
    <div className={styles.venuesPicturesList}>
      {venues
        ? venues.map(venue => (
        <Venue
          key={venue.id}
          venue={venue}
          currencyExchange={currencyExchange}
        />
        ))
        : 'Loading...'}
    </div>
  )
}
