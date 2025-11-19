// import Image from "next/image";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <section className="relative min-h-screen w-full overflow-hidden pt-20 md:pt-24">
//       {/* Background Image */}
//       <div className="absolute inset-0 z-0">
//         <Image
//           src="/images/home_banner.png"
//           alt="Sports stadium"
//           fill
//           className="object-cover"
//           priority
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 container mx-auto px-4 py-20">
//         <div className="grid md:grid-cols-2 gap-8 p-12 mt-12 items-center">
//           <div className="text-white space-y-6">
//             <h1 className="text-3xl font-bold">
//               Welcome to
//               <span className="block mt-2">Bharat Sports Foundation</span>
//             </h1>
//             <p className="text-xl opacity-90">
//               Your ultimate destination for everything related to physical
//               education and sports
//             </p>
//             <Link
//               href="/donate"
//               className="inline-block px-8 py-3 bg-[#B8EA80] text-black font-bold rounded-md hover:bg-[#a5d695] transition-colors"
//             >
//               DONATE HERE
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import Link from "next/link";

// export default function Home() {
//   return (
//     <section className="relative min-h-screen w-full overflow-hidden pt-20 md:pt-24">
//       {/* Background Video */}
//       <div className="absolute inset-0 z-0 overflow-hidden">
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="w-full h-full object-cover"
//         >
//           {/* <source src="https://www.pexels.com/download/video/32311041/" type="video/mp4" /> */}
//           <source src="/images/homepage.mp4" type="video/mp4" />
//         </video>

//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 container mx-auto px-4 py-20">
//         <div className="grid md:grid-cols-2 gap-8 p-12 mt-12 items-center">
//           <div className="text-white space-y-6">
//             <h1 className="text-3xl font-bold">
//               Welcome to
//               <span className="block mt-2">Bharat Sports Foundation</span>
//             </h1>
//             <p className="text-xl opacity-90">
//               Your ultimate destination for everything related to physical
//               education and sports.
//             </p>
//             <Link
//               href="/donate"
//               className="inline-block px-8 py-3 bg-[#B8EA80] text-black font-bold rounded-md hover:bg-[#a5d695] transition-colors"
//             >
//               DONATE HERE
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import Link from "next/link";

export default function Home() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-16 md:pt-20">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/images/homepage.mp4" type="video/mp4" />
        </video>

        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 min-h-screen flex items-center">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 w-full py-12 md:py-20">
          <div className="text-white space-y-6 md:space-y-8 max-w-2xl">
            {/* Heading */}
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Welcome to Bharat Sports Foundation
                <span className="block mt-2 bg-gradient-to-r from-[#B8EA80] to-[#98c889] bg-clip-text text-transparent"></span>
              </h1>
            </div>

            {/* Subheading */}
            <p className="text-lg sm:text-xl md:text-2xl opacity-90 leading-relaxed max-w-xl">
              Your ultimate destination for everything related to physical
              education and sports.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                href="/donate"
                className="inline-block px-8 sm:px-10 py-4 sm:py-5 bg-[#B8EA80] text-black text-base sm:text-lg font-bold rounded-full hover:bg-[#a5d695] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                DONATE HERE
              </Link>
            </div>

            {/* Optional: Stats or Features */}
            <div className="grid grid-cols-3 gap-4 pt-8 md:pt-12">
              <div className="text-center md:text-left">
                <div className="text-2xl md:text-3xl font-bold text-[#B8EA80]">
                  100+
                </div>
                <div className="text-xs md:text-sm opacity-80 mt-1">
                  Medals Won
                </div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-2xl md:text-3xl font-bold text-[#B8EA80]">
                  10K+
                </div>
                <div className="text-xs md:text-sm opacity-80 mt-1">
                  Youth Impacted
                </div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-2xl md:text-3xl font-bold text-[#B8EA80]">
                  50+
                </div>
                <div className="text-xs md:text-sm opacity-80 mt-1">
                  Programs
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Optional decorative element or kept empty for balance */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative">
              {/* Decorative floating elements */}
              <div className="absolute top-10 right-10 w-32 h-32 bg-[#B8EA80] rounded-full opacity-20 blur-3xl animate-pulse" />
              <div
                className="absolute bottom-20 left-10 w-40 h-40 bg-[#98c889] rounded-full opacity-20 blur-3xl animate-pulse"
                style={{ animationDelay: "1s" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}