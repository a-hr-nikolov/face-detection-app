import { useState } from 'react';
import { Nav } from './components/Nav.jsx';
import { Logo } from './components/Logo.jsx';
import { ImageLinkForm } from './components/ImageLinkForm.jsx';
import { Particle } from './components/Particle.jsx';
import { FaceRecognitionContainer } from './components/FaceRecognitionContainer.jsx';
import { SignInForm } from './components/SignInForm.jsx';
import { Title } from './components/Title.jsx';
import { RegistrationForm } from './components/RegistrationForm.jsx';
import { Profile } from './components/Profile.jsx';

function App() {
  const [urlInput, setUrlInput] = useState('');
  const [urlOutput, setUrlOutput] = useState('');
  const [faceBoxData, setFaceBoxData] = useState([]);
  const [route, setRoute] = useState('signin');
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState(null);
  const SERVER_URL = 'http://localhost:3000';

  function processBoxData(data) {
    const boundingBoxes = data.regions;

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

    const detected = user.detected + detections;

    const userInfo = { username: user.username, detected };

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

  async function onSubmit() {
    document.querySelector('#face-rec-container').classList.remove('hidden');
    setUrlOutput(urlInput);
    try {
      const result = await fetch(SERVER_URL + '/detect?url=' + urlInput);
      const data = await result.json();
      setFaceBoxData(processBoxData(data));
      setUrlInput('');
    } catch (err) {
      console.log('Error fetching, try again');
    }
  }

  function signOut() {
    setUser(null);
    setIsSignedIn(false);
    setRoute('signin');
  }

  async function signIn(username, password) {
    const userInfo = { username, password };
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
            .querySelector('.js-credentials-error')
            .classList.remove('hidden');
        } else
          return document
            .querySelector('.server-error-login')
            .classList.remove('hidden');
      }
      const data = await response.json();
      setUser(data);
      setIsSignedIn(true);
      setRoute('home');
    } catch (err) {
      console.log('Error in fetching, check the url\n', err);
    }
  }

  async function register(username, password) {
    const userInfo = { username, password };
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
    try {
      const response = await fetch(SERVER_URL + `/profile/${user.username}`);
      const newUser = await response.json();
      setUser(newUser);
      setRoute('profile');
    } catch {
      signOut();
    }
  }

  return (
    <div className="App w-[min(90%,1140px)]">
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
        {route === 'register' && <RegistrationForm register={register} />}
        {route === 'profile' && (
          <Profile detected={user.detected} setRoute={setRoute} />
        )}
      </div>
      <Particle className="particles" />
    </div>
  );
}

export default App;
