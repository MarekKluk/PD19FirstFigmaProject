import { styled } from '@mui/material/styles'
import { Dialog } from '@mui/material'

export const StyledDialog = styled(Dialog)(() => ({
  '& .MuiPaper-root': {
    minWidth: '682px',
    maxWidth: '3000px'
  }
}))
