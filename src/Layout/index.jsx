import React from 'react'
import styles from './styles.module.css'
import { Header } from './Header'
import { Footer } from './Footer'

export function Layout ({ children }) {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
