import React, { useState, useEffect } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import styles from './styles.module.css'
import { VenuesList } from './VenuesList'
import { Pagination } from '@mui/material'
import { FilterList } from './FilterList'

const venuesUrl = 'https://my-json-server.typicode.com/marekkluk/figma-json/venues'
const defaultAmountOfVenuesPerPage = 6
const defaultPageNumber = 1

export function VenuesListWithFilter () {
  const [venues, setVenues] = useState(null)
  const [venuesCache, setVenuesCache] = useState({})
  const [currentPage, setCurrentPage] = useState(defaultPageNumber)
  const [amountOfVenues, setAmountOfVenues] = useState(null)
  const [venuesPerPage, setVenuesPerPage] = useState(defaultAmountOfVenuesPerPage)
  const [currencyExchange, setCurrencyExchange] = useState(null)

  useEffect(() => {
    if (currentPage in venuesCache) {
      setVenues(venuesCache[currentPage])
      return
    }
    async function fetchVenues () {
      const response = await fetch(`${venuesUrl}?_page=${currentPage}&_limit=${venuesPerPage}`)
      const venuesArray = await response.json()
      setAmountOfVenues(response.headers.get('X-Total-Count'))
      setVenues(venuesArray)
      setVenuesCache(({ ...venuesCache, [currentPage]: venuesArray }))
    }
    fetchVenues()
      .catch(console.error)
  }, [currentPage, venuesPerPage])

  useEffect(() => {
    fetch('https://api.apilayer.com/exchangerates_data/convert?to=PLN&from=EUR&amount=1',
      {
        headers: {
          apikey: process.env.REACT_APP_EXCHANGE_CURRENCY_API_KEY
        }
      })
      .then((res) => res.json())
      .then(setCurrencyExchange)
  }, [])

  const handlePageChanging = (event, pageNumber) => setCurrentPage(pageNumber)
  const handleAmountOfVenuesOnPageChange = (event) => {
    setVenuesPerPage(event.target.value)
    setVenuesCache({})
  }

  const checkIfDataHasBeenProvided = venues && currencyExchange

  return (
    <div className={styles.filtersAndVenuesWrap}>
      <FilterList />
      { checkIfDataHasBeenProvided
        ? <div className={styles.venuesListWithPagination}>
          <div className={styles.displayAmountOfVenuesAndResetButton}>
            <div className={styles.displayAmountOfVenues}>
              <p>show</p>
              <input className={styles.venuesPerPageInput} value={venues.length} onChange={handleAmountOfVenuesOnPageChange} />
              <p>on the page</p>
            </div>
            <button className={styles.sortButton}>sort</button>
          </div>
        <VenuesList venues={venues} currencyExchange={currencyExchange} />
        <Pagination
          count={Math.ceil(amountOfVenues / venuesPerPage)}
          page={currentPage}
          onChange={handlePageChanging}
        />
        </div>
        : <CircularProgress /> }
    </div>
  )
}
