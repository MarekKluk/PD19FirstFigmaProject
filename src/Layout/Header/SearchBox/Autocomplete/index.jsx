import React from 'react'
import { Input } from '../../../../shared/components/StyledInput'
import SearchIcon from '@mui/icons-material/Search'

export function Autocomplete ({ labelName, options }) {
  return (
      <Input
        autocompleteProps={{
          disablePortal: true,
          id: 'combo-box-demo',
          options
        }}
        autocomplete
        icon={<SearchIcon/>}
        labelName={labelName}
      />
  )
}
