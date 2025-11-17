
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
  activeButton?: string;
  lazy?: boolean; // Optional lazy loading (default true)
}

export default function Banner({
  mediaUrl,
  imageUrl,
  videoUrl,
  heading,
  paragraph,
  buttons,
  activeButton,
  lazy = true,
}: BannerProps) {
  const [isVideo, setIsVideo] = useState(false);

  useEffect(() => {
    if (mediaUrl) {
      setIsVideo(/\.(mp4|webm|ogg)$/i.test(mediaUrl));
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
      loading={lazy ? "lazy" : "eager"}
      priority={!lazy}
      placeholder="blur"
      blurDataURL="/images/blur-placeholder.png"
    />
  );

  const backgroundMedia = videoUrl || (mediaUrl && isVideo)
    ? renderVideo(videoUrl || mediaUrl || "")
    : renderImage(imageUrl || mediaUrl || "");

  return (
    <section className="relative w-full overflow-hidden pt-20 md:pt-24">
      {/* Background Media */}
      <div className="relative w-full h-[40vh] md:h-[calc(100vh-6rem)]">
        {backgroundMedia}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 pt-20 md:pt-24">
        <div className="container mx-auto">
          <div className="text-center text-white space-y-6">
            <h1 className="text-2xl md:text-3xl font-bold">
              {(heading || "").split("\n").map((line, i) => (
                <span key={i} className={i > 0 ? "block mt-2" : ""}>
                  {line}
                </span>
              ))}
            </h1>
            {paragraph && <p className="text-lg md:text-xl opacity-90">{paragraph}</p>}

            {buttons && buttons.length > 0 && (
              <div className="flex flex-wrap justify-center gap-4">
                {buttons.map((button, i) => (
                  <Link
                    key={i}
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
            )}
          </div>
        </div>
      </div>
    </section>
  );
}