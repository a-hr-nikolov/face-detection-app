import React from 'react';
import './FaceRecognitionContainer.css';

export function FaceRecognitionContainer({ url, faceBoxData }) {
  const mappedData = faceBoxData.map(item => {
    const style = { ...item };

    return <div className="bounding-box" style={style}></div>;
  });

  return (
    <div id="face-rec-container" className="relative my-8 hidden w-full">
      <div>
        {mappedData}
        <img
          id="face-rec-img"
          src={url}
          alt="Image from URL"
          className="sm:rounded-3xl rounded-xl"
        ></img>
      </div>
    </div>
  );
}
