import React from 'react';
import './ImageLinkForm.css';

export function ImageLinkForm() {
  return (
    <div className="form-container flex flex-col gap-4 items-center justify-center pt-4">
      <h1 className="text-4xl">Detect-A-Facer</h1>
      <p className="text-base">
        Witness the ability of a computer to draw a rectangle around a face. And
        to think humans are born with this amazing capability? Astounding!
      </p>
      <div className="input-form flex flex-col sm:flex-row justify-center gap-4 self-stretch sm:rounded-full rounded-3xl">
        <input
          type="text"
          className="url-input flex-grow px-3 sm:rounded-full rounded-xl focus:outline-none py-2"
          placeholder="Enter image URL"
        />
        <button
          type="button"
          className="search-btn bg-sky-600 text-white px-12 py-2 sm:rounded-full rounded-xl hover:scale-105 active:scale-110"
        >
          Detect
        </button>
      </div>
    </div>
  );
}
