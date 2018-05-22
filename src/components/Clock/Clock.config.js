/**
 * The Clock is driven by a config object to provide default
 * settings and to facilitate dynamic control at run-time.
 */
export default {
  hour: 0,
  min: 0,
  sec: 0,
  isClockControlled: false,
  clockSize: 150,
  clockColor: '#333',
  clockBorderColor: '#333',
  clockBorderWidth: 4,
  clockCentreSize: 10,
  clockCentreColor: '#278eca',
  hourHandColor: '#fff',
  hourHandWidth: 3.5,
  hourHandLength: 40,
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
