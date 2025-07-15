import { createContext } from 'react'

export interface ThemeContextProps {
  currentTheme: string
  handleChangeTheme: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export const ThemeContext = createContext<ThemeContextProps>({
  currentTheme: 'system',
  handleChangeTheme: () => {}
})
