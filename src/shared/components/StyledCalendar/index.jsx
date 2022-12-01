import { styled } from '@mui/material/styles'
import { DateRangePicker } from '@mui/x-date-pickers-pro'

export const StyledDataRangePicker = styled(DateRangePicker)(() => ({
  '& .MuiInputBase-root': {
    borderRadius: '18px',
    height: 48,
    width: 110,
    background: 'white',
    textAlign: 'center'
  },
  '& .MuiFormLabel-root': {
    textAlign: 'center',
    width: 80
  },
  '& .MuiPickersPopper-root': {
    marginTop: '50px',
  }

}))
