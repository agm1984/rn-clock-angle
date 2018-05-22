/**
 * Converts hours outputted from `new Date.getHours()`
 * to 12 hour clock.
 */
export const calcHour = (h) => {
  if (h === 0) return 12
  if (!h) throw new Error('calcHour(): Hour must be specified from `new Date.getHours()`.')
  if (h > 12) return h - 12
  return h
}

/**
 * Adds a zero onto minutes outputted from `new Date.getMinutes()`
 * if the number is less than 10.
 */
export const calcMinute = (m) => {
  if (m === 0) return '00'
  if (!m) throw new Error('calcMinute(): Minute must be specified from `new Date.getMinutes()`.')
  if (m < 10) return `0${m}`
  return m.toString()
}

/**
 * Places 'AM' or 'PM' after the time depending if
 * it is pre or post noon.
 */
export const calcAMPM = (h) => {
  if (h === 0) return 'AM'
  if (!h) throw new Error('calcAMPM(): Hour must be specified from `new Date.getHours()`.')
  if (h > 12) return 'PM'
  return 'AM'
}
