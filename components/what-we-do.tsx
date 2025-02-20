import Image from "next/image";
import { Target, Eye } from "lucide-react";
import ActionCards from "./actionCards";

export default function WhatWeDo() {
  const events = [
    {
      title: "Education for Children",
      time: "5.00 pm- 7.30 pm",
      location: "24 Bangalore City",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "Sponsor a child today",
      time: "5.00 pm- 7.30 pm",
      location: "24 Bangalore City",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "Shelter for Poor",
      time: "5.00 pm- 7.30 pm",
      location: "24 Bangalore City",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "Education for Children",
      time: "5.00 pm- 7.30 pm",
      location: "24 Bangalore City",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book.
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy
              </p>
              <button className="flex items-center gap-2 text-sm">
                Read More
                <span className="text-xl">→</span>
              </button>
            </div>

            {/* Vision Section (visible on mobile, hidden on desktop) */}
            <div className="space-y-4 lg:hidden">
              <div className="flex items-center gap-2">
                <Eye className="w-8 h-8" />
                <h3 className="text-xl font-bold">Vision</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book.
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy
              </p>
              <button className="flex items-center gap-2 font-medium text-sm">
                Read More
                <span className="text-xl">→</span>
              </button>
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book.
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy.when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. Lorem Ipsum is simply
                dummy text of the printing and typesetting industry. Lorem Ipsum
                has been the industry&apos;s standard dummy
              </p>
              <button className="flex items-center gap-2 font-medium text-sm">
                Read More
                <span className="text-xl">→</span>
              </button>
            </div>

            {/* Vision Section (visible only on desktop) */}
            <div className="space-y-4 hidden lg:block">
              <div className="flex items-center gap-2">
                <Eye className="w-8 h-8" />
                <h3 className="text-xl font-bold">Vision</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book.
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy
              </p>
              <button className="flex items-center gap-2 font-medium text-sm">
                Read More
                <span className="text-xl">→</span>
              </button>
            </div>
          </div>

          {/* Right Column - Upcoming Events */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
            <div className="space-y-6">
              {events.map((event, index) => (
                <div key={index} className="flex gap-4">
                  <div className="bg-[#B7E4A7] p-3 h-min text-center">
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
