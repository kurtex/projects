import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Qr } from './components/QR/Qr'
import image from './assets/images/image-qr-code.png'
import ProjectLinks from './components/ProjectLinks'
import routes from './routes/routes.d'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Tasks from './components/TasksWithReducer/Tasks'
import { Suspense, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { LanguageContext } from './components/DropableLink/contexts/languageContext'
import { ThemeContext } from './components/DropableLink/contexts/ThemeContext'
import { useLocalStorage } from './customHooks/useLocalStorage'

const titleText = 'Improve your front-end skills by building projects'
const bodyText =
  'Scan the QR code to visit Frontend Mentor and take your coding skills to the next level'

const App: React.FC = () => {
  const { i18n, t } = useTranslation()

  const [value, setValue] = useLocalStorage('projectsLanguage', 'es')
  const [theme, setTheme] = useLocalStorage('projectsTheme', 'system')

  useEffect(() => {
    i18n.changeLanguage(value)
  }, [value])

  useEffect(() => {
    const root = window.document.documentElement
    const body = window.document.body

    const addDark = (): void => {
      root.classList.add('dark')
      body.classList.add('dark')
    }

    const removeDark = (): void => {
      root.classList.remove('dark')
      body.classList.remove('dark')
    }

    const applyTheme = (themeValue: string): void => {
      if (themeValue === 'dark') addDark()
      else if (themeValue === 'light') removeDark()
      else if (window.matchMedia('(prefers-color-scheme: dark)').matches) addDark()
      else removeDark()
    }

    applyTheme(theme)

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const listener = (e: MediaQueryListEvent): void => {
      if (theme === 'system') {
        if (e.matches) addDark()
        else removeDark()
      }
    }

    mediaQuery.addEventListener('change', listener)
    return () => mediaQuery.removeEventListener('change', listener)
  }, [theme])

  /**
   * Handles the change of the languages selector.
   * @param e The value selected with the language selected.
   */
  const handleLanguage = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setValue(e.target.value)
  }

  const handleTheme = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setTheme(e.target.value)
  }
  return (
    <main className='bg-[#d6e2f0] dark:bg-neutral-800 text-[#000] dark:text-neutral-50'>
      <ThemeContext.Provider value={{ currentTheme: theme, handleChangeTheme: handleTheme }}>
        <LanguageContext.Provider value={{ translate: t, handleChangeLanguage: handleLanguage, currentLanguage: value }}>
          <Suspense>
            <Routes>
              <Route
                path={routes.homePage}
                element={
                  <DndProvider backend={HTML5Backend}>
                    <ProjectLinks />
                  </DndProvider>
              }
              />
              <Route
                path={`${routes.homePage}/${routes.qrChallenge}`}
                element={<Qr image={image} title={titleText} body={bodyText} />}
              />
              <Route
                path={`${routes.homePage}/${routes.tasksReducer}`}
                element={<Tasks />}
              />
            </Routes>
          </Suspense>
        </LanguageContext.Provider>
      </ThemeContext.Provider>

    </main>
  )
}

export default App
