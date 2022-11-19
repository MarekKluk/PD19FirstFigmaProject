import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const baseVenueDetailsUrl = 'http://localhost:3000/venuesDetails'
export function VenueDetails () {
  const [venueDetails, setVenueDetails] = useState(null);
  const { venueId } = useParams()

  useEffect(() => {
    async function fetchLocalizations () {
      const response = await fetch(`${baseVenueDetailsUrl}/${venueId}`)
      const venueDetailsObject = await response.json()
      setVenueDetails(venueDetailsObject)
    }
    fetchLocalizations()
      .catch(console.error)
  }, [])

  console.log(venueDetails)
  return (
    <div>Venue details</div>
  )
}
