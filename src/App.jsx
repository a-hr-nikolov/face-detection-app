import { useState } from 'react';
import { Nav } from './components/Nav.jsx';
import { Logo } from './components/Logo/Logo.jsx';
import './App.css';
import { ImageLinkForm } from './components/ImageLinkForm/ImageLinkForm.jsx';
// import { FaceRecognitionContainer } from './components/FaceRecognitionContainer.jsx';

function App() {
  const [state, setState] = useState(null);
  return (
    <div className="App">
      <Nav />
      <Logo />
      <ImageLinkForm />
      {/* 
      <FaceRecognitionContainer /> */}
    </div>
  );
}

export default App;
