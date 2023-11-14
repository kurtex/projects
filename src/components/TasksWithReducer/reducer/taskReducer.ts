import { Reducer } from 'react'
import task from '../task'

export enum taskActionType {
  ADD = 'addTask',
  EDIT = 'editTask',
  DELETE = 'deleteTask'
}

export interface taskAction {
  type: taskActionType
  payload: task
}

export const tasksReducer: Reducer<task[], taskAction> = (state: task[], action: taskAction) => {
  switch (action.type) {
    case taskActionType.ADD: {
      return [...state, {
        id: action.payload.id,
        text: action.payload.text,
        done: false
      }]
    }
    case taskActionType.EDIT: {
      return state.map(task => {
        if (task.id === action.payload.id) {
          return action.payload
        } else {
          return task
        }
      })
    }
    case taskActionType.DELETE: {
      return state.filter(task => task.id !== action.payload.id)
    }
  }
}
