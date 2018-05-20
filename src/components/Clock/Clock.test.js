import React from 'react'
import renderer from 'react-native-test-utils'
import Clock from './Clock'
import { defaultClockSettings } from '../../../App'

describe('./src/components/Clock/Clock.js', () => {
  const clock = renderer(<Clock {...defaultClockSettings} />)

  it('should render without crashing', () => {
    expect(clock).toBeTruthy()
  })

  describe('Hour Hand', () => {
    it('should return 90 degrees at 12 AM', () => {
      expect(clock.instance().setHour()).toEqual(90)
    })
  })

  describe('Minute Hand', () => {
    it('should return 0 degrees at 12 AM', () => {
      expect(clock.instance().setMinute()).toEqual(0)
    })
  })

  describe('Second Hand', () => {
    it('should return 0 degrees at 12 AM', () => {
      expect(clock.instance().setSecond()).toEqual(0)
    })
  })
})
