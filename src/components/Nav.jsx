import React from 'react';

export function Nav({ isSignedIn, signOut, setRoute }) {
  function handleSignOut() {
    setRoute('signin');
    signOut();
  }

  {
    if (isSignedIn)
      return (
        <nav className="flex justify-end py-4">
          <a href="#" onClick={handleSignOut}>
            Sign Out
          </a>
        </nav>
      );
    else
      return (
        <nav className="flex justify-end py-4">
          <a href="#" onClick={() => setRoute('signin')}>
            Sign In
          </a>
        </nav>
      );
  }
}
