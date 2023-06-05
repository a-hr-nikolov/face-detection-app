import React from 'react';
import './FaceRecognitionContainer.css';

export function FaceRecognitionContainer({ url, faceBoxData }) {
  const mappedData = faceBoxData.map(item => {
    const style = { ...item };

    return <div className="bounding-box" style={style}></div>;
  });

  return (
    <div id="face-rec-container" className="fixed img-container my-8 hidden">
      {mappedData}
      <img
        id="face-rec-img"
        src={url}
        alt="Image from URL"
        className="sm:rounded-3xl rounded-xl w-full"
      ></img>
    </div>
  );
}
