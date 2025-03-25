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
      title: "ADOPT A CHILD",
      description:
        " Your integrity speaks to the aspiring youths who make loud noises with their success.",
      buttonText: "Contact us",
      buttonLink: "/contact",
    },
    {
      title: "GET INVOLVED",
      description:
        "Partnering with Bharath Sports Foundation allows you to refine many lives. ",
      buttonText: "Donate Now",
      buttonLink: "/donate",
    },
  ];

  return (
    <section className="py-12 px-4 text-sm dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#B8EA80] dark:bg-[#5A8A3D] h-[220px] p-8 flex flex-col justify-between border-[#B3D9FF] dark:border-[#4A6D8C] border-2"
            >
              <div>
                <h3 className="text-xl font-bold mb-3 dark:text-white">
                  {card.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-200">
                  {card.description}
                </p>
              </div>
              <div>
                <Link href={card.buttonLink}>
                  <button className="bg-[#8DC674] dark:bg-[#4A7A33] text-black dark:text-white px-6 py-2 hover:bg-[#7ab563] dark:hover:bg-[#3D6429] transition-colors border-[#B3D9FF] dark:border-[#4A6D8C] border-2">
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
