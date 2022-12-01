import React from 'react'
import ListItemIcon from '@mui/material/ListItemIcon'
import DoneIcon from '@mui/icons-material/Done'
import ListItemText from '@mui/material/ListItemText'
import ListItem from '@mui/material/ListItem'

export function CustomListItem ({ feature }) {
  return (
    <ListItem disableGutters={true}>
      <ListItemIcon>
        <DoneIcon fontSize={'large'} />
      </ListItemIcon>
      <ListItemText
        primary={feature}
        primaryTypographyProps={{
          fontSize: 20,
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 300,
          letterSpacing: 0.03
        }}
      />
    </ListItem>
  )
}
