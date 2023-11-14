import { useRef } from 'react'
import CustomInput from '../CustomInput'

interface TaskProps {
  onAddTask: (taskText: string) => void
}

const AddTask: React.FC<TaskProps> = ({ onAddTask }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleClick = (): void => {
    const currentInput = inputRef.current

    if (currentInput != null) {
      const taskText = currentInput.value

      onAddTask(taskText)

      currentInput.value = ''
    }
  }

  return (
    <>
      <div className='w-4/6'>
        <CustomInput inputRef={inputRef} labelText='Add a new task' />
      </div>
      <div className='w-2/6'>
        <button className='btn-primary' onClick={handleClick}>Agregar</button>
      </div>
    </>
  )
}

export default AddTask
