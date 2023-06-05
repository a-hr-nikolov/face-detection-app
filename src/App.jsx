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
  const [faceBoxes, setFaceBoxes] = useState([]);

  const determineFaceBoxLocation = data => {
    const boundingBoxes = data.outputs[0].data.regions;

    const faceRecImg = document.querySelector('#face-rec-img');
    const width = parseInt(faceRecImg.width);
    const height = parseInt(faceRecImg.height);
    const styleContainer = {
      width: width,
      height: height,
    };

    const childDivs = [];

    boundingBoxes.forEach(item => {
      const boxLocation = item.region_info.bounding_box;

      const styleChild = {
        top: boxLocation.top_row * height,
        left: boxLocation.left_col * width,
        bottom: height - boxLocation.bottom_row * height,
        right: width - boxLocation.right_col * width,
      };

      const newDiv = <div className="bounding-box" style={styleChild}></div>;
      childDivs.push(newDiv);
    });

    const containerDiv = (
      <div className="absolute inline-block" style={styleContainer}>
        {childDivs}
      </div>
    );
    setFaceBoxes(containerDiv);
  };

  const calculateBoxDimensions = boxLocationData => {};

  const onUrlInputChange = value => {
    setUrlInput(() => value);
  };

  const onSubmit = value => {
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
    // `https://api.clarifai.com/v2/models/face-detection/versions/6dc7e46bc9124c5c8824be4822abe105/outputs`,

    fetch(
      `https://api.clarifai.com/v2/models/face-detection/outputs`,
      requestOptions
    )
      .then(response => response.json())
      .then(result => {
        determineFaceBoxLocation(result);
        console.log(result);
        // let faceBoxData = result.outputs[0].data.regions;
        // determineFaceBoxLocation(faceBoxData);
        // faceBoxData.forEach(item => console.log(item.region_info.bounding_box));
        //determineFaceBoxLocation(faceBoxData);
      })
      .catch(error => {
        console.log('error, but will call the other thing');
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

        <FaceRecognitionContainer url={urlOutput} faceDetectBoxes={faceBoxes} />
      </div>
      <Particle className="particles" />
    </div>
  );
}

export default App;
