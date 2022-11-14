import React from 'react'
import styles from './styles.module.css'
import { FaFacebookF, FaEnvelope } from 'react-icons/fa'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { linkPaths } from '../../LinksPaths'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

const contactLinks = [
  { label: 'contact', path: linkPaths.contact },
  { label: 'assistance', path: linkPaths.assistance },
  { label: 'about us', path: linkPaths.aboutUs }
]
const socialMediaLinks = [
  { icon: <FaFacebookF size={'2em'} />, path: linkPaths.facebook },
  { icon: <AiFillInstagram size={'3em'}/>, path: linkPaths.instagram },
  { icon: <AiOutlineTwitter size={'3em'}/>, path: linkPaths.twitter },
  { icon: <FaEnvelope size={'2.5em'}/>, path: linkPaths.mail }
]

function uuidv4 () {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c => //eslint-disable-line
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16) //eslint-disable-line
  )
}

export function Footer () {
  return (
    <footer className={styles.footer}>
      <div className={styles.contactBar}>
        {contactLinks.map(link => (
          <Link key={uuidv4()} to={link.path}>
            <Button variant ="text">
              <p>{link.label}</p>
            </Button>
          </Link>))
        }
      </div>
      <p>Feel free to contact us in case of any problems and doubts.</p>
      <p>We are there for you</p>
      <div className={styles.socialMediaBar}>
        {socialMediaLinks.map(link => (
          <a href={link.path} target="_blank" rel="noreferrer" key={uuidv4()}>
            <button className={styles.iconButton}> {link.icon} </button>
          </a>))
        }
      </div>
    </footer>
  )
}
