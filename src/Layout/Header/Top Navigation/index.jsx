import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import { linkPaths } from '../../../LinksPaths'
import { Button } from '@mui/material'

const links = [
  { label: 'about us', path: linkPaths.about },
  { label: 'your favourites', path: linkPaths.favourites },
  { label: 'login', path: linkPaths.login }
]
function uuidv4 () {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c => //eslint-disable-line
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16) //eslint-disable-line
  )
}

export function TopNavigationBar () {
  return (
    <div className={styles.topNavigationBar}>
      <Link to={linkPaths.home}>
        <Button variant ="text">
          <p>bookify</p>
        </Button>
      </Link>
      <div className={styles.topNavigationBarLinksWrapper}>
        {links.map(link => (
          <Link key={uuidv4()} to={link.path}>
          <Button variant ="text">
            <p>{link.label}</p>
          </Button>
        </Link>))
        }
      </div>
    </div>
  )
}
