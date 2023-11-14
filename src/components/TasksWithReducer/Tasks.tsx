import AddTask from './AddTask'
import TaskList from './TaskList'
import { tasksContext } from './contexts/tasksContext'
import { taskActionType, tasksReducer } from './reducer/taskReducer'
import { useLocalStorageReducer } from '../../customHooks/useLocalStorageReducer'

const Tasks: React.FC = () => {
  const [taskState, dispatch] = useLocalStorageReducer(tasksReducer, 'tasks', [])

  const onAddTask = (taskText: string): void => {
    const lastId: number = (taskState.length === 0) ? 0 : taskState[taskState.length - 1].id

    if (taskText !== '') {
      dispatch({
        type: taskActionType.ADD,
        payload: { id: lastId + 1, text: taskText, done: false }
      })
    }
  }

  return (
    <tasksContext.Provider value={{
      useTasksState: taskState,
      useDispatcher: dispatch
    }}
    >
      <article className='flex flex-col items-center justify-center gap-10 h-full max-w-[1280px] m-auto'>
        <h2> Task List </h2>
        <section className='w-6/6 flex flex-row justify-between gap-3'>
          <AddTask onAddTask={onAddTask} />
        </section>
        <section className='w-6/6 flex flex-row justify-between gap-4'>
          <TaskList taskList={taskState} />
        </section>
      </article>
    </tasksContext.Provider>
  )
}

export default Tasks
