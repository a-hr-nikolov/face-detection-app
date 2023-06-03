import { useState } from 'react';
import { Nav } from './components/Nav.jsx';
import { Logo } from './components/Logo/Logo.jsx';
// import { ImageLinkForm } from './components/ImageLinkForm.jsx';
// import { FaceRecognitionContainer } from './components/FaceRecognitionContainer.jsx';

function App() {
  const [state, setState] = useState(null);
  return (
    <div className="App w-full">
      <header className="flex justify-end">
        <Logo />
        <Nav />
      </header>
      {/* 
      <ImageLinkForm />
      <FaceRecognitionContainer /> */}
    </div>
  );
}

export default App;
