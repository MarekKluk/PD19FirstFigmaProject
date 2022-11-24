import React, { useState } from 'react'
import styles from './styles.module.css'
import { PriceRange } from './PriceRange'
import { Dropdown } from './Dropdown'
import { CheckboxesList } from './CheckboxesList'

const amenitiesFilters = [
  'parking',
  'WiFi',
  'restaurant',
  'bar',
  'pool',
  'jacuzzi',
  'specjal'
]

const roomAmenitiesFilters = [
  'kitchen facilities',
  'bathroom facilities',
  'air conditioning',
  'safe',
  'TV'
]

const neighbourhoodsFilters = [
  'lake',
  'forest',
  'mountains',
  'sea',
  'river',
  'park',
  'zoo',
  'national park'
]

const DEFAULT_MIN_PRICE = 120
const DEFAULT_MAX_PRICE = 370
export function FilterList () {
  const [priceValue, setPrice] = useState([DEFAULT_MIN_PRICE, DEFAULT_MAX_PRICE])
  const [checkedAmenities, setCheckedAmenities] = useState([0])
  const [checkedRoomAmenities, setCheckedRoomAmenities] = useState([0])
  const [checkedNeighbourhoods, setCheckedNeighbourhoods] = useState([0])

  const checkboxesToRender = [
    {
      label: 'amenities',
      checkedBoxes: checkedAmenities,
      setCheckedBoxes: setCheckedAmenities,
      filtersArray: amenitiesFilters
    },
    {
      label: 'room amenities',
      checkedBoxes: checkedRoomAmenities,
      setCheckedBoxes: setCheckedRoomAmenities,
      filtersArray: roomAmenitiesFilters
    },
    {
      label: 'neighbourhoods',
      checkedBoxes: checkedNeighbourhoods,
      setCheckedBoxes: setCheckedNeighbourhoods,
      filtersArray: neighbourhoodsFilters
    }
  ]

  const handleResetButton = () => {
    setPrice([DEFAULT_MIN_PRICE, DEFAULT_MAX_PRICE])
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
        <Dropdown label="price range">
          <PriceRange
          priceValue={priceValue}
          setPrice={setPrice}
          />
        </Dropdown>
        {checkboxesToRender.map(checkboxes => (
          <Dropdown key={checkboxes.label} label={checkboxes.label}>
            <CheckboxesList
              checkedBoxes={checkboxes.checkedBoxes}
              setCheckedBoxes={checkboxes.setCheckedBoxes}
              filtersArray={checkboxes.filtersArray}
            />
          </Dropdown>
        ))}
      </div>
    </section>
  )
}
