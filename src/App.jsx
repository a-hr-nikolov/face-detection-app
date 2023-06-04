import { useState } from 'react';
import { Nav } from './components/Nav.jsx';
import { Logo } from './components/Logo/Logo.jsx';
import './App.css';
import { ImageLinkForm } from './components/ImageLinkForm/ImageLinkForm.jsx';
import { Particle } from './components/Particle/Particle.jsx';
import { FaceRecognitionContainer } from './components/FaceRecognitionContainer/FaceRecognitionContainer.jsx';

function App() {
  const [urlInput, setUrlInput] = useState('');
  const [urlOutput, setUrlOutput] = useState('');

  const onUrlInputChange = value => {
    setUrlInput(() => value);
  };

  const onSubmit = value => {
    console.log(value);
    // URL of image to use. Change this to your image.
    document.querySelector('.img-container').classList.remove('hidden');
    setUrlOutput(urlInput);

    const raw = JSON.stringify({
      user_app_id: {
        user_id: 'nakata',
        app_id: 'face-detect-app',
      },
      inputs: [
        {
          data: {
            image: {
              url: urlInput,
            },
          },
        },
      ],
    });

    const requestOptions = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: 'Key 99ffb1859828459aa26dea23b7c089df',
      },
      body: raw,
    };

    // NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
    // https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
    // this will default to the latest version_id

    fetch(
      `https://api.clarifai.com/v2/models/face-detection/versions/6dc7e46bc9124c5c8824be4822abe105/outputs`,
      requestOptions
    )
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

    // ENDS HERE
  };

  return (
    <div className="App">
      <div>
        <Nav />
        <Logo />
        <ImageLinkForm
          onChange={onUrlInputChange}
          onSubmit={onSubmit}
          urlValue={urlInput}
        />

        <FaceRecognitionContainer url={urlOutput} />
      </div>
      <Particle className="particles" />
    </div>
  );
}

export default App;
