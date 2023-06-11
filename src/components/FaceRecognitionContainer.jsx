import React from 'react';

export function FaceRecognitionContainer({ url, faceBoxData }) {
  const mappedData = faceBoxData.map(item => {
    const style = { ...item };

    return (
      <div
        className="absolute z-10 flex flex-wrap justify-center shadow-[0_0_0_3px_#149df2_inset] cursor-pointer hover:bg-[#149df246] hover:scale-105"
        style={style}
      ></div>
    );
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
