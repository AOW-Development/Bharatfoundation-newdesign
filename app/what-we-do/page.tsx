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

      <Banner mediaUrl="/images/whatwedo.mp4" heading="" paragraph="" />

      {/* Mission & Vision Section */}
      <section className="md:py-16 px-8 md:px-16 py-8 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className=" mb-12">
            <h2 className="text-3xl font-bold mb-6 dark:text-white">
              Our Mission & Vision
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Our mission is to promote physical education and sports at all
              levels, empowering athletes and communities through our various
              initiatives and programs. Our vision is to foster a culture where
              sports are an integral part of everyday life, enhancing the
              well-being and success of individuals and communities alike.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-[#B7E4A7] dark:bg-[#98c889] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 dark:text-gray-800">
                Key Areas of Impact
              </h3>
              <ul className="space-y-2 dark:text-gray-800">
                <li>Community Engagement</li>
                <li>Athlete Support</li>
                <li>Health & Wellness Programs</li>
                <li>Education & Training</li>
              </ul>
            </div>
            <div className="bg-[#98c889] dark:bg-[#B7E4A7] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 dark:text-gray-800">
                Success Stories & Testimonials
              </h3>
              <blockquote className="italic dark:text-gray-800">
                "Thanks to the Foundation, I've achieved my dream of becoming a
                national athlete!" - Anjali Sharma
              </blockquote>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-700 text-white p-6 rounded-lg">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div>Athletes Supported</div>
            </div>
            <div className="bg-[#98c889] dark:bg-[#B7E4A7] p-6 rounded-lg">
              <div className="text-3xl font-bold mb-2 dark:text-gray-800">
                120+
              </div>
              <div className="dark:text-gray-800">Community Programs</div>
            </div>
            <div className="bg-[#B7E4A7] dark:bg-[#98c889] p-6 rounded-lg">
              <div className="text-3xl font-bold mb-2 dark:text-gray-800">
                200K+
              </div>
              <div className="dark:text-gray-800">Lives Impacted</div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Programs Section */}
      <section className="py-16 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
            Current Programs
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { title: "Athlete Mentor", category: "Sports" },
              { title: "Sports Coach", category: "Sports" },
              { title: "Sports Assistant", category: "Sports" },
              { title: "Event Coordinator", category: "Training" },
            ].map((program, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-6 border-b dark:border-gray-700"
              >
                <div>
                  <h3 className="text-xl font-bold dark:text-white">
                    {program.title}
                  </h3>
                  <div className="text-gray-600 dark:text-gray-400">
                    {program.category}
                  </div>
                </div>
                <button className="px-6 py-2 border rounded hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-white dark:border-gray-600">
                  Explore
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
            Get Involved
          </h2>
          <div className="grid md:grid-cols-4 gap-8 mb-16">
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
                <div className="bg-[#B7E4A7] dark:bg-[#98c889] p-4 rounded-lg mb-4">
                  <item.icon className="h-8 w-8 dark:text-gray-800" />
                </div>
                <h3 className="font-semibold dark:text-white">{item.title}</h3>
              </div>
            ))}
          </div>

          <div className="bg-gray-700 text-white text-center py-16 rounded-lg">
            <h3 className="text-3xl font-bold mb-6">Get involved</h3>
            <button className="bg-[#B7E4A7] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#98c889] transition-colors">
              Join Now
            </button>
          </div>
        </div>
      </section>

      {/* Featured Program Section */}
      <section className="py-16 md:px-16 px-8 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 dark:text-white">
                Featured Program
              </h2>
              <h3 className="text-2xl mb-4 dark:text-gray-300">Sports Coach</h3>
            </div>
            <div className="relative h-64 md:h-full">
              <Image
                src="/images/36f02fee745bdf45fe3a56e6ad0882e9.png"
                alt="Sports collage"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="bg-[#B7E4A7] dark:bg-[#98c889] p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-center mb-6 dark:text-gray-800">
              Program Overview
            </h3>
            <p className="text-center mb-8 dark:text-gray-800">
              We are dedicated to empowering youth through sports programs. Join
              us to make a difference in the community and inspire the next
              generation of athletes.
            </p>

            <div className="grid md:grid-cols-2 gap-8 bg-[#98c889]/50 dark:bg-[#B7E4A7]/50 p-6 rounded-lg">
              <div>
                <h4 className="font-bold mb-4 dark:text-gray-800">
                  Activities:
                </h4>
                <ul className="space-y-2 dark:text-gray-800">
                  <li>- Plan and execute sports activities</li>
                  <li>- Mentor and guide young athletes</li>
                  <li>- Organize sports events and tournaments</li>
                  <li>- Collaborate with other coaches and professionals</li>
                  <li>- Stay updated on sports trends and techniques</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 dark:text-gray-800">
                  Requirements:
                </h4>
                <ul className="space-y-2 dark:text-gray-800">
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
