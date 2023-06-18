import React from 'react';

export default function CredentialFields({
  username,
  password,
  handleUsernameChange,
  handlePasswordChange,
}) {
  return (
    <>
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
          className="shadow appearance-none border invalid:border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="************"
          onChange={handlePasswordChange}
          value={password}
        />
      </div>
    </>
  );
}
