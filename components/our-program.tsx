import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const programs = [
  {
    image: "/images/equipment-gear.webp",
    title: "EQUIPMENT AND GEAR SPONSORSHIP",
    description:
      "Access to quality sports gear is a major hurdle for underprivileged athletes. Through our sponsorship initiative, we ensure every deserving athlete receives proper equipment to train and compete confidently.",
    shortDesc:
      "We've helped hundreds of young players get essential kits — from shoes to protective gear — empowering them to perform without limitations.",
  },
  {
    image: "/images/coaching-training.webp",
    title: "COACHING TRAINING PROGRAMS",
    description:
      "Our expert-led coaching programs provide professional training to aspiring athletes at the grassroots level, ensuring they learn from qualified mentors and experienced sports professionals.",
    shortDesc:
      "By building skill and discipline early, we nurture potential champions and future coaches for the next generation.",
  },
  {
    image: "/images/travel-accommodation.jpg",
    title: "TRAVEL AND ACCOMMODATION",
    description:
      "Many talented athletes miss opportunities due to lack of travel support. We assist with transportation and safe accommodation so they can attend tournaments and camps stress-free.",
    shortDesc:
      "Our travel and stay assistance removes barriers, ensuring athletes focus solely on their performance.",
  },
  {
    image: "/images/health-nutrition.jpg",
    title: "HEALTH AND NUTRITION SUPPORT",
    description:
      "A balanced diet and health monitoring are vital for athletic success. We provide nutritional guidance, health checkups, and supplements to ensure athletes maintain peak physical condition.",
    shortDesc:
      "With holistic support, we help players build endurance, prevent injuries, and sustain long-term sports careers.",
  },
];

export default function OurProgram() {
  return (
    <section className="pb-16 md:pt-8 sm:px-8 md:p-8 md:px-24">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Program</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our mission is to inspire, educate, and entertain sports enthusiasts
            of all ages and skill levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="flex flex-col">
              <div className="relative h-64 mb-4">
                <Image
                  src={program.image || "/placeholder.svg"}
                  alt={program.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">{program.title}</h3>
              <p className="text-gray-600 mb-3">{program.description}</p>
              <p className="text-gray-600 mb-4">{program.shortDesc}</p>
              <Link
                href="/blog"
                className="inline-flex items-center text-primary hover:underline mt-auto"
              >
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
