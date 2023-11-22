import { useContext, useRef } from 'react'
import CustomInput from '../CustomInput'
import { LanguageContext } from '../DropableLink/contexts/languageContext'

interface TaskProps {
  onAddTask: (taskText: string) => void
}

const AddTask: React.FC<TaskProps> = ({ onAddTask }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { translate } = useContext(LanguageContext)

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
        <CustomInput inputRef={inputRef} labelText={translate('tasklist_placeholder')} />
      </div>
      <div className='w-2/6'>
        <button className='btn-primary' onClick={handleClick}>{translate('tasklist_add_button')}</button>
      </div>
    </>
  )
}

export default AddTask
