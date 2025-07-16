import { createContext } from 'react'

/**
 * Interface for the values allowed in the {@link LanguageContext}.
 */
export interface LanguageContextProps {
  translate: any
  handleChangeLanguage: (e: React.ChangeEvent<HTMLSelectElement>) => void
  currentLanguage: string
}

/**
 * Context for {@link DelayedLink} to pass props between its child components.
 */
export const LanguageContext = createContext<LanguageContextProps>({
  handleChangeLanguage: () => {},
  translate: undefined,
  currentLanguage: ''
})
