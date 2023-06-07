import React from 'react';
import './RegistrationForm.css';

export function RegistrationForm({ register }) {
  return (
    <div className="w-full max-w-xs mt-8 mx-auto">
      <form id="reg-form" className="shadow-md rounded px-8 pt-6 pb-8">
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
            Choose a Password
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
        <div className="flex items-center justify-center pb-2">
          <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={register}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
