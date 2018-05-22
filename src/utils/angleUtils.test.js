import { calcDegrees } from './angleUtils'

describe('Angle Utilities', () => {
  describe('calcDegrees()', () => {
    it('throws the correct error when nothing is passed in', () => {
      expect(() => calcDegrees()).toThrow('An hour must be specified from 1-12.')
    })

    it('throws the correct error when no hour is passed in', () => {
      expect(() => calcDegrees(null, 59)).toThrow('An hour must be specified from 1-12.')
    })
    it('throws the correct error when an hour less than 1 is passed in', () => {
      expect(() => calcDegrees(0, 59)).toThrow('An hour must be specified from 1-12.')
    })
    it('throws the correct error when an hour greater than 12 is passed in', () => {
      expect(() => calcDegrees(13, 59)).toThrow('An hour must be specified from 1-12.')
    })

    it('throws the correct error when no minute is passed in', () => {
      expect(() => calcDegrees(11, null)).toThrow('A minute must be specified from 00-59.')
    })
    it('throws the correct error when a minute less than 0 is passed in', () => {
      expect(() => calcDegrees(11, -1)).toThrow('A minute must be specified from 00-59.')
    })
    it('throws the correct error when a minute greater than 59 is passed in', () => {
      expect(() => calcDegrees(11, 60)).toThrow('A minute must be specified from 00-59.')
    })

    it('returns the correct angles at 12:00 AM', () => {
      expect(calcDegrees(12, '00')).toEqual({
        degrees: 0,
        coterminal: 360,
      })
    })
    it('returns the correct angles at 6:00 AM', () => {
      expect(calcDegrees(6, '00')).toEqual({
        degrees: 180,
        coterminal: 180,
      })
    })
    it('returns the correct angles at 2:30 PM', () => {
      expect(calcDegrees(2, '30')).toEqual({
        degrees: 105,
        coterminal: 255,
      })
    })
    it('returns the correct angles at 11:59 PM', () => {
      expect(calcDegrees(11, '59')).toEqual({
        degrees: 5.5,
        coterminal: 354.5,
      })
    })
  })
})
