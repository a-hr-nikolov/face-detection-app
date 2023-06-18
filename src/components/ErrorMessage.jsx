import React from 'react';

export default function ErrorMessage() {
  return (
    <div>
      <p className="js-credentials-error text-red-500 text-md italic hidden pb-2">
        Wrong username and/or password.
      </p>
      <p className="js-server-error text-red-500 text-md italic hidden pb-2">
        An error occurred, please try again.
      </p>
      <p className="js-username-error text-red-500 text-md italic hidden pb-2">
        Cannot register this username, try again.
      </p>
      <p className="js-empty-fields text-red-500 text-md italic hidden pb-2">
        All fields are required
      </p>
    </div>
  );
}
