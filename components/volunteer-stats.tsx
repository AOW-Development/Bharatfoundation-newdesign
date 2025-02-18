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
          alt="Sports team"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white space-y-4">
              <h2 className="text-4xl font-bold">Want to be a Volunteer ?</h2>
              <h3 className="text-3xl">Become a Proud Volunteer</h3>
              <p className="text-lg opacity-90">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit .
                Perferendis totam, laudantium officia praesentium expedita omnis
                unde tempora beatae, modi, sequi q uis
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
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-8 bg-[#B7E4A7] rounded-full aspect-square justify-center transform hover:scale-105 transition-transform"
              >
                <stat.icon className="w-12 h-12 mb-4" />
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-xl text-center">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
