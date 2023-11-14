import { useState } from 'react'

export const useLocalStorage = (key: string, initialValue: any): any => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item === null ? initialValue : JSON.parse(item)
    } catch (error) {
      return initialValue
    }
  })

  const setValue = (value: any): void => {
    try {
      setStoredValue(value)
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.log(error)
    }
  }

  return [storedValue, setValue]
}
