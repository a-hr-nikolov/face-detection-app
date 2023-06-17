import React from 'react';

export default function Profile({ detected, setRoute }) {
  return (
    <div className="grid justify-items-center gap-4 mt-12">
      <h3 className="text-2xl text-white">
        The amount of faces you have detected:{' '}
      </h3>
      <h3 className="text-6xl text-white">{detected}</h3>

      <button
        className="bg-white text-sky-600 px-12 py-2 mt-8 sm:rounded-full rounded-xl hover:scale-105 active:scale-110"
        onClick={() => setRoute('home')}
      >
        Go back
      </button>
    </div>
  );
}
