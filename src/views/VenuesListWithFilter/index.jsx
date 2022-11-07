import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'
import { VenuesList } from './VenuesList'
import { Pagination } from '@mui/material'
import { usePagination } from './Pagination'
import { FilterList } from "./FilterList";

const venuesUrl = 'http://localhost:3000/venues'
const photosURL = 'https://jsonplaceholder.typicode.com/photos'

export function VenuesListWithFilter () {
  const [venues, setVenues] = useState(null)
  const [photos, setPhotos] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [venuesPerPage] = useState(18)
  let [currentVenues] = useState(null)

  useEffect(() => {
    fetch(venuesUrl)
      .then((res) => res.json())
      .then(setVenues)
  }, [])

  useEffect(() => {
    fetch(photosURL)
      .then((res) => res.json())
      .then(dataArray => {
        setPhotos(sortPhotosByAlbums(dataArray))
      })
  }, [])

  const sortPhotosByAlbums = (photosArray) => {
    const photoAndHisAlbumPair = {}
    photosArray.forEach(
      photo => {
        photoAndHisAlbumPair[photo.albumId] = photo
      }
    )
    return photoAndHisAlbumPair
  }

  const handleChange = (event, pageNumber) => {
    setCurrentPage(pageNumber)
    usePagination(venues, venuesPerPage).jump(pageNumber)
  }

  if (venues) {
    const indexOfLastVenue = currentPage * venuesPerPage
    const indexOfFirstVenue = indexOfLastVenue - venuesPerPage
    currentVenues = venues.slice(indexOfFirstVenue, indexOfLastVenue)
  }
  return (
    <div className={styles.filtersAndVenuesWrap}>
      <FilterList />
      { venues && photos
        ? <VenuesList venues={currentVenues} photos={photos} />
        : 'Loading' }
      {venues
        ? <Pagination
        count={Math.ceil(venues.length / venuesPerPage)}
        page={currentPage}
        onChange={handleChange}
        />
        : 'Loading'}
    </div>
  )
}
