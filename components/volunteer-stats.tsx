"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Gift, Trophy } from "lucide-react";
import { useInView } from "react-intersection-observer";

const stats = [
  { number: 552, label: "Volunteers", icon: Heart },
  { number: 552, label: "Activities", icon: Trophy },
  { number: 552, label: "Donated", icon: Gift },
];

export default function VolunteerStats() {
  return (
    <section className="space-y-12 sm:space-y-16">
      {/* Volunteer Banner */}
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full">
        <Image
          src="/images/2ndbanner.png"
          alt="Indian Women Cricket Team"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 flex items-center justify-center sm:justify-start bg-black/20 sm:bg-transparent">
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <div className="max-w-3xl sm:max-w-4xl bg-white/80 dark:bg-gray-900/80 rounded-lg md:p-10 p-6 mx-auto sm:mx-0 backdrop-blur-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white">
                Want to be a Volunteer?
              </h2>
              <h3 className="text-lg sm:text-xl font-semibold text-black dark:text-white mb-2">
                Become a Proud Volunteer
              </h3>
              <p className="text-sm sm:text-base text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
                Make a long-lasting impact on children’s lives by volunteering
                with the Bharath Sports Foundation. Whether you coach young
                athletes, organize sports events, or support our community — your
                time and efforts make real change. Join hands with us to transform
                lives through the power of sports.
              </p>
              <Link
                href="/get-involved#volunteer"
                className="inline-block px-5 py-2 sm:px-6 sm:py-3 bg-[#B7E4A7] text-black rounded-md hover:bg-[#a5d695] transition-colors text-sm sm:text-base font-semibold"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 dark:bg-gray-800 py-10 sm:py-12 md:py-16 mb-12 sm:mb-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 items-center justify-items-center">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                icon={stat.icon}
                finalNumber={stat.number}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// StatCard Component
function StatCard({
  icon: Icon,
  finalNumber,
  label,
}: {
  icon: any;
  finalNumber: number;
  label: string;
}) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (!inView) return;

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
  }, [inView, finalNumber]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center w-full max-w-[200px] sm:max-w-[250px]">
      <div className="mb-3 sm:mb-4">
        <Icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-black dark:text-white" />
      </div>
      <div className="bg-[#B8EA80] dark:bg-[#98c889] rounded-full px-6 py-3 sm:px-10 sm:py-4 w-full flex flex-col items-center justify-center shadow-sm border-[#B3D9FF] border-2">
        <div className="text-lg sm:text-xl md:text-2xl font-bold text-black dark:text-gray-900">
          {count}+
        </div>
        <div className="text-xs sm:text-sm md:text-lg text-black dark:text-gray-900 font-medium">
          {label}
        </div>
      </div>
    </div>
  );
}
