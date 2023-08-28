import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Qr } from './components/Qr';
import image from './assets/images/image-qr-code.png';
import ProjectLinks from './components/ProjectLinks';
import routes from './routes/routes.d';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const titleText = 'Improve your front-end skills by building projects';
const bodyText =
  'Scan the QR code to visit Frontend Mentor and take your coding skills to the next level';

function App () {
  return (
    <main className='text-[#000]'>
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
      </Routes>
    </main>
  );
}

export default App;
