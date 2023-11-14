import { useLocalStorage } from './useLocalStorage'
import { useEffect, useReducer } from 'react'

/**
 * Hook to use a reducer which will save the values in the local storage.
 * @param reducer The reducer used to manage the state.
 * @param key The key used to store in the local storage.
 * @param initialValue The initial value used in case there isn't any value already saved in the local storage.
 * @returns An array with the value of the state saved in the local storage in the first position and the dispatcher in the second one.
 */
export const useLocalStorageReducer = (reducer: React.Reducer<any, any>, key: string, initialValue: any): [any, React.Dispatch<any>] => {
  const [value, setValue] = useLocalStorage(key, initialValue)
  const [taskState, dispatch] = useReducer(reducer, (value !== null) ? value : initialValue)

  useEffect(() => {
    setValue(taskState)
  }, [taskState])

  return [value, dispatch]
}
