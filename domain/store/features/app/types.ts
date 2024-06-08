/**
 * Type definitions for the app task.
 */
export interface AppTask {
  id: number
  description: string
}

/**
 * Type definitions for the app element.
 */
export interface AppElement {
  createdAt: Date | string
  name: string
  avatar: string
  id: string
}

/**
 * Interface representing the application state.
 */
export interface AppState {
  /**
   * The list of elements in the application.
   */
  elements: AppElement[]

  /**
   * The list of tasks in the application.
   */
  tasks: AppTask[]

  /**
   * Indicates if the application is ready.
   */
  isReady: boolean
}