import React from 'react';
import './FaceRecognitionContainer.css';

export function FaceRecognitionContainer({ url, faceDetectBoxes }) {
  // const faceRecImg = document.querySelector('#face-rec-img');
  // const width = parseInt(faceRecImg.width);
  // const height = parseInt(faceRecImg.height);
  // const style = {
  //   width: width,
  //   height: height,
  // };
  return (
    <div id="face-rec-container" className="fixed img-container my-8 hidden">
      {faceDetectBoxes}
      <img
        id="face-rec-img"
        src={url}
        alt="Image from URL"
        className="sm:rounded-3xl rounded-xl w-full"
      ></img>
    </div>
  );
}
