"use client";

import { useState, useEffect } from "react";
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
}

export default function Banner({
  mediaUrl,
  imageUrl,
  videoUrl,
  heading,
  paragraph,
  buttons,
}: BannerProps) {
  const [isVideo, setIsVideo] = useState(false);

  useEffect(() => {
    if (mediaUrl) {
      const videoExtensions = [".mp4", ".webm", ".ogg"];
      setIsVideo(
        videoExtensions.some((ext) => mediaUrl.toLowerCase().endsWith(ext))
      );
    }
  }, [mediaUrl]);

  const renderVideo = (src: string) => (
    <video
      src={src}
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover"
    />
  );

  const renderImage = (src: string) => (
    <Image
      src={src || "/placeholder.svg"}
      alt="Banner background"
      fill
      className="object-cover"
      priority
    />
  );

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Media */}
      <div className="relative w-full h-[40vh] md:h-[calc(100vh-80px)]">
        {/* Video Layer */}
        {(videoUrl || (mediaUrl && isVideo)) &&
          renderVideo(videoUrl || mediaUrl || "")}

        {/* Image Layer */}
        {(imageUrl || (mediaUrl && !isVideo)) && (
          <div className="absolute inset-0">
            {renderImage(imageUrl || mediaUrl || "")}
          </div>
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 md:absolute md:inset-0 md:flex md:flex-col md:items-center md:justify-center">
        <div className="text-center md:text-white space-y-6">
          <h1 className="text-2xl md:text-3xl font-bold">
            {(heading || "").split("\n").map((line, index) => (
              <span key={index} className={index > 0 ? "block mt-2" : ""}>
                {line}
              </span>
            ))}
          </h1>
          <p className="text-lg md:text-xl opacity-90">{paragraph}</p>
          {buttons && buttons.length > 0 && (
            <div className="flex flex-wrap justify-center gap-4">
              {buttons.map((button, index) => (
                <Link
                  key={index}
                  href={button.link}
                  className="inline-block px-6 py-2 md:px-8 md:py-3 bg-[#B7E4A7] text-black font-bold rounded-md hover:bg-[#a5d695] transition-colors"
                >
                  {button.text}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
