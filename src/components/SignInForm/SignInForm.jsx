import React, { useState } from 'react';
import './SignInForm.css';

export function SignInForm({ setRoute, signIn }) {
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

    if (!username)
      return usernameInput.setCustomValidity('Username field cannot be empty');
    if (!password)
      return passwordInput.setCustomValidity('Password field cannot be empty');

    document.querySelector('.js-credentials-error').classList.add('hidden');
    document.querySelector('.server-error-login').classList.add('hidden');
    signIn(username, password);
    setUsername('');
    setPassword('');
  }

  return (
    <div className="w-full max-w-xs mt-8 mx-auto">
      <form
        id="sign-in"
        className="shadow-md rounded px-8 pt-6 pb-8"
        onSubmit={handleSignIn}
      >
        <div className="mb-4">
          <p className="js-credentials-error text-red-500 text-md italic hidden pb-2">
            Wrong username and/or password.
          </p>
          <p className="server-error-login text-red-500 text-md italic hidden pb-2">
            An error occurred, please try again.
          </p>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            onChange={handleUsernameChange}
            value={username}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>

          <input
            className="shadow appearance-none border invalid:border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="************"
            onChange={handlePasswordChange}
            value={password}
          />
          <p className="js-empty-fields text-red-500 text-md italic hidden pb-2">
            All fields are required
          </p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 active:scale-105 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            onClick={() => setRoute('register')}
          >
            Not Registered?
          </a>
        </div>
        <div className="flex justify-center items-center mt-8">
          <a
            className="inline-block font-bold text-md text-red-500 hover:text-red-800"
            href="#"
            onClick={() => setRoute('home')}
          >
            Use as guest
          </a>
        </div>
      </form>
    </div>
  );
}
