import { calcHour, calcMinute, calcAMPM } from './timeUtils'

describe('./src/timeUtils.js', () => {
  describe('calcHour()', () => {
    it('throws the correct error when no hour is passed in', () => {
      expect(() => calcHour()).toThrow('Hour must be specified from `new Date.getHours()`.')
    })
    it('returns 12 when hour is midnight', () => {
      expect(calcHour(0)).toEqual(12)
    })
    it('returns 11 when hour is 11 AM', () => {
      expect(calcHour(11)).toEqual(11)
    })
    it('returns 11 when hour is 11 PM', () => {
      expect(calcHour(23)).toEqual(11)
    })
  })

  describe('calcMinute()', () => {
    it('throws the correct error when no minute is passed in', () => {
      expect(() => calcMinute()).toThrow('Minute must be specified from `new Date.getMinutes()`.')
    })
    it('returns 00 when minute of the hour is 0', () => {
      expect(calcMinute(0)).toEqual('00')
    })
    it('returns 09 when minute of the hour is 9', () => {
      expect(calcMinute(9)).toEqual('09')
    })
    it('returns 59 when minute of the hour is 59', () => {
      expect(calcMinute(59)).toEqual('59')
    })
  })

  describe('calcAMPM()', () => {
    it('throws the correct error when no hour is passed in', () => {
      expect(() => calcAMPM()).toThrow('Hour must be specified from `new Date.getHours()`.')
    })
    it('returns AM when hour is less than 12', () => {
      expect(calcAMPM(11)).toEqual('AM')
    })
    it('returns AM when hour is 12', () => {
      expect(calcAMPM(12)).toEqual('AM')
    })
    it('returns PM when hour is greater than 12', () => {
      expect(calcAMPM(23)).toEqual('PM')
    })
  })
})