import React from 'react'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListItem from '@mui/material/ListItem'
import Checkbox from '@mui/material/Checkbox'

export function Amenities ({ checkedAmenities, setCheckedAmenities }) {
  const amenitiesFilters = [
    'parking',
    'WiFi',
    'restaurant',
    'bar',
    'pool',
    'jacuzzi',
    'specjal'
  ]

  const handleToggle = (value) => () => {
    const currentIndex = checkedAmenities.indexOf(value)
    const newChecked = [...checkedAmenities]
    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }
    setCheckedAmenities(newChecked)
  }

  return (
    amenitiesFilters.map((value) => {
      const labelId = `checkbox-list-label-${value}`
      return (
        <ListItem
          key={value}
          disablePadding
        >
          <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checkedAmenities.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={value} />
          </ListItemButton>
        </ListItem>
      )
    })
  )
}
