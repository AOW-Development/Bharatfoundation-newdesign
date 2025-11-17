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
          src="https://www.shutterstock.com/image-vector/volunteers-needed-banner-flat-vector-260nw-2215455873.jpg"
          alt="Indian Women Cricket Team"
          className="w-full h-full object-cover"
        />

        {/* Modern Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent flex items-center">
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <div className="max-w-2xl bg-white/95 dark:bg-gray-900/95 rounded-2xl p-6 sm:p-8 md:p-10 backdrop-blur-md shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                    Want to be a Volunteer?
                  </h2>
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-emerald-600 dark:text-emerald-400 mb-3">
                Become a Proud Volunteer
              </h3>

              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Make a long-lasting impact on children's lives by volunteering
                with the Bharath Sports Foundation. Whether you coach young
                athletes, organize sports events, or support our community —
                your time and efforts make real change. Join hands with us to
                transform lives through the power of sports.
              </p>

              <a
                href="/get-involved#volunteer"
                className="group inline-flex items-center gap-2 px-6 py-2.5 bg-[#B8EA80] text-gray-900 rounded-lg font-bold hover:shadow-lg hover:shadow-[#B8EA80]/40 hover:scale-105 hover:bg-[#a5d695] transition-all duration-300"
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

      {/* Modern Stats Section */}
      <div className="relative py-16 sm:py-20 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-200/30 dark:bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-200/30 dark:bg-green-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Our Impact
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Together, we're making a difference
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
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
    <div id={`stat-${label}`} className="group relative">
      <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
        {/* Gradient accent */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 rounded-t-3xl"></div>

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <Icon className="w-16 h-16 text-emerald-600 dark:text-emerald-400 transform group-hover:scale-110 transition-all duration-300" />
        </div>

        {/* Number */}
        <div className="text-center mb-2">
          <div className="text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent">
            {count}+
          </div>
        </div>

        {/* Label */}
        <div className="text-center">
          <div className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            {label}
          </div>
        </div>

        {/* Decorative element */}
        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-green-200 to-emerald-200 dark:from-green-900 dark:to-emerald-900 opacity-20 rounded-full blur-2xl group-hover:opacity-30 transition-opacity"></div>
      </div>
    </div>
  );
}
