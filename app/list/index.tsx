import React, { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'
import { Stack } from 'expo-router'
import { ActivityIndicator, Avatar, List, Text } from 'react-native-paper'

import { useAppActions, useAppState } from '@/domain/store/features/app'
import { getData } from '@/infra/services/data'
import styles from './styles'

export default function ListScreen() {
  const [loading, setLoading] = useState(false)
  const { elements } = useAppState()
  const { setElements } = useAppActions()

  const fetchData = async () => {
    setLoading(true)

    try {
      const data = await getData()
      setElements(data)
      await new Promise(resolve => setTimeout(resolve, 500))
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <View style={ styles.container }>
      <Stack.Screen options={ { title: 'List' } } />

      { !!loading && (
        <View style={ styles.container }>
          <ActivityIndicator size="large" />

          <Text variant="titleMedium">Loading...</Text>
        </View>
      ) }

      { (elements.length === 0 && !loading) && (
        <View style={ styles.container }>
          <Text testID="not-found" variant="titleMedium">Not found elements</Text>
        </View>
      ) }

      { (elements.length > 0 && !loading) && (
        <View style={ styles.listContainer }>
          <FlatList
            data={ elements }
            renderItem={ ({ item }) => (
              <List.Item
                // eslint-disable-next-line react/no-unstable-nested-components
                left={ (props) => (
                  <Avatar.Text
                    { ...props }
                    color="white"
                    label={ item.name[0] }
                    size={ 40 }
                  />
                ) }
                title={ item.name }
              />
            ) }
          />
        </View>
      ) }
    </View>
  )
}
