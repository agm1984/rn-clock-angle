import React from 'react'
import App from './App'
//import renderer from 'react-test-renderer'
import renderer from 'react-native-test-utils'

describe('./App.js', () => {
  const app = renderer(<App />)
  const title = '[%] INANGLES'
  const currentHour = '2'
  const currentMinute = '30'

  it('renders without crashing', () => {
    expect(app).toMatchSnapshot()
  })

  it('has the correct title', () => {
    let appHeading = app.query('Text')
    expect(appHeading.text()).toEqual(title)
  })

  describe('Hour Input', () => {
    it('displays current hour as placeholder', () => {
      let textInputView = app.query("TextInput[placeholder='2']")
      textInputView.simulate('changeText', 'react-native-test-utils')
    })
  })

  describe('Minute Input', () => {
    it('displays current minute as placeholder', () => {
      let textInputView = app.query("TextInput[placeholder='30']")
      textInputView.simulate('changeText', 'react-native-test-utils')
    })
  })
})
