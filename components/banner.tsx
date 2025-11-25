// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";

// interface ButtonProps {
//   text: string;
//   link: string;
// }

// interface BannerProps {
//   mediaUrl?: string;
//   imageUrl?: string;
//   videoUrl?: string;
//   heading?: string;
//   paragraph?: string;
//   buttons?: ButtonProps[];
//   activeButton?: string;
//   lazy?: boolean; // Optional lazy loading (default true)
// }

// export default function Banner({
//   mediaUrl,
//   imageUrl,
//   videoUrl,
//   heading,
//   paragraph,
//   buttons,
//   activeButton,
//   lazy = true,
// }: BannerProps) {
//   const [isVideo, setIsVideo] = useState(false);

//   useEffect(() => {
//     if (mediaUrl) {
//       setIsVideo(/\.(mp4|webm|ogg)$/i.test(mediaUrl));
//     }
//   }, [mediaUrl]);

//   const renderVideo = (src: string) => (
//     <video
//       src={src}
//       autoPlay
//       loop
//       muted
//       playsInline
//       className="w-full h-full object-cover"
//     />
//   );

//   const renderImage = (src: string) => (
//     <Image
//       src={src || "/placeholder.svg"}
//       alt="Banner background"
//       fill
//       className="object-cover"
//       loading={lazy ? "lazy" : "eager"}
//       priority={!lazy}
//       placeholder="blur"
//       blurDataURL="/images/blur-placeholder.png"
//     />
//   );

//   const backgroundMedia = videoUrl || (mediaUrl && isVideo)
//     ? renderVideo(videoUrl || mediaUrl || "")
//     : renderImage(imageUrl || mediaUrl || "");

//   return (
//     <section className="relative w-full overflow-hidden mt-12">
//       {/* Background Media */}
//       <div className="relative w-full h-[40vh] md:h-[calc(100vh-80px)]">
//         {backgroundMedia}
//         <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
//       </div>

//       {/* Content */}
//       <div className="absolute inset-0 z-10 text-white container mx-auto px-4 py-8 flex flex-col items-center justify-center">
//         <div className="text-center md:text-white space-y-4">
//           <h1 className="text-2xl md:text-3xl font-bold">
//             {(heading || "").split("\n").map((line, i) => (
//               <span key={i} className={i > 0 ? "block mt-2" : ""}>
//                 {line}
//               </span>
//             ))}
//           </h1>
//           {paragraph && <p className="text-lg md:text-xl opacity-90">{paragraph}</p>}

//           {buttons && buttons.length > 0 && (
//             <div className="flex flex-wrap justify-center gap-4">
//               {buttons.map((button, i) => (
//                 <Link
//                   key={i}
//                   href={button.link}
//                   className={`inline-block px-6 py-2 md:px-8 md:py-3 font-bold rounded-md transition-colors ${
//                     activeButton === button.text
//                       ? "bg-[#a5d695] text-black"
//                       : "bg-[#B8EA80] text-black hover:bg-[#a5d695]"
//                   }`}
//                 >
//                   {button.text}
//                 </Link>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { useState, useEffect, useRef } from "react";
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
  blurDataURL?: string;
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
  blurDataURL,
}: BannerProps) {
  const [isVideo, setIsVideo] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (mediaUrl) {
      setIsVideo(/\.(mp4|webm|ogg)$/i.test(mediaUrl));
    }
  }, [mediaUrl]);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  const renderVideo = (src: string) => (
    <>
      {/* Loading Overlay with Spinner */}
      {!videoLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
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
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onLoadedData={handleVideoLoad}
        onCanPlayThrough={handleVideoLoad}
        className={`w-full h-full object-cover transition-opacity duration-700 ${videoLoaded ? "opacity-100" : "opacity-0"
          }`}
      />
    </>
  );

  const renderImage = (src: string) => (
    <Image
      src={src || ""}
      alt="Banner background"
      fill
      className="object-cover"
      loading={lazy ? "lazy" : "eager"}
      priority={!lazy}
      placeholder="blur"
      blurDataURL={
        blurDataURL
          ? blurDataURL
          : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAE0lEQVR42mNkYGBg+M+ABBgAEHgBBq0F8DAAAAAASUVORK5CYII='
      }
      quality={90}
    />
  );

  const backgroundMedia =
    videoUrl || (mediaUrl && isVideo)
      ? renderVideo(videoUrl || mediaUrl || "")
      : renderImage(imageUrl || mediaUrl || "");

  return (
    <section className="relative w-full overflow-hidden mt-12">
      {/* Background Media */}
      <div className="relative w-full h-[40vh] md:h-[calc(100vh-80px)] bg-gray-900">
        {backgroundMedia}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-10 text-white container mx-auto px-4 py-8 flex flex-col items-center justify-center">
        <div className="text-center md:text-white space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold">
            {(heading || "").split("\n").map((line, i) => (
              <span key={i} className={i > 0 ? "block mt-2" : ""}>
                {line}
              </span>
            ))}
          </h1>
          {paragraph && (
            <p className="text-lg md:text-xl opacity-90">{paragraph}</p>
          )}

          {buttons && buttons.length > 0 && (
            <div className="flex flex-wrap justify-center gap-4">
              {buttons.map((button, i) => (
                <Link
                  key={i}
                  href={button.link}
                  className={`inline-block px-6 py-2 md:px-8 md:py-3 font-bold rounded-md transition-colors ${activeButton === button.text
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
    </section>
  );
}
