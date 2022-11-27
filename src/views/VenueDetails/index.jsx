import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress'
import { VenueDescription } from './VenueDescription'
import { BookVenue } from "./BookVenue"
import styles from "./styles.module.css"

const baseVenueDetailsUrl = 'http://localhost:3000/venuesDetails'

export function VenueDetails () {
  const [venueDetails, setVenueDetails] = useState(null)
  const { venueId } = useParams()

  useEffect(() => {
    async function fetchLocalizations () {
      const response = await fetch(`${baseVenueDetailsUrl}?_page=${venueId}&_limit=1`)
      const venueDetailsObject = await response.json()
      setVenueDetails(venueDetailsObject[0])
    }
    fetchLocalizations()
      .catch(console.error)
  }, [venueId])

  return (
    <div className={styles.venueDetailsContainer}>
      {venueDetails ? <VenueDescription venueDetails={venueDetails}/> : <CircularProgress /> }
      <BookVenue />
    </div>
  )
}
