import React from 'react';

const VideoHeader = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/breakhaus/assets/BH_Looped.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute bottom-10 left-0 w-full flex items-center justify-center z-10">
        <div className="double-arrow animate-fade-in">
          <div className="arrow"></div>
          <div className="arrow mt-2"></div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-0" />
    </div>
  );
};
// TODO: Move styles to a CSS file

export default VideoHeader;