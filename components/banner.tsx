"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

interface ButtonProps {
  text: string;
  link: string;
}

interface BannerProps {
  mediaUrl?: string;
  imageUrl?: string;
  videoUrl?: string;
  heading?: string;
  paragraph?: string;
  buttons?: ButtonProps[];
  activeButton?: string;
  lazy?: boolean; 
}

export default function Banner({
  mediaUrl,
  imageUrl,
  videoUrl,
  heading = "",
  paragraph = "",
  buttons,
  activeButton,
  lazy = true,
}: BannerProps) {
  const [isVideo, setIsVideo] = useState(false);
  const [loadVideo, setLoadVideo] = useState(!lazy);

  // ✅ Memoize video check to avoid recalculating every render
  useEffect(() => {
    if (mediaUrl) {
      const videoExtensions = [".mp4", ".webm", ".ogg"];
      setIsVideo(
        videoExtensions.some((ext) =>
          mediaUrl.toLowerCase().endsWith(ext)
        )
      );
    }
  }, [mediaUrl]);

  // ✅ Lazy load video a bit later to reduce initial page delay
  useEffect(() => {
    if (lazy) {
      const timeout = setTimeout(() => setLoadVideo(true), 800);
      return () => clearTimeout(timeout);
    }
  }, [lazy]);

  const videoSrc = useMemo(() => videoUrl || (isVideo ? mediaUrl : ""), [videoUrl, isVideo, mediaUrl]);
  const imageSrc = useMemo(() => imageUrl || (!isVideo ? mediaUrl : ""), [imageUrl, isVideo, mediaUrl]);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Layer */}
      <div className="relative w-full h-[40vh] md:h-[calc(100vh-80px)]">
        {/* ✅ Load video only after delay */}
        {loadVideo && videoSrc && (
          <video
            key={videoSrc}
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            className="w-full h-full object-cover"
          />
        )}

        {/* ✅ Use lazy-loaded image fallback */}
        {imageSrc && (
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt="Banner background"
            fill
            className="object-cover"
            loading="lazy"
            priority={!lazy} // only priority if not lazy
            placeholder="blur"
            blurDataURL="/images/blur-placeholder.png" // optional lightweight blur image
          />
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
      </div>

      {/* Content Section */}
      <div className="relative z-10 container mx-auto px-4 py-8 md:absolute md:inset-0 md:flex md:flex-col md:items-center md:justify-center">
        <div className="text-center md:text-white space-y-6">
          {heading && (
            <h1 className="text-2xl md:text-3xl font-bold leading-tight">
              {heading.split("\n").map((line, index) => (
                <span key={index} className={index > 0 ? "block mt-2" : ""}>
                  {line}
                </span>
              ))}
            </h1>
          )}

          {paragraph && (
            <p className="text-lg md:text-xl opacity-90">{paragraph}</p>
          )}

          {buttons?.length ? (
            <div className="flex flex-wrap justify-center gap-4">
              {buttons.map((button, index) => (
                <Link
                  key={index}
                  href={button.link}
                  className={`inline-block px-6 py-2 md:px-8 md:py-3 font-bold rounded-md transition-colors ${
                    activeButton === button.text
                      ? "bg-[#a5d695] text-black"
                      : "bg-[#B8EA80] text-black hover:bg-[#a5d695]"
                  }`}
                >
                  {button.text}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
