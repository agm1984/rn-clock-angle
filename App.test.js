import React from 'react'
import renderer from 'react-native-test-utils'
import App from './App'

describe('./App.js', () => {
  const app = renderer(<App />)
  const title = '[%] INANGLES'
  const d = new Date()
  const currentHour = d.getHours().toString()
  const currentMinute = d.getMinutes().toString()
  // if (currentHour > 12)

  it('renders without crashing', () => {
    expect(app).toBeTruthy()
  })
  it('has the correct title', () => {
    const appHeading = app.query('Text')
    expect(appHeading.text()).toEqual(title)
  })

  describe('Hour Input', () => {
    it('has the correct initial state', () => {
      expect(app.state().currentHour).toEqual(currentHour)
    })
    it('displays current hour as placeholder', () => {
      const textInputView = app.query(`TextInput[placeholder='${currentHour}']`)
      textInputView.simulate('changeText', 'react-native-test-utils')
    })
  })

  describe('Minute Input', () => {
    it('has the correct initial state', () => {
      expect(app.state().currentMinute).toEqual(currentMinute)
    })
    it('displays current minute as placeholder', () => {
      const textInputView = app.query(`TextInput[placeholder='${currentMinute}']`)
      textInputView.simulate('changeText', 'react-native-test-utils')
    })
  })
})
