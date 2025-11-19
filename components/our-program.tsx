"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const programs = [
  {
    image: "/images/equipment-gear.webp",
    title: "EQUIPMENT AND GEAR SPONSORSHIP",
    description:
      "For many talented athletes, a lack of proper gear is the biggest barrier to progress Through our grassroots sports programs in Bangalore, we ensure every deserving athlete receives quality equipment, including shoes, jerseys, practice kits, protective gear, and sport-specific accessories.",
    gradient: "from-blue-500 to-cyan-500",
    achievements: [
      "Eliminates financial barriers to training and competition",
      "Boosts athlete confidence and performance",
      "Enhances training quality and consistency",
      "Encourages participation in district and state-level events",
    ],

    cta: "Sponsor a Kit",
  },
  {
    image: "/images/coaching-training.webp",
    title: "COACHING AND TRAINING PROGRAMS",
    description:
      "Our structured coaching programs are led by certified coaches, former athletes, and experienced sports professionals who bring real on-ground expertise. They guide young talent through well-designed training modules that promote genuine skill development, consistent improvement, and long-term athletic performance.",
    gradient: "from-purple-500 to-pink-500",
    achievements: [
      "Skill development and technique refinement",
      "Discipline and fitness conditioning",
      "Sports ethics and leadership development",
      "Personalized mentorship and goal-setting",
    ],

    cta: "Support Training Programs",
  },
  {
    image: "/images/travel-accommodation.jpg",
    title: "TRAVEL AND ACCOMMODATION SUPPORT",
    description:
      "Many promising athletes miss life-changing tournaments simply because they cannot afford the cost of travel or accommodation .Through this program, we make sure financial barriers never stop a deserving athlete from competing and showcasing their talent.",
    gradient: "from-orange-500 to-red-500",
    achievements: [
      "Safe and comfortable lodging",
      "Reliable transportation to and from events",
      "Seamless participation in state, national, and inter-district competitions",
      "Reduced stress for athletes and their families",
    ],

    cta: "Help an Athlete Compete",
  },
  {
    image: "/images/health-nutrition.jpg",
    title: "HEALTH AND NUTRITION SUPPORT",
    description:
      "A strong athlete requires an even stronger physical and mental foundation.Through this comprehensive program, we ensure every athlete receives the essential health, nutrition, and wellness support needed to perform at their highest potential.",
    gradient: "from-green-500 to-emerald-500",
    achievements: [
      "Professional nutritional guidance tailored to athletes",
      "Regular health checkups and body assessments",
      "Customized diet plans for performance and endurance",
      "Supplements where they are required",
      "Injury prevention education and support",
    ],

    cta: "Support Athlete Wellness",
  },
];

export default function OurProgram() {
  return (
    <section className="relative pb-20 pt-12 px-4 sm:px-8 md:px-16 lg:px-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 -z-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-16 px-2">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              What We Offer
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent py-2">
            Our Programs
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our programs are designed to inspire, equip, and support athletes at
            every level, from beginners to rising champions.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group relative flex flex-col bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl shadow-lg border border-gray-100"
            >
              {/* Image Container with Gradient Overlay */}
              <div className="relative h-48 sm:h-52 overflow-hidden flex-shrink-0">
                <Image
                  src={program.image || "/placeholder.svg"}
                  alt={program.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${program.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                />
                {/* Top Gradient Badge */}
                <div
                  className={`absolute top-4 right-4 px-3 py-1.5 rounded-full bg-gradient-to-r ${program.gradient} text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                >
                  Support Now
                </div>
              </div>

              {/* Content Container */}
              <div className="flex flex-col flex-grow p-5 sm:p-6">
                {/* Title with Gradient Underline */}
                <div className="mb-4">
                  <h3 className="text-base sm:text-lg font-bold mb-2 text-gray-900 leading-tight">
                    {program.title}
                  </h3>
                  <div
                    className={`h-1 w-12 bg-gradient-to-r ${program.gradient} rounded-full transition-all duration-500 group-hover:w-20`}
                  />
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-2 leading-relaxed">
                  {program.description}
                </p>

                {/* Achievements List */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">
                    What this program achieves:
                  </h4>
                  <ul className="space-y-1.5">
                    {program.achievements.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start text-xs text-gray-600"
                      >
                        <span
                          className={`inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r ${program.gradient} mt-1.5 mr-2 flex-shrink-0`}
                        />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Simple Text Link */}
                <Link
                  href="/donate"
                  className="inline-flex items-center gap-2 mt-auto text-sm font-semibold text-gray-900 hover:gap-3 transition-all duration-300 group/link"
                >
                  {program.cta}
                  <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Bottom Accent Line */}
              <div
                className={`h-1 w-full bg-gradient-to-r ${program.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
