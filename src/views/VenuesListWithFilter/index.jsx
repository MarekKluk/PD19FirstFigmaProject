import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'
import { VenuesList } from './VenuesList'
import { Pagination } from '@mui/material'
import { FilterList } from './FilterList'

const venuesUrl = 'http://localhost:3000/venues'
const photosURL = 'https://jsonplaceholder.typicode.com/photos'

export function VenuesListWithFilter () {
  const [venues, setVenues] = useState(null)
  const [photos, setPhotos] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [amountOfPages, setAmountOfPages] = useState(null)
  const [venuesPerPage] = useState(18)
  const [currencyExchange, setCurrencyExchange] = useState(null)


  useEffect(() => {
    async function fetchVenues() {
      const response = await fetch(`${venuesUrl}?_page=${currentPage}&_limit=18`);
      const venuesArray = await response.json();
      setVenues(venuesArray);
      setAmountOfPages(response.headers.get('X-Total-Count'))
    }
    fetchVenues()
      .catch(console.error);
  }, [currentPage])

  useEffect(() => {
    fetch(photosURL)
      .then((res) => res.json())
      .then(dataArray => {
        setPhotos(sortPhotosByAlbums(dataArray))
      })
  }, [])

  useEffect(() => {
    fetch('https://api.apilayer.com/currency_data/convert?base=USD&symbols=EUR,GBP,JPY&amount=5&date=2018-01-01',
      {
        headers: {
          apikey: 'DtbpehV28fDVm4s3sLtJl3vWCAcH8cZU'
        }
      })
      .then((res) => res.json())
      .then(setCurrencyExchange)
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
  }

  return (
    <div className={styles.filtersAndVenuesWrap}>
      <FilterList />
      { venues && photos
        ? <div className={styles.venuesListWithPagination}>
          <div className={styles.displayAmountOfVenuesAndResetButton}>
            <p>show {venues.length} on the page</p>
            <button className={styles.sortButton}>sort</button>
          </div>
        <VenuesList venues={venues} photos={photos} />
        <Pagination
          count={Math.ceil(amountOfPages/venuesPerPage)}
          page={currentPage}
          onChange={handleChange}
        />
        </div>
        : 'Loading' }
    </div>
  )
}
