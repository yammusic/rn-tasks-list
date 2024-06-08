import React from 'react'
import { waitFor } from '@testing-library/react-native'
import { renderRouter, screen } from 'expo-router/testing-library'

import { AppLayout } from '@/app/layouts/app/AppLayout'
import ListScreen from '../list'

jest.mock('@/infra/services/data', () => ({
  getData: jest.fn(() => Promise.resolve([{ id: 1, name: 'Element 1' }, { id: 2, name: 'Element 2' }])),
}))

describe('ListScreen', () => {
  const MockComponent = jest.fn(() => (
    <AppLayout>
      <ListScreen />
    </AppLayout>
  ))

  it('renders correctly', async () => {
    renderRouter({
      list: MockComponent,
    }, { initialUrl: '/list' })

    expect(screen).toHavePathname('/list')
  })

  it('renders loading indicator when loading is true', async () => {
    const { getByText } = renderRouter({
      list: MockComponent,
    }, { initialUrl: '/list' })

    await waitFor(() => expect(getByText('Loading...')).toBeTruthy())
  })

  it('renders list of elements when elements array is not empty', async () => {
    const { getByText } = renderRouter({
      list: MockComponent,
    }, { initialUrl: '/list' })

    await waitFor(() => {
      expect(getByText('Element 1')).toBeTruthy()
      expect(getByText('Element 2')).toBeTruthy()
    })
  })
})
