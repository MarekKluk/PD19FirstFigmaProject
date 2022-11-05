import React, { useState } from 'react'
import styles from '../../../styles.module.css'
import { Input } from '../../../shared/components/StyledInput'
import SearchIcon from '@mui/icons-material/Search'
import { IconButton, InputBase, Paper, TextField } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers-pro'
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs'
import { StyledDataRangePicker } from '../../../shared/components/StyledCalendar'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

export function SearchBox () {
  const [value, setValue] = React.useState([null, null])
  let [count, setCount] = useState(null)

  const incrementCounter = () => {
    count++
    setCount(count)
  }
  const decrementCounter = () => {
    if (count <= 0) {
      return
    }
    count--
    setCount(count)
  }

  return (
    <div className={styles.searchBox}>
      <p className={styles.welcomeText}>Find your place and experience it together.</p>
      <div className={styles.searchMachine}>
        <Input
          autocompleteProps={{
            disablePortal: true,
            id: 'combo-box-demo',
            options
          }}
          autocomplete
          icon={<SearchIcon />}
          labelName={'localization'}
        />
        <Input
          autocompleteProps={{
            disablePortal: true,
            id: 'combo-box-demo',
            options
          }}
          autocomplete
          icon={<SearchIcon />}
          labelName={'occasion'}
        />
        <Input
          autocompleteProps={{
            disablePortal: true,
            id: 'combo-box-demo',
            options
          }}
          autocomplete
          icon={<SearchIcon />}
          labelName={'venue type'}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StyledDataRangePicker
              calendars={1}
              value={value}
              onChange={(newValue) => {
                setValue(newValue)
              }}
              renderInput={(startProps, endProps) => (
                <React.Fragment>
                  <TextField {...startProps} />
                  <TextField {...endProps} />
                </React.Fragment>
              )}
            />
        </LocalizationProvider>
        <Paper
          elevation={3}
          component="form"
          sx={{ p: '1px 4px', display: 'flex', alignItems: 'center', width: 220, borderRadius: 18 }}
        >
          <IconButton type="button" sx={{ p: '10px' }} aria-label="menu" onClick={decrementCounter}>
            <RemoveIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder={count || 'guests'}
            inputProps={{ 'aria-label': 'search google maps' }}
          />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={incrementCounter}>
            <AddIcon />
          </IconButton>
        </Paper>
      </div>
      <button className={styles.narrowSearchButton}>I dont want to be that specific</button>
      <button className={styles.searchVenueButton}>Search for venue</button>
    </div>
  )
}

const options = [
  { label: 'dupa' },
  { label: 'dupa2' }
]
