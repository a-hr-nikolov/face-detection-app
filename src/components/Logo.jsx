import React from 'react';

export default function Logo({ setRoute }) {
  return (
    <img
      src="logo.png"
      className="block mx-auto my-0 w-[min(30%,10rem)] drop-shadow-md cursor-pointer"
      alt="logo"
      onClick={() => setRoute('home')}
    />
  );
}
