import React from 'react'
import { useParams } from 'react-router-dom';

export function VenueDetails () {
  let { venueId } = useParams();
  console.log(venueId)
  return (
    <div>Venue details</div>
  )
}