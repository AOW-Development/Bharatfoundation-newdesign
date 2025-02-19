import Image from "next/image";
import Link from "next/link";
import { Heart, Gift, Trophy } from "lucide-react";

const stats = [
  {
    number: "552+",
    label: "Volunteers",
    icon: Heart,
  },
  {
    number: "552+",
    label: "Activities",
    icon: Trophy,
  },
  {
    number: "552+",
    label: "Raised& Donated",
    icon: Gift,
  },
];

export default function VolunteerStats() {
  return (
    <section className="space-y-16">
      {/* Volunteer Banner */}
      <div className="relative h-[500px] w-full">
        <Image
          src="/images/2ndbanner.png"
          alt="Indian Women Cricket Team"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center w-full">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl space-y-4 bg-white/80 p-12 mx-auto">
              <h2 className="text-2xl font-bold text-black">
                Want to be a Volunteer ?
              </h2>
              <h3 className="text-xl font-semibold text-black">
                Become a Proud Volunteer
              </h3>
              <p className="text-base text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Perferendis totam, laudantium officia praesentium expedita omnis
                unde tempora beatae, modi, sequi quis
              </p>
              <Link
                href="/volunteer"
                className="inline-block px-6 py-3 bg-[#B7E4A7] text-black rounded-md hover:bg-[#a5d695] transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-16 mb-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-16">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="mb-4">
                  <stat.icon className="w-12 h-12 text-black" />
                </div>
                <div className="bg-[#B7E4A7] rounded-full px-12 py-4 w-64 flex flex-col items-center shadow-sm border-[#B3D9FF] border-2">
                  <div className="text-4xl font-bold text-black">
                    {stat.number}
                  </div>
                  <div className="text-xl text-black">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
