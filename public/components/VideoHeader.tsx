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
        <source src="/public/videos/BH_Looped.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-4xl md:text-6xl font-bold">Welcome to My Site</h1>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-0" />
    </div>
  );
};

export default VideoHeader;