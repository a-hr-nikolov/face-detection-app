import { useState, useCallback } from 'react';
import { Nav } from './components/Nav.jsx';
import { Logo } from './components/Logo/Logo.jsx';
import './App.css';
import { ImageLinkForm } from './components/ImageLinkForm/ImageLinkForm.jsx';
// import { FaceRecognitionContainer } from './components/FaceRecognitionContainer.jsx';

import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

function App() {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

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
