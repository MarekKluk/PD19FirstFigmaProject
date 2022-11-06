import React from 'react'
import { IconButton, ImageList, ImageListItem, ImageListItemBar, ListSubheader } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

export function Venue ({ venue, photo }) {
  return (
    <ImageListItem
      sx={{ width: 228 }}>
      <img
        src={`${photo}?w=248&fit=crop&auto=format`}
        srcSet={`${photo}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={venue.name}
        loading="lazy"
      />
      <ImageListItemBar
        title={venue.name}
        actionIcon={
          <IconButton
            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
            aria-label={`info about ${venue.name}`}
          >
            <AddIcon />
          </IconButton>
        }
      />
    </ImageListItem>
  )
}
