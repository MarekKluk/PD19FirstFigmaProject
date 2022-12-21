import { styled } from '@mui/material/styles'
import { Dialog } from '@mui/material'

export const StyledDialog = styled(Dialog)(() => ({
  '& .MuiPaper-root': {
    width: '100%',
    maxWidth: '682px'
  }
}))
