import React from 'react';
import './SignInForm.css';

export function SignInForm({ setRoute }) {
  return (
    <div className="w-full max-w-xs mt-8 mx-auto">
      <form id="sign-in" className="shadow-md rounded px-8 pt-6 pb-8">
        <div className="mb-4">
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
          />
          <p className="text-red-500 text-xs italic hidden">
            Please choose a password.
          </p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => setRoute('home')}
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