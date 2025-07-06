// pages/index.tsx
import React from "react";
import './globals.css';
import VideoHeader from "@/app/components/VideoHeader/VideoHeader";
import WIPHeader from "@/app/components/WIPHeader/WIPHeader";
import AboutUsHeader from "./components/AboutUsHeader/AboutUsHeader";

export default function Home() {
  return (
    <main>
      <VideoHeader />
      <WIPHeader />
      <AboutUsHeader />
      {/* Add more components or content as needed */}
    </main>
  );
}