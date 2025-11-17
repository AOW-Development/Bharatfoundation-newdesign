"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import Banner from "@/components/banner";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <Banner
        mediaUrl="/images/aboutusbanner.jpg"
        heading=" Welcome to Bharat Sports Foundation"
        paragraph=" Your ultimate destination for everything related to physical education and sports"
        buttons={[
          { text: "Monthly Donation", link: "/monthly-donation" },
          { text: "Onetime Donation", link: "/one-time-donation" },
        ]}
      />

      {/* In-Depth Tutorials Section */}
      <section id="tutorials" className="py-6 sm:py-8 lg:py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-4">In-Depth Tutorials</h2>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                image: "/images/8deb2f7f40c999bf95e59c8d627037d7.png",
                title: "Basketball Techniques",
                description:"Learn advanced basketball dribbling techniques with our expert coaches",
              },
              {
                image: "/images/d2338b5fe7ec6b767a6f106bbcee1227.png",
                title: "Yoga & Stretching",
                description:"Explore the benefits of yoga with our guided sessions for all levels",
              },
              {
                image: "/images/e353b2fb29a64134a25fec74dc42d9ea.png",
                title: "Weightlifting Mastery",
                description:"Master weightlifting techniques with our step-by-step tutorials",
              },
            ].map((tutorial, index) => (
              <div key={index} className="bg-[#B8EA80] rounded-lg overflow-hidden relative group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="relative h-44 sm:h-48">
                  <Image src={tutorial.image} alt={tutorial.title} fill className="object-cover object-top" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">{tutorial.title}</h3>
                  <p className="text-sm text-gray-700">{tutorial.description}</p>
                  <button className="mt-4 text-sm font-semibold hover:underline">Learn More →</button>
                </div>
                <div className="absolute bottom-0 left-0 h-1 bg-black w-0 group-hover:w-full transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Insights Section */}
      <section id="insights" className="py-6 sm:py-8 lg:py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-2">Expert Insights</h2>

          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                image: "/images/7f81588e93aba3fd3d23776442e41776.png",
                title: "Mental Toughness Training",
                description:"Gain mental toughness with insights from leading sports psychologists.",
              },
              {
                image: "/images/2c007fc3bca4b03ab8ef4cda5c0afe43.png",
                title: "Sports Nutrition",
                description:"Optimize your performance with nutrition tips from top experts.",
              },
              {
                image: "/images/injury.jpg",
                title: "Injury Prevention",
                description:"Learn essential techniques to avoid sports injuries and stay healthy.",
              },
            ].map((insight, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative group">
                <div className="relative h-44 sm:h-48 mb-4">
                  <Image src={insight.image} alt={insight.title} fill className="object-cover rounded-lg object-top" />
                </div>
                <h3 className="text-xl font-bold mb-2">{insight.title}</h3>
                <p className="text-gray-600">{insight.description}</p>
                <button className="mt-4 text-primary font-semibold hover:underline">Read More →</button>
                <div className="absolute bottom-0 left-0 h-1 bg-[#B8EA80] w-0 group-hover:w-full transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Events Section */}
      <section id="events" className="py-6 sm:py-8 lg:py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-6">Live Events and Coverage</h2>

          <div className="relative h-[300px] sm:h-[350px] lg:h-[400px] rounded-lg overflow-hidden group">
            <Image src="/images/03054f09bd5ab9ccfc33ab5051292b4a.png" alt="Live sports event" fill className="object-cover object-top transition-all duration-500 group-hover:scale-105" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6 sm:p-8 text-white">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Stay Connected with Live Sports</h3>
                <p className="text-sm sm:text-lg mb-4 sm:mb-6">Stay updated with live coverage of our exciting sports events and competitions.</p>
                <button className="bg-[#B8EA80] text-black px-5 py-2 rounded-lg font-semibold hover:bg-[#98c889] transition-colors">View Events</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fitness and Wellness Section */}
      <section id="fitness" className="py-6 sm:py-8 lg:py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-6">Fitness and Wellness</h2>

          <div className="grid gap-8 lg:grid-cols-2">
            {[
              {
                image: "/images/cc18f816d084b229fcdaba137ffc133d.png",
                title: "Outdoor Activities",
                description:"Discover the best fitness trails and outdoor activities to stay fit and healthy.",
              },
              {
                image: "/images/9d57ec65f82d82559b352a3f1444c250.png",
                title: "Community Classes",
                description:"Join our community fitness classes designed for all skill levels.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-gray-700 text-white rounded-lg overflow-hidden relative group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="relative h-56 sm:h-64">
                  <Image src={item.image} alt={item.title} fill className="object-cover object-top" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{item.title}</h3>
                  <p className="mb-4">{item.description}</p>
                  <button className="text-[#B8EA80] font-semibold hover:underline">{index === 0 ? "Find Trails →": "Join Classes →"}</button>
                </div>
                <div className="absolute bottom-0 left-0 h-1 bg-[#B8EA80] w-0 group-hover:w-full transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}