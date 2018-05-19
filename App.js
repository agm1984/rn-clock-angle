import React, { Component } from 'react'
import {
  View, Text, TextInput, StyleSheet,
} from 'react-native'
import Clock from './src/components/Clock/Clock'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentHour: '2',
      currentMinute: '30',
    }
  }

  render() {
    const { currentHour, currentMinute } = this.state
    return (
      <View style={styles.appWrapper}>
        <View style={styles.appContainer}>
          <Text style={styles.appHeading}>
            [%] INANGLES
          </Text>
          <View style={styles.currentTimeWrapper}>
            <TextInput
              style={styles.hoursInput}
              placeholder={currentHourz}
              onChangeText={currentHour => this.setState({ currentHour })}
              value=""
            />
            <TextInput
              style={styles.minuteInput}
              placeholder={currentMinute}
              onChangeText={currentMinute => this.setState({ currentMinute })}
              value=""
            />
          </View>
          <Clock
            minuteHandLength={110}
          />
        </View>
      </View>
    )
  }
}

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
  }
})

export default App
