import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import Clock from './src/components/Clock/Clock'

const styles = StyleSheet.create({
  appWrapper: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  appContainer: {
    alignItems: 'stretch',
  },
  appHeading: {
    backgroundColor: '#000',
    color: '#fff',
    textAlign: 'center',
    fontSize: 32,
  },
  currentTimeWrapper: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'brown',
  },
  hoursInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: 'center',
    padding: 10,
    margin: 10,
  },
  minuteInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: 'center',
    padding: 10,
    margin: 10,
  },
})

class App extends Component {
  constructor(props) {
    super(props)
    const d = new Date()
    // this.state = {
    //   sec: d.getSeconds() * 6,
    //   min: d.getMinutes() * 6 + (d.getSeconds() * 6) / 60,
    //   hour: ((d.getHours() % 12)/ 12) * 360 + 90 +
    //     (d.getMinutes() * 6 + (d.getSeconds() * 6) / 60) / 12,
    // }
    this.state = {
      currentHour: d.getHours().toString(),
      currentMinute: d.getMinutes().toString(),
      primaryColor: 'black',
    }
  }

  render() {
    const { currentHour, currentMinute, primaryColor } = this.state
    return (
      <View style={styles.appWrapper}>
        <View style={styles.appContainer}>
          <Text style={styles.appHeading}>
            [%] INANGLES
          </Text>
          <View style={styles.currentTimeWrapper}>
            <TextInput
              style={styles.hoursInput}
              placeholder={currentHour}
              onChangeText={text => this.setState({ currentHour: text })}
              value=""
            />
            <TextInput
              style={styles.minuteInput}
              placeholder={currentMinute}
              onChangeText={text => this.setState({ currentMinute: text })}
              value=""
            />
          </View>
          <Clock
            clockSize={270}
            clockBorderWidth={7}
            clockCentreSize={15}
            clockCentreColor={primaryColor}
            hourHandColor={primaryColor}
            hourHandWidth={5.5}
            hourHandLength={70}
            hourHandCurved
            hourHandOffset={0}
            minuteHandColor={primaryColor}
            minuteHandLength={110}
            minuteHandWidth={5}
            minuteHandCurved
            minuteHandOffset={0}
            secondHandColor={primaryColor}
            secondHandLength={120}
            secondHandWidth={2}
            secondHandCurved
            secondHandOffset={0}
          />
        </View>
      </View>
    )
  }
}

export default App
