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
    <section className="py-12 px-4 text-sm">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#B7E4A7] h-[220px] p-8 flex flex-col justify-between border-[#B3D9FF] border-2"
            >
              <div>
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-gray-700">{card.description}</p>
              </div>
              <div>
              <Link href={card.buttonLink}>
                <button className="bg-[#8DC674] text-black px-6 py-2  hover:bg-[#7ab563] transition-colors border-[#B3D9FF] border-2">
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
