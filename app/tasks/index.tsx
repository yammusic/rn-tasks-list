import React, { useCallback, useState } from 'react'
import { FlatList, View } from 'react-native'
import { Link, Stack } from 'expo-router'
import { List, Text } from 'react-native-paper'

import { Button } from '@/app/components/common'
import { TasksModal } from '@/app/components/new-task-modal'
import { type AppTask, useAppActions, useAppState } from '@/domain/store/features/app'
import styles from './styles'

export default function TasksScreen() {
  const [openModal, setOpenModal] = useState(false)
  const { tasks } = useAppState()
  const { setTasks } = useAppActions()

  const onClose = () => setOpenModal(false)

  const onSubmit = useCallback((data: { description: string }) => {
    const { description } = data
    setTasks([...tasks, { id: tasks.length + 1, description }])
    setOpenModal(false)
  }, [tasks])

  return (
    <View style={ styles.container }>
      <Stack.Screen options={ { title: 'Tasks' } } />

      <Link href="/tasks/" style={ styles.button }>
        <Button
          fullWidth
          mode="contained"
          onPress={ () => setOpenModal(true) }
          style={ styles.button }
        >
          New Task
        </Button>
      </Link>

      <View style={ styles.tasksContainer }>
        { tasks.length === 0 && (
          <Text variant="bodyMedium">No tasks found.</Text>
        ) }

        { tasks.length > 0 && (
          <List.Section>
            <FlatList
              data={ tasks as AppTask[] }
              renderItem={ ({ item }) => (
                <List.Item
                  // eslint-disable-next-line react/no-unstable-nested-components
                  left={ (props) => <List.Icon { ...props } icon="svg" /> }
                  title={ item.description }
                  titleNumberOfLines={ 3 }
                />
                ) }
            />
          </List.Section>
        )}
      </View>


      <TasksModal onClose={ onClose } onSubmit={ onSubmit } open={ openModal } />
    </View>
  )
}
