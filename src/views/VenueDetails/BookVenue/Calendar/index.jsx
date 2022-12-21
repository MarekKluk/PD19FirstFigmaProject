import React from 'react'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { StyledBookCalendar } from './StyledBookCalendar'

export function Calendar ({ state, setState }) {
  return (
    <StyledBookCalendar
      onChange={item => setState([item.selection])}
      moveRangeOnFirstSelection={false}
      ranges={state}
    />
  )
}
