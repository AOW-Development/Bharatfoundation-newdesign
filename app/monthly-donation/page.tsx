// Updated component with 9 donation options in a 3x3 grid
"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
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
    { amount: 1000, description: "Provide meals for 5 underprivileged families." },
    { amount: 1500, description: "Help buy school supplies for children." },
    { amount: 2000, description: "Donate medical aid for a needy patient." },
    { amount: 2500, description: "Provide shelter support for a homeless person." },
    { amount: 3000, description: "Contribute towards clean drinking water projects." },
    { amount: 5000, description: "Support skill training for unemployed youth." },
    { amount: 10000, description: "Fund a small business startup for a family." },
    { amount: 15000, description: "Provide full-year education support for a child." },
  ];

  const handleSelectAmount = (amount: number) => {
    setSelectedAmounts((prev) =>
      prev.includes(amount)
        ? prev.filter((a) => a !== amount)
        : [...prev, amount]
    );
  };

  const totalDonation = selectedAmounts.reduce((sum, amount) => sum + amount, 0);

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
        <div className="container mx-auto px-4 h-full">
          <div className="grid lg:grid-cols-3 gap-8 h-full lg:ml-8">
            {/* LEFT SIDE */}
            <div className="lg:col-span-2 flex flex-col h-full">
              <div className="flex-grow space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Donation Categories</h2>
                  <h3 className="text-lg font-semibold mb-4">Select Your Donation Amount</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {donationOptions.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleSelectAmount(option.amount)}
                        className={`p-4 rounded-lg border transition-all h-full text-left shadow-sm hover:shadow-md ${selectedAmounts.includes(option.amount)
                          ? "bg-[#B8EA80] border-[#98c889]"
                          : "bg-white hover:bg-gray-100"}`}
                      >
                        <div className="flex items-center mb-2 gap-1">
                          <IndianRupee className="h-5 w-5" />
                          <span className="text-xl font-bold">{option.amount}/-</span>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-700">{option.description}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* BOTTOM BUTTON */}
              <div className="flex justify-center mt-6">
                <button
                  onClick={handleProceedToDonate}
                  className="bg-[#B8EA80] text-black font-bold py-3 px-6 rounded-lg hover:bg-[#a5d695] transition-colors"
                >
                  Proceed to Donate ₹{totalDonation.toLocaleString() || "0"}/-
                </button>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="w-full bg-white p-4 sm:p-6 rounded-lg shadow-sm h-full max-h-[calc(100vh-200px)] overflow-y-auto">
              <RightColumn />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}