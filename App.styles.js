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
    backgroundColor: '#fff',
  },
  clockControlContainer: {
    position: 'absolute',
    top: 50,
    //right: 0,
    // width: 10,
    // height: 10,
    backgroundColor: 'red',
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 16,
  },
  headingLogo: {
    width: 24,
    height: 24,
  },
  headingText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: 3,
    paddingLeft: 4,
  },
  subheadingContainer: {
    backgroundColor: '#fff',
  },
  subheadingText: {
    color: '#278eca',
    fontSize: 24,
    fontWeight: '700',
    backgroundColor: '#fff',
    paddingLeft: 16,
  },
  subheadingUnderline: {
    backgroundColor: '#278eca',
    width: 40,
    height: 3,
    marginTop: 14,
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
    borderColor: '#278eca',
    borderWidth: 3,
    textAlign: 'center',
    padding: 10,
    margin: 10,
  },
  minuteInput: {
    height: 40,
    borderColor: '#278eca',
    borderWidth: 3,
    textAlign: 'center',
    padding: 10,
    margin: 10,
  },
  isAfternoonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  degreeContainer: {
    backgroundColor: '#fff',
  },
})