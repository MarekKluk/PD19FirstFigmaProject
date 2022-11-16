import React from 'react'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListItem from '@mui/material/ListItem'
import Checkbox from '@mui/material/Checkbox'

export function RoomAmenities ({ checkedRoomAmenities, setCheckedRoomAmenities }) {
  const roomAmenitiesFilters = [
    'kitchen facilities',
    'bathroom facilities',
    'air conditioning',
    'safe',
    'TV'
  ]

  const handleToggle = (value) => () => {
    const currentIndex = checkedRoomAmenities.indexOf(value)
    const newChecked = [...checkedRoomAmenities]
    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }
    setCheckedRoomAmenities(newChecked)
  }

  return (
    roomAmenitiesFilters.map((value) => {
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
                checked={checkedRoomAmenities.indexOf(value) !== -1}
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
