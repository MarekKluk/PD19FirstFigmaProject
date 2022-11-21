import React from 'react'
import styles from './styles.module.css'
import { TopNavigationBar } from './Top Navigation'
import { SearchBox } from './SearchBox'

export function Header ({ children }) {
  return (
    <div className={styles.header}>
      <TopNavigationBar />
      <SearchBox />
      { children }
    </div>
  )
}
