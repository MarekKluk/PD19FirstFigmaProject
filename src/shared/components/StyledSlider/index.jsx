import { styled } from '@mui/material/styles'
import Slider from '@mui/material/Slider'

const celadonColor = getComputedStyle(document.documentElement).getPropertyValue('--celadon')
const whiteColor = getComputedStyle(document.documentElement).getPropertyValue('--white')

export const StyledSlider = styled(Slider)(() => ({
  color: celadonColor,
  height: 3,
  padding: '13px 0',
  '& .MuiSlider-thumb': {
    height: 27,
    width: 27,
    backgroundColor: celadonColor,
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
    color: whiteColor,
    opacity: 1,
    height: 3
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    padding: 0,
    width: 50,
    color: whiteColor,
    height: 32,
    backgroundColor: celadonColor,
    transformOrigin: 'bottom left'
  }
}))
