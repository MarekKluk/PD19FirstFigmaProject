import { styled } from '@mui/material/styles'
import Slider from '@mui/material/Slider'

export const StyledSlider = styled(Slider)(() => ({
  color: '#67AA92',
  height: 3,
  padding: '13px 0',
  '& .MuiSlider-thumb': {
    height: 27,
    width: 27,
    backgroundColor: '#67AA92',
    border: '1px solid currentColor',
    '&:hover': {
      boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)'
    },
    '& .airbnb-bar': {
      height: 9,
      width: 1,
      backgroundColor: 'currentColor',
      marginLeft: 1,
      marginRight: 1
    }
  },
  '& .MuiSlider-track': {
    height: 3
  },
  '& .MuiSlider-rail': {
    color: '#d8d8d8',
    opacity: 1,
    height: 3
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    padding: 0,
    width: 50,
    color: '#FFFFFF',
    height: 32,
    backgroundColor: '#67AA92',
    transformOrigin: 'bottom left'
  }
}))
