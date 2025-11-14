'use client';

import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import { useEffect, useState, useRef, ReactNode } from 'react';
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


// Animated Counter Component
interface StatCounterProps {
  target: number;
  duration?: number;
  suffix?: string;
}

function StatCounter({ target, duration = 2500, suffix = '' }: StatCounterProps) {
  const [count, setCount] = useState<number>(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | undefined;
    const animate = (currentTime: number) => {
      if (startTime === undefined) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(target * progress));
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function WhatWeDoPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <Banner 
        mediaUrl="/images/whatwedo_bsf_f2.mp4" 
        heading="Empowering Communities Through Sports" 
        paragraph="Building a better future through athletic excellence and community engagement" 
      />

      {/* Mission & Vision Section */}
      <section className="py-10 md:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto max-w-7xl">
          {/* Hero Stats Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6 mb-10 lg:mb-12">
            <div className="bg-gradient-to-br from-[#B8EA80] to-[#98c889] dark:from-[#98c889] dark:to-[#7ab86a] p-6 lg:p-8 shadow-lg transition-shadow duration-300">
              <h3 className="text-lg lg:text-xl font-bold mb-4 dark:text-gray-900 text-gray-800 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-gray-800 dark:bg-gray-900"></span>
                Key Areas of Impact
              </h3>
              <ul className="space-y-2 text-sm lg:text-base dark:text-gray-900 text-gray-800">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-gray-800 dark:bg-gray-900"></span>
                  Community Engagement & Development
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-gray-800 dark:bg-gray-900"></span>
                  Comprehensive Athlete Support
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-gray-800 dark:bg-gray-900"></span>
                  Health & Wellness Programs
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-gray-800 dark:bg-gray-900"></span>
                  Education & Professional Training
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#98c889] to-[#7ab86a] dark:from-[#B8EA80] dark:to-[#98c889] p-6 lg:p-8 shadow-lg transition-shadow duration-300">
              <h3 className="text-lg lg:text-xl font-bold mb-4 dark:text-gray-900 text-gray-800 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-gray-800 dark:bg-gray-900"></span>
                Success Stories & Testimonials
              </h3>
              <blockquote className="relative">
                <span className="text-4xl text-gray-800/20 dark:text-gray-900/20 absolute -top-2 -left-1">"</span>
                <p className="italic text-sm lg:text-base dark:text-gray-900 text-gray-800 leading-relaxed pl-4 relative">
                 Thanks to the Foundation, I've achieved my dream of becoming a national athlete!
                 <span className="text-4xl text-gray-800/20 dark:text-gray-900/20 absolute -bottom-3 -right-(-4)">"</span>
                </p>
                <cite className="block mt-3 not-italic font-semibold text-gray-800 dark:text-gray-900 pl-4 text-sm lg:text-base">
                  — Anjali Sharma
                </cite>
              </blockquote>
            </div>
          </div>

          {/* Statistics Grid - with animated counters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            <div className="bg-gradient-to-br from-gray-700 to-gray-800 text-white p-6 lg:p-8 text-center shadow-lg transition-all duration-300">
              <div className="text-3xl lg:text-4xl font-bold mb-1 bg-gradient-to-r from-[#B8EA80] to-[#98c889] bg-clip-text text-transparent">
                <StatCounter target={500} duration={2500} suffix="+" />
              </div>
              <div className="text-sm lg:text-base font-medium text-gray-200">Athletes Supported</div>
            </div>

            <div className="bg-gradient-to-br from-[#98c889] to-[#7ab86a] dark:from-[#B8EA80] dark:to-[#98c889] p-6 lg:p-8 text-center shadow-lg transition-all duration-300">
              <div className="text-3xl lg:text-4xl font-bold mb-1 dark:text-gray-900 text-gray-800">
                <StatCounter target={120} duration={2500} suffix="+" />
              </div>
              <div className="text-sm lg:text-base font-medium dark:text-gray-900 text-gray-800">
                Community Programs
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#B8EA80] to-[#98c889] dark:from-[#98c889] dark:to-[#7ab86a] p-6 lg:p-8 text-center shadow-lg transition-all duration-300 sm:col-span-2 lg:col-span-1">
              <div className="text-3xl lg:text-4xl font-bold mb-1 dark:text-gray-900 text-gray-800">
                <StatCounter target={200} duration={2500} suffix="K+" />
              </div>
              <div className="text-sm lg:text-base font-medium dark:text-gray-900 text-gray-800">
                Lives Impacted
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Program Section */}
      <section className="py-10 md:py-14 lg:py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="bg-gradient-to-br from-[#B8EA80] to-[#98c889] dark:from-[#98c889] dark:to-[#7ab86a] p-6 lg:p-10 shadow-2xl">
            <h3 className="text-xl lg:text-2xl font-bold text-center mb-4 lg:mb-5 dark:text-gray-900 text-gray-800">
              Comprehensive Program Overview
            </h3>
            <p className="text-center mb-8 lg:mb-10 text-sm lg:text-base dark:text-gray-900 text-gray-800 leading-relaxed max-w-3xl mx-auto">
              We are dedicated to empowering youth through comprehensive sports programs. 
              Join us to make a meaningful difference in the community and inspire the next 
              generation of world-class athletes and leaders.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm p-5 lg:p-7">
              <div className="space-y-3">
                <h4 className="font-bold text-lg lg:text-xl dark:text-gray-900 text-gray-800 flex items-center gap-2">
                  <span className="w-1.5 h-5 bg-gray-800 dark:bg-gray-900"></span>
                  Core Activities
                </h4>
                <ul className="space-y-2 text-sm lg:text-base dark:text-gray-900 text-gray-800">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-800 dark:text-gray-900 font-bold mt-0.5">•</span>
                    <span>Plan and execute comprehensive sports activities and training sessions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-800 dark:text-gray-900 font-bold mt-0.5">•</span>
                    <span>Mentor and guide young athletes toward excellence</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-800 dark:text-gray-900 font-bold mt-0.5">•</span>
                    <span>Organize regional and national sports events and tournaments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-800 dark:text-gray-900 font-bold mt-0.5">•</span>
                    <span>Collaborate with coaches, trainers, and sports professionals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-800 dark:text-gray-900 font-bold mt-0.5">•</span>
                    <span>Stay updated on latest sports trends, techniques, and methodologies</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-lg lg:text-xl dark:text-gray-900 text-gray-800 flex items-center gap-2">
                  <span className="w-1.5 h-5 bg-gray-800 dark:bg-gray-900"></span>
                  Key Requirements
                </h4>
                <ul className="space-y-2 text-sm lg:text-base dark:text-gray-900 text-gray-800">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-800 dark:text-gray-900 font-bold mt-0.5">•</span>
                    <span>Proven experience in sports coaching or athletic development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-800 dark:text-gray-900 font-bold mt-0.5">•</span>
                    <span>Genuine passion for youth development and empowerment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-800 dark:text-gray-900 font-bold mt-0.5">•</span>
                    <span>Excellent communication and interpersonal skills</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-800 dark:text-gray-900 font-bold mt-0.5">•</span>
                    <span>Strong team collaboration and leadership abilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-800 dark:text-gray-900 font-bold mt-0.5">•</span>
                    <span>Commitment to continuous personal and professional growth</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Programs Section - MOVED HERE */}
      <section className="py-10 md:py-14 lg:py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-10 lg:mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-3 dark:text-white text-gray-900">
              Current Programs & Opportunities
            </h2>
            <p className="text-sm lg:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore our diverse range of programs designed to support athletes and build stronger communities
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-3">
            {[
              { 
                title: "Athlete Mentorship Program", 
                category: "Sports Development",
                description: "One-on-one guidance from experienced professionals" 
              },
              { 
                title: "Sports Coaching Excellence", 
                category: "Professional Training",
                description: "Advanced coaching techniques and methodologies" 
              },
              { 
                title: "Sports Performance Assistant", 
                category: "Support & Analytics",
                description: "Data-driven performance enhancement" 
              },
              { 
                title: "Event Coordination & Management", 
                category: "Sports Events",
                description: "Large-scale tournament planning and execution" 
              },
            ].map((program, index) => (
              <div
                key={index}
                className="group flex flex-col lg:flex-row lg:items-center lg:justify-between p-5 lg:p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-[#98c889] dark:hover:border-[#B8EA80] transition-all duration-300 bg-white dark:bg-gray-700"
              >
                <div className="mb-3 lg:mb-0 flex-1">
                  <h3 className="text-lg lg:text-xl font-bold dark:text-white text-gray-900 mb-1 group-hover:text-[#98c889] dark:group-hover:text-[#B8EA80] transition-colors">
                    {program.title}
                  </h3>
                  <div className="text-[#98c889] dark:text-[#B8EA80] font-semibold text-xs lg:text-sm mb-1">
                    {program.category}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-xs lg:text-sm">
                    {program.description}
                  </p>
                </div>
                <Link href="/programs" className="w-full lg:w-auto mt-3 lg:mt-0 lg:ml-4">
                  <button className="w-full lg:w-auto px-6 lg:px-8 py-2 lg:py-2.5 border-2 border-gray-300 dark:border-gray-600 font-semibold text-sm lg:text-base hover:text-white hover:border-[#98c889] dark:hover:text-gray-900 dark:hover:border-[#B8EA80] dark:text-white text-gray-900 transition-all duration-300">
                    Explore
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-10 md:py-14 lg:py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-10 lg:mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-3 dark:text-white text-gray-900">
              Why Get Involved With Us?
            </h2>
            <p className="text-sm lg:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Join a community dedicated to excellence and make a lasting impact
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 mb-10 lg:mb-12">
            {[
              { icon: Timer, title: "Flexible Training Hours" },
              { icon: BarChart2, title: "Competitive Awards" },
              { icon: Coffee, title: "Free Drinks & Snacks" },
              { icon: Microscope, title: "Referral Program" },
              { icon: Leaf, title: "Wellness Activities" },
              { icon: Shield, title: "Healthcare Support" },
              { icon: Briefcase, title: "Annual Sports Event" },
              { icon: Building2, title: "Modern Training Facilities" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group transition-transform duration-300"
              >
                <div className="bg-gradient-to-br from-[#B8EA80] to-[#98c889] dark:from-[#98c889] dark:to-[#7ab86a] p-4 lg:p-5 mb-3 shadow-lg transition-shadow">
                  <item.icon className="h-6 w-6 lg:h-7 lg:w-7 dark:text-gray-900 text-gray-800" />
                </div>
                <h3 className="text-xs lg:text-sm font-semibold dark:text-white text-gray-900 leading-tight">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white text-center py-10 lg:py-12 px-6 shadow-2xl">
            <h3 className="text-2xl lg:text-3xl font-bold mb-3">
              Ready to Make a Difference?
            </h3>
            <p className="text-sm lg:text-base text-gray-300 mb-6 max-w-2xl mx-auto">
              Join our community of passionate individuals committed to empowering athletes and transforming lives through sports
            </p>
            <Link href="/contact">
              <button className="bg-gradient-to-r from-[#B8EA80] to-[#98c889] text-gray-900 px-8 lg:px-10 py-3 lg:py-3.5 font-bold text-sm lg:text-base hover:from-[#98c889] hover:to-[#7ab86a] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Join Our Team Today
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
