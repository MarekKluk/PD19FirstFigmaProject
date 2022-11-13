import React, {useEffect, useState} from 'react'
import { StyledSlider } from '../../../../shared/components/StyledSlider/index'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Collapse from '@mui/material/Collapse'
import List from '@mui/material/List'

export function PriceRange ({ checkIfReset }) {
  const [priceValue, setPriceValue] = useState([120, 370])
  const [open, setOpen] = useState(false)

  const handlePriceValueChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return
    }
    if (activeThumb === 0) {
      setPriceValue([Math.min(newValue[0], priceValue[1]), priceValue[1]])
    } else {
      setPriceValue([priceValue[0], Math.max(newValue[1], priceValue[0])])
    }
  }

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <List
      sx={{ width: 250, maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
    >
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="price range" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit >
        <StyledSlider
          sx={{ mt: 10 }}
          getAriaLabel={() => 'Minimum distance'}
          value={priceValue}
          valueLabelFormat={value => <div>{value} zł</div>}
          onChange={handlePriceValueChange}
          valueLabelDisplay="on"
          max={500}
          disableSwap
        />
      </Collapse>
    </List>
  )
}
