"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import { IndianRupee } from "lucide-react";
import { useState } from "react";
import Banner from "@/components/banner";
import RightColumn from "@/components/rightColumn";
import { useRouter } from "next/navigation";

export default function OneTimeDonation() {
  const [selectedAmounts, setSelectedAmounts] = useState<number[]>([]);
  const router = useRouter();

  const donationOptions = [
    { amount: 500, description: "Support a child's education for a month." },
    {
      amount: 1000,
      description: "Provide meals for 5 underprivileged families.",
    },
    { amount: 1500, description: "Help buy school supplies for children." },
    { amount: 2000, description: "Donate medical aid for a needy patient." },
    {
      amount: 2500,
      description: "Provide shelter support for a homeless person.",
    },
    {
      amount: 3000,
      description: "Contribute towards clean drinking water projects.",
    },
    {
      amount: 5000,
      description: "Support skill training for unemployed youth.",
    },
    {
      amount: 10000,
      description: "Fund a small business startup for a family.",
    },
  ];

  const handleSelectAmount = (amount: number) => {
    setSelectedAmounts(
      (prev) =>
        prev.includes(amount)
          ? prev.filter((a) => a !== amount) // Remove if already selected
          : [...prev, amount] // Add if not selected
    );
  };

  const totalDonation = selectedAmounts.reduce(
    (sum, amount) => sum + amount,
    0
  );

  const handleProceedToDonate = () => {
    if (selectedAmounts.length > 0) {
      router.push(`/donate?amount=${totalDonation}`);
    } else {
      alert("Please select at least one donation amount to proceed.");
    }
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Banner
        mediaUrl="/images/donationbanner.png"
        heading="Want to be a Volunteer? Select Your Donation Choice & Amount"
        paragraph="Join us in making a difference by selecting your donation amount."
        buttons={[
          { text: "Monthly Donation", link: "/monthly-donation" },
          { text: "One-Time Donation", link: "/one-time-donation" },
        ]}
      />

      <section className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">One-Time Donation</h2>
                <h3 className="text-lg font-semibold mb-4">
                  Select Your Donation Amount
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {donationOptions.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleSelectAmount(option.amount)}
                      className={`p-4 rounded-lg border transition-colors ${
                        selectedAmounts.includes(option.amount)
                          ? "bg-[#B7E4A7] border-[#98c889]"
                          : "bg-white hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center justify-center mb-2">
                        <IndianRupee className="h-6 w-6" />
                        <span className="text-xl font-bold">
                          {option.amount}/-
                        </span>
                      </div>
                      <p className="text-xs text-center">
                        {option.description}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Proceed to Donate Button with Total */}
              <div className="flex justify-center">
                <button
                  onClick={handleProceedToDonate}
                  className="bg-[#B7E4A7] text-black font-bold py-3 px-6 rounded-lg hover:bg-[#a5d695] transition-colors"
                >
                  Proceed to Donate ₹{totalDonation.toLocaleString() || "0"}/-
                </button>
              </div>
            </div>

            {/* Right Column with RightColumn Component */}
            <div className="lg:col-span-1 w-full bg-white p-6 rounded-lg shadow-sm">
              <RightColumn />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
