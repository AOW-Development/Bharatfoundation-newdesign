"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollText, Waves, Award, Settings, ChevronRight } from "lucide-react";
import Banner from "@/components/banner";
import { useState } from "react";

// NEW CATEGORIES + FILTER LABELS ADDED
const newCategories = [
  "Athlete Development",
  "Community Programs",
  "Coaching and Training",
  "Nutrition and Wellness",
];

const resources = [
  {
    title: "Training and Fitness Resources",
    img: "/images/4243ea019ae45c91edd4fc7bc74bae3c.png",
    desc: "Step-by-step training programs, warmup routines, and conditioning drills designed to improve performance, no gym membership required. Our coaching guides for grassroots sports include practical, equipment-free exercises perfect for community settings.",
    category: "Coaching and Training",
    cta: "Read More →",
    recent: true,
    popular: false,
  },
  {
    title: "Equipment and Sponsorship Assistance",
    img: "/images/46f59acc05e30e01d3b90c82d79adcf1.png",
    desc: "Learn how to access quality sports gear, apply for equipment sponsorship, and connect with programs that support young athletes. Part of our essential sports development resources in India is helping remove financial barriers.",
    category: "Community Programs",
    cta: "Read More →",
    recent: false,
    popular: true,
  },
  {
    title: "Health and Wellness Support",
    img: "/images/9dc6bed21dc874070eea4c2bf77c3f01.png",
    desc: "Practical guides featuring professional athlete nutrition guidance, injury prevention protocols, recovery techniques, and mental resilience strategies, all built for athletes training on a budget.",
    category: "Nutrition and Wellness",
    cta: "Read More →",
    recent: true,
    popular: true,
  },
  {
    title: "Scholarships and Funding Opportunities",
    img: "/images/c0df94c2b54808754c37c83123efb985.png",
    desc: "Find scholarships, grants, and funding programs that help athletes balance sports and education without financial stress. Essential sports development resources for planning your athletic and academic future.",
    category: "Athlete Development",
    cta: "Read More →",
    recent: false,
    popular: false,
  },
];

export default function ResourcesPage() {
  const [filterRecent, setFilterRecent] = useState(false);
  const [filterPopular, setFilterPopular] = useState(false);

  // NEW — category filter
  const [selectedCategory, setSelectedCategory] = useState<String | null>(null);

  // NEW — read more toggle
  const [expandedIndex, setExpandedIndex] = useState<Number | null>(null);

  const filteredResources = resources.filter((item) => {
    if (filterRecent && !item.recent) return false;
    if (filterPopular && !item.popular) return false;
    if (selectedCategory && item.category !== selectedCategory) return false;
    return true;
  });

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <Banner
        imageUrl="/images/resourcesbanner.webp"
        videoUrl="/images/resources_bsf_f2.mp4"
        heading="Sports Development Resources in India"
        paragraph="Welcome to our sports education library — your one-stop source for sports development resources in India."
      />

      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-8 md:px-16">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-8">

            {/* Sidebar */}
            <aside className="w-full md:w-64 flex-shrink-0">
              <div className="bg-[#B8EA80] p-5 sm:p-6 rounded-lg">
                <h2 className="font-bold text-base sm:text-lg mb-4">Categories</h2>
                <ul className="space-y-2 text-sm sm:text-base">
                  {newCategories.map((c, i) => (
                    <li key={i}>
                      <button
                        className={`hover:underline ${
                          selectedCategory === c ? "font-bold underline" : ""
                        }`}
                        onClick={() =>
                          setSelectedCategory(selectedCategory === c ? null : c)
                        }
                      >
                        {c}
                      </button>
                    </li>
                  ))}
                </ul>

                {/* Filters Updated */}
                <h2 className="font-bold text-base sm:text-lg mt-8 mb-4">Filters</h2>
                <div className="space-y-2 text-sm sm:text-base">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <Checkbox
                      id="recent"
                      checked={filterRecent}
                      onCheckedChange={(v) => setFilterRecent(!!v)}
                    />
                    <span>Recent</span>
                  </label>

                  <label className="flex items-center space-x-2 cursor-pointer">
                    <Checkbox
                      id="popular"
                      checked={filterPopular}
                      onCheckedChange={(v) => setFilterPopular(!!v)}
                    />
                    <span>Most Helpful</span>
                  </label>
                </div>
              </div>
            </aside>

            {/* Main Grid */}
            <div className="flex-grow">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {filteredResources.map((item, index) => {
                  const isExpanded = expandedIndex === index;
                  const shortText =
                    item.desc.length > 120
                      ? item.desc.slice(0, 120) + "..."
                      : item.desc;

                  return (
                    <Card
                      key={index}
                      className="relative group overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:bg-[#B8EA80] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100"
                    >
                      <div className="relative h-40 sm:h-48">
                        <Image
                          src={item.img}
                          alt={item.title}
                          fill
                          className="object-cover object-top"
                        />
                      </div>

                      <CardContent className="p-5 sm:p-6">
                        <h3 className="text-lg sm:text-xl font-bold mb-1">
                          {item.title}
                        </h3>

                        <p className="text-xs text-gray-500 mb-2">
                          Category: {item.category}
                        </p>

                        <p className="text-gray-600 text-sm sm:text-base mb-4">
                          {isExpanded ? item.desc : shortText}
                        </p>

                        <button
                          className="text-sm text-blue-600 hover:underline"
                          onClick={() =>
                            setExpandedIndex(isExpanded ? null : index)
                          }
                        >
                          {isExpanded ? "Show Less" : "Read More"}
                        </button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Reading Section & Training Programs remain unchanged */}
              <div className="flex flex-col lg:flex-row flex-wrap justify-between gap-10 md:gap-12 mt-12">

                {/* Reading Section */}
                <div className="w-full">
                  <h2 className="text-xl sm:text-2xl font-bold mb-6">Reading</h2>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      { icon: ScrollText, label: "Reading" },
                      { icon: Waves, label: "Listening" },
                      { icon: Award, label: "Sports" },
                      { icon: Settings, label: "Skill" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center justify-center bg-[#B8EA80] rounded-xl p-4 h-24 sm:h-28 w-full transition-all duration-300 hover:shadow-xl hover:scale-[1.05]"
                      >
                        <item.icon className="h-6 w-6 sm:h-8 sm:w-8 mb-2" />
                        <span className="text-xs sm:text-sm text-center">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Training Programs Section */}
                <div className="w-full">
                  <h2 className="text-xl sm:text-2xl font-bold mb-6">Training Programs</h2>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      "/images/training_1_bsf_f2.jpg",
                      "/images/training_2_bsf_f2.jpg",
                      "/images/training_3_bsf_f2.jpg",
                      "/images/training_4_bsf_f2.jpg",
                    ].map((src, i) => (
                      <div
                        key={i}
                        className="relative w-full h-24 sm:h-28 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.05]"
                      >
                        <Image
                          src={src}
                          alt={`Training ${i + 1}`}
                          fill
                          className="object-cover object-center"
                        />
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
