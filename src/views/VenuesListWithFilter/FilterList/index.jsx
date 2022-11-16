import React, { useState } from 'react'
import styles from './styles.module.css'
import { Amenities } from './Amenities'
import { PriceRange } from './PriceRange'
import { RoomAmenities } from './RoomAmenities'
import { Neighbourhoods } from './Neighbourhoods'
import { Dropdown } from './Dropdown'

export function FilterList () {
  const [priceValue, setPriceValue] = useState([120, 370])
  const [checkedAmenities, setCheckedAmenities] = useState([0])
  const [checkedRoomAmenities, setCheckedRoomAmenities] = useState([0])
  const [checkedNeighbourhoods, setCheckedNeighbourhoods] = useState([0])

  const handleResetButton = () => {
    setPriceValue([120, 370])
    setCheckedAmenities([0])
    setCheckedRoomAmenities([0])
    setCheckedNeighbourhoods([0])
  }

  return (
    <section className={styles.filterList}>
      <div className={styles.filtersResetWrap}>
        <p>FILTERS</p>
        <button className={styles.resetButton} onClick={handleResetButton} >reset</button>
      </div>
      <div className={styles.dropdownsContainer}>
        <Dropdown label={'price range'}>
          <PriceRange
          priceValue={priceValue}
          setPriceValue={setPriceValue}
          />
        </Dropdown>
        <Dropdown label={'amenities'}>
          <Amenities
            checkedAmenities={checkedAmenities}
            setCheckedAmenities={setCheckedAmenities}
          />
        </Dropdown>
        <Dropdown label={'room amenities'}>
          <RoomAmenities
            checkedRoomAmenities={checkedRoomAmenities}
            setCheckedRoomAmenities={setCheckedRoomAmenities}
          />
        </Dropdown>
        <Dropdown label={'neighbourhoods'}>
          <Neighbourhoods
            checkedNeighbourhoods={checkedNeighbourhoods}
            setCheckedNeighbourhoods={setCheckedNeighbourhoods}
          />
        </Dropdown>
      </div>
    </section>
  )
}
