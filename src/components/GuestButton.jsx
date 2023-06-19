import React from 'react';

export default function GuestButton({ setRoute }) {
  return (
    <button
      className="shadow-md bg-gray-500 hover:bg-gray-600 active:scale-105 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="button"
      onClick={() => setRoute('home')}
    >
      Use as guest
    </button>
  );
}
