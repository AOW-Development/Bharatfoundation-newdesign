"use client";
import Image from "next/image";
import { CreditCard, MapPin, Mail, Phone } from "lucide-react";
import Banner from "@/components/banner";
import { useState } from "react";
import Header from "@/components/header";
import GooglePay from "@/components/googlepay";

export default function DonatePage() {
  const [paymentMethod, setPaymentMethod] = useState<"credit" | "checking">(
    "credit"
  );
  const [donationAmount, setDonationAmount] = useState(2000);

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Banner
        mediaUrl="/images/donationbanner.png"
        heading="Want to be a Volunteer ? Select Your Donation Choice& Amount"
        paragraph="Feel free to go ahead and join us in celebrating the achievement of success all-together forming a dynamic team"
        buttons={[
          { text: "Monthly Donation", link: "/monthly-donation" },
          { text: "Onetime Donation", link: "/one-time-donation" },
        ]}
      />

      {/* Donation Form Section */}
      <section className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Payment Form */}
            <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-2">
                  Quick Pay:- Cheque/ Demand Draft/ NEFT/ RTGS Transfer Details/
                  UPI Details
                </h2>
                <div className="space-y-2 text-sm">
                  <p>Bank Name: Name Of The Bank</p>
                  <p>Account Number: 200000001001 IFSC: OPP10004</p>
                  <p>970030368# Namethebank</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-bold mb-4">
                  Enter Your Own Donation Amount To Help As Much As Possible .
                </h3>
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="Enter Your Donation Amount To Help"
                    className="flex-1 px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(Number(e.target.value))}
                  />
                  <button className="bg-[#B7E4A7] px-6 py-2 rounded-r-lg text-black font-semibold">
                    Enter
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold mb-4">Payment Information</h3>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold mb-4">Payment Options</h3>
                      <div className="flex gap-4 mb-4">
                        <div className="flex items-center gap-2 rounded">
                          {/* <Image
                            src="/images/phonepe-1.svg"
                            alt="PhonePe"
                            width={40}
                            height={40}
                          /> */}
                          {/* <span>PhonePe</span> */}
                        </div>
                        <div className="flex items-center gap-2">
                          {/* <Image
                            src="/images/google-pay-2.svg"
                            alt="Google Pay"
                            width={40}
                            height={40}
                          /> */}
                          <GooglePay inputAmount={donationAmount.toString()} />
                          {/* <span>Google Pay</span> */}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <button
                        className={`flex-1 border rounded py-2 ${
                          paymentMethod === "credit"
                            ? "bg-[#B7E4A7]"
                            : "hover:bg-gray-50"
                        }`}
                        onClick={() => setPaymentMethod("credit")}
                      >
                        Credit Card
                      </button>
                      <button
                        className={`flex-1 border rounded py-2 ${
                          paymentMethod === "checking"
                            ? "bg-[#B7E4A7]"
                            : "hover:bg-gray-50"
                        }`}
                        onClick={() => setPaymentMethod("checking")}
                      >
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
                  {paymentMethod === "credit" ? (
                    <>
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
                    </>
                  ) : (
                    <>
                      <input
                        type="text"
                        placeholder="Enter Your Bank Name"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                      <input
                        type="text"
                        placeholder="Enter Your Account Number"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                      <input
                        type="text"
                        placeholder="Enter Your IFSC Code"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </>
                  )}
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
                DONATION ₹{donationAmount}/-
              </button>
            </div>

            {/* Right Column - Support Categories */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold">You May Support to</h2>
              <div className="space-y-4">
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
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-sm"
                  >
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We've removed the Footer component */}
    </main>
  );
}
