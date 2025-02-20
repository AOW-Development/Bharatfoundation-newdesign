import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollText, Waves, Award, Settings, ChevronRight } from "lucide-react";
import Banner from "@/components/banner";

export default function ResourcesPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Banner Section */}
      {/* <section className="relative pt-20 h-[40vh] w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/resources-banner.jpg"
            alt="Resources Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Resources</h1>
            <p className="text-xl opacity-90">
              Everything you need to succeed in sports
            </p>
          </div>
        </div>
      </section> */}

      <Banner
        imageUrl="/images/resourcesbanner.webp"
        videoUrl="/images/resources-banner.mp4"
        heading=""
        paragraph=""
        // buttonText="Donate Here"
        // buttonLink="/donate"
      />

      {/* Main Content */}
      <section className="py-16 px-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="w-full md:w-64 flex-shrink-0">
              <div className="bg-[#B7E4A7] p-6 rounded-lg">
                <h2 className="font-bold text-lg mb-4">Categories</h2>
                <ul className="space-y-2">
                  {[
                    "Athlete Support",
                    "Community Engagement",
                    "Physical Education",
                    "Sports Events",
                  ].map((category, index) => (
                    <li key={index}>
                      <Link href="#" className="hover:underline">
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>

                <h2 className="font-bold text-lg mt-8 mb-4">Filters</h2>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <Checkbox id="recent" />
                    <span>Recent</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <Checkbox id="popular" />
                    <span>Popular</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Main Grid */}
            <div className="flex-grow">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Training & Fitness Resources */}
                <Card className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/images/4243ea019ae45c91edd4fc7bc74bae3c.png"
                      alt="Runner at sunset"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">
                      Training & Fitness Resources
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Explore a variety of training programs designed to enhance
                      athletic performance and wellness.
                    </p>
                    <Button variant="link" className="p-0">
                      Learn More <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>

                {/* Equipment & Sponsorship */}
                <Card className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/images/46f59acc05e30e01d3b90c82d79adcf1.png"
                      alt="Gym equipment"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">
                      Equipment & Sponsorship Assistance
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Get help with acquiring equipment and securing sponsorship
                      for your sports activities.
                    </p>
                    <Button variant="link" className="p-0">
                      Learn More <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>

                {/* Health & Wellness */}
                <Card className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/images/9dc6bed21dc874070eea4c2bf77c3f01.png"
                      alt="Nutritionist consultation"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">
                      Health & Wellness Support
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Find resources and support for maintaining optimal health
                      and wellness as an athlete.
                    </p>
                    <Button variant="link" className="p-0">
                      Learn More <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>

                {/* Scholarships & Funding */}
                <Card className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/images/c0df94c2b54808754c37c83123efb985.png"
                      alt="Group of diverse people with certificates"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">
                      Scholarships & Funding Opportunities
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Access information on available scholarships to support
                      your sports education journey.
                    </p>
                    <Button variant="link" className="p-0">
                      Learn More <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Reading Section */}
              <div className="flex">
                <div className="mt-12">
                  <h2 className="text-2xl font-bold mb-6">Reading</h2>
                  <div className="flex gap-6">
                    {[
                      { icon: ScrollText, label: "Lorem ipsum" },
                      { icon: Waves, label: "Listening to" },
                      { icon: Award, label: "Sports" },
                      { icon: Settings, label: "Skill" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center justify-center bg-[#B7E4A7] rounded-full w-24 h-24 p-4"
                      >
                        <item.icon className="h-8 w-8 mb-2" />
                        <span className="text-sm text-center">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Training Programs Section */}
                <div className="mt-12 md:ml-12">
                  <h2 className="text-2xl font-bold mb-6">Training Programs</h2>
                  <div className="flex gap-4">
                    {[
                      "/images/training-1.png",
                      "/images/training-2.png",
                      "/images/training-3.png",
                      "/images/training-4.png",
                    ].map((src, index) => (
                      <div
                        key={index}
                        className="relative w-24 h-24 rounded-lg overflow-hidden"
                      >
                        <Image
                          src={src}
                          alt={`Training ${index + 1}`}
                          fill
                          className="object-cover"
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
