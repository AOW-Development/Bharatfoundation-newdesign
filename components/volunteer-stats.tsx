"use client";

import { useEffect, useState } from "react";
import { Heart, Gift, Trophy } from "lucide-react";

const stats = [
  { number: 1250, label: "Volunteers", icon: Heart },
  { number: 340, label: "Activities", icon: Trophy },
  { number: 890, label: "Donated", icon: Gift },
];

export default function VolunteerStats() {
  return (
    <section>
      {/* Volunteer Banner */}
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full overflow-hidden">
        <img
          src="/images/volunteers-2.jpg"
          alt="Indian Women Cricket Team"
          className="w-full h-full object-cover"
        />

        {/* Modern Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent flex items-center">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-20">
            <div className="max-w-2xl bg-white/95 dark:bg-gray-900/95 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 backdrop-blur-md shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg flex-shrink-0">
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    Want to be a Volunteer?
                  </h2>
                </div>
              </div>

              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-emerald-600 dark:text-emerald-400 mb-2 sm:mb-3">
                Become a Proud Volunteer
              </h3>

              <p className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4 sm:mb-6">
                Make a long-lasting impact on children's lives by volunteering
                with the Bharath Sports Foundation. Whether you coach young
                athletes, organize sports events, or support our community —
                your time and efforts make real change. Join hands with us to
                transform lives through the power of sports.
              </p>

              <a
                href="/get-involved#volunteer"
                className="group inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 bg-[#B8EA80] text-gray-900 rounded-lg text-sm sm:text-base font-bold hover:shadow-lg hover:shadow-[#B8EA80]/40 hover:scale-105 hover:bg-[#a5d695] transition-all duration-300"
              >
                View Details
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
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
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Stats Section - Clean White Background */}
      <div className="relative py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
              Our Impact
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
              Together, we're making a difference
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                icon={stat.icon}
                finalNumber={stat.number}
                label={stat.label}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Modern StatCard Component
function StatCard({
  icon: Icon,
  finalNumber,
  label,
  delay,
}: {
  icon: any;
  finalNumber: number;
  label: string;
  delay: number;
}) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById(`stat-${label}`);
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [label]);

  useEffect(() => {
    if (!isVisible) return;

    const timeout = setTimeout(() => {
      let start = 0;
      const duration = 2000;
      const intervalTime = 20;
      const increment = finalNumber / (duration / intervalTime);

      const counter = setInterval(() => {
        start += increment;
        if (start >= finalNumber) {
          setCount(finalNumber);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, intervalTime);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isVisible, finalNumber, delay]);

  return (
    <div id={`stat-${label}`} className="group relative w-full">
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 overflow-hidden">
        {/* Icon */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <Icon className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-emerald-600 dark:text-emerald-400 transform group-hover:scale-110 transition-all duration-300" />
        </div>

        {/* Number */}
        <div className="text-center mb-1 sm:mb-2">
          <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent">
            {count}+
          </div>
        </div>

        {/* Label */}
        <div className="text-center">
          <div className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-300">
            {label}
          </div>
        </div>

        {/* Decorative element */}
        <div className="absolute -bottom-6 -right-6 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-green-200 to-emerald-200 dark:from-green-900 dark:to-emerald-900 opacity-20 rounded-full blur-2xl group-hover:opacity-30 transition-opacity"></div>
      </div>
    </div>
  );
}
