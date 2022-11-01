import React from 'react'
import styles from '../../styles.module.css'
import { TopNavigationBar } from './Top Navigation'
import { SearchBox } from './Search Box'

export function Header () {
  return (
    <div className={styles.header}>
      <TopNavigationBar />
      <SearchBox />
    </div>
  )
}
