import { createContext } from 'react'
import { taskAction } from '../reducer/taskReducer'
import task from '../task'

interface tasksContextProps {
  useDispatcher: React.Dispatch<taskAction>
  useTasksState: task[]
}

export const tasksContext = createContext<tasksContextProps>({
  useDispatcher: () => {},
  useTasksState: []
})
