import React, { useMemo } from 'react'
import Carousel from 'react-material-ui-carousel'
import styles from './styles.module.css'
import { StyledDialog } from '../../../../../shared/components/StyledDialog'
import { CarouselImgContainer } from './CarouselImgContainer'

const splicePicturesArray = (pictures, firstImgIndex) => {
  const picturesBeforeFirstImg = pictures.slice(0, firstImgIndex)
  const picturesAfterFirstImg = pictures.slice(firstImgIndex)
  return picturesAfterFirstImg.concat(picturesBeforeFirstImg)
}

export function GalleryDialog (props) {
  const pictures = useMemo(
    () => splicePicturesArray([...props.venuesGallery], props.firstImgIndexToDisplay),
    [props.firstImgIndexToDisplay, props.venuesGallery]
  )

  return (
    <StyledDialog open={props.open} onClose={props.onClose}>
      <div className={styles.carouselContainer}>
        <Carousel navButtonsAlwaysVisible={true} indicators={false} autoPlay={false}>
          {
            pictures.map(img => <CarouselImgContainer imgSrc={img} key={img} />)
          }
        </Carousel>
      </div>
    </StyledDialog>
  )
}
