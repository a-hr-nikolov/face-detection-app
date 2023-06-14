import React from 'react';

export function ImageLinkForm({ onChange, onSubmit, urlValue }) {
  const handleChange = ({ target }) => {
    onChange(target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit('some value');
  };

  return (
    <div className="form-container flex flex-col gap-4 items-center justify-center pt-4">
      <div className="flex flex-col sm:flex-row justify-center gap-4 self-stretch p-6 sm:p-12 sm:rounded-full rounded-3xl bg-[#FFFFFFBB]">
        <form onSubmit={handleSubmit} className="contents">
          <input
            type="text"
            className="flex-grow px-3 sm:rounded-full rounded-xl focus:outline-none py-2"
            placeholder="Enter image URL"
            value={urlValue}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="search-btn box-border font-bold bg-blue-500 hover:bg-blue-700 text-white px-12 py-2 sm:rounded-full rounded-xl active:scale-105"
          >
            Detect
          </button>
        </form>
      </div>
    </div>
  );
}
