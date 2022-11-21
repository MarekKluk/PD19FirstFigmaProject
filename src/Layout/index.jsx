import React from 'react'
import styles from '../styles.module.css'
import { Header } from './Header'

export function Layout({ children }) { //eslint-disable-line
  return (
    <div className={styles.layout}> {/* eslint-disable-line */}
      <Header />
    </div>
  )
}
