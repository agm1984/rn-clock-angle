import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import styles from './Clock.styles'

class Clock extends Component {
  /**
   * setHour(), setMinute(), and setSecond() are Base 60
   * ratios for Clock Hand rotation distance calculated in degrees.
   * These should never require modification.
   * See upstream DOM markup to examine props.
   */
  setHour = () => ((((this.props.hour % 12) / 12) * 360) + 90 +
    (((this.props.min * 6) + ((this.props.sec * 6) / 60)) / 12))
  setMinute = () => ((this.props.min * 6) + ((this.props.sec * 6) / 60))
  setSecond = () => (this.props.sec * 6)

  /**
   * clockFrame(), clockHolder(), and clockFace() are calculated
   * clock dimensions based on supplied props.
   * See `defaultClockSettings`.
   */
  clockFrame = () => ({
    width: this.props.clockSize,
    height: this.props.clockSize,
    position: 'relative',
    backgroundColor: this.props.clockColor,
    borderColor: this.props.clockBorderColor,
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

  /**
   * hourHandStyles(), minuteHandStyles(), secondHandStyles()
   * are calculated clock hand dimensions based on supplied props.
   * See `defaultClockSettings`.
   */
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

  /**
   * Clock hands are rotated from the center point and then translated
   * to the calculated position for endpoint pivoting (center of clock).
   * See `defaultClockSettings` first for any dimensional changes.
   */
  renderHourHand = () => {
    const { hourHandOffset, hourHandLength } = this.props
    return [
      this.hourHandStyles(),
      {
        transform: [
          { rotate: `${this.setHour()}deg` },
          { translateX: -(hourHandOffset + (hourHandLength / 2)) },
        ],
      },
    ]
  }
  renderMinuteHand = () => {
    const { minuteHandOffset, minuteHandLength } = this.props
    return [
      this.minuteHandStyles(),
      {
        transform: [
          { rotate: `${this.setMinute()}deg` },
          { translateY: -(minuteHandOffset + (minuteHandLength / 2)) },
        ],
      },
    ]
  }
  renderSecondHand = () => {
    const { secondHandOffset, secondHandLength, isClockControlled } = this.props
    if (isClockControlled) return { display: 'none' }
    return [
      this.secondHandStyles(),
      {
        transform: [
          { rotate: `${this.setSecond()}deg` },
          { translateY: -(secondHandOffset + (secondHandLength / 2)) },
        ],
      },
    ]
  }

  render() {
    return (
      <View style={styles.clockContainer}>
        <View style={this.clockFrame()}>
          <View style={this.clockHolder()}>
            <View style={this.renderHourHand()} />
            <View style={this.renderMinuteHand()} />
            <View style={this.renderSecondHand()} />
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
  isClockControlled: PropTypes.bool.isRequired,
  clockSize: PropTypes.number.isRequired,
  clockColor: PropTypes.string.isRequired,
  clockBorderColor: PropTypes.string.isRequired,
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
