import { useContext, useRef, useState } from 'react'
import task from './task.d'
import { tasksContext } from './contexts/tasksContext'
import { taskActionType } from './reducer/taskReducer'

interface TaskListProps {
  taskList: task[]
}

/**
 * List of tasks component
 * @param taskList The Task list to display
 * @returns The list of tasks
 */
const TaskList: React.FC<TaskListProps> = ({ taskList }) => {
  const [edit, setEdit] = useState<number>(-1)
  const editInputRef = useRef<HTMLInputElement>(null)
  const { useDispatcher } = useContext(tasksContext)

  const handleSaveTaskEdition = (task: task): void => {
    setEdit(-1)
    editTask(task)
  }

  const editTask = (task: task): void => {
    useDispatcher({
      type: taskActionType.EDIT,
      payload: task
    })
  }

  const handleDeleteTask = (task: task): void => {
    useDispatcher({
      type: taskActionType.DELETE,
      payload: task
    })
  }

  return (
    <ul className='w-full flex flex-col justify-between gap-2'>
      {taskList.map((task) => {
        return (
          <li className='w-6/6 flex flex-row justify-between gap-3' key={task.id}>
            <div className='flex gap-2 w-3/6'>
              <input
                type='checkbox' defaultChecked={task.done} onChange={(e) => editTask({
                  id: task.id,
                  text: task.text,
                  done: e.currentTarget.checked
                })}
              />
              {edit === task.id
                ? <input ref={editInputRef} defaultValue={task.text} type='text' />
                : <span className='flex items-center flex-row'>{task.text}</span>}
            </div>
            <div className='flex gap-2 w-3/6'>
              {edit === task.id
                ? <button
                    className='btn-primary' id='saveTaskEdited' onClick={() => handleSaveTaskEdition({
                      id: task.id,
                      text: (editInputRef.current == null) ? task.text : editInputRef.current.value,
                      done: task.done
                    })}
                  >Guardar
                  </button>
                : <button className='btn-primary' id='editTask' disabled={edit !== -1 && edit !== task.id} onClick={() => setEdit(task.id)}>Editar</button>}
              {edit === task.id
                ? <button className='btn-primary' id='cancelEdition' onClick={() => setEdit(-1)}>Cancelar</button>
                : <button className='btn-primary' id='removeTask' onClick={() => handleDeleteTask(task)}>Borrar</button>}

            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default TaskList
