import React from 'react'
import { fireEvent, waitFor } from '@testing-library/react-native'
import { renderRouter, screen } from 'expo-router/testing-library'

import { AppLayout } from '@/app/layouts/app'
import TasksScreen from '../tasks'

jest.mock('@/domain/store/features/app', () => ({
  ...jest.requireActual('@/domain/store/features/app'),
  useAppState: jest.fn(() => ({ tasks: [{ id: 1, description: 'Task 1' }, { id: 2, description: 'Task 2' }] })),
}))

describe('TasksScreen', () => {
  const MockComponent = jest.fn(() => (
    <AppLayout>
      <TasksScreen />
    </AppLayout>
  ))

  it('renders correctly', async () => {
    renderRouter({
      tasks: MockComponent,
    }, { initialUrl: '/tasks' })

    expect(screen).toHavePathname('/tasks')
  })

  it('opens modal when "New Task" button is clicked', async () => {
    const { getByText, getByTestId } = renderRouter({
      tasks: MockComponent,
    }, { initialUrl: '/tasks' })

    fireEvent.press(getByText('New Task'))
    await waitFor(() => expect(getByTestId('new-task-modal')).toBeTruthy())
  })

  it('renders tasks list correctly', async () => {
    const { getByText } = renderRouter({
      tasks: MockComponent,
    }, { initialUrl: '/tasks' })

    expect(getByText('Task 1')).toBeTruthy()
    expect(getByText('Task 2')).toBeTruthy()
  })
})
