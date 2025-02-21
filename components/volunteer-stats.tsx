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
    <section className="space-y-16">
      {/* Volunteer Banner */}
      <div className="relative h-[500px] w-full">
        <Image
          src="/images/2ndbanner.png"
          alt="Indian Women Cricket Team"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center w-full">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl space-y-4 bg-white/80 md:p-12 p-6 mx-auto">
              <h2 className="text-2xl font-bold text-black">
                Want to be a Volunteer?
              </h2>
              <h3 className="text-xl font-semibold text-black">
                Become a Proud Volunteer
              </h3>
              <p className="text-base text-gray-800">
                Make a long-lasting impact on children’s lives by volunteering
                with the Bharath Sports Foundation. Whether you coach young
                athletes, organize sports events, or support our community. Your
                time and efforts matter much for a real change. Join hands so
                that we can transform lives through the power of sports.
              </p>
              <Link
                href="/volunteer"
                className="inline-block px-6 py-3 bg-[#B7E4A7] text-black rounded-md hover:bg-[#a5d695] transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-8 md:py-16 mb-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between md:grid md:grid-cols-3 gap-2 md:gap-16">
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

// StatCard with Intersection Observer
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
    <div ref={ref} className="flex flex-col items-center w-full">
      <div className="mb-2 md:mb-4">
        <Icon className="w-6 h-6 md:w-12 md:h-12 text-black dark:text-white" />
      </div>
      <div className="bg-[#B7E4A7] dark:bg-[#98c889] rounded-full px-2 py-2 md:px-12 md:py-4 w-full md:w-64 flex flex-col items-center shadow-sm border-[#B3D9FF] border-2">
        <div className="text-lg md:text-2xl font-bold text-black dark:text-gray-800">
          {count}+
        </div>
        <div className="text-xs md:text-lg text-black dark:text-gray-800">
          {label}
        </div>
      </div>
    </div>
  );
}
