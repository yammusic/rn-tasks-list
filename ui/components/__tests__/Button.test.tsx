import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import { Text } from 'react-native-paper'
import { Button } from '../common/button'

describe('Button', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Button>Test Button</Button>)
    expect(getByText('Test Button')).toBeTruthy()
  })

  it('applies fullWidth style', () => {
    const { getByText } = render(<Button fullWidth>Test Button</Button>)
    const button = getByText('Test Button')

    expect(button.props.style.at(-1)).toEqual(
      expect.arrayContaining([
        expect.arrayContaining([
          expect.objectContaining({ width: '100%' }),
        ])
      ])
    )
  })

  it('handles onPress prop correctly', () => {
    const onPress = jest.fn()
    const { getByText } = render(<Button onPress={ onPress }>Test Button</Button>)
    const button = getByText('Test Button')

    fireEvent.press(button)
    expect(onPress).toHaveBeenCalled()
  })
})
