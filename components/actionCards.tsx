import Link from "next/link";

export default function ActionCards() {
  const cards = [
    {
      title: "BECOME A VOLUNTEER",
      description:
        "We welcome you onboard to contribute your time and skills in many ways.",
      buttonText: "Join us Now",
      buttonLink: "/get-involved#volunteer",
    },
    {
      title: "ADOPT SPORTS CHAMPION",
      description:
        "Your integrity speaks to the aspiring youths who make loud noises with their success.",
      buttonText: "Contact us",
      buttonLink: "/contact",
    },
    {
      title: "GET INVOLVED",
      description:
        "Partnering with Bharath Sports Foundation allows you to refine many lives.",
      buttonText: "Donate Now",
      buttonLink: "/donate",
    },
  ];

  return (
    <section className="py-10 sm:py-12 px-4 sm:px-8 md:px-16 lg:px-24 text-sm dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#B8EA80] dark:bg-[#B8EA80] p-6 sm:p-8 flex flex-col justify-between rounded-xl border-[#B3D9FF] dark:border-[#B3D9FF] border-2 hover:shadow-md transition-all duration-300"
            >
              {/* Card Content */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-black dark:text-white text-center sm:text-left">
                  {card.title}
                </h3>
                <p className="text-gray-700 dark:text-white text-center sm:text-left text-sm sm:text-base">
                  {card.description}
                </p>
              </div>

              {/* Button */}
              <div className="mt-6 flex justify-center sm:justify-start">
                <Link href={card.buttonLink}>
                  <button className="bg-[#8DC674] dark:bg-[#8DC674] text-black dark:text-white px-6 py-2 text-sm sm:text-base font-semibold rounded-md hover:bg-[#7ab563] dark:hover:bg-[#7ab563] transition-colors border-[#B3D9FF] dark:border-[#B3D9FF] border-2">
                    {card.buttonText}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
