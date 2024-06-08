import { useSelector } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'

import { useAppDispatch } from '../../shared/hooks'
import type { RootState } from '../../shared/types'
import { setReady, setElements, setTasks } from './actions'

/**
 * Custom hook to access the application state.
 * @returns The application state from the Redux store.
 */
export const useAppState = () => (
  useSelector(({ app }: RootState) => app)
)

/**
 * Custom hook to bind and provide action creators for the application.
 * @returns The bound action creators for dispatching.
 */
export const useAppActions = () => ({
  ...bindActionCreators({
    setReady,
    setElements,
    setTasks,
  }, useAppDispatch())
})