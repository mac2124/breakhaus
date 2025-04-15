// pages/index.tsx
import React from "react";
import { FaInstagram, FaEnvelope, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

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
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: -1,
        pointerEvents: "none", // Prevent user interaction
      }}
    />
    
    {/* Rest of your page content */}
    <h1 style={{ position: "relative", zIndex: 1 }}>Welcome to Breakhaus</h1>
    {/* Add other components or content here */}
  </div>
  );
}