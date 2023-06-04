import { useState } from 'react';
import { Nav } from './components/Nav.jsx';
import { Logo } from './components/Logo/Logo.jsx';
import './App.css';
import { ImageLinkForm } from './components/ImageLinkForm/ImageLinkForm.jsx';
import { Particle } from './components/Particle/Particle.jsx';
// import { FaceRecognitionContainer } from './components/FaceRecognitionContainer.jsx';

function App() {
  const [urlInput, setUrlInput] = useState('');

  const onUrlInputChange = value => {
    setUrlInput(() => value);
  };

  const onSubmit = value => {
    console.log(value);
  };

  return (
    <div className="App">
      <div className="contents">
        <Nav />
        <Logo />
        <ImageLinkForm
          onChange={onUrlInputChange}
          onSubmit={onSubmit}
          urlValue={urlInput}
        />
        {/*
        <FaceRecognitionContainer /> */}
      </div>
      <Particle className="particles" />
    </div>
  );
}

export default App;
