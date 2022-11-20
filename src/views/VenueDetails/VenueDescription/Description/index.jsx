import React from 'react'
import DoneIcon from '@mui/icons-material/Done'
import BedIcon from '@mui/icons-material/Bed'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import LocationCityIcon from '@mui/icons-material/LocationCity'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import styles from './styles.module.css'

export function Description ({ venueDetails }) {
  return (
    <div className={styles.descriptionContainer}>
      <div className={styles.textDescription}>
        <p>{venueDetails.description}</p>
      </div>
      <div className={styles.venuesAmenities}>
        <List>
          {venueDetails.features.map((feature, index) => (
            <ListItem key={`${feature}-${index}`} disableGutters={true}>
              <ListItemIcon>
                <DoneIcon fontSize={'large'} />
              </ListItemIcon>
              <ListItemText
                primary={feature}
                primaryTypographyProps={{
                  fontSize: 20,
                  fontFamily: 'Prompt',
                  fontWeight: 300,
                  letterSpacing: 0.03
                }}
              />
            </ListItem>
          ))}
        </List>
      </div>
      <div className={styles.locationInfoContainer}>
        <div className={styles.iconWithDescription}>
          <BedIcon fontSize={'large'}/>
          <p>{venueDetails.capacity} sleeping places - {Math.ceil(venueDetails.capacity / 2)} beds / {Math.floor(venueDetails.capacity / 4)} fold-out sofas</p>
        </div>
        <div className={styles.iconWithDescription}>
          <AccessTimeIcon fontSize={'large'}/>
          <p>check-in {venueDetails.checkInHour} / check-out {venueDetails.checkOutHour}</p>
        </div>
        <div className={styles.iconWithDescription}>
          <LocationCityIcon fontSize={'large'}/>
          <p>{venueDetails.distanceFromCityCenterInKM} km to the city</p>
        </div>
      </div>
    </div>
  )
}
