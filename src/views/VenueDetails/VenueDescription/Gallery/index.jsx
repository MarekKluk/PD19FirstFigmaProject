import React from 'react'
import styles from './styles.module.css'

export function Gallery ({ venuesGallery }) {
  return (
    <div className={styles.galleryContainer}>
      {venuesGallery.map(picture => (<img src={picture} key={picture}/>))}
    </div>
  )
}
