import React from 'react'
import { StyledSlider } from '../../../../shared/components/StyledSlider/index'

export function PriceRange ({ priceValue, setPrice }) {
  const handlePriceValueChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return
    }
    if (activeThumb === 0) {
      setPrice([Math.min(newValue[0], priceValue[1]), priceValue[1]])
    } else {
      setPrice([priceValue[0], Math.max(newValue[1], priceValue[0])])
    }
  }

  return (
    <StyledSlider
      sx={{ mt: 10 }}
      value={priceValue}
      valueLabelFormat={value => <div>{value} zł</div>}
      onChange={handlePriceValueChange}
      valueLabelDisplay="on"
      max={500}
      disableSwap
    />
  )
}
