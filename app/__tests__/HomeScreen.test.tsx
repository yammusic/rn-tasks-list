import React from 'react'
import { waitFor, fireEvent } from '@testing-library/react-native'
import { renderRouter, screen } from 'expo-router/testing-library'

import { AppLayout } from '@/app/layouts/app'
import HomeScreen from '../home'
import TasksScreen from '../tasks'
import ListScreen from '../list'

describe('HomeScreen', () => {
  const HomeComponent = jest.fn(() => (
    <HomeScreen />
  ))

  const TasksComponent = jest.fn(() => (
    <AppLayout>
      <TasksScreen />
    </AppLayout>
  ))

  const ListComponent = jest.fn(() => (
    <AppLayout>
      <ListScreen />
    </AppLayout>
  ))

  it('renders correctly', () => {
    const { getByText } = renderRouter({
      index: HomeComponent,
      tasks: TasksComponent,
      list: ListComponent,
    })

    expect(screen).toHavePathname('/')
    expect(getByText('Tasks')).toBeTruthy()
    expect(getByText('List')).toBeTruthy()
  })

  it('call tasks screen when "Tasks" button is pressed', async () => {
    const { getByTestId } = renderRouter({
      index: HomeComponent,
      tasks: TasksComponent,
      list: ListComponent,
    })

    fireEvent.press(getByTestId('tasks-link'))
    await waitFor(() => expect(screen).toHavePathname('/tasks'))
  })

  it('call list screen when "List" button is pressed', async () => {
    const { getByTestId } = renderRouter({
      index: HomeComponent,
      tasks: TasksComponent,
      list: ListComponent,
    })

    fireEvent.press(getByTestId('list-link'))
    await waitFor(() => expect(screen).toHavePathname('/list'))
  })
})
