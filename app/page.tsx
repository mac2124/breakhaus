'use client'

import React from "react";
import './globals.css';
import VideoHeader from "@/app/components/VideoHeader/VideoHeader";
import WIPHeader from "@/app/components/WIPHeader/WIPHeader";
import AboutUsHeader from "./components/AboutUsHeader/AboutUsHeader";
import ProgressBar from "@/app/components/ProgressBar/ProgressBar";
import UsefulLinksHeader from "./components/UsefulLinksHeader/UsefulLinksHeader";
import ContactFormPage from "./components/ContactFormPage/ContactFormPage";

export default function Home() {
  return (
    <>
      <ProgressBar /> {/* Add progress bar */}
      <main>
        <VideoHeader />
        <WIPHeader />
        <AboutUsHeader />
        <UsefulLinksHeader />
        <ContactFormPage />
        {/* Add more components or content as needed */}
      </main>
    </>
  );
}