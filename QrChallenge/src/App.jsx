import "./App.css";
import { Qr } from "./components/Qr";
import image from "./assets/image-qr-code.png";

function App() {
  const titleText = "Improve your front-end skills by building projects";
  const bodyText =
    "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level";

  return <Qr src={image} title={titleText} body={bodyText} />;
}

export default App;
