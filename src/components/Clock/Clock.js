import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  clockContainer: {
    backgroundColor: 'orange',
    alignItems: 'center',
  },
})

class Clock extends Component {
  constructor(props) {
    super(props)
    const d = new Date()
    this.state = {
      sec: d.getSeconds() * 6, /* eslint-disable no-mixed-operators */
      min: d.getMinutes() * 6 + (d.getSeconds() * 6) / 60,
      hour: ((d.getHours() % 12) / 12) * 360 + 90 +
        (d.getMinutes() * 6 + (d.getSeconds() * 6) / 60) / 12,
    } /* eslint-enable no-mixed-operators */
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      const d = new Date()
      this.setState({ sec: d.getSeconds() * 6 }) /* eslint-disable no-mixed-operators */
      this.setState({ min: d.getMinutes() * 6 + (d.getSeconds() * 6) / 60 })
      this.setState({
        hour: ((d.getHours() % 12) / 12) * 360 + 90 +
        (d.getMinutes() * 6 + (d.getSeconds() * 6) / 60) / 12,
      })
    }, 1000) /* eslint-enable no-mixed-operators */
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  clockFrame() {
    return {
      width: this.props.clockSize,
      height: this.props.clockSize,
      position: 'relative',
      backgroundColor: '#eee',
      borderColor: 'black',
      borderWidth: this.props.clockBorderWidth,
      borderRadius: this.props.clockSize / 2,
    }
  }

  clockHolder() {
    return {
      width: this.props.clockSize,
      height: this.props.clockSize,
      position: 'absolute',
      right: -this.props.clockBorderWidth,
      bottom: -this.props.clockBorderWidth,
    }
  }

  clockFace() {
    return {
      width: this.props.clockCentreSize,
      height: this.props.clockCentreSize,
      backgroundColor: this.props.clockCentreColor,
      borderRadius: this.props.clockCentreSize / 2,
      top: (this.props.clockSize - this.props.clockCentreSize) / 2,
      left: (this.props.clockSize - this.props.clockCentreSize) / 2,
    }
  }

  hourHandStyles() {
    return {
      width: 0,
      height: 0,
      position: 'absolute',
      backgroundColor: this.props.hourHandColor,
      top: this.props.clockSize / 2,
      left: this.props.clockSize / 2,
      marginVertical: -this.props.hourHandWidth,
      marginLeft: -this.props.hourHandLength / 2,
      paddingVertical: this.props.hourHandWidth,
      paddingLeft: this.props.hourHandLength,
      borderTopLeftRadius: this.props.hourHandCurved ? this.props.hourHandWidth : 0,
      borderBottomLeftRadius: this.props.hourHandCurved ? this.props.hourHandWidth : 0,
    }
  }

  minuteHandStyles() {
    return {
      width: 0,
      height: 0,
      position: 'absolute',
      backgroundColor: this.props.minuteHandColor,
      top: this.props.clockSize / 2,
      left: this.props.clockSize / 2,
      marginTop: -(this.props.minuteHandLength / 2),
      marginHorizontal: -this.props.minuteHandWidth,
      paddingTop: this.props.minuteHandLength,
      paddingHorizontal: this.props.minuteHandWidth,
      borderTopLeftRadius: this.props.minuteHandCurved ? this.props.minuteHandWidth : 0,
      borderTopRightRadius: this.props.minuteHandCurved ? this.props.minuteHandWidth : 0,
    }
  }

  secondHandStyles() {
    return {
      width: 0,
      height: 0,
      position: 'absolute',
      backgroundColor: this.props.secondHandColor,
      top: this.props.clockSize / 2,
      left: this.props.clockSize / 2,
      marginTop: -(this.props.secondHandLength / 2),
      marginHorizontal: -this.props.secondHandWidth,
      paddingTop: this.props.secondHandLength,
      paddingHorizontal: this.props.secondHandWidth,
      borderTopLeftRadius: this.props.secondHandCurved ? this.props.secondHandWidth : 0,
      borderTopRightRadius: this.props.secondHandCurved ? this.props.secondHandWidth : 0,
    }
  }

  render() {
    return (
      <View style={styles.clockContainer}>
        <View style={this.clockFrame()}>
          <View style={this.clockHolder()}>
            <View
              style={[
                this.hourHandStyles(),
                {
                  transform: [
                    { rotate: `${this.state.hour}deg` },
                    { translateX: -(this.props.hourHandOffset + (this.props.hourHandLength / 2)) },
                  ],
                },
              ]}
            />
            <View
              style={[
                this.minuteHandStyles(),
                {
                  transform: [
                    { rotate: `${this.state.min}deg` }, /* eslint-disable max-len */
                    { translateY: -(this.props.minuteHandOffset + (this.props.minuteHandLength / 2)) },
                  ], /* eslint-enable max-len */
                },
              ]}
            />
            <View
              style={[
                this.secondHandStyles(),
                {
                  transform: [
                    { rotate: `${this.state.sec}` }, /* eslint-disable max-len */
                    { translateY: -(this.props.secondHandOffset + (this.props.secondHandLength / 2)) },
                  ], /* eslint-enable max-len */
                },
              ]}
            />
            <View style={this.clockFace()} />
          </View>
        </View>
      </View>
    )
  }
}

Clock.propTypes = {
  clockSize: PropTypes.number.isRequired,
  clockBorderWidth: PropTypes.number.isRequired,
  clockCentreSize: PropTypes.number.isRequired,
  clockCentreColor: PropTypes.string.isRequired,
  hourHandColor: PropTypes.string.isRequired,
  hourHandWidth: PropTypes.number.isRequired,
  hourHandLength: PropTypes.number.isRequired,
  hourHandCurved: PropTypes.bool.isRequired,
  hourHandOffset: PropTypes.number.isRequired,
  minuteHandColor: PropTypes.string.isRequired,
  minuteHandLength: PropTypes.number.isRequired,
  minuteHandWidth: PropTypes.number.isRequired,
  minuteHandCurved: PropTypes.bool.isRequired,
  minuteHandOffset: PropTypes.number.isRequired,
  secondHandColor: PropTypes.string.isRequired,
  secondHandLength: PropTypes.number.isRequired,
  secondHandWidth: PropTypes.number.isRequired,
  secondHandCurved: PropTypes.bool.isRequired,
  secondHandOffset: PropTypes.number.isRequired,
}

export default Clock
