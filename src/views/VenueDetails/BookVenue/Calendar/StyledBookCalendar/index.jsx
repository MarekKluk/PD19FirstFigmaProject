import { styled } from '@mui/material/styles'
import { DateRange } from 'react-date-range'

export const StyledBookCalendar = styled(DateRange)(() => ({
  '& .rdrDateInput': {
    height: '48px',
    width: '111px',
    background: 'white',
    display: 'flex',
    alignItems: 'center',
    margin: 0,
    border: '1px solid #E6E6E6',
    borderRadius: '18px'
  },
  '& .rdrDateDisplay': {
    maxHeight: '48px',
    maxWidth: '225.5px'
  },
  '& .rdrDateDisplayWrapper': {
    backgroundColor: 'white'
  },
  '& .rdrMonthAndYearWrapper': {
    marginTop: '15px',
    border: '1px solid #E6E6E6'
  },
  '& .rdrMonthsVertical': {
    border: '1px solid #E6E6E6'
  }

}))
