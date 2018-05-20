import React from 'react'
import renderer from 'react-native-test-utils'
import App from './App'
import { calcHour, calcMinute, calcAMPM } from './src/utils/timeUtils'

describe('./App.js', () => {
  const app = renderer(<App />)
  const title = 'INANGLES'
  const currentHour = 2
  const currentMinute = 30

  it('renders without crashing', () => {
    expect(app).toBeTruthy()
  })
  it('has the correct title', () => {
    const appHeading = app.query('#headingText')
    expect(appHeading.text()).toEqual(title)
  })

  describe('Hour Input', () => {
    it('has the correct initial state', () => {
      console.log('APP STATE', app.state())
      expect(app.state().currentHour).toEqual(currentHour)
    })
    // it('displays current hour as placeholder', () => {
    //   const textInputView = app.query(`TextInput[placeholder='${calcHour(currentHour).toString()}']`)
    //   textInputView.simulate('changeText', 'react-native-test-utils')
    // })
  })

  describe('Minute Input', () => {
    it('has the correct initial state', () => {
      expect(app.state().currentMinute).toEqual(currentMinute)
    })
    // it('displays current minute as placeholder', () => {
    //   const textInputView = app.query(`TextInput[placeholder='${calcMinute(currentMinute).toString()}']`)
    //   textInputView.simulate('changeText', 'react-native-test-utils')
    // })
  })
})
