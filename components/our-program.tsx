import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const programs = [
  {
    image: "/images/ourprogram-cricket.jpeg",
    title: "CRICKET DREAM",
    description:
      "Prakash is from a low-income family group. It was hard to meet daily needs for him. With our support, he received training, equipment, and mentorship. As of today, he is a state level player, and he alone inspires many athletes.",
    shortDesc:
      "Prakash now dreams of representing his country, a beacon of hope for others in his community.",
  },
  {
    image: "/images/ourprogram-5.jpg",
    title: "ATHLETICS BREAKTHROUGH",
    description:
      "Meena, a committed sprinter from an agrarian background, lacked coaching. Through our grassroot foundation training program,",
    shortDesc:
      "she won multiple national-level championships and even secured a scholarship for her higher education.",
  },
  {
    image: "/images/ourprogram-football.jpeg",
    title: "JOURNEY OF FOOTBALL ",
    description:
      "Our sports education initiatives provided the required essentials to balance his studies as well as football, and for now he represents his school for national level tournaments.",
    shortDesc:
      "Arjun dropped out of school due to his financial conditions, but he was very good at sporting activities.",
  },
  {
    image: "/images/ourprogram-badminton.jpeg",
    title: "SUCCESS AT BADMINTON",
    description:
      "Pooja was fond of badminton for a long time, despite pursuing herself in the same way. Their community members weren’t allowed to move forward. With our motivation and training under a team of our expertise coaches,",
    shortDesc:
      " she is now a district-level competitor, breaking down the barriers and inspiring many young girls.",
  },
];

export default function OurProgram() {
  return (
    <section className="pb-16 md:pt-8 sm:px-8 md:p-8 md:p- md:px-24">
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
