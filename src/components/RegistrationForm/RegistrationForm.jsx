import React, { useState } from 'react';
import './RegistrationForm.css';

export function RegistrationForm({ register }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleRegistration(event) {
    event.preventDefault();

    const usernameInput = document.querySelector('#username-reg');
    const passwordInput = document.querySelector('#password-reg');
    if (!username)
      return usernameInput.setCustomValidity('Username field cannot be empty');
    if (!password)
      return passwordInput.setCustomValidity('Password field cannot be empty');

    document.querySelector('#username-error').classList.add('hidden');
    document.querySelector('.server-error-reg').classList.add('hidden');
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
        id="reg-form"
        className="shadow-md rounded px-8 pt-6 pb-8"
        onSubmit={handleRegistration}
      >
        <div className="mb-4">
          <p
            id="username-error"
            className="text-red-500 text-md italic hidden pb-2"
          >
            Username already taken.
          </p>
          <p className="server-error-reg text-red-500 text-md italic hidden pb-2">
            An error occurred, please try again.
          </p>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username-reg"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username-reg"
            type="text"
            placeholder="Username"
            onChange={handleUsernameChange}
            value={username}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password-reg"
          >
            Choose a Password
          </label>
          <input
            className="shadow appearance-none border invalid:border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password-reg"
            type="password"
            placeholder="************"
            onChange={handlePasswordChange}
            value={password}
          />
          <p className="text-red-500 text-xs italic hidden">
            Please choose a password.
          </p>
        </div>
        <div className="flex items-center justify-center pb-2">
          <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
