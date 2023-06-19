import React, { useState } from 'react';
import GuestButton from './GuestButton';
import ErrorMessage from './ErrorMessage';
import CredentialFields from './CredentialFields';

export default function SignInForm({ setRoute, signIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleUsernameChange(event) {
    setUsername(() => event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(() => event.target.value);
  }

  function handleSignIn(event) {
    event.preventDefault();

    const emptyFieldError = document.querySelector('.js-empty-fields');

    if (!username) return emptyFieldError.classList.remove('hidden');
    if (!password) return emptyFieldError.classList.remove('hidden');

    document.querySelector('.js-credentials-error').classList.add('hidden');
    document.querySelector('.js-server-error').classList.add('hidden');
    signIn(username, password);
    setUsername('');
    setPassword('');
  }

  return (
    <div className="w-full max-w-xs mt-8 mx-auto">
      <form
        id="sign-in"
        className="bg-[#FFFFFFBB] shadow-md rounded px-8 pt-6 pb-8"
        onSubmit={handleSignIn}
      >
        <ErrorMessage />
        <CredentialFields
          {...{
            username,
            password,
            handleUsernameChange,
            handlePasswordChange,
          }}
        />
        <div className="grid gap-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 shadow-md active:scale-105 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          <button
            className="align-baseline font-bold text-red-700 hover:scale-105"
            onClick={() => setRoute('register')}
          >
            Not Registered?
          </button>
          <GuestButton setRoute={setRoute} />
        </div>
      </form>
    </div>
  );
}
