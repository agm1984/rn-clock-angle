import React, { Component } from 'react'
import {
  SafeAreaView, View, Image, Text,
  TextInput, Switch,
} from 'react-native'
import styles from './App.styles'
import Clock from './src/components/Clock/Clock'
import { calcHour, calcMinute, calcAMPM } from './src/utils/timeUtils'
import { calcDegrees } from './src/utils/angleUtils'


export const defaultClockSettings = {
  hour: 0,
  min: 0,
  sec: 0,
  clockSize: 150,
  clockColor: '#333',
  clockBorderColor: '#333',
  clockBorderWidth: 4,
  clockCentreSize: 10,
  clockCentreColor: '#278eca',
  hourHandColor: '#fff',
  hourHandWidth: 3.5,
  hourHandLength: 45,
  hourHandCurved: true,
  hourHandOffset: 0,
  minuteHandColor: '#fff',
  minuteHandLength: 55,
  minuteHandWidth: 3,
  minuteHandCurved: true,
  minuteHandOffset: 0,
  secondHandColor: '#278eca',
  secondHandLength: 65,
  secondHandWidth: 2,
  secondHandCurved: true,
  secondHandOffset: 0,
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentHour: 2,
      currentMinute: 30,
      currentSecond: 0,
      isClockControlled: false,
      isAfternoon: true,
    }
    this.clockTimer = null
  }

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

  componentWillUnmount() {
    clearInterval(this.clockTimer)
  }

  toggleAfternoon = () => this.setState(prevState => ({
    isAfternoon: !prevState.isAfternoon,
  }))

  render() {
    const {
      currentHour, currentMinute, currentSecond, isAfternoon,
    } = this.state
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.appWrapper}>
          <View style={styles.appContainer}>
            <View style={styles.clockControlContainer}>
              <Text>test</Text>
            </View>

            <View style={styles.headingContainer}>
              <Image
                style={styles.headingLogo}
                source={require('./src/images/mockLogo.jpg')}
              />
              <Text testID="headingText" style={styles.headingText}>
                INANGLES
              </Text>
            </View>
            <View style={styles.subheadingContainer}>
              <Text style={styles.subheadingText}>TIME</Text>
              <View style={styles.subheadingUnderline} />
            </View>

            <View style={styles.timeContainer}>
              <TextInput
                style={styles.hoursInput}
                placeholderTextColor="#757575"
                placeholder={calcHour(currentHour).toString()}
                onChangeText={text => this.setState({ currentHour: +text })}
                value={calcHour(currentHour).toString()}
                underlineColorAndroid="transparent"
              />
              <Text>:</Text>
              <TextInput
                style={styles.minuteInput}
                placeholderTextColor="#757575"
                placeholder={calcMinute(currentMinute).toString()}
                onChangeText={text => this.setState({ currentMinute: +text })}
                value={calcMinute(currentMinute).toString()}
                underlineColorAndroid="transparent"
              />
              <View style={styles.isAfternoonContainer}>
                <Text>
                  {calcAMPM(currentHour)}
                </Text>
                {this.state.isClockControlled && (
                  <Switch
                    onValueChange={() => this.toggleAfternoon()}
                    thumbTintColor="#278eca"
                    tintColor="#eef"
                    onTintColor="#eef"
                    value={isAfternoon}
                  />
                )}
              </View>
            </View>

            <Clock
              {...defaultClockSettings}
              hour={currentHour}
              min={currentMinute}
              sec={currentSecond}
            />

            <View style={styles.grayheadingContainer}>
              <Text style={styles.grayheadingText}>ANGLE</Text>
            </View>
            <View style={styles.secondaryTextContainer}>
              <Text style={styles.secondaryText}>
                {calcDegrees(calcHour(currentHour), calcMinute(currentMinute)).degrees} Degrees is the angle between the Hour and Minute Hands.
              </Text>
            </View>

            <View style={styles.grayheadingContainer}>
              <Text style={styles.grayheadingText}>COTERMINAL ANGLE</Text>
            </View>
            <View style={styles.secondaryTextContainer}>
              <Text style={styles.secondaryText}>
                {calcDegrees(calcHour(currentHour), calcMinute(currentMinute)).coterminal} Degrees is the coterminal angle between the Hour and Minute Hands. Other coterminal angles are excluded.
              </Text>
            </View>

          </View>
        </View>
      </SafeAreaView>
    )
  }
}

export default App
