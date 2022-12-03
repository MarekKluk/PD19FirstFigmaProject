import React, { useState, useEffect } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import PhoneIcon from '@mui/icons-material/Phone'
import MailIcon from '@mui/icons-material/Mail'
import { FaFacebookF } from 'react-icons/fa'
import { linkPaths } from '../../../LinksPaths'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { GrLanguage } from 'react-icons/gr'
import Checkbox from '@mui/material/Checkbox'
import { FormControlLabel } from '@mui/material'
import { CheckForBookedDays } from './CheckForBookedDays'
import { Calendar } from './Calendar'
import styles from './styles.module.css'

const socialMediaLinks = [
  { icon: <FaFacebookF size={'2em'} />, path: linkPaths.facebook },
  { icon: <AiFillInstagram size={'3em'}/>, path: linkPaths.instagram },
  { icon: <AiOutlineTwitter size={'3em'}/>, path: linkPaths.twitter },
  { icon: <GrLanguage size={'2.5em'}/>, path: linkPaths.website }
]

export function BookVenue ({ venueDetails }) {
  const [dateState, setDateState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ])
  const [costPerDay, setCostPerDay] = useState(null)
  const amountOfBookedDays = CheckForBookedDays(dateState)

  useEffect(() => {
    fetch('https://api.apilayer.com/exchangerates_data/convert?to=PLN&from=EUR&amount=1',
      {
        headers: {
          apikey: 'NrQIQreA18mCUi76aT6IACgTitJMd8u4'
        }
      })
      .then((res) => res.json())
      .then(currencyExchange => {
        setCostPerDay(parseFloat(venueDetails.pricePerNightInEur * currencyExchange.result).toFixed(2))
      })
  }, [])

  return (
    <div className={styles.bookVenueContainer}>
      <div className={styles.titleWithBorder}>
        <p>Book this venue</p>
      </div>
      <FormControlLabel
        sx={{ mt: '10px' }}
        control={<Checkbox />}
        label={<span style={{ fontFamily: 'Poppins, sans-serif' }}>just one day</span>}
      />
      <div className={styles.calendarContainer}>
        <Calendar state={dateState} setState={setDateState} />
      </div>
      { costPerDay
        ? <div className={styles.costPerDayContainer}>
        <p>per day</p>
        <p>{costPerDay} zł</p>
      </div>
        : <CircularProgress /> }
      <div className={styles.countYourBookingContainer}>
        <p>total</p>
        <p>{costPerDay * amountOfBookedDays} zł</p>
      </div>
      <div className={styles.bookButtonContainer}>
        <button className={styles.bookButton}>Book</button>
      </div>
      <div className={styles.venueInformationContainer}>
        <div className={styles.contactVenue}>
          <p>Contact this venue</p>
        </div>
        <div className={styles.iconWithText}>
          <PhoneIcon fontSize={'large'}/>
          <p>{venueDetails.contactDetails.phone}</p>
        </div>
        <div className={styles.iconWithText}>
          <MailIcon fontSize={'large'}/>
          <p>{venueDetails.contactDetails.email}</p>
        </div>
        <div className={styles.socialMedia}>
          <p>Check out on social media</p>
        </div>
        <div className={styles.socialMediaIconsWrap}>
          {socialMediaLinks.map(link => (
            <a href={link.path} target="_blank" rel="noreferrer" key={link.path}>
              <button className={styles.iconButton}> {link.icon} </button>
            </a>))
          }
        </div>
      </div>
    </div>
  )
}
