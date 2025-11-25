"use client";

import { useState, useRef } from "react";
import Link from "next/link";

export default function Home() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-8 md:pt-10">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-gray-900">
        {/* Loading Overlay with Spinner */}
        {!videoLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center z-10">
            <div className="flex flex-col items-center gap-4">
              {/* Spinner */}
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 border-4 border-[#B8EA80]/20 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-transparent border-t-[#B8EA80] rounded-full animate-spin"></div>
              </div>
              {/* Loading Text */}
              <p className="text-white/70 text-sm font-medium animate-pulse">
                Loading...
              </p>
            </div>
          </div>
        )}

        {/* <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onLoadedData={handleVideoLoad}
          onCanPlayThrough={handleVideoLoad}
          className={`w-full h-full object-cover transition-opacity duration-700 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src="./images/HomeBan.mp4" type="video/mp4" />
        </video> */}

        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/images/HomeBanPoster.webp"
          onLoadedData={handleVideoLoad}
          onCanPlayThrough={handleVideoLoad}
          className={`w-full h-full object-cover transition-opacity duration-700 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src="/images/HomeBan.mp4" type="video/mp4" />
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 min-h-screen flex items-center">
        <div className="w-full py-6 md:py-10">
          {/* ⭐ ONE SINGLE SECTION WRAPPING ALL TEXT, BUTTON, AND STATS ⭐ */}
          <div
            className="text-white space-y-4 sm:space-y-5 md:space-y-6 max-w-4xl animate-fade-in-up opacity-0 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Welcome to Bharat{" "}
              <span className="text-[#B8EA80] font-semibold">Sports</span>{" "}
              Foundation
            </h1>

            {/* Subheading with highlighted "Sports" */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl">
              Your ultimate destination for everything related to physical
              education and sports.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                href="/donate"
                className="inline-block px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-[#B8EA80] text-black text-sm sm:text-base md:text-lg font-bold rounded-full hover:bg-[#a5d695] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                DONATE HERE
              </Link>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-5 pt-2 max-w-2xl">
              <div className="text-center md:text-left">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#B8EA80]">
                  100+
                </div>
                <div className="text-xs sm:text-sm md:text-base opacity-80 mt-1">
                  Medals Won
                </div>
              </div>

              <div className="text-center md:text-left">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#B8EA80]">
                  10K+
                </div>
                <div className="text-xs sm:text-sm md:text-base opacity-80 mt-1">
                  Youth Impacted
                </div>
              </div>

              <div className="text-center md:text-left">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#B8EA80]">
                  50+
                </div>
                <div className="text-xs sm:text-sm md:text-base opacity-80 mt-1">
                  Programs
                </div>
              </div>
            </div>
          </div>
          {/* END ONE BLOCK */}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none hidden lg:block">
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-[#B8EA80] rounded-full opacity-20 blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-[#98c889] rounded-full opacity-20 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
