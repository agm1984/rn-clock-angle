import React, { Component } from 'react'
import {
  SafeAreaView, View, Image, Text,
  TextInput, Switch,
} from 'react-native'
import styles from './App.styles'
import Clock from './src/components/Clock/Clock'
import defaultClockSettings from './src/components/Clock/Clock.config'
import { calcHour, calcMinute, calcAMPM } from './src/utils/timeUtils'
import { calcDegrees } from './src/utils/angleUtils'
import mockLogo from './src/images/mockLogo.jpg'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentHour: 0,
      currentMinute: 0,
      currentSecond: 0,
      currentHourControlled: 2,
      currentMinuteControlled: 30,
      isClockControlled: false,
      isAfternoon: true,
      errorMessage: '',
    }
    this.clockTimer = null
  }

  /**
   * Clock updating is managed via a 1000ms timer.
   */
  componentDidMount() {
    this.clockTimer = setInterval(() => {
      const d = new Date()
      return this.setState({
        currentHour: d.getHours(),
        currentMinute: d.getMinutes(),
        currentSecond: d.getSeconds(),
      })
    }, 1000)
  }

  /**
   * The clock timer must be explicitly garbage collected
   * when the App unmounts.
   */
  componentWillUnmount() {
    return clearInterval(this.clockTimer)
  }

  /**
   * If the clock is currently user controlled, `isAfternoon`
   * truthy is PM and falsy is AM.
   */
  toggleAfternoon = () => this.setState(prevState => ({
    isAfternoon: !prevState.isAfternoon,
  }))

  /**
   * When clock control is delegated to the user, the update
   * timer should be disabled. When clock control is relinquished,
   * the clock update timer should be re-enabled.
   */
  toggleClockControl = () => this.setState((prevState) => {
    if (prevState.isClockControlled === false) {
      clearInterval(this.clockTimer)
      return {
        currentHour: 2,
        currentMinute: 30,
        isClockControlled: true,
      }
    }

    this.clockTimer = setInterval(() => {
      const d = new Date()
      return this.setState({
        currentHour: d.getHours(),
        currentMinute: d.getMinutes(),
        currentSecond: d.getSeconds(),
      })
    }, 1000)
    return {
      currentHour: 0,
      currentMinute: 0,
      isClockControlled: false,
    }
  })

  inputStyles = () => ([styles.clockInput, {
    borderColor: this.state.isClockControlled ? '#ccc' : '#fff',
    paddingLeft: this.state.isClockControlled ? 10 : 5,
    paddingRight: this.state.isClockControlled ? 10 : 5,
    marginLeft: this.state.isClockControlled ? 10 : 0,
    marginRight: this.state.isClockControlled ? 10 : 0,
  }])

  handleHourChange = (hour) => {
    if (this.state.isClockControlled) {
      switch (true) {
        case !hour:
          return this.setState({
            currentHourControlled: '',
            errorMessage: 'Specify an hour between 1 and 12.',
          })
        case hour < 1:
          return this.setState({
            currentHourControlled: +hour,
            errorMessage: 'Specify an hour between 1 and 12.',
          })
        case hour > 12:
          return this.setState({
            currentHourControlled: +hour,
            errorMessage: 'Specify an hour between 1 and 12.',
          })
        default:
          return this.setState({
            currentHourControlled: +hour,
            currentHour: +hour,
            errorMessage: '',
          })
      }
    }
    return this.setState({ currentHour: +hour })
  }

  handleMinuteChange = (text) => {
    if (this.state.isClockControlled) {
      console.log('WTF', typeof text)
      switch (true) {
        case !text:
          return this.setState({
            currentMinuteControlled: '',
            errorMessage: 'Specify an minute between 0 and 59.',
          })
        case +text < 0:
          return this.setState({
            currentMinuteControlled: +text,
            errorMessage: 'Specify an minute between 0 and 59.',
          })
        case +text > 59:
          return this.setState({
            currentMinuteControlled: +text,
            errorMessage: 'Specify an minute between 0 and 59.',
          })
        default:
          return this.setState({
            currentMinuteControlled: +text,
            currentMinute: +text,
            errorMessage: '',
          })
      }
    }
    return this.setState({ currentHour: +text })
  }

  /**
   * If clock control is currently handled automatically, the
   * AM/PM status is determined by the current hour of the day.
   * If clock control is delegated to the user, the AM/PM status
   * is determined by `isAfternoon`.
   */
  renderAMPM = () => {
    const { currentHour, isClockControlled, isAfternoon } = this.state
    if (!isClockControlled) {
      return calcAMPM(currentHour)
    }
    return isAfternoon ? 'PM' : 'AM'
  }

  render() {
    const {
      currentHour, currentMinute, currentSecond,
      currentHourControlled, currentMinuteControlled,
      isClockControlled, isAfternoon, errorMessage,
    } = this.state
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.appWrapper}>
          <View style={styles.appContainer}>
            <View style={styles.headingContainer}>
              <Image
                style={styles.headingLogo}
                source={mockLogo}
              />
              <Text testID="headingText" style={styles.headingText}>
                INANGLES
              </Text>
            </View>

            <View style={styles.subheadingContainer}>
              <Text testID="subheadingTime" style={styles.subheadingText}>
                TIME
              </Text>
              <View style={styles.subheadingUnderline} />
              <View style={styles.clockControlContainer}>
                <Text>Specify custom time:</Text>
                <Switch
                  testID="toggleControl"
                  onValueChange={() => this.toggleClockControl()}
                  thumbTintColor="#278eca"
                  tintColor="#757575"
                  onTintColor="#757575"
                  value={isClockControlled}
                />
              </View>
            </View>

            <View style={styles.timeContainer}>
              <TextInput
                testID="hourInput"
                style={this.inputStyles()}
                placeholderTextColor="#757575"
                placeholder={(isClockControlled === true)
                  ? currentHourControlled.toString()
                  : calcHour(currentHour).toString()}
                onChangeText={text => this.handleHourChange(text)}
                value={(isClockControlled === true)
                  ? currentHourControlled.toString()
                  : calcHour(currentHour).toString()}
                underlineColorAndroid="transparent"
              />
              <Text>:</Text>
              <TextInput
                testID="minuteInput"
                style={this.inputStyles()}
                placeholderTextColor="#757575"
                placeholder={(isClockControlled === true)
                  ? currentMinuteControlled.toString()
                  : calcMinute(currentMinute).toString()}
                onChangeText={text => this.handleMinuteChange(text)}
                value={(isClockControlled === true)
                  ? (currentMinuteControlled === '') ? '' : calcMinute(currentMinuteControlled).toString()
                  : calcMinute(currentMinute).toString()}
                underlineColorAndroid="transparent"
              />
              <View style={styles.isAfternoonContainer}>
                <Text>
                  {this.renderAMPM()}
                </Text>
                {isClockControlled && (
                  <Switch
                    testID="toggleAfternoon"
                    onValueChange={() => this.toggleAfternoon()}
                    thumbTintColor="#444"
                    tintColor="#757575"
                    onTintColor="#757575"
                    value={isAfternoon}
                  />
                )}
              </View>
              <Text testID="errorMessage" style={styles.errorMessage}>
                {errorMessage}
              </Text>
            </View>

            <Clock
              {...defaultClockSettings}
              hour={currentHour}
              min={currentMinute}
              sec={currentSecond}
              isClockControlled={isClockControlled}
            />

            <View style={styles.grayheadingContainer}>
              <Text testID="subheadingAngle" style={styles.grayheadingText}>
                ANGLE
              </Text>
            </View>
            <View style={styles.secondaryTextContainer}>
              <Text style={styles.secondaryText}>
                <Text style={styles.degreeText}>
                  {calcDegrees(calcHour(currentHour), calcMinute(currentMinute)).degrees} Degrees
                </Text>
                <Text> is the angle between the Hour and Minute Hands.</Text>
              </Text>
            </View>

            <View style={styles.grayheadingContainer}>
              <Text testID="subheadingCoterminal" style={styles.grayheadingText}>
                COTERMINAL ANGLE
              </Text>
            </View>
            <View style={styles.secondaryTextContainer}>
              <Text style={styles.secondaryText}>
                <Text style={styles.degreeText}>
                  {calcDegrees(calcHour(currentHour), calcMinute(currentMinute)).coterminal} Degrees
                </Text>
                <Text> is the coterminal angle between the Hour and Minute Hands.</Text>
                <Text>Other coterminal angles are excluded.</Text>
              </Text>
            </View>

          </View>
        </View>
      </SafeAreaView>
    )
  }
}

export default App
