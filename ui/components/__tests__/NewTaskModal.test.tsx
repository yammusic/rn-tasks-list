import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react-native'
import { Provider as PaperProvider } from 'react-native-paper'
import { TasksModal } from '../new-task-modal'

// Mock de react-native-paper
jest.mock('react-native-paper', () => ({
  ...jest.requireActual('react-native-paper'),
  Icon: jest.fn(() => null),
}))

describe('TasksModal', () => {
  const setup = (propsOverride = {}) => {
    const props = {
      open: true,
      onClose: jest.fn(),
      onSubmit: jest.fn(),
      ...propsOverride,
    }
    return {
      ...render(
        <PaperProvider>
          <TasksModal { ...props } />
        </PaperProvider>
      ),
      props,
    }
  }

  it('renders correctly when open is true', () => {
    const { getByText } = setup()
    expect(getByText('New Task')).toBeTruthy()
  })

  it('does not render when open is false', () => {
    const { queryByText } = setup({ open: false })
    expect(queryByText('New Task')).toBeNull()
  })

  it('cleans fields and calls onClose when close button is pressed', async () => {
    const { getByTestId, props } = setup()
    fireEvent.press(getByTestId('close-button'))
    await waitFor(() => {
      expect(props.onClose).toHaveBeenCalled()
    })
  })

  it('updates description state on change', () => {
    const { getByTestId } = setup()
    const input = getByTestId('task-input')
    fireEvent.changeText(input, 'New Task Description')
    expect(input.props.value).toBe('New Task Description')
  })

  it('shows error message when trying to submit an empty form', async () => {
    const { getByTestId } = setup()
    fireEvent.press(getByTestId('submit-button'))
    await waitFor(() => {
      expect(getByTestId('error-text')).toBeTruthy()
    })
  })

  it('calls onSubmit with valid data and closes modal', async () => {
    const { getByTestId, props } = setup()
    const input = getByTestId('task-input')
    fireEvent.changeText(input, 'New Task Description')
    fireEvent.press(getByTestId('submit-button'))
    await waitFor(() => {
      expect(props.onSubmit).toHaveBeenCalledWith({ description: 'New Task Description' })
      expect(props.onClose).toHaveBeenCalled()
    })
  })
})
