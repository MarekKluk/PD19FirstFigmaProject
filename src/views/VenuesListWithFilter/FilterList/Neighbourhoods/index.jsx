import React from 'react'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListItem from '@mui/material/ListItem'
import Checkbox from '@mui/material/Checkbox'

export function Neighbourhoods ({ checkedNeighbourhoods, setCheckedNeighbourhoods }) {
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

  const handleToggle = (value) => () => {
    const currentIndex = checkedNeighbourhoods.indexOf(value)
    const newChecked = [...checkedNeighbourhoods]
    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }
    setCheckedNeighbourhoods(newChecked)
  }

  return (
    neighbourhoodsFilters.map((value) => {
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
                checked={checkedNeighbourhoods.indexOf(value) !== -1}
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
