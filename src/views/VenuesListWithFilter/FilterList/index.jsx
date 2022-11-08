import React from 'react'
import styles from './styles.module.css'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import ListItem from '@mui/material/ListItem'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import CommentIcon from '@mui/icons-material/Comment'

export function FilterList () {
  const [open, setOpen] = React.useState(true)
  const [checked, setChecked] = React.useState([0])

  const handleClick = () => {
    setOpen(!open)
  }

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)
  }

  return (
    <section className={styles.filterList}>
      <div className={styles.filtersResetWrap}>
        <p>FILTERS</p>
        <button className={styles.resetButton}>reset</button>
      </div>
      <div className={styles.dropdownsContainer}>
        <List
          sx={{ width: 250, maxWidth: 360, bgcolor: 'background.paper' }}
          component="nav"
        >
          <ListItemButton onClick={handleClick}>
            <ListItemText primary="Inbox" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            {[0, 1, 2, 3].map((value) => {
              const labelId = `checkbox-list-label-${value}`
              return (
                <ListItem
                  key={value}
                  secondaryAction={
                    <IconButton edge="end" aria-label="comments">
                      <CommentIcon />
                    </IconButton>
                  }
                  disablePadding
                >
                  <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={checked.indexOf(value) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                      />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                  </ListItemButton>
                </ListItem>
              )
            })}
          </Collapse>
        </List>
      </div>
    </section>
  )
}
