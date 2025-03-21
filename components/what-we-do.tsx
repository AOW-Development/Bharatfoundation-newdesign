import Image from "next/image";
import { Target, Eye } from "lucide-react";
import ActionCards from "./actionCards";
import Link from "next/link";

export default function WhatWeDo() {
  const events = [
    {
      title: "Education for Children",
      time: "5.00 pm- 7.30 pm",
      location: "24 Bangalore City",
      description:
        "Education is the basic essential to everyone in this technological era.",
    },
    {
      title: "Sponsor a child today",
      time: "5.00 pm- 7.30 pm",
      location: "24 Bangalore City",
      description:
        "Your small action towards kindness might rejuvenate the life of a child for their essential resources, education, and many more",
    },
    {
      title: "Shelter for Poor",
      time: "5.00 pm- 7.30 pm",
      location: "24 Bangalore City",
      description: "A basic requirement is a home for anyone. ",
    },
    {
      title: "Education for Children",
      time: "5.00 pm- 7.30 pm",
      location: "24 Bangalore City",
      description:
        "Education is the basic essential to everyone in this technological era.",
    },
  ];

  return (
    <section className="pt-16 px-6 md:px-12 lg:px-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Image and Mission */}
          <div className="space-y-8">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/images/whatwedo-new.webp"
                alt="playing sports"
                width={400}
                height={300}
                className="w-full object-cover"
              />
            </div>

            {/* Mission Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Target className="w-8 h-8" />
                <h3 className="text-xl font-bold">Mission</h3>
              </div>
              <p className="text-gray-600 text-sm">
                We at Bharath Sports Foundation inspire and enrich athletes as
                well as provide them with required essentials, resources,
                mentorship, and growth opportunities. As we value sporting
                activities, we support the individuals despite their backgrounds
                and make sure the talent is utilized for the betterment of their
                lives. With our steps to progress, we build a strong, healthy,
                and competitive sporting community in India.
              </p>
              <Link href="/what-we-do" className="inline-block mt-4">
                <button className="flex items-center gap-2 text-sm">
                  Read More
                  <span className="text-xl">→</span>
                </button>
              </Link>
            </div>

            {/* Vision Section (visible on mobile, hidden on desktop) */}
            <div className="space-y-4 lg:hidden">
              <div className="flex items-center gap-2">
                <Eye className="w-8 h-8" />
                <h3 className="text-xl font-bold">Vision</h3>
              </div>
              <p className="text-gray-600 text-sm">
                The Bharath Sports Foundation seeks to develop vibrant talent,
                give athletes access to resources, and offer them ample
                possibilities to succeed in their intended disciplines. We work
                to ensure all individuals gets to engage in sports and to
                construct a solid basis for Indian athletics in the future.
              </p>
              <Link href="/what-we-do" className="inline-block mt-4">
                <button className="flex items-center gap-2 font-medium text-sm">
                  Read More
                  <span className="text-xl">→</span>
                </button>
              </Link>
            </div>
          </div>

          {/* Middle Column - What We Do and Vision (on desktop) */}
          <div className="space-y-8">
            <div className="space-y-4 text-sm">
              <h2 className="text-2xl font-bold">What We Do</h2>
              <h3 className="text-xl font-semibold">
                Motivating Greatness Through Sports
              </h3>
              <p className="text-gray-600">
                At Bharath Sports Foundation, we are dedicated to a culture of
                accessing sports to everyone despite their backgrounds.
                Primarily our initiatives are focused on identifying talent,
                skill-development, and to provide training programs for young
                athletes. Our coaching is structured with various disciplines,
                to ensure the aspiring sporting individuals receive the right
                guidance and support. We offer sponsorships and scholarships to
                the underprivileged.
              </p>
              <Link href="/what-we-do" className="inline-block mt-4">
                <button className="flex items-center gap-2 font-medium text-sm">
                  Read More
                  <span className="text-xl">→</span>
                </button>
              </Link>
            </div>

            {/* Vision Section (visible only on desktop) */}
            <div className="space-y-4 hidden lg:block">
              <div className="flex items-center gap-2">
                <Eye className="w-8 h-8" />
                <h3 className="text-xl font-bold">Vision</h3>
              </div>
              <p className="text-gray-600 text-sm">
                The Bharath Sports Foundation seeks to develop vibrant talent,
                give athletes access to resources, and offer them ample
                possibilities to succeed in their intended disciplines. We work
                to ensure all individuals gets to engage in sports and to
                construct a solid basis for Indian athletics in the future.
              </p>
              <Link href="/what-we-do" className="inline-block mt-4">
                <button className="flex items-center gap-2 font-medium text-sm">
                  Read More
                  <span className="text-xl">→</span>
                </button>
              </Link>
            </div>
          </div>

          {/* Right Column - Upcoming Events */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
            <div className="space-y-6">
              {events.map((event, index) => (
                <div key={index} className="flex gap-4">
                  <div className="bg-[#B8EA80] p-3 h-min text-center">
                    <div className="text-2xl font-bold">24</div>
                    <hr className="border-2 my-2 border-black" />
                    <div className="font-bold">JAN</div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold">{event.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div>at {event.time}</div>
                      <div>{event.location}</div>
                    </div>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ActionCards />
    </section>
  );
}
