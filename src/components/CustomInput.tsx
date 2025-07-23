
interface InputProps {
  inputRef?: React.LegacyRef<HTMLInputElement>
  labelText: string
}

const CustomInput: React.FC<InputProps> = ({ inputRef, labelText }) => {
  return (
    <div className='relative h-10 w-full min-w-[200px]'>
      <input
        ref={inputRef}
        className='peer h-full w-full rounded-[7px] border border-blue-200 border-t-transparent bg-transparent dark:bg-neutral-700 px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 dark:text-neutral-200 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-200 placeholder-shown:border-t-blue-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 dark:disabled:bg-neutral-800'
        placeholder=' '
      />
      <label className={'before:content[\' \'] after:content[\' \'] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 dark:text-neutral-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-200 dark:before:border-neutral-600 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-200 dark:after:border-neutral-600 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 dark:peer-placeholder-shown:text-neutral-400 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 dark:peer-focus:text-neutral-200 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 dark:peer-focus:before:border-neutral-400 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 dark:peer-focus:after:border-neutral-400 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 dark:peer-disabled:peer-placeholder-shown:text-neutral-400'}>
        {labelText}
      </label>
    </div>
  )
}

export default CustomInput
