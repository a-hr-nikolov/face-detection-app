import { useState } from 'react';
import { Nav } from './components/Nav.jsx';
import { Logo } from './components/Logo/Logo.jsx';
import { ImageLinkForm } from './components/ImageLinkForm/ImageLinkForm.jsx';
import { Particle } from './components/Particle/Particle.jsx';
import { FaceRecognitionContainer } from './components/FaceRecognitionContainer/FaceRecognitionContainer.jsx';
import './App.css';

function App() {
  const [urlInput, setUrlInput] = useState('');
  const [urlOutput, setUrlOutput] = useState('');
  const [faceBoxData, setFaceBoxData] = useState([]);

  const processBoxData = data => {
    const boundingBoxes = data.outputs[0].data.regions;

    const faceRecImg = document.querySelector('#face-rec-img');
    const width = parseInt(faceRecImg.width);
    const height = parseInt(faceRecImg.height);

    const boxes = [];

    boundingBoxes.forEach(item => {
      const boxLocation = item.region_info.bounding_box;
      boxes.push({
        top: boxLocation.top_row * height,
        left: boxLocation.left_col * width,
        bottom: height - boxLocation.bottom_row * height,
        right: width - boxLocation.right_col * width,
      });
    });

    return boxes;
  };

  const onUrlInputChange = value => {
    setUrlInput(() => value);
  };

  const onSubmit = () => {
    document.querySelector('#face-rec-container').classList.remove('hidden');
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
    // `https://api.clarifai.com/v2/models/face-detection/versions/6dc7e46bc9124c5c8824be4822abe105/outputs`,

    fetch(
      `https://api.clarifai.com/v2/models/face-detection/outputs`,
      requestOptions
    )
      .then(response => response.json())
      .then(result => {
        setFaceBoxData(processBoxData(result));
        console.log(result);
        // let faceBoxData = result.outputs[0].data.regions;
        // processBoxData(faceBoxData);
        // faceBoxData.forEach(item => console.log(item.region_info.bounding_box));
        //processBoxData(faceBoxData);
      })
      .catch(error => {
        console.log('error, but will call the other thing', error);
      });

    // ENDS HERE
  };

  return (
    <div className="App">
      <div className="w-full">
        <Nav />
        <Logo />
        <ImageLinkForm
          onChange={onUrlInputChange}
          onSubmit={onSubmit}
          urlValue={urlInput}
        />
        <FaceRecognitionContainer url={urlOutput} faceBoxData={faceBoxData} />
      </div>
      <Particle className="particles" />
    </div>
  );
}

export default App;
