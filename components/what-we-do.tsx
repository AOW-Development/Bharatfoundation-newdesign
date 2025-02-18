import Image from "next/image";
import Link from "next/link";
import { Target, Eye, Clock, MapPin, ArrowRight } from "lucide-react";

export default function WhatWeDo() {
  const events = [
    {
      title: "Education for Children",
      date: "24",
      month: "JAN",
      time: "at 5.00 pm- 7.30 pm",
      location: "24 Bangalore City",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "Sponsor a child today",
      date: "24",
      month: "JAN",
      time: "at 5.00 pm- 7.30 pm",
      location: "24 Bangalore City",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    // Add other events similarly
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        {/* What We Do Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="/images/whatwedo.png"
              alt="Children playing sports"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">What We Do</h2>
            <h3 className="text-2xl">Motivating Greatness Through Sports</h3>
            <p className="text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <Link
              href="/what-we-do"
              className="inline-flex items-center text-primary hover:underline"
            >
              Read More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Target className="h-8 w-8" />
              <h2 className="text-2xl font-bold">Mission</h2>
            </div>
            <p className="text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <Link
              href="/mission"
              className="inline-flex items-center text-primary hover:underline"
            >
              Read More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Eye className="h-8 w-8" />
              <h2 className="text-2xl font-bold">Vision</h2>
            </div>
            <p className="text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <Link
              href="/vision"
              className="inline-flex items-center text-primary hover:underline"
            >
              Read More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Upcoming Events Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Upcoming Events</h2>
            <div className="space-y-4">
              {events.map((event, index) => (
                <div key={index} className="flex gap-4">
                  <div className="bg-[#B7E4A7] p-3 text-center min-w-[80px]">
                    <div className="text-2xl font-bold">{event.date}</div>
                    <div>{event.month}</div>
                  </div>
                  <div>
                    <h3 className="font-bold">{event.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" /> {event.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" /> {event.location}
                      </span>
                    </div>
                    <p className="text-gray-600 mt-1">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action Boxes */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "BECOME A VOLUNTEER",
              button: "Join us Now",
              href: "/volunteer",
            },
            {
              title: "ADOPT A CHILD",
              button: "Contact us",
              href: "/adopt",
            },
            {
              title: "GET INVOLVED",
              button: "Donate Now",
              href: "/donate",
            },
          ].map((box, index) => (
            <div key={index} className="bg-[#B7E4A7] p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-4">{box.title}</h3>
              <p className="mb-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <Link
                href={box.href}
                className="inline-block px-6 py-2 bg-[#98c889] text-black rounded hover:bg-[#89b97a] transition-colors"
              >
                {box.button}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
