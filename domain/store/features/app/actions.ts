import { createAction } from '@reduxjs/toolkit'
import { AppElement, AppTask } from './types'

/**
 * Action to set the readiness state of the application.
 */
export const setReady = createAction<boolean>('@app/SET_READY')

/**
 * Action to set the tasks.
 */
export const setTasks = createAction<AppTask[]>('@app/SET_TASKS')

/**
 * Action to set the elements.
 */
export const setElements = createAction<AppElement[]>('@app/SET_ELEMENTS')