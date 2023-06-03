import React from 'react';

export function ImageLinkForm() {
  return (
    <div className="w-full flex flex-col gap-8 items-center justify-center pt-12">
      <p className="text-lg">This app detects faces... Obviously! </p>
      <div className="input-form flex justify-center gap-4 self-stretch">
        <input
          type="text"
          className="url-input flex-grow px-3 rounded-full focus:outline-none"
          placeholder="Enter image url"
        />
        <button
          type="button"
          className="search-btn bg-sky-600 text-white px-12 py-2 rounded-full"
        >
          Detect
        </button>
      </div>
    </div>
  );
}
