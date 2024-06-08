import { Dimensions, StyleSheet } from 'react-native'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    // padding: 16,
  },

  listContainer: {
    flex: 1,
    width: '100%',
    gap: 8,
  },
})

export default styles