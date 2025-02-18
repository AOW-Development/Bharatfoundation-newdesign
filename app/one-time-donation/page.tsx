"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import { CreditCard, MapPin, Mail, Phone, DollarSign } from "lucide-react";
import { useState } from "react";

export default function OneTimeDonation() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

  const donationOptions = Array(8).fill({
    amount: 2000,
    description:
      "Helps Provide 10 Person Already Followers 5002 The Donation Your Are Welcome",
  });

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Banner Section */}
      <section className="relative pt-20 h-[40vh] w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/donate-banner.jpg"
            alt="One Time Donation Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              One Time Donation
            </h1>
            <p className="text-xl opacity-90">
              Make a difference with your contribution
            </p>
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Donation Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Monthly Donation</h2>
                <h3 className="text-lg font-semibold mb-4">
                  Select Your Donation Amount
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {donationOptions.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedAmount(option.amount)}
                      className={`p-4 rounded-lg border transition-colors ${
                        selectedAmount === option.amount
                          ? "bg-[#B7E4A7] border-[#98c889]"
                          : "bg-white hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center justify-center mb-2">
                        <DollarSign className="h-6 w-6" />
                        <span className="text-xl font-bold">2000/-</span>
                      </div>
                      <p className="text-xs text-center">
                        {option.description}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold mb-4">Payment Information</h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-4 gap-2">
                        <Image
                          src="/visa.png"
                          alt="Visa"
                          width={60}
                          height={40}
                          className="border p-2 rounded"
                        />
                        <Image
                          src="/mastercard.png"
                          alt="Mastercard"
                          width={60}
                          height={40}
                          className="border p-2 rounded"
                        />
                        <Image
                          src="/gpay.png"
                          alt="Google Pay"
                          width={60}
                          height={40}
                          className="border p-2 rounded"
                        />
                        <Image
                          src="/paypal.png"
                          alt="PayPal"
                          width={60}
                          height={40}
                          className="border p-2 rounded"
                        />
                      </div>
                      <div className="flex gap-4">
                        <button className="flex-1 border rounded py-2 hover:bg-gray-50">
                          Credit Card
                        </button>
                        <button className="flex-1 border rounded py-2 hover:bg-gray-50">
                          Checking Account
                        </button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold mb-4">Your Information</h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="Enter Your First Name"
                          className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <input
                          type="text"
                          placeholder="Enter Your Last Name"
                          className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Enter Your Address Street"
                          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <MapPin
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                          size={20}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="space-y-4">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Enter Your Credit Card Number"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                      <CreditCard
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                        size={20}
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Enter Your Credit Card Date"
                      className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input
                      type="text"
                      placeholder="Enter Your Credit Card CVV Code"
                      className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input
                      type="text"
                      placeholder="Enter Your PAN Card No"
                      className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Enter Your City"
                      className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input
                      type="text"
                      placeholder="Enter Your State/Province/Zip code"
                      className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Enter Your Email"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                      <Mail
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                        size={20}
                      />
                    </div>
                    <div className="relative">
                      <input
                        type="tel"
                        placeholder="Enter Your Phone/Mobile No"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                      <Phone
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                        size={20}
                      />
                    </div>
                  </div>
                </div>

                <button className="w-full bg-[#B7E4A7] text-black font-bold py-3 rounded-lg mt-6 hover:bg-[#a5d695] transition-colors">
                  DONATION RS 2000/-
                </button>
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
