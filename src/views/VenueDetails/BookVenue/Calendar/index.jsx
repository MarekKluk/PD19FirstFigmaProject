import React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs'
import { StyledDataRangePicker } from '../../../../shared/components/StyledCalendar'
import { TextField } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers-pro'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { StaticDateRangePicker } from '@mui/x-date-pickers-pro/StaticDateRangePicker'
import Box from '@mui/material/Box'

export function Calendar ({ value, setValue }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StyledDataRangePicker
        calendars={1}
        value={value}
        open={false}
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
      <FormControlLabel control={<Checkbox />} label="just one day" />
      <StaticDateRangePicker
        displayStaticWrapperAs="desktop"
        value={value}
        calendars={1}
        disablePast={true}
        onChange={(newValue) => {
          setValue(newValue)
        }}
        renderInput={(startProps, endProps) => (
          <>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </>
        )}
      />
    </LocalizationProvider>
  )
}
