import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import Banner from "@/components/banner";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Banner Section */}
      {/* <section className="relative pt-20 h-[40vh] w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/about-banner.jpg"
            alt="About Us Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl opacity-90">
              Discover our programs and resources
            </p>
          </div>
        </div>
      </section> */}

      <Banner
        mediaUrl="/images/aboutusbanner.jpg"
        heading=" Welcome to Bharat Sports Foundation"
        paragraph=" Your ultimate destination for everything related to physical
                    education and sports"
        buttons={[
          { text: "Monthly Donation", link: "/monthly-donation" },
          { text: "Onetime Donation", link: "/one-time-donation" },
        ]}
      />
      {/* In-Depth Tutorials Section */}
      <section id="tutorials" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">In-Depth Tutorials</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                image: "/images/8deb2f7f40c999bf95e59c8d627037d7.png",
                title: "Basketball Techniques",
                description:
                  "Learn advanced basketball dribbling techniques with our expert coaches",
              },
              {
                image: "/images/d2338b5fe7ec6b767a6f106bbcee1227.png",
                title: "Yoga & Stretching",
                description:
                  "Explore the benefits of yoga with our guided sessions for all levels",
              },
              {
                image: "/images/e353b2fb29a64134a25fec74dc42d9ea.png",
                title: "Weightlifting Mastery",
                description:
                  "Master weightlifting techniques with our step-by-step tutorials",
              },
            ].map((tutorial, index) => (
              <div
                key={index}
                className="bg-[#16A34A] rounded-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={tutorial.image || "/placeholder.svg"}
                    alt={tutorial.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">{tutorial.title}</h3>
                  <p className="text-sm text-gray-700">
                    {tutorial.description}
                  </p>
                  <button className="mt-4 text-sm font-semibold hover:underline">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Insights Section */}
      <section id="insights" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Expert Insights</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="relative h-48 mb-4">
                <Image
                  src="/images/7f81588e93aba3fd3d23776442e41776.png"
                  alt="Sports Psychology Session"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">
                Mental Toughness Training
              </h3>
              <p className="text-gray-600">
                Gain mental toughness with insights from leading sports
                psychologists. Learn techniques to improve focus, handle
                pressure, and achieve peak performance.
              </p>
              <button className="mt-4 text-primary font-semibold hover:underline">
                Read More →
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="relative h-48 mb-4">
                <Image
                  src="/images/2c007fc3bca4b03ab8ef4cda5c0afe43.png"
                  alt="Nutrition Consultation"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Sports Nutrition</h3>
              <p className="text-gray-600">
                Optimize your performance with nutrition tips from top experts.
                Learn about meal planning, supplements, and hydration
                strategies.
              </p>
              <button className="mt-4 text-primary font-semibold hover:underline">
                Read More →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Live Events Section */}
      <section id="events" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Live Events and Coverage</h2>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/images/03054f09bd5ab9ccfc33ab5051292b4a.png"
              alt="Live sports event"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Stay Connected with Live Sports
                </h3>
                <p className="text-lg mb-6">
                  Stay updated with live coverage of our exciting sports events
                  and competitions.
                </p>
                <button className="bg-[#16A34A] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#98c889] transition-colors">
                  View Events
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fitness and Wellness Section */}
      <section id="fitness" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Fitness and Wellness</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-700 text-white rounded-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/cc18f816d084b229fcdaba137ffc133d.png"
                  alt="Outdoor fitness"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Outdoor Activities</h3>
                <p className="mb-4">
                  Discover the best fitness trails and outdoor activities to
                  stay fit and healthy.
                </p>
                <button className="text-[#16A34A] font-semibold hover:underline">
                  Find Trails →
                </button>
              </div>
            </div>
            <div className="bg-gray-700 text-white rounded-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/9d57ec65f82d82559b352a3f1444c250.png"
                  alt="Group fitness"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Community Classes</h3>
                <p className="mb-4">
                  Join our community fitness classes designed for all skill
                  levels.
                </p>
                <button className="text-[#16A34A] font-semibold hover:underline">
                  Join Classes →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
