import React from 'react'
import { View } from 'react-native'

import styles from './styles'
import { Button } from '@/app/components/common'

export default function HomeScreen() {
  return (
    <View style={ styles.container }>
      <Button
        fullWidth
        href="/tasks"
        linkTestID="tasks-link"
        mode="contained"
        style={ styles.button }
      >
        Tasks
      </Button>

      <Button
        fullWidth
        href="/list"
        linkTestID="list-link"
        mode="contained"
        style={ styles.button }
      >
        List
      </Button>
    </View>
  )
}
