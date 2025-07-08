'use client'

import React from "react";
import './globals.css';
import VideoHeader from "@/app/components/VideoHeader/VideoHeader";
import WIPHeader from "@/app/components/WIPHeader/WIPHeader";
import AboutUsHeader from "./components/AboutUsHeader/AboutUsHeader";
import ProgressBar from "@/app/components/ProgressBar/ProgressBar";

export default function Home() {
  return (
    <>
      <ProgressBar /> {/* Add progress bar */}
      <main>
        <VideoHeader />
        <WIPHeader />
        <AboutUsHeader />
        {/* Add more components or content as needed */}
      </main>
    </>
  );
}