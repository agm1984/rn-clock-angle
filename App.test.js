import React from 'react'
import renderer from 'react-native-test-utils'
import App from './App'
import styles from './App.styles'

describe('App', () => {
  const app = renderer(<App />)
  const initialState = {
    currentHour: 0,
    currentMinute: 0,
    currentSecond: 0,
    isClockControlled: false,
    isAfternoon: true,
  }

  it('renders without crashing', () => {
    expect(app).toBeTruthy()
  })
  it('uses the App StyleSheet', () => {
    expect(styles).toBeTruthy()
  })
  it('has the correct initial state', () => {
    expect(app.state()).toEqual(initialState)
  })

  describe('App UI Text', () => {
    const title = 'INANGLES'
    const subheadingTime = 'TIME'
    const subheadingAngle = 'ANGLE'
    const subheadingCoterminal = 'COTERMINAL ANGLE'

    it('renders the app title', () => {
      expect(app.query('#headingText').text()).toEqual(title)
    })
    it('renders the Time subheading', () => {
      expect(app.query('#subheadingTime').text()).toEqual(subheadingTime)
    })
    it('renders the correct hour by default', () => {
      expect(app.query('#currentHourDisplay').text()).toEqual('12')
    })
    it('renders the correct minute by default', () => {
      expect(app.query('#currentMinuteDisplay').text()).toEqual('00')
    })
    it('renders no error message by default', () => {
      expect(app.query('#errorMessage').text()).toEqual('')
    })
    it('renders the Time subheading', () => {
      expect(app.query('#subheadingAngle').text()).toEqual(subheadingAngle)
    })
    it('renders the Time subheading', () => {
      expect(app.query('#subheadingCoterminal').text()).toEqual(subheadingCoterminal)
    })
  })

  describe('Instance Functions', () => {
    describe('renderHour()', () => {
      it('matches the snapshot', () => {
        expect(app.instance().renderHour()).toMatchSnapshot()
      })
    })
    describe('renderHourPicker()', () => {
      it('matches the snapshot', () => {
        expect(app.instance().renderHourPicker()).toMatchSnapshot()
      })
    })
    describe('renderMinute()', () => {
      it('matches the snapshot', () => {
        expect(app.instance().renderMinute()).toMatchSnapshot()
      })
    })
    describe('renderMinutePicker()', () => {
      it('matches the snapshot', () => {
        expect(app.instance().renderMinutePicker()).toMatchSnapshot()
      })
    })
  })

  describe('Clock Control Toggle', () => {
    it('renders by default', () => {
      expect(app.query('#toggleControl')).toBeTruthy()
    })
    it('doesn\'t render AM/PM Toggle by default', () => {
      expect(app.query('#toggleAfternoon')).toBeFalsy()
    })

    describe('Clock Controlled Mode', () => {
      beforeEach(() => {
        app.query('#toggleControl').simulate('valueChange', true)
      })
      afterEach(() => {
        app.query('#toggleControl').simulate('valueChange', false)
      })
      it('enables controlled mode when pressed', () => {
        expect(app.state().isClockControlled).toEqual(true)
      })
      it('has the correct state in controlled mode', () => {
        expect(app.state()).toEqual({
          ...initialState,
          currentHour: 2,
          currentMinute: 30,
          isClockControlled: true,
        })
      })
      it('toggles both AM and PM mode when pressed', () => {
        app.query('#toggleAfternoon').simulate('valueChange', true)
        expect(app.state().isAfternoon).toEqual(false)
        app.query('#toggleAfternoon').simulate('valueChange', false)
        expect(app.state().isAfternoon).toEqual(true)
      })
      it('was mocked out properly', () => {
        jest.mock('Picker', () => 'Picker')
        expect(app.query('Picker')).toBeTruth({})
      })
    })
  })
})
