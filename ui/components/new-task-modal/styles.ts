import { Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    width,
    height,
  },

  content: {
    width: '80%',
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'center',
    position: 'relative',
    padding: 16,
    borderRadius: 8,
    gap: 16,
  },

  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    gap: 8,
  },

  body: {
    width: '100%',
    flexDirection: 'column',
    gap: 4,
  },

  submit: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    width: '100%',
  },

  error: {
    color: 'red',
    marginLeft: 4,
  },
})

export default styles