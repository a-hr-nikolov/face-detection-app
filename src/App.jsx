import { useEffect, useState } from 'react';
import { Nav } from './components/Nav.jsx';
import { Logo } from './components/Logo/Logo.jsx';
import { ImageLinkForm } from './components/ImageLinkForm/ImageLinkForm.jsx';
import { Particle } from './components/Particle/Particle.jsx';
import { FaceRecognitionContainer } from './components/FaceRecognitionContainer/FaceRecognitionContainer.jsx';
import './App.css';
import { SignInForm } from './components/SignInForm/SignInForm.jsx';
import { Title } from './components/Title/Title.jsx';
import { RegistrationForm } from './components/RegistrationForm/RegistrationForm.jsx';
import { Profile } from './components/Profile/Profile.jsx';

function App() {
  const [urlInput, setUrlInput] = useState('');
  const [urlOutput, setUrlOutput] = useState('');
  const [faceBoxData, setFaceBoxData] = useState([]);
  const [route, setRoute] = useState('signin');
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState(null);
  const SERVER_URL = 'http://localhost:3000';

  function processBoxData(data) {
    const boundingBoxes = data.outputs[0].data.regions;

    if (isSignedIn) increaseUserDetected(boundingBoxes.length);

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
  }

  async function increaseUserDetected(detections) {
    if (!isSignedIn) return;

    const facesDetected = user.facesDetected + detections;

    const userInfo = { name: user.name, facesDetected };

    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    };

    try {
      const response = await fetch(SERVER_URL + '/detected', options);
      if (!response.ok) return console.log('Error, faces not counted');
      const updatedUser = await response.json();
      setUser(updatedUser);
    } catch (err) {
      console.log('Error, faces not counted');
    }
  }

  function onUrlInputChange(value) {
    setUrlInput(() => value);
  }

  function onSubmit() {
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
  }

  function signOut() {
    setUser(null);
    setIsSignedIn(false);
    setRoute('signin');
  }

  async function signIn(name, password) {
    const userInfo = { name, password };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    };
    try {
      const response = await fetch(SERVER_URL + '/signin', options);
      if (!response.ok) {
        if (response.status === 400) {
          return document
            .querySelector('#credentials-error')
            .classList.remove('hidden');
        } else
          return document
            .querySelector('.server-error-login')
            .classList.remove('hidden');
      }
      const data = await response.json();
      setUser(data.object);
      setIsSignedIn(true);
      setRoute('home');
    } catch (err) {
      console.log('Error in fetching, check the url\n', err);
    }
  }

  async function register(name, password) {
    const userInfo = { name, password };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    };
    try {
      const response = await fetch(SERVER_URL + '/register', options);
      if (!response.ok) {
        if (response.status === 409) {
          return document
            .querySelector('.js-username-error')
            .classList.remove('hidden');
        } else
          return document
            .querySelector('.js-server-error')
            .classList.remove('hidden');
      }
      setRoute('signin');
    } catch (err) {
      console.log('Error in fetching, check the url\n', err);
    }
  }

  async function loadProfile() {
    setRoute('profile');
  }

  return (
    <div className="App">
      <div className="w-full">
        <Nav
          isSignedIn={isSignedIn}
          signOut={signOut}
          setRoute={setRoute}
          loadProfile={loadProfile}
        />
        <Logo />
        <Title />
        {route === 'home' && (
          <>
            <ImageLinkForm
              onChange={onUrlInputChange}
              onSubmit={onSubmit}
              urlValue={urlInput}
            />
            <FaceRecognitionContainer
              url={urlOutput}
              faceBoxData={faceBoxData}
            />
          </>
        )}
        {route === 'signin' && (
          <SignInForm setRoute={setRoute} signIn={signIn} />
        )}
        {route === 'register' && (
          <RegistrationForm register={register} username={username} />
        )}
        {route === 'profile' && (
          <Profile detected={user.facesDetected} setRoute={setRoute} />
        )}
      </div>
      <Particle className="particles" />
    </div>
  );
}

export default App;
