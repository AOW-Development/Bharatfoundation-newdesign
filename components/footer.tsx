"use client";
import Link from "next/link";
import {
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
  Instagram,
  ArrowUp,
  HelpCircle,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const router = useRouter();

  return (
    <footer
      className="
        relative 
        text-sm text-white 
        bg-cover bg-center bg-no-repeat
      "
      style={{ backgroundImage: "url('images/bg.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xs"></div>

      <div className="relative container mx-auto px-6 md:px-28 pt-12 pb-6">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Our Work Section */}
          <div>
            <h2 className="text-lg font-bold mb-4 border-b border-gray-400 pb-2">
              OUR WORK
            </h2>
            <ul className="space-y-2">
              <li>
                <Link href="/our-work#impact" className="hover:text-gray-300">
                  Impact
                </Link>
              </li>
              <li>
                <Link
                  href="/our-work#womens-report"
                  className="hover:text-gray-300"
                >
                  Women's Report
                </Link>
              </li>
              <li>
                <Link href="/our-work#grants" className="hover:text-gray-300">
                  Grant
                </Link>
              </li>
              <li>
                <Link
                  href="/our-work#initiatives"
                  className="hover:text-gray-300"
                >
                  Simply Periods, Roots, Smiles
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved Section */}
          <div>
            <h2 className="text-lg font-bold mb-4 border-b border-gray-400 pb-2">
              GET INVOLVED
            </h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/get-involved#volunteer"
                  className="hover:text-gray-300"
                >
                  Volunteer
                </Link>
              </li>
              <li>
                <Link
                  href="/get-involved#donate"
                  className="hover:text-gray-300"
                >
                  Donate
                </Link>
              </li>
              <li>
                <Link
                  href="/get-involved#partner"
                  className="hover:text-gray-300"
                >
                  Partner with us
                </Link>
              </li>
              <li>
                <Link
                  href="/get-involved#careers"
                  className="hover:text-gray-300"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* About Us Section */}
          <div>
            <h2 className="text-lg font-bold mb-4 border-b border-gray-400 pb-2">
              ABOUT US
            </h2>
            <ul className="space-y-2">
              <li>
                <Link href="/about#tutorials" className="hover:text-gray-300">
                  In-Depth Tutorials
                </Link>
              </li>
              <li>
                <Link href="/about#insights" className="hover:text-gray-300">
                  Expert Insights
                </Link>
              </li>
              <li>
                <Link href="/about#events" className="hover:text-gray-300">
                  Live Events and Coverage
                </Link>
              </li>
              <li>
                <Link href="/about#fitness" className="hover:text-gray-300">
                  Fitness and Wellness
                </Link>
              </li>
            </ul>
          </div>

          {/* Main Office Section */}
          <div>
            <h2 className="text-lg font-bold mb-4 border-b border-gray-400 pb-2">
              MAIN OFFICE
            </h2>
            <address className="not-italic">
              Bharat Sports Foundation
              <br />
              58/2, first floor, opp to century breeze apartment,
              <br />
              Yalahanka Bangalore, Karnataka, 560064
            </address>
          </div>
        </div>

        {/* Address and Contact Info */}
        <div className="border-t border-gray-400 pt-6 pb-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
            <div className="space-y-2 mb-4 lg:mb-0">
              <p>Bharat Foundation161 B/ 4, 3rd Floor, Gulmohar House</p>
              <p>New Delhi-110049 Delhi, India</p>
              <p>
                Contact Us: Tel:+ 91-11-43123700 | E-mail:
                info@bharatfoundation.org
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-gray-300">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Youtube className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Instagram className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Help Button + Scroll to Top */}
        <div className="fixed bottom-8 right-8 flex flex gap-4">
          <button
            onClick={() => router.push("/contact")}
            className="bg-white text-green-500 px-6 py-2 rounded-md font-semibold flex items-center gap-2 shadow-lg"
          >
            <HelpCircle className="h-5 w-5" />
            Help?
          </button>
          <button
            onClick={scrollToTop}
            className="bg-yellow-500 p-2 rounded-full hover:bg-yellow-400 transition-colors shadow-lg"
          >
            <ArrowUp className="h-6 w-6 text-white" />
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-400 mt-6 pt-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>
            Powered By:-
            <Link
              href="https://aow.co.in/"
              target="_blank"
              className="text-blue-300 underline ml-1 hover:text-blue-200"
            >
              aow.co.in
            </Link>
          </p>
          <p>© Copyright 2025 Bharat Sports Foundation. All rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
