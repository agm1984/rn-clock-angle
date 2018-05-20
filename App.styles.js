import { StatusBar, Platform, StyleSheet } from 'react-native'

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  },
  appWrapper: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'stretch',
    paddingTop: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
  },
  appContainer: {
    position: 'relative',
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#333',
  },
  clockControlContainer: {
    position: 'absolute',
    top: 50,
    // aright: 0,
    // width: 10,
    // height: 10,
    backgroundColor: 'red',
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 8,
  },
  headingLogo: {
    width: 20,
    height: 20,
  },
  headingText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 3,
    paddingLeft: 4,
  },
  subheadingContainer: {
    backgroundColor: '#fff',
  },
  subheadingText: {
    color: '#278eca',
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: -1,
    backgroundColor: '#fff',
    paddingTop: 16,
    paddingLeft: 16,
  },
  subheadingUnderline: {
    backgroundColor: '#278eca',
    width: 32,
    height: 3,
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 16,
  },
  timeContainer: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  hoursInput: {
    height: 40,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 2,
    textAlign: 'center',
    padding: 10,
    margin: 10,
  },
  minuteInput: {
    height: 40,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 2,
    textAlign: 'center',
    padding: 10,
    margin: 10,
  },
  isAfternoonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  degreeContainer: {
    backgroundColor: '#333',
  },
  primaryTextContainer: {
    paddingLeft: 8,
    paddingRight: 8,
  },
  grayheadingContainer: {
    backgroundColor: '#333',
  },
  grayheadingText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: -1,
    backgroundColor: '#333',
    paddingTop: 16,
    paddingLeft: 16,
  },
  secondaryTextContainer: {
    backgroundColor: '#333',
    paddingTop: 8,
    paddingLeft: 20,
    paddingRight: 20,
  },
  secondaryText: {
    color: '#fff',
  },
})
