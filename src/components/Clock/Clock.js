import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  clockContainer: {
    alignItems: 'center',
  },
})

class Clock extends Component {
  setHour = () => ((((this.props.hour % 12) / 12) * 360) + 90 +
    (((this.props.min * 6) + ((this.props.sec * 6) / 60)) / 12))
  setMinute = () => ((this.props.min * 6) + ((this.props.sec * 6) / 60))
  setSecond = () => (this.props.sec * 6)

  clockFrame = () => ({
    width: this.props.clockSize,
    height: this.props.clockSize,
    position: 'relative',
    backgroundColor: '#eee',
    borderColor: 'black',
    borderWidth: this.props.clockBorderWidth,
    borderRadius: this.props.clockSize / 2,
  })

  clockHolder = () => ({
    width: this.props.clockSize,
    height: this.props.clockSize,
    position: 'absolute',
    right: -this.props.clockBorderWidth,
    bottom: -this.props.clockBorderWidth,
  })

  clockFace = () => ({
    width: this.props.clockCentreSize,
    height: this.props.clockCentreSize,
    backgroundColor: this.props.clockCentreColor,
    borderRadius: this.props.clockCentreSize / 2,
    top: (this.props.clockSize - this.props.clockCentreSize) / 2,
    left: (this.props.clockSize - this.props.clockCentreSize) / 2,
  })

  hourHandStyles = () => ({
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
  })

  minuteHandStyles = () => ({
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
  })

  secondHandStyles = () => ({
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
  })

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
                    { rotate: `${this.setHour()}deg` },
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
                    { rotate: `${this.setMinute()}deg` }, /* eslint-disable max-len */
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
                    { rotate: `${this.setSecond()}deg` }, /* eslint-disable max-len */
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
  hour: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  sec: PropTypes.number.isRequired,
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
