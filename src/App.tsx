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
import { useLocalStorage } from './customHooks/useLocalStorage'

const titleText = 'Improve your front-end skills by building projects'
const bodyText =
  'Scan the QR code to visit Frontend Mentor and take your coding skills to the next level'

const App: React.FC = () => {
  const { i18n, t } = useTranslation()

  const [value, setValue] = useLocalStorage('projectsLanguage', 'es')

  useEffect(() => {
    i18n.changeLanguage(value)
  }, [value])

  /**
   * Handles the change of the languages selector.
   * @param e The value selected with the language selected.
   */
  const handleLanguage = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setValue(e.target.value)
  }
  return (
    <main className='text-[#000] bg-[#d6e2f0]'>
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

    </main>
  )
}

export default App
