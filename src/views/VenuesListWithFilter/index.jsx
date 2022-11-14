import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'
import { VenuesList } from './VenuesList'
import { Pagination } from '@mui/material'
import { FilterList } from './FilterList'

const venuesUrl = 'http://localhost:3000/venues'

export function VenuesListWithFilter () {
  const [venues, setVenues] = useState(null)
  const [venuesCache, setVenuesCache] = useState({})
  const [currentPage, setCurrentPage] = useState(1)
  const [amountOfVenues, setAmountOfVenues] = useState(null)
  const [venuesPerPage, setVenuesPerPage] = useState(18)
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
          apikey: 'DtbpehV28fDVm4s3sLtJl3vWCAcH8cZU'
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

  return (
    <div className={styles.filtersAndVenuesWrap}>
      <FilterList />
      { venues && currencyExchange
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
        : 'Loading' }
    </div>
  )
}
