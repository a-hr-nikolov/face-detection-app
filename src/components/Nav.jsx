import React from 'react';

export function Nav({ isSignedIn, signOut, setRoute, loadProfile }) {
  {
    if (isSignedIn)
      return (
        <nav className="flex gap-8 justify-end py-4">
          <a href="#" onClick={loadProfile}>
            Profile
          </a>
          <a href="#" onClick={signOut}>
            Sign Out
          </a>
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
