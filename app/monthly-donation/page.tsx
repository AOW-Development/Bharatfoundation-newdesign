"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import Banner from "@/components/banner";

export default function MonthlyDonation() {
  const [units, setUnits] = useState<{ [key: string]: number }>({});

  const donationCategories = [
    {
      title: "Equipment& Gear Sponsorship",
      description:
        "Donations for purchasing sports kits, shoes, balls, and other essentials",
      image: "/equipment.jpg",
      cost: 5000,
      id: "equipment",
    },
    {
      title: "Coaching& Training Programs",
      description: "Fund coaching fees and skill development programs",
      image: "/coaching.jpg",
      cost: 8000,
      id: "coaching",
    },
    {
      title: "Facility Development",
      description:
        "Contribution to build or improve sports fields, courts, and training centers",
      image: "/facility.jpg",
      cost: 15000,
      id: "facility",
    },
    {
      title: "Event Sponsorship",
      description:
        "Support for organizing tournaments, leagues, and sports events",
      image: "/event.jpg",
      cost: 10000,
      id: "event",
    },
    {
      title: "Scholarship& Athlete Support",
      description:
        "Funding for young and talented athletes in need of financial assistance",
      image: "/scholarship.jpg",
      cost: 10000,
      id: "scholarship",
    },
    {
      title: "Travel& Accommodation",
      description:
        "Assistance to help athletes participate in competitions outside their locality",
      image: "/travel.jpg",
      cost: 12000,
      id: "travel",
    },
    {
      title: "Health& Nutrition Support",
      description:
        "Funds for medical checkups, nutrition programs, and sports psychology",
      image: "/health.jpg",
      cost: 7500,
      id: "health",
    },
    {
      title: "Women in Sports Fund",
      description:
        "Specific contributions to promote female participation in sports",
      image: "/women.jpg",
      cost: 8000,
      id: "women",
    },
    {
      title: "Special Needs Sports Programs",
      description:
        "Support for inclusive athletics and adaptive sports initiatives",
      image: "/special.jpg",
      cost: 6000,
      id: "special",
    },
    {
      title: "Corporate Sponsorship& CSR Contributions",
      description:
        "Encouraging businesses to contribute to large-scale sports programs",
      image: "/corporate.jpg",
      cost: 10000,
      id: "corporate",
    },
  ];

  const handleUnitChange = (id: string, change: number) => {
    setUnits((prev) => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + change),
    }));
  };

  const calculateTotal = () => {
    return donationCategories.reduce((total, category) => {
      return total + category.cost * (units[category.id] || 0);
    }, 0);
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Banner Section */}
      {/* <section className="relative pt-20 h-[40vh] w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/donate-banner.jpg"
            alt="Monthly Donation Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Monthly Donation Programs
            </h1>
            <p className="text-xl opacity-90">
              Choose your monthly contribution to support our causes
            </p>
          </div>
        </div>
      </section> */}
      <Banner
        imageUrl="/images/donationbanner.png"
        heading="Want to be a Volunteer ? Select Your Donation Choice& Amount"
        paragraph="Feel free to go ahead and join us in celebrating the achievement of success all-together forming a dynamic team"
        buttonText="Donate Here"
        buttonLink="/donate"
      />
      {/* Donation Categories Section */}
      <section className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Donation Categories */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Donation Categories</h2>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                {donationCategories.map((category) => (
                  <div
                    key={category.id}
                    className="border-b last:border-b-0 p-4"
                  >
                    <div className="flex gap-4">
                      <div className="relative w-20 h-20 flex-shrink-0">
                        <Image
                          src={category.image || "/placeholder.svg"}
                          alt={category.title}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-bold">{category.title}</h3>
                        <p className="text-sm text-gray-600">
                          {category.description}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <div className="text-sm">
                            Cost: ₹{category.cost.toLocaleString()}
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleUnitChange(category.id, -1)}
                              className="p-1 rounded border hover:bg-gray-50"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <input
                              type="number"
                              value={units[category.id] || 0}
                              onChange={(e) => {
                                const value =
                                  Number.parseInt(e.target.value) || 0;
                                setUnits((prev) => ({
                                  ...prev,
                                  [category.id]: Math.max(0, value),
                                }));
                              }}
                              className="w-12 text-center border rounded p-1"
                              min="0"
                            />
                            <button
                              onClick={() => handleUnitChange(category.id, 1)}
                              className="p-1 rounded border hover:bg-gray-50"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          <div className="text-sm font-semibold">
                            Amount: ₹
                            {(
                              (units[category.id] || 0) * category.cost
                            ).toLocaleString()}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="p-4 bg-gray-50 flex justify-between items-center">
                  <span className="font-bold">Total Amount</span>
                  <span className="font-bold">
                    ₹{calculateTotal().toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column - Support Categories */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold">You May Support to</h2>
              {[
                {
                  title: "Youth Sports Development",
                  description:
                    "Organize training camps, coaching programs, and competitions for underprivileged children.",
                },
                {
                  title: "School Sports Integration",
                  description:
                    "Provide sports equipment and coaching to schools that lack resources.",
                },
                {
                  title: "Sports for Women Empowerment",
                  description:
                    "Promote female participation in sports through mentorship, training, and tournaments.",
                },
                {
                  title: "Paralympic& Adaptive Sports",
                  description:
                    "Support athletes with disabilities by offering specialized training and facilities.",
                },
                {
                  title: "Community Sports Centres",
                  description:
                    "Build or refurbish local playgrounds, fields, and courts to encourage sports participation.",
                },
                {
                  title: "Health& Fitness through Sports",
                  description:
                    "Conduct awareness campaigns on physical fitness and mental health benefits of sports.",
                },
                {
                  title: "Anti- Drug& Rehabilitation through Sports",
                  description:
                    "Use sports as a tool for rehabilitation and preventing substance abuse.",
                },
                {
                  title: "Scholarship Programs",
                  description:
                    "Provide scholarships to talented young athletes who lack financial support.",
                },
                {
                  title: "Sports for Social Inclusion",
                  description:
                    "Promote sports programs for marginalized communities, including refugees and orphans.",
                },
                {
                  title: "Senior Citizen Wellness Sports Programs",
                  description:
                    "Organize light sports activities for elderly individuals to promote healthy aging.",
                },
              ].map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
