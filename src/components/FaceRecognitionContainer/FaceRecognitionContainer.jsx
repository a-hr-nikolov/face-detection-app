import React from 'react';

export function FaceRecognitionContainer({ url }) {
  return (
    <div className="img-container my-8 hidden">
      <img
        src={url}
        alt="Image from URL"
        className="sm:rounded-3xl rounded-xl"
      />
    </div>
  );
}
