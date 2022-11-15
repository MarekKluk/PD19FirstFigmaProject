import React from 'react'
import styles from './styles.module.css'
import { Header } from './Header'

export function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
    </div>
  )
}
