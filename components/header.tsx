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

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(darkModeMediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    darkModeMediaQuery.addEventListener("change", handleChange);

    return () => darkModeMediaQuery.removeEventListener("change", handleChange);
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
      className={`fixed top-0 left-0 right-0 w-full z-50 dark:bg-gray-900 shadow-sm md:pt-4 py-4 md:pt-8 ${
        isDarkMode ? "dark" : ""
      }`}
    >
      <div className="container mx-auto px-4 md:px-12">
        <nav className="flex items-center justify-between h-16 md:h-20 relative">
          {/* Background strip (visible only on desktop) */}
          <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 h-12 top-1/2 mx-6 -translate-y-1/2 hidden md:block" />

          {/* Logo */}
          <div className="flex items-center z-10">
            <Link href="/">
              <Image
                src="/images/revisedlogo_bsf.svg"
                alt="Bharat Sports Foundation Logo"
                width={150}
                height={150}
                className="h-16 w-16 md:h-28 md:w-28"
              />
            </Link>
          </div>

          {/* Mobile + Tablet Heading (Improved style) */}
          <h1
            className="text-base sm:text-lg font-bold text-[#a5d695] dark:text-[#a5d695] 
            text-center px-3 py-1 rounded-md 
            bg-white/20 dark:bg-gray-800/30 backdrop-blur-md 
            absolute left-1/2 transform -translate-x-1/2 md:hidden"
          >
            Bharat Sports Foundation
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center absolute left-0 right-0 mx-16 h-8 z-0">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`mx-2 px-6 py-3 text-sm font-bold rounded-md transition-colors ${
                  pathname === item.href
                    ? "bg-[#B8EA80] text-black dark:text-white"
                    : "text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Donate (Desktop Only) */}
          <div className="hidden md:block z-10">
            <Link
              href="/donate"
              className="mx-2 px-6 py-3 text-sm font-bold rounded-md bg-[#B8EA80] text-black dark:text-white hover:bg-[#a5d695] transition-colors"
            >
              DONATE NOW
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#B8EA80] z-10"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 bg-white dark:bg-gray-900 z-50 shadow-md">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    pathname === item.href
                      ? "bg-[#B8EA80] text-black dark:text-white"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white"
                  }`}
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/donate"
                className="block px-3 py-2 rounded-md text-base font-medium bg-[#B8EA80] text-black dark:text-white hover:bg-[#a5d695]"
                onClick={toggleMenu}
              >
                DONATE NOW
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
