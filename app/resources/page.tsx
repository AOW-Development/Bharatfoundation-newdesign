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

      <Banner
        imageUrl="/images/resourcesbanner.webp"
        videoUrl="/images/resources_bsf_f2.mp4"
        heading=""
        paragraph=""
      />

      {/* Main Content */}
      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-8 md:px-16">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <aside className="w-full md:w-64 flex-shrink-0">
              <div className="bg-[#B8EA80] p-5 sm:p-6 rounded-lg">
                <h2 className="font-bold text-base sm:text-lg mb-4">
                  Categories
                </h2>
                <ul className="space-y-2 text-sm sm:text-base">
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

                <h2 className="font-bold text-base sm:text-lg mt-8 mb-4">
                  Filters
                </h2>
                <div className="space-y-2 text-sm sm:text-base">
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
            </aside>

            {/* Main Grid */}
            <div className="flex-grow">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Training & Fitness Resources */}
                <Card className="overflow-hidden">
                  <div className="relative h-40 sm:h-48">
                    <Image
                      src="/images/4243ea019ae45c91edd4fc7bc74bae3c.png"
                      alt="Runner at sunset"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-5 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-2">
                      Training & Fitness Resources
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base mb-4">
                      Explore a variety of training programs designed to enhance
                      athletic performance and wellness.
                    </p>
                    <Link href="#">
                      <Button variant="link" className="p-0 text-sm sm:text-base">
                        Learn More <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                {/* Equipment & Sponsorship */}
                <Card className="overflow-hidden">
                  <div className="relative h-40 sm:h-48">
                    <Image
                      src="/images/46f59acc05e30e01d3b90c82d79adcf1.png"
                      alt="Gym equipment"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-5 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-2">
                      Equipment & Sponsorship Assistance
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base mb-4">
                      Get help with acquiring equipment and securing sponsorship
                      for your sports activities.
                    </p>
                    <Link href="#">
                      <Button variant="link" className="p-0 text-sm sm:text-base">
                        Learn More <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                {/* Health & Wellness */}
                <Card className="overflow-hidden">
                  <div className="relative h-40 sm:h-48">
                    <Image
                      src="/images/9dc6bed21dc874070eea4c2bf77c3f01.png"
                      alt="Nutritionist consultation"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-5 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-2">
                      Health & Wellness Support
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base mb-4">
                      Find resources and support for maintaining optimal health
                      and wellness as an athlete.
                    </p>
                    <Link href="#">
                      <Button variant="link" className="p-0 text-sm sm:text-base">
                        Learn More <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                {/* Scholarships & Funding */}
                <Card className="overflow-hidden">
                  <div className="relative h-40 sm:h-48">
                    <Image
                      src="/images/c0df94c2b54808754c37c83123efb985.png"
                      alt="Group of diverse people with certificates"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-5 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-2">
                      Scholarships & Funding Opportunities
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base mb-4">
                      Access information on available scholarships to support
                      your sports education journey.
                    </p>
                    <Link href="#">
                      <Button variant="link" className="p-0 text-sm sm:text-base">
                        Learn More <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>

              {/* Reading & Training Section */}
              <div className="flex flex-col lg:flex-row flex-wrap justify-between gap-10 md:gap-12 mt-12">
                {/* Reading Section */}
                <div className="w-full lg:w-1/2">
                  <h2 className="text-xl sm:text-2xl font-bold mb-6">
                    Reading
                  </h2>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6">
                    {[
                      { icon: ScrollText, label: "Lorem ipsum" },
                      { icon: Waves, label: "Listening to" },
                      { icon: Award, label: "Sports" },
                      { icon: Settings, label: "Skill" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center justify-center bg-[#B8EA80] rounded-full w-20 h-20 sm:w-24 sm:h-24 p-4"
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
                <div className="w-full lg:w-1/2">
                  <h2 className="text-xl sm:text-2xl font-bold mb-6">
                    Training Programs
                  </h2>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-4">
                    {[
                      "/images/training_1_bsf_f2.jpg",
                      "/images/training_2_bsf_f2.jpg",
                      "/images/training_3_bsf_f2.jpg",
                      "/images/training_4_bsf_f2.jpg",
                    ].map((src, index) => (
                      <div
                        key={index}
                        className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-lg overflow-hidden"
                      >
                        <Image
                          src={src || "/placeholder.svg"}
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
