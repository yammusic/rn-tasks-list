import { Dimensions, StyleSheet } from 'react-native'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 16,
    padding: 16,
  },

  tasksContainer: {
    flex: 1,
    width: '100%',
    gap: 8,
  },

  button: {
    width: width - 32,
  },
})

export default styles