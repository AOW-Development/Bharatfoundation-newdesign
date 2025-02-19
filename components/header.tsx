"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/what-we-do", label: "What We Do" },
    { href: "/blog", label: "Our Blog" },
    { href: "/resources", label: "Resources" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 shadow-sm  pt-8">
      <div className="container mx-auto px-12">
        <nav className="flex items-center justify-between h-20 relative">
          {/* Background strip */}
          <div className="absolute inset-0 bg-gray-100 h-12 top-1/2 mx-6 -translate-y-1/2" />

          <div className="flex-shrink-0 z-10">
            <Link href="/">
              <Image
                src="/images/revisedlogo_bsf.svg"
                alt="Bharat Sports Foundation Logo"
                width={150}
                height={150}
                className="h-28 w-28"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center justify-center absolute left-0 right-0 mx-16 h-8 z-0">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`mx-12 py-1 px-4 text-sm mx-2 font-bold ${
                  pathname === item.href
                    ? "bg-[#B7E4A7] text-black"
                    : "text-black hover:text-gray-600"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block z-10">
            <Link
              href="/donate"
              className="px-6 py-6 bg-[#B7E4A7] text-black font-bold text-sm hover:bg-[#a5d695] transition-colors"
            >
              DONATE NOW
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 z-10">
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
}
