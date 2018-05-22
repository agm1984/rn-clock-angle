import { StatusBar, Platform, StyleSheet } from 'react-native'

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  },
  appWrapper: {
    flexGrow: 1,
    backgroundColor: '#000',
    alignItems: 'stretch',
    paddingTop: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
  },
  appContainer: {
    position: 'relative',
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#333',
    paddingBottom: 16,
  },
  clockControlContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 14,
    paddingRight: 16,
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
    height: 2,
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
  timeDisplay: {
    padding: 4,
  },
  timePicker: {
    width: 60,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 2,
  },
  isAfternoonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  errorMessage: {
    position: 'absolute',
    bottom: 0,
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
    paddingLeft: 16,
    paddingRight: 20,
  },
  secondaryText: {
    color: '#fff',
    lineHeight: 20,
  },
  degreeText: {
    color: '#278eca',
    fontWeight: '900',
    lineHeight: 20,
    marginRight: 8,
  },
})
