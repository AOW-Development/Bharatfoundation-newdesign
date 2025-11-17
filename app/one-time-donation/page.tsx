// Updated fully responsive MonthlyDonation component
"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import Banner from "@/components/banner";
import { useRouter } from "next/navigation";
import RightColumn from "@/components/rightColumn";

export default function MonthlyDonation() {
  const [units, setUnits] = useState<Record<string, number>>({});
  const router = useRouter();

  const donationCategories = [
    { title: "Equipment & Gear Sponsorship", description: "Donations for purchasing sports kits, shoes, balls, and other essentials", image: "/images/md-10.jpg", cost: 5000, id: "equipment" },
    { title: "Coaching & Training Programs", description: "Fund coaching fees and skill development programs", image: "/images/md-9.jpg", cost: 8000, id: "coaching" },
    { title: "Facility Development", description: "Contribution to build or improve sports fields, courts, and training centers", image: "/images/md-8.jpg", cost: 15000, id: "facility" },
    { title: "Event Sponsorship", description: "Support for organizing tournaments, leagues, and sports events", image: "/images/md-7.jpg", cost: 10000, id: "event" },
    { title: "Scholarship & Athlete Support", description: "Funding for young and talented athletes in need of financial assistance", image: "/images/md-6.jpg", cost: 10000, id: "scholarship" },
    { title: "Travel & Accommodation", description: "Assistance to help athletes participate in competitions outside their locality", image: "/images/md-5.jpg", cost: 12000, id: "travel" },
    { title: "Health & Nutrition Support", description: "Funds for medical checkups, nutrition programs, and sports psychology", image: "/images/md-4.jpg", cost: 7500, id: "health" },
    { title: "Women in Sports Fund", description: "Specific contributions to promote female participation in sports", image: "/images/md-3.jpg", cost: 8000, id: "women" },
    { title: "Special Needs Sports Programs", description: "Support for inclusive athletics and adaptive sports initiatives", image: "/images/md-2.jpg", cost: 6000, id: "special" },
    { title: "Corporate Sponsorship & CSR Contributions", description: "Encouraging businesses to contribute to large-scale sports programs", image: "/images/md-1.jpg", cost: 10000, id: "corporate" }
  ];

  const handleUnitChange = (id: string, change: number) => {
    setUnits(prev => ({ ...prev, [id]: Math.max(0, (prev[id] || 0) + change) }));
  };

  const calculateTotal = () => donationCategories.reduce((t, c) => t + c.cost * (units[c.id] || 0), 0);

  const handleProceedToDonate = () => {
    const total = calculateTotal();
    if (total > 0) router.push(`/donate?amount=${total}`);
    else alert("Please select at least one donation category to proceed.");
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Banner
        mediaUrl="/images/donationbanner.png"
        heading="Want to be a Volunteer ? Select Your Donation Choice & Amount"
        paragraph="Feel free to go ahead and join us in celebrating the achievement of success all‑together forming a dynamic team"
        buttons={[{ text: "Monthly Donation", link: "/monthly-donation" }, { text: "Onetime Donation", link: "/one-time-donation" }]}
      />

      <section className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch h-full">

            {/* LEFT COLUMN */}
            <div className="space-y-6 h-full flex flex-col">
              <h2 className="text-2xl font-bold mb-4">Donation Categories</h2>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                {donationCategories.map(category => (
                  <div key={category.id} className="border-b p-4">
                    <div className="flex gap-4 flex-wrap sm:flex-nowrap">
                      <div className="relative w-20 h-20 flex-shrink-0">
                        <Image src={category.image} alt={category.title} fill className="object-cover rounded" />
                      </div>

                      <div className="flex-1 min-w-[200px]">
                        <h3 className="font-bold">{category.title}</h3>
                        <p className="text-sm text-gray-600">{category.description}</p>

                        <div className="flex flex-wrap justify-between items-center mt-2 gap-3">
                          <span className="text-sm">Cost: ₹{category.cost.toLocaleString()}</span>

                          <div className="flex items-center gap-2">
                            <button onClick={() => handleUnitChange(category.id, -1)} className="p-1 border rounded hover:bg-gray-50">
                              <Minus className="h-4 w-4" />
                            </button>

                            <input
                              type="number"
                              min="0"
                              value={units[category.id] || 0}
                              onChange={(e) => setUnits(prev => ({ ...prev, [category.id]: Math.max(0, parseInt(e.target.value) || 0) }))}
                              className="w-14 text-center border rounded p-1"
                            />

                            <button onClick={() => handleUnitChange(category.id, 1)} className="p-1 border rounded hover:bg-gray-50">
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>

                          <span className="text-sm font-semibold">
                            Amount: ₹{((units[category.id] || 0) * category.cost).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="p-4 bg-gray-50 flex justify-between font-bold">
                  <span>Total Amount</span>
                  <span>₹{calculateTotal().toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN (SCROLLABLE & RESPONSIVE) */}
            <div className="w-full bg-white p-4 sm:p-6 rounded-lg shadow-sm h-full flex flex-col max-h-[500px] lg:max-h-[calc(100vh-250px)] overflow-y-auto custom-scrollbar">
              <RightColumn />
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              onClick={handleProceedToDonate}
              className="bg-[#B8EA80] text-black font-bold py-3 px-6 rounded-lg hover:bg-[#a5d695] transition-colors w-full sm:w-auto"
            >
              Proceed to Donate
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
