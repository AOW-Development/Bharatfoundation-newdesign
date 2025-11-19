import React from "react";
import { HandHeart, Trophy, Heart } from "lucide-react";

export default function ActionCards() {
  const cards = [
    {
      title: "BECOME A VOLUNTEER",
      description:
        "We welcome you onboard to contribute your time and skills in many ways.",
      buttonText: "Join us Now",
      buttonLink: "/get-involved#volunteer",
      icon: HandHeart,
      gradient: "from-emerald-400 to-teal-500",
    },
    {
      title: "ADOPT SPORTS CHAMPION",
      description:
        "Your integrity speaks to the aspiring youths who make loud noises with their success.",
      buttonText: "Contact us",
      buttonLink: "/contact",
      icon: Trophy,
      gradient: "from-blue-400 to-indigo-500",
    },
    {
      title: "GET INVOLVED",
      description:
        "Partnering with Bharath Sports Foundation allows you to refine many lives.",
      buttonText: "Donate Now",
      buttonLink: "/donate",
      icon: Heart,
      gradient: "from-lime-400 to-green-500",
    },
  ];

  return (
    <section className="py-10 sm:py-12 px-4 sm:px-8 md:px-16 lg:px-24 text-sm dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={index}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
              >
                {/* Card Content */}
                <div className="p-8">
                  {/* Icon */}
                  <div className="mb-5 flex justify-center">
                    <div className="transform group-hover:scale-110 transition-all duration-300">
                      <IconComponent className="w-12 h-12 text-gray-700 dark:text-gray-300" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 dark:text-white text-center tracking-tight">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 text-center text-sm sm:text-base leading-relaxed mb-6">
                    {card.description}
                  </p>

                  {/* Modern Button */}
                  <div className="flex justify-center">
                    <a
                      href={card.buttonLink}
                      className="group/btn relative inline-flex items-center justify-center px-6 py-2.5 font-bold text-gray-900 rounded-lg bg-[#B8EA80] overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#B8EA80]/40 hover:bg-[#a5d695]"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        {card.buttonText}
                        <svg
                          className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>

                {/* Decorative corner element */}
                <div
                  className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br ${card.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
