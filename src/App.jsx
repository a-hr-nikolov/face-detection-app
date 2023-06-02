import { useState } from 'react';
import { Nav } from './components/Nav.jsx';
import { Logo } from './components/Logo.jsx';
import { ImageLinkForm } from './components/ImageLinkForm.jsx';
import { FaceRecognitionContainer } from './components/FaceRecognitionContainer.jsx';

function App() {
  const [state, setState] = useState(null);
  return (
    <div className="App">
      <Nav />
      <Logo />
      <ImageLinkForm />
      <FaceRecognitionContainer />
    </div>
  );
}

export default App;
