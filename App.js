import React, { Component } from 'react'
import {
  SafeAreaView, ScrollView, View, Image, Text,
  Picker, Switch,
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
      isClockControlled: false,
      isAfternoon: true,
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
   * truthy is PM, and `isAfternoon` falsy is AM.
   */
  toggleAfternoon = () => this.setState(prevState => ({
    isAfternoon: !prevState.isAfternoon,
  }))

  /**
   * When the clock is controlled by the user, the auto-update
   * timer should be disabled. When the clock is uncontrolled,
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
      currentSecond: 0,
      isClockControlled: false,
    }
  })


  /**
   * Time is read-only in uncontrolled mode, and a Picker is used
   * in controlled mode to allow custom display.
   * Picker items are generated.
   */
  renderHour = () => (
    <Text testID="currentHourDisplay" style={styles.timeDisplay}>
      {calcHour(this.state.currentHour).toString()}
    </Text>
  )
  renderHourPicker = () => (
    <Picker
      enabled
      testID="hourPicker"
      mode="dropdown"
      style={styles.timePicker}
      selectedValue={this.state.currentHour}
      onValueChange={hour => this.setState({ currentHour: +hour })}
    >
      {Array.from(Array(12), (_, x) => x).map(hour => (
        <Picker.Item
          key={`hour${hour + 1}`}
          label={`${hour + 1}`}
          value={hour + 1}
        />
      ))}
    </Picker>
  )
  renderMinute = () => (
    <Text testID="currentMinuteDisplay" style={styles.timeDisplay}>
      {calcMinute(this.state.currentMinute).toString()}
    </Text>
  )
  renderMinutePicker = () => (
    <Picker
      enabled
      testID="minutePicker"
      mode="dropdown"
      style={styles.timePicker}
      selectedValue={calcMinute(this.state.currentMinute).toString()}
      onValueChange={minute => this.setState({ currentMinute: +minute })}
    >
      {Array.from(Array(60), (_, x) => x).map(min => (
        <Picker.Item
          key={`minute${min}`}
          label={(min < 10) ? `0${min}` : `${min}`}
          value={(min < 10) ? `0${min}` : `${min}`}
        />
      ))}
    </Picker>
  )

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
      isClockControlled, isAfternoon, errorMessage,
    } = this.state
    return (
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.appWrapper}>
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
              {(isClockControlled === true)
                ? this.renderHourPicker()
                : this.renderHour()}
              <Text>:</Text>
              {(isClockControlled === true)
                ? this.renderMinutePicker()
                : this.renderMinute()}
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
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default App
