// pages/index.tsx
import React from "react";
import './globals.css';
import VideoHeader from "@/app/components/VideoHeader/VideoHeader";
import WIPHeader from "@/app/components/WIPHeader/WIPHeader";

export default function Home() {
  return (
    <main>
      <VideoHeader />
      <WIPHeader />
    </main>
  );
}