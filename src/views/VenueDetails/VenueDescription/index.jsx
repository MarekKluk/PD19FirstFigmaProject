import React, { useState } from 'react'
import Rating from '@mui/material/Rating'
import Carousel from 'react-material-ui-carousel'
import styles from './styles.module.css'
import { VenueImgContainer } from './VenueImgContainer'
import { Description } from './Description'
import { Gallery } from './Gallery'
import { LocationMap } from './LocationMap'

export function VenueDescription ({ venueDetails }) {
  const [displayDescription, setDisplayDescription] = useState(true)
  const [displayGallery, setDisplayGallery] = useState(false)
  const [displayMap, setDisplayMap] = useState(false)

  let imgsToDisplay = venueDetails.venueDescriptionImgUrls
  imgsToDisplay = { 0: venueDetails.landingImgUrl, ...imgsToDisplay }
  imgsToDisplay = Object.values(imgsToDisplay)

  const handleDescriptionButton = () => {
    setDisplayDescription(true)
    setDisplayGallery(false)
    setDisplayMap(false)
  }
  const handleGalleryButton = () => {
    setDisplayDescription(false)
    setDisplayGallery(true)
    setDisplayMap(false)
  }
  const handleMapButton = () => {
    setDisplayDescription(false)
    setDisplayGallery(false)
    setDisplayMap(true)
  }

  return (
    <div className={styles.descriptionContainer}>
      <div className={styles.nameAndRating}>
        <div className={styles.nameAndAddress}>
          <h3>{venueDetails.name}</h3>
          <h4>{venueDetails.location.postalCode}</h4>
        </div>
        <div className={styles.rating}>
          <p>132 reviews</p>
          <Rating value={venueDetails.rating} readOnly />
        </div>
      </div>
      <Carousel navButtonsAlwaysVisible={true} indicators={false} >
        {
          imgsToDisplay.map(img => <VenueImgContainer imgSrc={img} key={img} />)
        }
      </Carousel>
      <div className={styles.navigationButtonsWrap}>
        <button className={styles.navigationButton} onClick={handleDescriptionButton}>description</button>
        <button className={styles.navigationButton} onClick={handleGalleryButton}>gallery</button>
        <button className={styles.navigationButton} onClick={handleMapButton}>map</button>
      </div>
      <div className={styles.detailsContainer}>
        {displayDescription && <Description venueDetails={venueDetails} />}
        {displayGallery && <Gallery venuesGallery={imgsToDisplay} />}
        {displayMap && <LocationMap />}
      </div>
    </div>
  )
}
