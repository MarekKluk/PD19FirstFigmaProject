import React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs'
import { StyledDataRangePicker } from '../../../../shared/components/StyledCalendar'
import { TextField, useMediaQuery } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers-pro'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

export function Calendar ({ value, setValue }) {
  const checkIfMobile = useMediaQuery('@media only screen and (hover: none) and (pointer: coarse)')
  let displayCalendarOnLoading = true
  let makeSpaceForCalendar = 400
  if (checkIfMobile) {
    displayCalendarOnLoading = null
    makeSpaceForCalendar = 0
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} >
      <StyledDataRangePicker
        calendars={1}
        value={value}
        disablepast={true}
        open={displayCalendarOnLoading}
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
      <div style={{ marginTop: `${makeSpaceForCalendar}px` }}>
        <FormControlLabel sx={{ mt: { makeSpaceForCalendar } }} control={<Checkbox />} label="just one day" />
      </div>
    </LocalizationProvider>
  )
}
