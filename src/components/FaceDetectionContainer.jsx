import React from 'react';

export default function FaceDetectionContainer({ url, faceBoxData }) {
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
    <div className="my-8 grid justify-center">
      <div id="face-rec-container" className="hidden">
        <div className="relative inline-block mx-auto">
          {mappedData}
          <img
            id="face-rec-img"
            src={url}
            alt="Image from URL"
            className="sm:rounded-3xl rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
