// pages/index.tsx
import React from "react";
import './globals.css';

export default function Home() {
  return (
  <div>
    {/* Video element to play the MP4 file */}
    <video
      src="./public/BH_Looped.mp4"
      autoPlay
      loop
      muted
      playsInline
      className="background-video"
    />
    
    {/* Rest of your page content */}
    <h1 style={{ position: "relative", zIndex: 1 }}>Welcome to Breakhaus</h1>
    {/* Add other components or content here */}
  </div>
  );
}