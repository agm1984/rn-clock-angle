export const calcDegrees = (hour, min) => {
  if (!hour) throw new Error('An hour must be specified from 1-12.')
  if (hour < 1 || hour > 12) throw new Error('An hour must be specified from 1-12.')
  if (!min) throw new Error('A minute must be specified from 00-59.')
  if (+min < 0 || +min > 59) throw new Error('A minute must be specified from 00-59.')

  const measurement = Math.abs((+min * 6) - ((hour * 30) + (+min * 0.5)))
  const relativeMeasurement = 360 - Math.abs((+min * 6) - ((hour * 30) + (+min * 0.5)))

  if (measurement > relativeMeasurement) {
    return {
      degrees: relativeMeasurement,
      coterminal: measurement,
    }
  }

  return {
    degrees: measurement,
    coterminal: relativeMeasurement,
  }
}

export const calcRadians = () => {
  const poo = 'ok'
  return poo
}
