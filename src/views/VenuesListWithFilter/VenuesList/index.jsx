import React from 'react'
import { Venue } from './Venue'
import styles from '../../../styles.module.css'

export function VenuesList ({ venues, photos }) {
  return (
    <div className={styles.venuesPicturesList}>
      {venues
        ? venues.map(venue => (
        <Venue
          key={venue.id}
          venue={venue}
          photo={photos[venue.albumId].url}
        />
        ))
        : 'Loading...'}
    </div>
  )
}
