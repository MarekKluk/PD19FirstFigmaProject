import * as React from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import { InputAdornment } from '@mui/material'

const StyledAutocomplete = styled(Autocomplete)(() => ({
  '& .MuiInputBase-root': {
    borderRadius: '18px',
    height: 48,
    width: 220
  }
}))

export function Input (props) {
  if (props.autocomplete) {
    return (
      <StyledAutocomplete
        {...props.autocompleteProps}
        renderInput={(params) => (
            <TextField
              {...params}
              label={props.labelName}
              variant="outlined"
              fullWidth
              InputProps={{
                ...params.InputProps,
                startAdornment: (<InputAdornment position="end">{props.icon}</InputAdornment>)
              }}
            />
        )
        }
      />
    )
  }
}
