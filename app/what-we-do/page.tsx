import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import {
  Timer,
  BarChart2,
  Coffee,
  Microscope,
  Leaf,
  Shield,
  Briefcase,
  Building2,
} from "lucide-react";
import Banner from "@/components/banner";

export default function WhatWeDoPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <Banner mediaUrl="/images/whatwedo_bsf_f2.mp4" heading="" paragraph="" />

      {/* Mission & Vision Section */}
      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-8 md:px-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
            <div className="bg-[#B8EA80] dark:bg-[#98c889] p-6 sm:p-8 rounded-lg">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 dark:text-gray-800">
                Key Areas of Impact
              </h3>
              <ul className="space-y-2 text-sm sm:text-base dark:text-gray-800">
                <li>Community Engagement</li>
                <li>Athlete Support</li>
                <li>Health & Wellness Programs</li>
                <li>Education & Training</li>
              </ul>
            </div>
            <div className="bg-[#98c889] dark:bg-[#B8EA80] p-6 sm:p-8 rounded-lg">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 dark:text-gray-800">
                Success Stories & Testimonials
              </h3>
              <blockquote className="italic text-sm sm:text-base dark:text-gray-800 leading-relaxed">
                "Thanks to the Foundation, I've achieved my dream of becoming a
                national athlete!" - Anjali Sharma
              </blockquote>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-gray-700 text-white p-6 sm:p-8 rounded-lg text-center">
              <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">
                500+
              </div>
              <div className="text-sm sm:text-base">Athletes Supported</div>
            </div>
            <div className="bg-[#98c889] dark:bg-[#B8EA80] p-6 sm:p-8 rounded-lg text-center">
              <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 dark:text-gray-800">
                120+
              </div>
              <div className="text-sm sm:text-base dark:text-gray-800">
                Community Programs
              </div>
            </div>
            <div className="bg-[#B8EA80] dark:bg-[#98c889] p-6 sm:p-8 rounded-lg text-center">
              <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 dark:text-gray-800">
                200K+
              </div>
              <div className="text-sm sm:text-base dark:text-gray-800">
                Lives Impacted
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Programs Section */}
      <section className="py-12 sm:py-16 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-12 dark:text-white">
            Current Programs
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
            {[
              { title: "Athlete Mentor", category: "Sports" },
              { title: "Sports Coach", category: "Sports" },
              { title: "Sports Assistant", category: "Sports" },
              { title: "Event Coordinator", category: "Training" },
            ].map((program, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 sm:p-6 border-b dark:border-gray-700"
              >
                <div className="mb-3 sm:mb-0">
                  <h3 className="text-lg sm:text-xl font-bold dark:text-white">
                    {program.title}
                  </h3>
                  <div className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                    {program.category}
                  </div>
                </div>
                <Link href="#">
                  <button className="w-full sm:w-auto px-5 sm:px-6 py-2 border rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-white dark:border-gray-600 text-sm sm:text-base transition">
                    Explore
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-12 sm:py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-12 dark:text-white">
            Get Involved
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 mb-10 sm:mb-16">
            {[
              { icon: Timer, title: "Flexible Training Hours" },
              { icon: BarChart2, title: "Competitive Awards" },
              { icon: Coffee, title: "Free drinks & snacks" },
              { icon: Microscope, title: "Referral Program" },
              { icon: Leaf, title: "Wellness Activities" },
              { icon: Shield, title: "Healthcare Support" },
              { icon: Briefcase, title: "Annual Sports Event" },
              { icon: Building2, title: "Modern Training Facilities" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="bg-[#B8EA80] dark:bg-[#98c889] p-4 rounded-lg mb-4">
                  <item.icon className="h-6 w-6 sm:h-8 sm:w-8 dark:text-gray-800" />
                </div>
                <h3 className="text-sm sm:text-base font-semibold dark:text-white">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

          <div className="bg-gray-700 text-white text-center py-10 sm:py-16 rounded-lg px-4">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
              Get involved
            </h3>
            <Link href="/contact">
              <button className="bg-[#B7E4A7] text-black px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-[#98c889] transition-colors text-sm sm:text-base">
                Join Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Program Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 md:px-16 dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="bg-[#B8EA80] dark:bg-[#98c889] p-6 sm:p-8 rounded-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6 dark:text-gray-800">
              Program Overview
            </h3>
            <p className="text-center mb-6 sm:mb-8 text-sm sm:text-base dark:text-gray-800 leading-relaxed">
              We are dedicated to empowering youth through sports programs. Join
              us to make a difference in the community and inspire the next
              generation of athletes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 bg-[#98c889]/50 dark:bg-[#B8EA80]/50 p-4 sm:p-6 rounded-lg">
              <div>
                <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base dark:text-gray-800">
                  Activities:
                </h4>
                <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base dark:text-gray-800">
                  <li>- Plan and execute sports activities</li>
                  <li>- Mentor and guide young athletes</li>
                  <li>- Organize sports events and tournaments</li>
                  <li>- Collaborate with other coaches and professionals</li>
                  <li>- Stay updated on sports trends and techniques</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base dark:text-gray-800">
                  Requirements:
                </h4>
                <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base dark:text-gray-800">
                  <li>- Experience in sports coaching</li>
                  <li>- Passion for youth development</li>
                  <li>- Strong communication skills</li>
                  <li>- Ability to work in a team</li>
                  <li>- Commitment to personal growth</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
