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
          <a href="#" onClick={() => setRoute('signin')}>
            Sign In
          </a>
          <a href="#" onClick={() => setRoute('register')}>
            Register
          </a>
        </nav>
      );
  }
}
