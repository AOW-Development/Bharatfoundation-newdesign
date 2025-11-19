// import Image from "next/image";
// import { Target, Eye, ArrowRight } from "lucide-react";
// import ActionCards from "./actionCards";
// import Link from "next/link";

// export default function WhatWeDo() {
//   const events = [
//     {
//       month: "Jul",
//       year: "2025",
//       date: "8 & 9th",
//       title: "Her Time to Shine",
//       time: "5.00 pm - 7.30 pm",
//       location: "Bangalore City",
//       description:
//         "An empowering sports event dedicated to promoting women's participation in athletics. Encouraging every girl to step up, play, and shine in her sport of choice.",
//     },
//     {
//       month: "Dec",
//       year: "2025",
//       title: "Equip the Future",
//       time: "5.00 pm - 7.30 pm",
//       location: "Bangalore City",
//       description:
//         "A focused initiative to provide young athletes with essential gear, training resources, and mentorship to prepare them for competitive sports.",
//     },
//     {
//       month: "Feb",
//       year: "2026",
//       title: "Powerplay and Wellness Camp",
//       time: "5.00 pm - 7.30 pm",
//       location: "Bangalore City",
//       description:
//         "An energetic camp combining skill training, physical fitness, and mental wellness programs to boost performance and overall well-being of athletes.",
//     },
//     {
//       month: "May",
//       year: "2026",
//       title: "Game Ready Nutrition Drive",
//       time: "5.00 pm - 7.30 pm",
//       location: "Bangalore City",
//       description:
//         "A nutrition-focused drive that spreads awareness on healthy diets, supplements, and meal plans crucial for maintaining peak performance in sports.",
//     },
//     // Old Events
//     {
//       month: "Jan",
//       year: "2025",
//       title: "Education for Children",
//       time: "5.00 pm - 7.30 pm",
//       location: "24 Bangalore City",
//       description:
//         "Education is the basic essential to everyone in this technological era.",
//     },
//     {
//       month: "Feb",
//       year: "2025",
//       title: "Sponsor a Child Today",
//       time: "5.00 pm - 7.30 pm",
//       location: "24 Bangalore City",
//       description:
//         "Your small action towards kindness might rejuvenate the life of a child for their essential resources, education, and many more.",
//     },
//     {
//       month: "Mar",
//       year: "2025",
//       title: "Shelter for Poor",
//       time: "5.00 pm - 7.30 pm",
//       location: "24 Bangalore City",
//       description: "A basic requirement is a home for anyone.",
//     },
//     {
//       month: "Apr",
//       year: "2025",
//       title: "Education for Children",
//       time: "5.00 pm - 7.30 pm",
//       location: "24 Bangalore City",
//       description:
//         "Education is the basic essential to everyone in this technological era.",
//     },
//   ];

//   return (
//     <section className="pt-8 md:pt-12 lg:pt-16 px-4 sm:px-6 md:px-10 lg:px-20 dark:bg-gray-900">
//       <div className="container mx-auto">
//         {/* Responsive Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
//           {/* Left Column */}
//           <div className="space-y-8">
//             {/* Image with overlay effect */}
//             <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group relative">
//               <Image
//                 src="/images/whatwedo-new.webp"
//                 alt="playing sports"
//                 width={400}
//                 height={300}
//                 className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             </div>

//             {/* Mission Section */}
//             <div className="space-y-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700">
//               <div className="flex items-center gap-3">
//                 <div className="p-2 bg-[#B8EA80] rounded-lg">
//                   <Target className="w-6 h-6 sm:w-7 sm:h-7 text-gray-900" />
//                 </div>
//                 <h3 className="text-lg sm:text-xl font-bold dark:text-white">
//                   Mission
//                 </h3>
//               </div>
//               <p className="text-gray-600 text-sm sm:text-base dark:text-gray-300 leading-relaxed">
//                 We at Bharath Sports Foundation inspire and enrich athletes as
//                 well as provide them with required essentials, resources,
//                 mentorship, and growth opportunities. As we value sporting
//                 activities, we support individuals despite their backgrounds and
//                 ensure the talent is utilized for the betterment of their lives.
//                 With our steps to progress, we build a strong, healthy, and
//                 competitive sporting community in India.
//               </p>
//               <Link href="/what-we-do" className="inline-block mt-2 sm:mt-4">
//                 <button className="flex items-center gap-2 text-sm dark:text-white hover:gap-3 transition-all duration-300 font-medium group">
//                   Read More{" "}
//                   <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                 </button>
//               </Link>
//             </div>

//             {/* Vision Section (Mobile only) */}
//             <div className="space-y-4 lg:hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700">
//               <div className="flex items-center gap-3">
//                 <div className="p-2 bg-[#B8EA80] rounded-lg">
//                   <Eye className="w-6 h-6 sm:w-7 sm:h-7 text-gray-900" />
//                 </div>
//                 <h3 className="text-lg sm:text-xl font-bold dark:text-white">
//                   Vision
//                 </h3>
//               </div>
//               <p className="text-gray-600 text-sm sm:text-base dark:text-gray-300 leading-relaxed">
//                 The Bharath Sports Foundation seeks to develop vibrant talent,
//                 give athletes access to resources, and offer them ample
//                 possibilities to succeed in their intended disciplines. We work
//                 to ensure all individuals get to engage in sports and to
//                 construct a solid basis for Indian athletics in the future.
//               </p>
//               <Link href="/what-we-do" className="inline-block mt-2 sm:mt-4">
//                 <button className="flex items-center gap-2 text-sm font-medium dark:text-white hover:gap-3 transition-all duration-300 group">
//                   Read More{" "}
//                   <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                 </button>
//               </Link>
//             </div>
//           </div>

//           {/* Middle Column */}
//           <div className="space-y-8">
//             <div className="space-y-4 text-sm sm:text-base bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700">
//               <h2 className="text-xl sm:text-2xl font-bold dark:text-white bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
//                 What We Do
//               </h2>
//               <h3 className="text-lg sm:text-xl font-semibold dark:text-white">
//                 Motivating Greatness Through Sports
//               </h3>
//               <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
//                 At Bharath Sports Foundation, we are dedicated to a culture of
//                 accessing sports for everyone despite their backgrounds. Our
//                 initiatives focus on identifying talent, skill development, and
//                 providing structured training programs for young athletes.
//               </p>
//               <Link href="/what-we-do" className="inline-block mt-2 sm:mt-4">
//                 <button className="flex items-center gap-2 text-sm font-medium dark:text-white hover:gap-3 transition-all duration-300 group">
//                   Read More{" "}
//                   <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                 </button>
//               </Link>
//             </div>

//             {/* Vision (Desktop only) */}
//             <div className="space-y-4 hidden lg:block bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700">
//               <div className="flex items-center gap-3">
//                 <div className="p-2 bg-[#B8EA80] rounded-lg">
//                   <Eye className="w-7 h-7 text-gray-900" />
//                 </div>
//                 <h3 className="text-xl font-bold dark:text-white">Vision</h3>
//               </div>
//               <p className="text-gray-600 text-sm sm:text-base dark:text-gray-300 leading-relaxed">
//                 The Bharath Sports Foundation seeks to develop vibrant talent,
//                 give athletes access to resources, and offer them ample
//                 possibilities to succeed in their intended disciplines. We work
//                 to ensure all individuals get to engage in sports and to
//                 construct a solid basis for Indian athletics in the future.
//               </p>
//               <Link href="/what-we-do" className="inline-block mt-2 sm:mt-4">
//                 <button className="flex items-center gap-2 text-sm font-medium dark:text-white hover:gap-3 transition-all duration-300 group">
//                   Read More{" "}
//                   <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                 </button>
//               </Link>
//             </div>
//           </div>

//           {/* Right Column - Scrollable Upcoming Events */}
//           <div className="md:col-span-2 lg:col-span-1">
//             <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 dark:text-white text-center sm:text-left bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
//               Upcoming Events
//             </h2>

//             <div className="space-y-4 sm:space-y-5 max-h-[400px] sm:max-h-[450px] overflow-y-auto pr-1 sm:pr-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 dark:[&::-webkit-scrollbar-track]:bg-gray-800 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-gray-400">
//               {events.map((event, index) => (
//                 <div
//                   key={index}
//                   className="flex flex-col sm:flex-row gap-3 sm:gap-4 bg-white dark:bg-gray-800 p-4 sm:p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-[#B8EA80] dark:hover:border-[#B8EA80] group cursor-pointer"
//                 >
//                   {/* Date Box */}
//                   <div className="bg-gradient-to-br from-[#B8EA80] to-[#a0d970] p-3 sm:p-4 h-min text-center rounded-lg shadow-sm group-hover:shadow-md transition-shadow duration-300">
//                     <div className="text-lg sm:text-2xl font-bold text-gray-900">
//                       {event.year.slice(-2)}
//                     </div>
//                     <hr className="border border-gray-800 my-1 sm:my-2" />
//                     <div className="font-bold text-gray-900 text-sm sm:text-base">
//                       {event.month}
//                     </div>
//                   </div>

//                   {/* Event Details */}
//                   <div className="space-y-1 sm:space-y-2 flex-1">
//                     <h3 className="font-bold text-sm sm:text-base dark:text-white group-hover:text-[#B8EA80] dark:group-hover:text-[#B8EA80] transition-colors duration-300">
//                       {event.title}
//                     </h3>
//                     <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
//                       <div className="flex items-center gap-1">
//                         <span>🕐</span> {event.time}
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <span>📍</span> {event.location}
//                       </div>
//                     </div>
//                     <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
//                       {event.description}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       <ActionCards />
//     </section>
//   );
// }
import Image from "next/image";
import { Target, Eye, ArrowRight, Clock, MapPin } from "lucide-react";
import ActionCards from "./actionCards";
import Link from "next/link";

export default function WhatWeDo() {
  const events = [
    {
      month: "Jul",
      year: "2025",
      date: "8 & 9th",
      title: "Her Time to Shine",
      time: "5.00 pm - 7.30 pm",
      location: "Bangalore City",
      description:
        "An empowering sports event dedicated to promoting women's participation in athletics. Encouraging every girl to step up, play, and shine in her sport of choice.",
    },
    {
      month: "Dec",
      year: "2025",
      title: "Equip the Future",
      time: "5.00 pm - 7.30 pm",
      location: "Bangalore City",
      description:
        "A focused initiative to provide young athletes with essential gear, training resources, and mentorship to prepare them for competitive sports.",
    },
    {
      month: "Feb",
      year: "2026",
      title: "Powerplay and Wellness Camp",
      time: "5.00 pm - 7.30 pm",
      location: "Bangalore City",
      description:
        "An energetic camp combining skill training, physical fitness, and mental wellness programs to boost performance and overall well-being of athletes.",
    },
    {
      month: "May",
      year: "2026",
      title: "Game Ready Nutrition Drive",
      time: "5.00 pm - 7.30 pm",
      location: "Bangalore City",
      description:
        "A nutrition-focused drive that spreads awareness on healthy diets, supplements, and meal plans crucial for maintaining peak performance in sports.",
    },
    // Old Events
    {
      month: "Jan",
      year: "2025",
      title: "Education for Children",
      time: "5.00 pm - 7.30 pm",
      location: "Bangalore City",
      description:
        "Education is the basic essential to everyone in this technological era.",
    },
    {
      month: "Feb",
      year: "2025",
      title: "Sponsor a Child Today",
      time: "5.00 pm - 7.30 pm",
      location: "Bangalore City",
      description:
        "Your small action towards kindness might rejuvenate the life of a child for their essential resources, education, and many more.",
    },
    {
      month: "Mar",
      year: "2025",
      title: "Shelter for Poor",
      time: "5.00 pm - 7.30 pm",
      location: "Bangalore City",
      description: "A basic requirement is a home for anyone.",
    },
    {
      month: "Apr",
      year: "2025",
      title: "Education for Children",
      time: "5.00 pm - 7.30 pm",
      location: "Bangalore City",
      description:
        "Education is the basic essential to everyone in this technological era.",
    },
  ];

  return (
    <section className="pt-8 md:pt-12 lg:pt-16 px-4 sm:px-6 md:px-10 lg:px-20 dark:bg-gray-900">
      <div className="container mx-auto">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Image with overlay effect */}
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group relative">
              <Image
                src="/images/whatwedo-new.webp"
                alt="playing sports"
                width={400}
                height={300}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Mission Section */}
            <div className="space-y-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#B8EA80] rounded-lg">
                  <Target className="w-6 h-6 sm:w-7 sm:h-7 text-gray-900" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold dark:text-white">
                  Mission
                </h3>
              </div>
              <p className="text-gray-600 text-sm sm:text-base dark:text-gray-300 leading-relaxed">
                We at Bharath Sports Foundation inspire and enrich athletes as
                well as provide them with required essentials, resources,
                mentorship, and growth opportunities. As we value sporting
                activities, we support individuals despite their backgrounds and
                ensure the talent is utilized for the betterment of their lives.
                With our steps to progress, we build a strong, healthy, and
                competitive sporting community in India.
              </p>
              <Link href="/what-we-do" className="inline-block mt-2 sm:mt-4">
                <button className="flex items-center gap-2 text-sm dark:text-white hover:gap-3 transition-all duration-300 font-medium group">
                  Read More{" "}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>

            {/* Vision Section (Mobile only) */}
            <div className="space-y-4 lg:hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#B8EA80] rounded-lg">
                  <Eye className="w-6 h-6 sm:w-7 sm:h-7 text-gray-900" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold dark:text-white">
                  Vision
                </h3>
              </div>
              <p className="text-gray-600 text-sm sm:text-base dark:text-gray-300 leading-relaxed">
                The Bharath Sports Foundation seeks to develop vibrant talent,
                give athletes access to resources, and offer them ample
                possibilities to succeed in their intended disciplines. We work
                to ensure all individuals get to engage in sports and to
                construct a solid basis for Indian athletics in the future.
              </p>
              <Link href="/what-we-do" className="inline-block mt-2 sm:mt-4">
                <button className="flex items-center gap-2 text-sm font-medium dark:text-white hover:gap-3 transition-all duration-300 group">
                  Read More{" "}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>

          {/* Middle Column */}
          <div className="space-y-8">
            <div className="space-y-4 text-sm sm:text-base bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <h2 className="text-xl sm:text-2xl font-bold dark:text-white bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                What We Do
              </h2>
              <h3 className="text-lg sm:text-xl font-semibold dark:text-white">
                Motivating Greatness Through Sports
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                At Bharath Sports Foundation, we are dedicated to a culture of
                accessing sports for everyone despite their backgrounds. Our
                initiatives focus on identifying talent, skill development, and
                providing structured training programs for young athletes.
              </p>
              <Link href="/what-we-do" className="inline-block mt-2 sm:mt-4">
                <button className="flex items-center gap-2 text-sm font-medium dark:text-white hover:gap-3 transition-all duration-300 group">
                  Read More{" "}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>

            {/* Vision (Desktop only) */}
            <div className="space-y-4 hidden lg:block bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#B8EA80] rounded-lg">
                  <Eye className="w-7 h-7 text-gray-900" />
                </div>
                <h3 className="text-xl font-bold dark:text-white">Vision</h3>
              </div>
              <p className="text-gray-600 text-sm sm:text-base dark:text-gray-300 leading-relaxed">
                The Bharath Sports Foundation seeks to develop vibrant talent,
                give athletes access to resources, and offer them ample
                possibilities to succeed in their intended disciplines. We work
                to ensure all individuals get to engage in sports and to
                construct a solid basis for Indian athletics in the future.
              </p>
              <Link href="/what-we-do" className="inline-block mt-2 sm:mt-4">
                <button className="flex items-center gap-2 text-sm font-medium dark:text-white hover:gap-3 transition-all duration-300 group">
                  Read More{" "}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>

          {/* Right Column - Scrollable Upcoming Events */}
          <div className="md:col-span-2 lg:col-span-1">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 dark:text-white text-center sm:text-left bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Upcoming Events
            </h2>

            <div className="space-y-4 sm:space-y-5 h-[680px] overflow-y-auto pr-1 sm:pr-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 dark:[&::-webkit-scrollbar-track]:bg-gray-800 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-gray-400">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-[#B8EA80] dark:hover:border-[#B8EA80] group cursor-pointer min-h-[200px]"
                >
                  {/* Date Box */}
                  <div className="bg-gradient-to-br from-[#B8EA80] to-[#a0d970] p-3 sm:p-4 h-min text-center rounded-lg shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    <div className="text-lg sm:text-2xl font-bold text-gray-900">
                      {event.year.slice(-2)}
                    </div>
                    <hr className="border border-gray-800 my-1 sm:my-2" />
                    <div className="font-bold text-gray-900 text-sm sm:text-base">
                      {event.month}
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="space-y-1 sm:space-y-2 flex-1">
                    <h3 className="font-bold text-sm sm:text-base dark:text-white group-hover:text-[#B8EA80] dark:group-hover:text-[#B8EA80] transition-colors duration-300">
                      {event.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4" /> {event.time}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />{" "}
                        {event.location}
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ActionCards />
    </section>
  );
}