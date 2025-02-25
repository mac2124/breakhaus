// pages/index.tsx
import React from "react";
import { FaInstagram, FaEnvelope, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-black">
      <div className="text-center">
        {/* Work in Progress Heading */}
        <h1 className="wip-heading">
          Work In Progress
        </h1>

        {/* Icon Row */}
        <div className="flex items-center justify-center gap-8 text-3xl">
          {/* Instagram Icon */}
          <Link
            href="https://instagram.com/yourprofile"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="hover:scale-110 transition-transform" />
          </Link>

          {/* Email Icon */}
          <Link
            href="mailto:someone@example.com"
            aria-label="Send Email"
          >
            <FaEnvelope className="hover:scale-110 transition-transform" />
          </Link>

          {/* Arrow Icon (could be a link back or forward) */}
          <Link
            href="/some-other-route"
            aria-label="Another Page"
          >
            <FaArrowLeft className="hover:scale-110 transition-transform" />
          </Link>
        </div>
      </div>
    </main>
  );
}