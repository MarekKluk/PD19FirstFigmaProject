import React from 'react'
import styles from './styles.module.css'
import { Amenities } from './Amenities'
import { PriceRange } from './PriceRange'
import { RoomAmenities } from './RoomAmenities'
import { Neighbourhoods } from './Neighbourhoods'

export function FilterList () {
  return (
    <section className={styles.filterList}>
      <div className={styles.filtersResetWrap}>
        <p>FILTERS</p>
        <button className={styles.resetButton} >reset</button>
      </div>
      <div className={styles.dropdownsContainer}>
        {/*<Dropdown> <PriceRange /> </Dropdown>*/}
        <PriceRange />
        <Amenities />
        <RoomAmenities />
        <Neighbourhoods />
      </div>
    </section>
  )
}
