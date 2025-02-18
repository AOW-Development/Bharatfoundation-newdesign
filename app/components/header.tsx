import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white w-full shadow-sm">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              {/* <Image
                src="images"
                alt="Global Sports Foundation Logo"
                width={80}
                height={80}
                className="h-16 w-16"
              /> */}
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="px-4 py-2 bg-[#B7E4A7] text-black font-medium rounded"
            >
              Home
            </Link>
            <Link href="/what-we-do" className="text-black hover:text-gray-600">
              What We Do
            </Link>
            <Link href="/blog" className="text-black hover:text-gray-600">
              Our Blog
            </Link>
            <Link href="/resources" className="text-black hover:text-gray-600">
              Resources
            </Link>
            <Link href="/contact" className="text-black hover:text-gray-600">
              Contact Us
            </Link>
            <Link
              href="/donate"
              className="px-6 py-2 bg-[#B7E4A7] text-black font-bold rounded hover:bg-[#a5d695] transition-colors"
            >
              DONATE HERE
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2">
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
