import React from 'react'
import { FaFacebookF, FaEnvelope } from 'react-icons/fa'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { linkPaths } from '../../LinksPaths'
import styles from './styles.module.css'

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

export function Footer () {
  return (
    <footer className={styles.footer}>
      <div className={styles.contactBar}>
        {contactLinks.map(link => (
          <Link key={link.path} to={link.path}>
            <Button variant ="text" sx={{ fontFamily: 'Poppins, sans-serif' }}>
              <p>{link.label}</p>
            </Button>
          </Link>))
        }
      </div>
      <p>Feel free to contact us in case of any problems and doubts.</p>
      <p>We are there for you</p>
      <div className={styles.socialMediaBar}>
        {socialMediaLinks.map(link => (
          <a href={link.path} target="_blank" rel="noreferrer" key={link.path}>
            <button className={styles.iconButton}> {link.icon} </button>
          </a>))
        }
      </div>
    </footer>
  )
}
