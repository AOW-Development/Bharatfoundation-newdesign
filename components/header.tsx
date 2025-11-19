"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    setIsDarkMode(darkModeMediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    darkModeMediaQuery.addEventListener("change", handleChange);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      darkModeMediaQuery.removeEventListener("change", handleChange);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/what-we-do", label: "What We Do" },
    { href: "/blog", label: "Our Blog" },
    { href: "/resources", label: "Resources" },
    { href: "/contact", label: "Contact Us" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isDarkMode ? "dark" : ""
      }`}
      style={{
        background: isScrolled
          ? "rgba(15, 23, 42, 0.85)"
          : "rgba(15, 23, 42, 0.95)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow:
          "0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)",
      }}
    >
      {/* Glassmorphism gradient overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(147, 51, 234, 0.3) 50%, rgba(236, 72, 153, 0.3) 100%)",
        }}
      />

      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <nav className="flex items-center justify-between h-20 md:h-24 gap-4">
          {/* Logo Section - Fixed width */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 lg:gap-3 group">
              <div className="relative overflow-hidden rounded-full bg-white p-1">
                <Image
                  src="/images/revisedlogo_bsf.svg"
                  alt="Bharat Sports Foundation Logo"
                  width={150}
                  height={150}
                  className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="hidden xl:block">
                <h1 className="text-lg xl:text-xl font-bold text-white leading-tight">
                  Bharat Sports
                </h1>
                <p className="text-xs text-blue-100 font-medium">Foundation</p>
              </div>
            </Link>
          </div>

          {/* Mobile/Tablet Heading - Only show on small/medium screens */}
          <h1 className="text-xs sm:text-sm md:text-base font-bold text-white xl:hidden flex-1 text-center px-2">
            Bharat Sports Foundation
          </h1>

          {/* Desktop Navigation - Better spacing */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3 flex-1 justify-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 xl:px-4 py-2 text-xs xl:text-sm font-semibold rounded-lg transition-all duration-300 whitespace-nowrap ${
                  pathname === item.href
                    ? "text-gray-900 bg-[#B8EA80]"
                    : "text-white hover:text-gray-100 hover:bg-white/10"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Donate Button - Fixed width */}
          <div className="hidden lg:block flex-shrink-0">
            <Link
              href="/donate"
              className="px-4 xl:px-6 py-2 xl:py-2.5 text-xs xl:text-sm font-bold rounded-lg bg-[#B8EA80] text-gray-900 transition-all duration-300 hover:shadow-lg hover:shadow-[#B8EA80]/40 hover:bg-[#a5d695] hover:scale-105 whitespace-nowrap"
            >
              DONATE NOW
            </Link>
          </div>

          {/* Mobile/Tablet menu button */}
          <button
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#B8EA80] transition-colors duration-300 flex-shrink-0"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="block h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
            ) : (
              <Menu
                className="block h-5 w-5 sm:h-6 sm:w-6"
                aria-hidden="true"
              />
            )}
          </button>
        </nav>

        {/* Mobile/Tablet Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-2 pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  pathname === item.href
                    ? "bg-[#B8EA80] text-gray-900 shadow-md"
                    : "text-white hover:bg-white/10"
                }`}
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/donate"
              className="block px-4 py-3 rounded-lg text-sm font-bold bg-[#B8EA80] text-gray-900 hover:bg-[#a5d695] transition-all duration-300 shadow-md hover:shadow-lg text-center mt-2"
              onClick={toggleMenu}
            >
              DONATE NOW
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { Menu, X } from "lucide-react";

// export default function Header() {
//   const pathname = usePathname();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     // Check if dark mode is enabled
//     const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
//     setIsDarkMode(darkModeMediaQuery.matches);

//     // Listen for changes in color scheme
//     const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
//     darkModeMediaQuery.addEventListener("change", handleChange);

//     // Handle scroll effect
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       darkModeMediaQuery.removeEventListener("change", handleChange);
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const navItems = [
//     { href: "/", label: "Home" },
//     { href: "/what-we-do", label: "What We Do" },
//     { href: "/blog", label: "Our Blog" },
//     { href: "/resources", label: "Resources" },
//     { href: "/contact", label: "Contact Us" },
//   ];

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
//         isDarkMode ? "dark" : ""
//       }`}
//       style={{
//         background: isScrolled
//           ? 'rgba(71, 85, 105, 0.85)'
//           : 'rgba(71, 85, 105, 0.95)',
//         backdropFilter: 'blur(12px)',
//         WebkitBackdropFilter: 'blur(12px)',
//         boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)'
//       }}
//     >
//       {/* Glassmorphism gradient overlay */}
//       <div
//         className="absolute inset-0 opacity-20"
//         style={{
//           background: 'linear-gradient(135deg, rgba(125, 211, 252, 0.4) 0%, rgba(147, 197, 253, 0.4) 50%, rgba(186, 230, 253, 0.4) 100%)'
//         }}
//       />

//       {/* Subtle dot pattern */}
//       <div
//         className="absolute inset-0 opacity-5"
//         style={{
//           backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
//           backgroundSize: '20px 20px'
//         }}
//       />

//       <div className="container mx-auto px-4 md:px-12 relative z-10">
//         <nav className="flex items-center justify-between h-20 md:h-24">
//           {/* Logo Section */}
//           <div className="flex items-center gap-3">
//             <Link href="/" className="flex items-center gap-3 group">
//               <div className="relative overflow-hidden rounded-full bg-white p-1">
//                 <Image
//                   src="/images/revisedlogo_bsf.svg"
//                   alt="Bharat Sports Foundation Logo"
//                   width={150}
//                   height={150}
//                   className="h-14 w-14 md:h-16 md:w-16 transition-transform duration-300 group-hover:scale-110"
//                 />
//               </div>
//               <div className="hidden lg:block">
//                 <h1 className="text-xl font-bold text-white leading-tight">
//                   Bharat Sports
//                 </h1>
//                 <p className="text-xs text-sky-100 font-medium">
//                   Foundation
//                 </p>
//               </div>
//             </Link>
//           </div>

//           {/* Mobile Heading */}
//           <h1 className="text-base font-bold text-white lg:hidden absolute left-1/2 transform -translate-x-1/2">
//             Bharat Sports Foundation
//           </h1>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-1">
//             {navItems.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className={`relative px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ${
//                   pathname === item.href
//                     ? "text-gray-900 bg-[#B8EA80]"
//                     : "text-white hover:text-gray-100 hover:bg-white/10"
//                 }`}
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </div>

//           {/* Desktop Donate Button */}
//           <div className="hidden md:block">
//             <Link
//               href="/donate"
//               className="px-6 py-2.5 text-sm font-bold rounded-lg bg-[#B8EA80] text-gray-900 transition-all duration-300 hover:shadow-lg hover:shadow-[#B8EA80]/40 hover:bg-[#a5d695] hover:scale-105"
//             >
//               DONATE NOW
//             </Link>
//           </div>

//           {/* Mobile menu button */}
//           <button
//             className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#B8EA80] transition-colors duration-300"
//             onClick={toggleMenu}
//             aria-label="Toggle menu"
//           >
//             {isMenuOpen ? (
//               <X className="block h-6 w-6" aria-hidden="true" />
//             ) : (
//               <Menu className="block h-6 w-6" aria-hidden="true" />
//             )}
//           </button>
//         </nav>

//         {/* Mobile Navigation */}
//         <div
//           className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
//             isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//           }`}
//         >
//           <div className="px-2 pb-4 space-y-2">
//             {navItems.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className={`block px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
//                   pathname === item.href
//                     ? "bg-[#B8EA80] text-gray-900 shadow-md"
//                     : "text-white hover:bg-white/10"
//                 }`}
//                 onClick={toggleMenu}
//               >
//                 {item.label}
//               </Link>
//             ))}
//             <Link
//               href="/donate"
//               className="block px-4 py-3 rounded-lg text-sm font-bold bg-[#B8EA80] text-gray-900 hover:bg-[#a5d695] transition-all duration-300 shadow-md hover:shadow-lg text-center mt-2"
//               onClick={toggleMenu}
//             >
//               DONATE NOW
//             </Link>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }