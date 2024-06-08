import React, { useState } from 'react'
import { Platform, View } from 'react-native'
import {
  Icon,
  Modal,
  Portal,
  Text,
  TextInput,
  useTheme,
} from 'react-native-paper'

import { Button } from '../common'
import type { NewTasksModalProps } from './types'
import styles from './styles'

export function TasksModal(props: Readonly<NewTasksModalProps>) {
  const { open, onClose, onSubmit } = props
  const [description, setDescription] = useState('')
  const [error, setError] = useState('')
  const { colors } = useTheme()

  const onCloseHandler = () => {
    setDescription('')
    setError('')
    onClose()
  }

  const onChangeDescription = (text: string) => {
    setDescription(text)
    setError('')
  }

  const onSubmitHandler = () => {
    if (!description) {
      setError('Task description is required')
      return
    }

    onSubmit({ description })
    onCloseHandler()
  }

  return (
    <Portal>
      <Modal
        contentContainerStyle={ styles.container }
        dismissableBackButton={ false }
        onDismiss={ onClose }
        testID="new-task-modal"
        visible={ open }
      >
        <View style={ [styles.content, { backgroundColor: colors.surface }] }>
          <View style={ styles.header }>
            <Text variant="titleLarge">New Task</Text>

            <Button
              compact
              mode="text"
              onPress={ onCloseHandler }
              testID="close-button"
            >
              <Icon color={ colors.primary } size={ 18 } source="close" />
            </Button>
          </View>

          <View style={ styles.body }>
            <TextInput
              error={ !!error }
              label="Task description *"
              mode="outlined"
              multiline={ Platform.select({ default: true, ios: false }) }
              numberOfLines={ 3 }
              onChangeText={ onChangeDescription }
              style={ styles.input }
              testID="task-input"
              value={ description }
            />

            { !!error && <Text style={ styles.error } testID="error-text" variant="bodySmall">{ error }</Text> }
          </View>

          <Button
            fullWidth
            mode="contained"
            onPress={ onSubmitHandler }
            testID="submit-button"
          >
            Create
          </Button>
        </View>
      </Modal>
    </Portal>
  )
}
