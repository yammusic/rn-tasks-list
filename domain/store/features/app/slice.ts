import { createSlice } from '@reduxjs/toolkit'

import {
  setReady,
  setElements,
  setTasks,
} from './actions'
import type { AppState } from './types'

/**
 * The initial state of the application.
 */
const initialState: AppState = {
  isReady: false,
  elements: [],
  tasks: [{
    id: 1,
    description: 'Review the new features',
  }, {
    id: 2,
    description: 'Implement the new features',
  }, {
    id: 3,
    description: 'Test the new features',
  }, {
    id: 4,
    description: 'Deploy the new features',
  }, {
    id: 5,
    description: 'Release the new features',
  }],
}

/**
 * The Redux slice for the application.
 *
 * This slice handles the state updates based on the dispatched actions.
 */
export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(setReady, (state, { payload }) => ({
      ...state,
      isReady: payload,
    }))

    addCase(setElements, (state, { payload }) => ({
      ...state,
      elements: payload,
    }))

    addCase(setTasks, (state, { payload }) => ({
      ...state,
      tasks: payload,
    }))
  },
})

/**
 * The persisted reducer for the application.
 */
export const appReducer = appSlice.reducer