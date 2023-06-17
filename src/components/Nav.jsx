import React from 'react';

export default function Nav({ isSignedIn, signOut, setRoute, loadProfile }) {
  {
    if (isSignedIn)
      return (
        <nav className="flex gap-8 justify-end py-4">
          <button
            onClick={loadProfile}
            className="inline-block self-center text-white box-border hover:scale-105 font-bold p-2 active:scale-110"
          >
            Profile
          </button>
          <button
            onClick={signOut}
            className="inline-block self-center text-white box-border hover:scale-105 font-bold p-2 active:scale-110"
          >
            Sign Out
          </button>
        </nav>
      );
    else
      return (
        <nav className="flex gap-8 justify-end py-4">
          <button
            className="inline-block self-center text-white box-border hover:scale-105 font-bold p-2 active:scale-110"
            onClick={() => setRoute('signin')}
          >
            Sign In
          </button>
          <button
            className="inline-block self-center text-white box-border hover:scale-105 font-bold p-2 active:scale-110"
            onClick={() => setRoute('register')}
          >
            Register
          </button>
        </nav>
      );
  }
}
