import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Qr } from './components/Qr';
import image from './assets/image-qr-code.png';
import HeaderLink from './components/HeaderLinks';
import routes from './routes/routes.d';

const titleText = 'Improve your front-end skills by building projects';
const bodyText =
  'Scan the QR code to visit Frontend Mentor and take your coding skills to the next level';

function App() {
  return (
    <main className='text-[#000]'>
      <Routes>
        <Route path={routes.homePage} element={<HeaderLink />} />
        <Route
          path={`${routes.homePage}/${routes.qrChallenge}`}
          element={<Qr src={image} title={titleText} body={bodyText} />}
        />
      </Routes>
    </main>
  );
}

export default App;
