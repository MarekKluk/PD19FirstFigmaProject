import React from 'react'
import styles from '../../../styles.module.css'
import { Input } from '../../../shared/components/StyledInput'
import SearchIcon from '@mui/icons-material/Search'
import {TextField} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";

export function SearchBox () {
  return (
    <div className={styles.searchBox}>
      <p>Find your place and experience it together</p>
      <div className={styles.searchMachine}>
        <Input
          autocompleteProps={{
            disablePortal: true,
            id: 'combo-box-demo',
            options: localisations,
            sx: autocompleteStyling
          }}
          autocomplete
          icon={<SearchIcon />}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={localisations}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Movie" />}
        />
      </div>
    </div>
  )
}

const localisations = [
  { label: 'dupa' }
]
const autocompleteStyling = {
  width: 220,
  height: 48,
  borderRadius: 2,
  placeholder: 'localization'
}
