import React from 'react'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListItem from '@mui/material/ListItem'
import Checkbox from '@mui/material/Checkbox'

export function CheckboxesList ({ checkedBoxes, setCheckedBoxes, filtersArray }) {
  const handleToggle = (value) => () => {
    const currentIndex = checkedBoxes.indexOf(value)
    const newChecked = [...checkedBoxes]
    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }
    setCheckedBoxes(newChecked)
  }

  return (
    filtersArray.map((value) => {
      const labelId = `checkbox-list-label-${value}`
      return (
        <ListItem
          key={value}
          disablePadding
        >
          <ListItemButton onClick={handleToggle(value)} dense>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checkedBoxes.indexOf(value) !== -1}
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
