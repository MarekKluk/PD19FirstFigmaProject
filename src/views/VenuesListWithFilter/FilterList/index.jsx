import React from 'react'
import styles from '../../../styles.module.css'

export function FilterList () {
  return (
    <section className={styles.filterList}>
      <div className={styles.filtersResetWrap}>
        <p>FILTERS</p>
        <button className={styles.narrowSearchButton}>reset</button>
      </div>
    </section>
  )
}