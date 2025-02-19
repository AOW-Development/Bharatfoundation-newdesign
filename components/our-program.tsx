import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const programs = [
  {
    image: "/images/ourprogram-1.jpg",
    title: "Lorem Ipsum is simply dummy",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry . Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
    shortDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry .",
  },
  {
    image: "/images/ourprogram-2.jpg",
    title: "Lorem Ipsum is simply dummy",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry . Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
    shortDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry .",
  },
  {
    image: "/images/our-program-3.png",
    title: "Lorem Ipsum is simply dummy",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry . Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
    shortDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry .",
  },
  {
    image: "/images/our-program-4.png",
    title: "Lorem Ipsum is simply dummy",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry . Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
    shortDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry .",
  },
];

export default function OurProgram() {
  return (
    <section className="pb-16 pt-8 px-24">
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
                href="/program-details"
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
