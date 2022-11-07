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

export function TopNavigationBar () {
  return (
    <div className={styles.topNavigationBar}>
      <Link to={linkPaths.home}>
        <Button variant ="text">
          <p>bookify</p>
        </Button>
      </Link>
      <div className={styles.topNavigationBarLinksWrapper}>
        {links.map(link => (<Link to={link.path}>
          <Button variant ="text">
            <p>{link.label}</p>
          </Button>
        </Link>))
        }
      </div>
    </div>
  )
}
