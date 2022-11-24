import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'
import { Autocomplete } from './Autocomplete'
import { IconButton, InputBase, Paper, TextField } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers-pro'
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs'
import { StyledDataRangePicker } from '../../../shared/components/StyledCalendar'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

export function SearchBox () {
  const [value, setValue] = React.useState([null, null])
  const [count, setCount] = useState(null)
  const [localizationOptions, setLocalizationOptions] = useState(null)

  const options = localizationOptions

  useEffect(() => {
    async function fetchLocalizations () {
      const response = await fetch('http://localhost:3000/localizationOptions')
      const localizationsArray = await response.json()
      setLocalizationOptions(localizationsArray)
    }
    fetchLocalizations()
      .catch(console.error)
  }, [])

  const incrementCounter = () => setCount(count + 1)
  const decrementCounter = () => setCount(count - 1)

  return (
    <div className={styles.searchBox}>
      <p className={styles.welcomeText}>Find your place and experience it together.</p>
      {localizationOptions
        ? <div className={styles.searchMachine}>
        <Autocomplete labelName={'localization'} options={options} />
        <Autocomplete labelName={'occasion'} options={options} />
        <Autocomplete labelName={'venue type'} options={options} />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StyledDataRangePicker
              calendars={1}
              value={value}
              onChange={(newValue) => {
                setValue(newValue)
              }}
              renderInput={(startProps, endProps) => (
                <>
                  <TextField {...startProps} />
                  <TextField {...endProps} />
                </>
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
        : 'Loading' }
      <button className={styles.narrowSearchButton}>I dont want to be that specific</button>
      <button className={styles.searchVenueButton}>Search for venue</button>
    </div>
  )
}
