import React, { useState } from 'react'
import styles from './styles.module.css'
import { GalleryDialog } from './GalleryDialog'

export function Gallery ({ venuesGallery }) {
  const [open, setOpen] = useState(false)
  const [imgIndexToDisplay, setImgIndexToDisplay] = useState(null)

  const handleClickOpen = (index) => {
    setImgIndexToDisplay(index)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <div className={styles.galleryContainer}>
        {venuesGallery.map((picture, index) => (<img src={picture} key={picture} onClick={() => handleClickOpen(index)} />))}
      </div>
      {imgIndexToDisplay !== null &&
        <GalleryDialog
          open={open}
          onClose={handleClose}
          venuesGallery={venuesGallery}
          firstImgIndexToDisplay={imgIndexToDisplay}
        />
      }
    </>
  )
}
