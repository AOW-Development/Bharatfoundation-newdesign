"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
  Instagram,
  ArrowUp,
  HelpCircle,
  CheckCircle2,
} from "lucide-react";
import { useRouter } from "next/navigation";


export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscriptionStatus, setSubscriptionStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };


  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);


  const router = useRouter();


  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubscriptionStatus("error");
      return;
    }


    setIsLoading(true);
    setSubscriptionStatus("");


    try {
      setSubscriptionStatus("success");
      setEmail("");
      setTimeout(() => setSubscriptionStatus(""), 3000);
    } catch (error) {
      setSubscriptionStatus("error");
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <footer
      className="relative text-sm text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('images/bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xs"></div>


      <div className="relative container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-28 pt-8 sm:pt-12 md:pt-16 pb-6">
        {/* Main footer content */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16">


          {/* Our Work Section */}
          <div>
            <h2 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 border-b-2 border-[#B8EA80] pb-2 text-white">
              OUR WORK
            </h2>
            <ul className="space-y-1.5 sm:space-y-2">
              <li><Link href="/our-work#impact" className="text-gray-300 hover:text-[#B8EA80] transition-colors text-xs sm:text-sm">Impact</Link></li>
              <li><Link href="/our-work#womens-report" className="text-gray-300 hover:text-[#B8EA80] transition-colors text-xs sm:text-sm">Women's Report</Link></li>
              <li><Link href="/our-work#grants" className="text-gray-300 hover:text-[#B8EA80] transition-colors text-xs sm:text-sm">Grant</Link></li>
              <li><Link href="/our-work#initiatives" className="text-gray-300 hover:text-[#B8EA80] transition-colors text-xs sm:text-sm">Initiatives</Link></li>
            </ul>
          </div>


          {/* Get Involved Section */}
          <div>
            <h2 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 border-b-2 border-[#B8EA80] pb-2 text-white">
              GET INVOLVED
            </h2>
            <ul className="space-y-1.5 sm:space-y-2">
              <li><Link href="/get-involved#volunteer" className="text-gray-300 hover:text-[#B8EA80] transition-colors text-xs sm:text-sm">Volunteer</Link></li>
              <li><Link href="/get-involved#donate" className="text-gray-300 hover:text-[#B8EA80] transition-colors text-xs sm:text-sm">Donate</Link></li>
              <li><Link href="/get-involved#partner" className="text-gray-300 hover:text-[#B8EA80] transition-colors text-xs sm:text-sm">Partner with us</Link></li>
              <li><Link href="/get-involved#careers" className="text-gray-300 hover:text-[#B8EA80] transition-colors text-xs sm:text-sm">Careers</Link></li>
            </ul>
          </div>


          {/* About Us Section */}
          <div>
            <h2 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 border-b-2 border-[#B8EA80] pb-2 text-white">
              ABOUT US
            </h2>
            <ul className="space-y-1.5 sm:space-y-2">
              <li><Link href="/about#tutorials" className="text-gray-300 hover:text-[#B8EA80] transition-colors text-xs sm:text-sm">Tutorials</Link></li>
              <li><Link href="/about#insights" className="text-gray-300 hover:text-[#B8EA80] transition-colors text-xs sm:text-sm">Expert Insights</Link></li>
              <li><Link href="/about#events" className="text-gray-300 hover:text-[#B8EA80] transition-colors text-xs sm:text-sm">Live Events</Link></li>
              <li><Link href="/about#fitness" className="text-gray-300 hover:text-[#B8EA80] transition-colors text-xs sm:text-sm">Wellness</Link></li>
            </ul>
          </div>


          {/* Main Office Section */}
          <div>
            <h2 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 border-b-2 border-[#B8EA80] pb-2 text-white">
              MAIN OFFICE
            </h2>
            <address className="not-italic text-xs sm:text-sm text-gray-300 leading-relaxed space-y-1">
              <p>Bharat Sports Foundation</p>
              <p>58/2, first floor, Sriranga complex,</p>
              <p>Opp to Century Breeze apartment,</p>
              <p>Behind ICICI ATM, Surabhi Layout</p>
              <p>Yalahanka - Bangalore, Karnataka 560064</p>
            </address>
          </div>
        </div>


        {/* Contact + Follow Us Left, Newsletter Right */}
        <div className="border-t border-gray-500 pt-6 sm:pt-8 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">


            {/* LEFT COLUMN — CONTACT + FOLLOW US */}
            <div className="space-y-6">


              {/* Contact */}
              <div className="text-xs sm:text-sm text-gray-300">
                <p className="mb-2">
                  <span className="font-semibold text-white">Contact Us: </span>
                  <a href="tel:+911143123700" className="text-gray-300 hover:text-[#B8EA80] transition-colors">
                    Tel: +91-11-43123700
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-white">E-mail: </span>
                  <a href="mailto:info@bharatfoundation.org" className="text-gray-300 hover:text-[#B8EA80] transition-colors break-all">
                    info@bharatfoundation.org
                  </a>
                </p>
              </div>


              {/* Follow Us */}
              <div className="space-y-3">
                <p className="text-xs sm:text-sm text-gray-400 font-semibold">
                  Follow Us
                </p>
                <div className="flex space-x-3">
                  <Link href="#" className="p-2 bg-white/10 rounded-lg hover:bg-[#B8EA80] hover:text-gray-900 transition-all duration-300 transform hover:scale-110">
                    <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                  <Link href="#" className="p-2 bg-white/10 rounded-lg hover:bg-[#B8EA80] hover:text-gray-900 transition-all duration-300 transform hover:scale-110">
                    <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                  <Link href="#" className="p-2 bg-white/10 rounded-lg hover:bg-[#B8EA80] hover:text-gray-900 transition-all duration-300 transform hover:scale-110">
                    <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                  <Link href="#" className="p-2 bg-white/10 rounded-lg hover:bg-[#B8EA80] hover:text-gray-900 transition-all duration-300 transform hover:scale-110">
                    <Youtube className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                  <Link href="#" className="p-2 bg-white/10 rounded-lg hover:bg-[#B8EA80] hover:text-gray-900 transition-all duration-300 transform hover:scale-110">
                    <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                </div>
              </div>


            </div>


            {/* RIGHT COLUMN — NEWSLETTER */}
            <div className="space-y-4 sm:space-y-5">
              <h3 className="text-base sm:text-lg font-bold border-b-2 border-[#B8EA80] pb-2 text-white">
                NEWSLETTER SIGNUP
              </h3>


              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Stay updated with the latest news and events from Bharat Sports Foundation.
              </p>


              <form onSubmit={handleSubscribe} className="flex flex-col gap-3">


                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B8EA80] focus:border-[#B8EA80] transition-all duration-300 text-xs sm:text-sm disabled:opacity-50"
                />


                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-4 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-[#B8EA80] to-[#98c889] text-gray-900 font-semibold rounded-lg hover:from-[#98c889] hover:to-[#7ab86a] hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm"
                >
                  {isLoading ? "Subscribing..." : "Subscribe"}
                </button>


                {subscriptionStatus === "success" && (
                  <div className="flex items-center gap-2 text-[#B8EA80] text-xs sm:text-sm animate-pulse">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Successfully subscribed!</span>
                  </div>
                )}


                {subscriptionStatus === "error" && (
                  <p className="text-red-400 text-xs sm:text-sm">Please enter a valid email.</p>
                )}


                <p className="text-xs text-gray-400">
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </form>
            </div>


          </div>
        </div>


        {/* Help + Scroll */}
        <div className="fixed bottom-6 sm:bottom-8 right-4 sm:right-6 md:right-8 flex gap-2 sm:gap-3 z-50">
          <button
            onClick={() => router.push("/contact")}
            className="bg-white text-[#B8EA80] px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-semibold flex items-center gap-1.5 sm:gap-2 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-xs sm:text-sm"
          >
            <HelpCircle className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="hidden sm:inline">Help?</span>
            <span className="sm:hidden">Help</span>
          </button>


          {isVisible && (
            <button
              onClick={scrollToTop}
              className="bg-gradient-to-r from-[#B8EA80] to-[#98c889] p-1.5 sm:p-2 rounded-full hover:from-[#98c889] hover:to-[#7ab86a] shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-fadeIn"
            >
              <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            </button>
          )}
        </div>


        {/* Bottom Bar */}
        <div className="border-t border-gray-500 mt-6 sm:mt-8 pt-4 sm:pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm">
          <p className="text-gray-400">
            Powered By:-
            <Link href="https://aow.co.in/" target="_blank" rel="noopener noreferrer" className="text-[#B8EA80] hover:text-[#98c889] underline ml-1 transition-colors">
              aow.co.in
            </Link>
          </p>
          <p className="text-gray-400">
            © Copyright 2025 Bharat Sports Foundation. All rights Reserved
          </p>
        </div>


      </div>


      <style jsx>{`
        @keyframes fadeIn {
          from { 
            opacity: 0; 
            transform: scale(0.8); 
          }
          to { 
            opacity: 1; 
            transform: scale(1); 
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </footer>
  );
}
