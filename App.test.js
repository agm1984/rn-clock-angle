import React from 'react'
import renderer from 'react-native-test-utils'
import App from './App'
import styles from './App.styles'

describe('App', () => {
  const app = renderer(<App />)
  const currentHour = 0
  const currentMinute = 0

  it('renders without crashing', () => {
    expect(app).toBeTruthy()
  })
  it('uses the App StyleSheet', () => {
    expect(styles).toBeTruthy()
  })
  it('has the correct initial state', () => {
    expect(app.state()).toEqual({
      currentHour: 0,
      currentMinute: 0,
      currentSecond: 0,
      currentHourControlled: 2,
      currentMinuteControlled: 30,
      isClockControlled: false,
      isAfternoon: true,
      errorMessage: '',
    })
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
    describe('inputStyles()', () => {
      it('returns the correct calculated styles', () => {
        expect(app.instance().inputStyles()).toEqual([styles.clockInput, {
          borderColor: app.state().isClockControlled ? '#ccc' : '#fff',
          paddingLeft: app.state().isClockControlled ? 10 : 5,
          paddingRight: app.state().isClockControlled ? 10 : 5,
          marginLeft: app.state().isClockControlled ? 10 : 0,
          marginRight: app.state().isClockControlled ? 10 : 0,
        }])
      })
    })
  })

  describe('Clock Control Toggle', () => {
    it('renders by default', () => {
      expect(app.query('#toggleControl')).toBeTruthy()
    })
    it('starts in uncontrolled mode by default', () => {
      expect(app.state().isClockControlled).toEqual(false)
    })
    it('doesn\'t render AM/PM Toggle by default', () => {
      expect(app.query('#toggleAfternoon')).toBeFalsy()
    })

    describe('Clock Controlled Mode', () => {
      beforeEach(() => {
        app.query('#toggleControl').simulate('valueChange', true)
        expect(app.state().isClockControlled).toEqual(true)
      })
      afterEach(() => {
        app.query('#toggleControl').simulate('valueChange', false)
        expect(app.state().isClockControlled).toEqual(false)
      })
      it('enables controlled mode when pressed', () => {
        expect(app.state().isClockControlled).toEqual(true)
      })
      it('toggles both AM and PM mode when pressed', () => {
        app.query('#toggleAfternoon').simulate('valueChange', true)
        expect(app.state().isAfternoon).toEqual(false)
        app.query('#toggleAfternoon').simulate('valueChange', false)
        expect(app.state().isAfternoon).toEqual(true)
      })
    })
  })

  describe('Hour Input', () => {
    it('has the correct initial state', () => {
      expect(app.state().currentHour).toEqual(currentHour)
    })
    // it('allows user input', () => {
    //   app.query('#hourInput').simulate('changeText', '2')
    // })
  })

  describe('Minute Input', () => {
    it('has the correct initial state', () => {
      expect(app.state().currentMinute).toEqual(currentMinute)
    })
    // it('allows user input', () => {
    //   app.query('#minuteInput').simulate('changeText', '30')
    // })
  })
})
