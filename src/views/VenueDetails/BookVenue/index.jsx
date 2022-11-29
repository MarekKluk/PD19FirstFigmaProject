import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'
import { Calendar } from './Calendar'
import CircularProgress from '@mui/material/CircularProgress'
import PhoneIcon from '@mui/icons-material/Phone'
import MailIcon from '@mui/icons-material/Mail'
import { FaFacebookF } from 'react-icons/fa'
import { linkPaths } from '../../../LinksPaths'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { GrLanguage } from 'react-icons/gr'

const DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000
let firstDayTime = null
let secondDayTime = null
let amountOfBookedDays = null

const socialMediaLinks = [
  { icon: <FaFacebookF size={'2em'} />, path: linkPaths.facebook },
  { icon: <AiFillInstagram size={'3em'}/>, path: linkPaths.instagram },
  { icon: <AiOutlineTwitter size={'3em'}/>, path: linkPaths.twitter },
  { icon: <GrLanguage size={'2.5em'}/>, path: linkPaths.website }
]

export function BookVenue ({ venueDetails }) {
  const [value, setValue] = useState([null, null])
  const [costPerDay, setCostPerDay] = useState(null)

  if (value[0]) {
    const firstDayDateRawData = Object.values(value[0])
    const firstDayDate = new Date(firstDayDateRawData[4], firstDayDateRawData[5], firstDayDateRawData[6])
    firstDayTime = firstDayDate.getTime()
    if (value[1]) {
      const secondDayDateRawData = Object.values(value[1])
      const secondDayDate = new Date(secondDayDateRawData[4], secondDayDateRawData[5], secondDayDateRawData[6])
      secondDayTime = secondDayDate.getTime()
    }
    if (!value[1]) {
      secondDayTime = firstDayTime
    }
    amountOfBookedDays = Math.round((Math.abs((firstDayTime - secondDayTime) / (DAY_IN_MILLISECONDS))) + 1)
  }

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
      <div className={styles.calendarContainer}>
        <Calendar value={value} setValue={setValue} />
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
