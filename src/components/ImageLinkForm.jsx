import React from 'react';

export default function ImageLinkForm({ onChange, onSubmit, urlValue }) {
  const handleChange = ({ target }) => {
    onChange(target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit();
  };

  const handleExampleClick = () => {
    onChange(
      'https://images.newscientist.com/wp-content/uploads/2022/02/14174128/PRI_223554170.jpg'
    );
    onSubmit();
  };

  return (
    <div className="form-container flex flex-col gap-4 items-center justify-center pt-4">
      <div className="flex flex-col sm:flex-row justify-center gap-4 self-stretch p-6 sm:p-12 ">
        <form onSubmit={handleSubmit} className="js-detect-form contents">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="url-input"
              className="block w-full p-4 pl-10 text-md text-gray-900 border-2 border-white rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-md"
              placeholder="Enter image URL"
              required=""
              value={urlValue}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-2 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-md  py-4 border-2 border-white sm:w-[25%] active:scale-105 shadow-md"
          >
            Detect
          </button>
          <button
            type="button"
            className="text-white bg-green-600 hover:bg-green-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-md  py-4 box-border border-2 border-white sm:w-[25%] active:scale-105 shadow-md "
            onClick={handleExampleClick}
          >
            See Example
          </button>
        </form>
      </div>
    </div>
  );
}
