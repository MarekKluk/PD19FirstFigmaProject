const DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000
let startDayTime = null
let endDayTime = null
let amountOfBookedDays = null

export function CheckForBookedDays (dateState) {
  const startDayDate = dateState[0].startDate
  const endDayDate = dateState[0].endDate
  startDayDate ? startDayTime = startDayDate.getTime() : startDayTime = null
  endDayDate ? endDayTime = endDayDate.getTime() : endDayTime = startDayTime
  amountOfBookedDays = Math.round((Math.abs((startDayTime - endDayTime) / (DAY_IN_MILLISECONDS))) + 1)

  return amountOfBookedDays
}
