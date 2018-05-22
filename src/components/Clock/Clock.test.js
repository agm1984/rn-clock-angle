import React from 'react'
import renderer from 'react-native-test-utils'
import Clock from './Clock'
import defaultClockSettings from './Clock.config'
import styles from './Clock.styles'

describe('Clock', () => {
  const clock = renderer(<Clock {...defaultClockSettings} />)
  const clockProps = clock.instance().props

  it('renders without crashing', () => {
    expect(clock).toBeTruthy()
  })
  it('uses the Clock StyleSheet', () => {
    expect(styles).toBeTruthy()
  })
  it('uses the default clock settings', () => {
    expect(clock.instance().props).toEqual(defaultClockSettings)
  })

  describe('Hour Hand', () => {
    it('returns 90 degrees at 12 AM', () => {
      expect(clock.instance().setHour()).toEqual(90)
    })
  })
  describe('Minute Hand', () => {
    it('returns 0 degrees at 12 AM', () => {
      expect(clock.instance().setMinute()).toEqual(0)
    })
  })
  describe('Second Hand', () => {
    it('returns 0 degrees at 12 AM', () => {
      expect(clock.instance().setSecond()).toEqual(0)
    })
  })

  describe('Instance Functions', () => {
    describe('this.clockFrame()', () => {
      it('returns the correct calculated props', () => {
        expect(clock.instance().clockFrame()).toEqual({
          width: clockProps.clockSize,
          height: clockProps.clockSize,
          position: 'relative',
          backgroundColor: clockProps.clockColor,
          borderColor: clockProps.clockBorderColor,
          borderWidth: clockProps.clockBorderWidth,
          borderRadius: clockProps.clockSize / 2,
        })
      })
    })

    describe('this.clockHolder()', () => {
      it('returns the correct calculated props', () => {
        expect(clock.instance().clockHolder()).toEqual({
          width: clockProps.clockSize,
          height: clockProps.clockSize,
          position: 'absolute',
          right: -clockProps.clockBorderWidth,
          bottom: -clockProps.clockBorderWidth,
        })
      })
    })

    describe('this.clockFace()', () => {
      it('returns the correct calculated props', () => {
        expect(clock.instance().clockFace()).toEqual({
          width: clockProps.clockCentreSize,
          height: clockProps.clockCentreSize,
          backgroundColor: clockProps.clockCentreColor,
          borderRadius: clockProps.clockCentreSize / 2,
          top: (clockProps.clockSize - clockProps.clockCentreSize) / 2,
          left: (clockProps.clockSize - clockProps.clockCentreSize) / 2,
        })
      })
    })

    describe('this.hourHandStyles()', () => {
      it('returns the correct calculated props', () => {
        expect(clock.instance().hourHandStyles()).toEqual({
          width: 0,
          height: 0,
          position: 'absolute',
          backgroundColor: clockProps.hourHandColor,
          top: clockProps.clockSize / 2,
          left: clockProps.clockSize / 2,
          marginVertical: -clockProps.hourHandWidth,
          marginLeft: -clockProps.hourHandLength / 2,
          paddingVertical: clockProps.hourHandWidth,
          paddingLeft: clockProps.hourHandLength,
          borderTopLeftRadius: clockProps.hourHandCurved ? clockProps.hourHandWidth : 0,
          borderBottomLeftRadius: clockProps.hourHandCurved ? clockProps.hourHandWidth : 0,
        })
      })
    })

    describe('this.minuteHandStyles()', () => {
      it('returns the correct calculated props', () => {
        expect(clock.instance().minuteHandStyles()).toEqual({
          width: 0,
          height: 0,
          position: 'absolute',
          backgroundColor: clockProps.minuteHandColor,
          top: clockProps.clockSize / 2,
          left: clockProps.clockSize / 2,
          marginTop: -(clockProps.minuteHandLength / 2),
          marginHorizontal: -clockProps.minuteHandWidth,
          paddingTop: clockProps.minuteHandLength,
          paddingHorizontal: clockProps.minuteHandWidth,
          borderTopLeftRadius: clockProps.minuteHandCurved ? clockProps.minuteHandWidth : 0,
          borderTopRightRadius: clockProps.minuteHandCurved ? clockProps.minuteHandWidth : 0,
        })
      })
    })

    describe('this.secondHandStyles()', () => {
      it('returns the correct calculated props', () => {
        expect(clock.instance().secondHandStyles()).toEqual({
          width: 0,
          height: 0,
          position: 'absolute',
          backgroundColor: clockProps.secondHandColor,
          top: clockProps.clockSize / 2,
          left: clockProps.clockSize / 2,
          marginTop: -(clockProps.secondHandLength / 2),
          marginHorizontal: -clockProps.secondHandWidth,
          paddingTop: clockProps.secondHandLength,
          paddingHorizontal: clockProps.secondHandWidth,
          borderTopLeftRadius: clockProps.secondHandCurved ? clockProps.secondHandWidth : 0,
          borderTopRightRadius: clockProps.secondHandCurved ? clockProps.secondHandWidth : 0,
        })
      })
    })
  })
})
