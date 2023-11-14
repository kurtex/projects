import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Qr } from './components/QR/Qr'
import image from './assets/images/image-qr-code.png'
import ProjectLinks from './components/ProjectLinks'
import routes from './routes/routes.d'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Tasks from './components/TasksWithReducer/Tasks'

const titleText = 'Improve your front-end skills by building projects'
const bodyText =
  'Scan the QR code to visit Frontend Mentor and take your coding skills to the next level'

const App: React.FC = () => {
  return (
    <main className='text-[#000] bg-[#d6e2f0]'>
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
    </main>
  )
}

export default App
