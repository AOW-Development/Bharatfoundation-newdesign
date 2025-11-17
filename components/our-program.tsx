// import Image from "next/image";
// import { ArrowRight } from "lucide-react";
// import Link from "next/link";

// const programs = [
//   {
//     image: "/images/equipment-gear.webp",
//     title: "EQUIPMENT AND GEAR SPONSORSHIP",
//     description:
//       "Access to quality sports gear is a major hurdle for underprivileged athletes. Through our sponsorship initiative, we ensure every deserving athlete receives proper equipment to train and compete confidently.",
//     shortDesc:
//       "We've helped hundreds of young players get essential kits — from shoes to protective gear — empowering them to perform without limitations.",
//   },
//   {
//     image: "/images/coaching-training.webp",
//     title: "COACHING TRAINING PROGRAMS",
//     description:
//       "Our expert-led coaching programs provide professional training to aspiring athletes at the grassroots level, ensuring they learn from qualified mentors and experienced sports professionals.",
//     shortDesc:
//       "By building skill and discipline early, we nurture potential champions and future coaches for the next generation.",
//   },
//   {
//     image: "/images/travel-accommodation.jpg",
//     title: "TRAVEL AND ACCOMMODATION",
//     description:
//       "Many talented athletes miss opportunities due to lack of travel support. We assist with transportation and safe accommodation so they can attend tournaments and camps stress-free.",
//     shortDesc:
//       "Our travel and stay assistance removes barriers, ensuring athletes focus solely on their performance.",
//   },
//   {
//     image: "/images/health-nutrition.jpg",
//     title: "HEALTH AND NUTRITION SUPPORT",
//     description:
//       "A balanced diet and health monitoring are vital for athletic success. We provide nutritional guidance, health checkups, and supplements to ensure athletes maintain peak physical condition.",
//     shortDesc:
//       "With holistic support, we help players build endurance, prevent injuries, and sustain long-term sports careers.",
//   },
// ];

// export default function OurProgram() {
//   return (
//     <section className="pb-16 pt-8 px-4 sm:px-8 md:px-16 lg:px-24">
//       <div className="container mx-auto">
//         {/* Section Header */}
//         <div className="text-center mb-10 sm:mb-12 px-2">
//           <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
//             Our Program
//           </h2>
//           <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
//             Our mission is to inspire, educate, and entertain sports enthusiasts
//             of all ages and skill levels.
//           </p>
//         </div>

//         {/* Programs Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
//           {programs.map((program, index) => (
//             <div
//               key={index}
//               className="flex flex-col bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 sm:p-5"
//             >
//               {/* Image */}
//               <div className="relative h-52 sm:h-56 md:h-64 mb-4">
//                 <Image
//                   src={program.image || "/placeholder.svg"}
//                   alt={program.title}
//                   fill
//                   className="object-cover rounded-lg"
//                 />
//               </div>

//               {/* Title */}
//               <h3 className="text-lg sm:text-xl font-bold mb-2">
//                 {program.title}
//               </h3>

//               {/* Description */}
//               <p className="text-gray-600 text-sm sm:text-base mb-2">
//                 {program.description}
//               </p>
//               <p className="text-gray-600 text-sm sm:text-base mb-4">
//                 {program.shortDesc}
//               </p>

//               {/* Read More */}
//               <Link
//                 href="/blog"
//                 className="inline-flex items-center text-primary hover:underline mt-auto text-sm sm:text-base"
//               >
//                 Read More <ArrowRight className="ml-2 h-4 w-4" />
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
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
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    image: "/images/coaching-training.webp",
    title: "COACHING TRAINING PROGRAMS",
    description:
      "Our expert-led coaching programs provide professional training to aspiring athletes at the grassroots level, ensuring they learn from qualified mentors and experienced sports professionals.",
    shortDesc:
      "By building skill and discipline early, we nurture potential champions and future coaches for the next generation.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    image: "/images/travel-accommodation.jpg",
    title: "TRAVEL AND ACCOMMODATION",
    description:
      "Many talented athletes miss opportunities due to lack of travel support. We assist with transportation and safe accommodation so they can attend tournaments and camps stress-free.",
    shortDesc:
      "Our travel and stay assistance removes barriers, ensuring athletes focus solely on their performance.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    image: "/images/health-nutrition.jpg",
    title: "HEALTH AND NUTRITION SUPPORT",
    description:
      "A balanced diet and health monitoring are vital for athletic success. We provide nutritional guidance, health checkups, and supplements to ensure athletes maintain peak physical condition.",
    shortDesc:
      "With holistic support, we help players build endurance, prevent injuries, and sustain long-term sports careers.",
    gradient: "from-green-500 to-emerald-500",
  },
];

export default function OurProgram() {
  return (
    <section className="relative pb-20 pt-12 px-4 sm:px-8 md:px-16 lg:px-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 -z-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-16 px-2">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              What We Offer
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Our Programs
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our mission is to inspire, educate, and empower sports enthusiasts
            of all ages and skill levels through comprehensive support programs.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group relative flex flex-col bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl shadow-lg border border-gray-100"
            >
              {/* Image Container with Gradient Overlay */}
              <div className="relative h-56 sm:h-60 md:h-64 overflow-hidden">
                <Image
                  src={program.image || "/placeholder.svg"}
                  alt={program.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${program.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                />
                {/* Top Gradient Badge */}
                <div
                  className={`absolute top-4 right-4 px-3 py-1.5 rounded-full bg-gradient-to-r ${program.gradient} text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                >
                  Learn More
                </div>
              </div>

              {/* Content Container */}
              <div className="flex flex-col flex-grow p-5 sm:p-6">
                {/* Title with Gradient Underline */}
                <div className="mb-4">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 leading-tight">
                    {program.title}
                  </h3>
                  <div
                    className={`h-1 w-12 bg-gradient-to-r ${program.gradient} rounded-full transition-all duration-500 group-hover:w-20`}
                  />
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm sm:text-base mb-3 leading-relaxed">
                  {program.description}
                </p>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  {program.shortDesc}
                </p>

                {/* Read More Link */}
                <Link
                  href="/blog"
                  className={`inline-flex items-center gap-2 mt-auto text-sm sm:text-base font-semibold bg-gradient-to-r ${program.gradient} bg-clip-text text-transparent group-hover:gap-3 transition-all duration-300`}
                >
                  Read More
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 text-gray-900" />
                </Link>
              </div>

              {/* Bottom Accent Line */}
              <div
                className={`h-1 w-full bg-gradient-to-r ${program.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
