import React, { useState } from 'react';
import GuestButton from './GuestButton';
import ErrorMessage from './ErrorMessage';
import CredentialFields from './CredentialFields';

export default function RegistrationForm({ register, setRoute }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleRegistration(event) {
    event.preventDefault();

    const emptyFieldError = document.querySelector('.js-empty-fields');

    if (!username) return emptyFieldError.classList.remove('hidden');
    if (!password) return emptyFieldError.classList.remove('hidden');

    document.querySelector('.js-username-error').classList.add('hidden');
    document.querySelector('.js-server-error').classList.add('hidden');
    emptyFieldError.classList.add('hidden');

    register(username, password);
    setUsername('');
    setPassword('');
  }

  function handleUsernameChange(event) {
    setUsername(() => event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(() => event.target.value);
  }

  return (
    <div className="w-full max-w-xs mt-8 mx-auto">
      <form
        className="bg-[#FFFFFFBB] shadow-md rounded px-8 pt-6 pb-8"
        onSubmit={handleRegistration}
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
        <div className="flex items-center justify-center">
          <button
            className="w-full bg-blue-500 hover:bg-blue-700 active:scale-105 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register
          </button>
        </div>
        <GuestButton setRoute={setRoute} />
      </form>
    </div>
  );
}
