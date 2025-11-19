import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import Banner from "@/components/banner";
 
 
 
export default function BlogPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Head>
        <title>Youth Sports Development Articles | Bharat Sports Foundation</title>
        <meta name="description" content="Discover inspiring Youth Sports Development Articles covering athlete growth, coaching insights, competitions, and community sports initiatives." />
        <meta name="keywords" content="Youth Sports Development Articles, child sports training initiatives in Bangalore, youth empowerment through sports articles" />
        <meta name="canonical" content="https://bharatsportsfoundation.org/youth-sports-development-articles" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Youth Sports Development Articles | Bharat Sports Foundation" />
        <meta property="og:description" content="Discover inspiring Youth Sports Development Articles covering athlete growth, coaching insights, competitions, and community sports initiatives." />
        <meta property="og:url" content="https://bharatsportsfoundation.org/youth-sports-development-articles" />
        <meta property="og:type" content="website" />
      </Head>
 
      <Header />
 
 
 
      {/* Banner */}
      <Banner mediaUrl="/images/ourblog_bsf_f2.mp4" heading="" paragraph="" />
 
 
 
      {/* Blog Section */}
      <div className="flex-grow bg-gray-50 py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          {/* Featured Articles Section */}
          <section className="mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-8 sm:mb-10">
              Featured Articles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Article 1 */}
              <div className="bg-[#B8EA80] overflow-hidden h-full flex flex-col rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-64">
                  <Image
                    src="/images/89e47092ce57d95022164c316fa26775.png"
                    alt="The Road to Olympic Glory - Youth Sports Development"
                    fill
                    className="object-top object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority
                  />
                </div>
                <div className="p-5 sm:p-6 flex-1 flex flex-col">
                  <span className="text-xs sm:text-sm font-semibold text-gray-700 mb-2">Youth Empowerment Through Sports</span>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-900">
                    The Road to Olympic Glory
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base mb-4 flex-1 leading-relaxed">
                    Follow the journeys of India's rising athletes as they train, sacrifice, and push toward Olympic dreams. See how grassroots support and child sports training initiatives in Bangalore make it possible for young talent to reach the world stage.
                  </p>
                  <button className="text-gray-900 font-semibold hover:text-gray-800 transition-colors text-sm sm:text-base">
                    Read More →
                  </button>
                </div>
              </div>
 
 
 
              {/* Article 2 */}
              <div className="bg-[#B8EA80] overflow-hidden h-full flex flex-col rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-64">
                  <Image
                    src="/images/f755171b33bdb21fcec9db159e0aa353.png"
                    alt="Community Sports Programs - Grassroots Development"
                    fill
                    className="object-center object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5 sm:p-6 flex-1 flex flex-col">
                  <span className="text-xs sm:text-sm font-semibold text-gray-700 mb-2">Grassroots Development</span>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-900">
                    Community Sports Programs
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base mb-4 flex-1 leading-relaxed">
                    See how our community programs are creating opportunities for youth across Karnataka. These youth empowerment through sports articles showcase how we're building confidence, discipline, and future champions, one village at a time, through structured training and mentorship.
                  </p>
                  <button className="text-gray-900 font-semibold hover:text-gray-800 transition-colors text-sm sm:text-base">
                    Read More →
                  </button>
                </div>
              </div>
 
 
 
              {/* Article 3 */}
              <div className="bg-[#B8EA80] overflow-hidden h-full flex flex-col sm:col-span-2 lg:col-span-1 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-64">
                  <Image
                    src="/images/blog-article-3.png"
                    alt="Team celebrating victory - Sports Competition"
                    fill
                    className="object-center object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5 sm:p-6 flex-1 flex flex-col">
                  <span className="text-xs sm:text-sm font-semibold text-gray-700 mb-2">Team Development</span>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-900">
                    How Teamwork Wins Championships
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base mb-4 flex-1 leading-relaxed">
                    Dive into the strategies and stories behind great teams that rise together, support each other, and achieve incredible results. Discover the power of collaboration, trust, and unity in achieving extraordinary success.
                  </p>
                  <button className="text-gray-900 font-semibold hover:text-gray-800 transition-colors text-sm sm:text-base">
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          </section>
 
 
 
          {/* Latest Posts Section - Centered */}
          <section className="mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-8 sm:mb-10 text-center text-gray-900">
              Latest Youth Sports Development Articles
            </h2>
            <p className="text-center text-gray-600 text-sm sm:text-base mb-8 sm:mb-10 max-w-2xl mx-auto">
              Stay updated with fresh perspectives, training insights, and inspiring stories from our youth sports development articles collection.
            </p>
            <div className="grid gap-6 md:gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "Basketball Championship Highlights: Rising Stars Shine Bright",
                  description:
                    "Relive the best moments from this year's championship, buzzer-beaters, clutch plays, and the young athletes who made it unforgettable. This article highlights how child sports training initiatives in Bangalore prepare athletes for high-pressure moments.",
                  image: "/images/210876708e0f735a8d9a625bf7cd372d.png",
                  category: "Sports Events & Competition",
                  date: "November 15, 2025",
                },
                {
                  title: "Coaching Tips for Young Athletes: Building Tomorrow's Champions",
                  description:
                    "Essential coaching strategies every young athlete and mentor needs. From building fundamentals to developing mental toughness, this guide is part of our comprehensive youth sports development articles series focused on holistic athlete development.",
                  image: "/images/ee82f3120d79366a4c871191b1b791a5.png",
                  category: "Training & Development",
                  date: "November 12, 2025",
                  highlights: [
                    "Age-appropriate training techniques",
                    "Motivation and goal-setting strategies",
                    "Injury prevention for young bodies",
                    "Building confidence through positive reinforcement"
                  ]
                },
                {
                  title: "Marathon: A Test of Endurance and Character",
                  description:
                    "What it takes to run 42 kilometers, the physical demands, mental battles, and why marathons teach life lessons that last beyond the finish line. One of our most popular youth empowerment through sports articles explores resilience and determination.",
                  image: "/images/fc80c050e7a77a19c613163fdc10e533.png",
                  category: "Youth Empowerment Through Sports",
                  date: "November 10, 2025",
                },
              ].map((post, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row gap-5 sm:gap-6 md:gap-8 items-stretch bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200"
                >
                  <div className="relative w-full sm:w-56 md:w-64 h-56 md:h-64 flex-shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-center object-cover w-full h-full"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 224px, 256px"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                        <span className="inline-block bg-[#B8EA80] text-gray-900 text-xs sm:text-sm font-semibold px-3 py-1 rounded-full w-fit">
                          {post.category}
                        </span>
                        <span className="text-gray-500 text-xs sm:text-sm">
                          {post.date}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-gray-900 hover:text-gray-700 transition-colors cursor-pointer">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base md:text-base leading-relaxed mb-4">
                        {post.description}
                      </p>
                      {post.highlights && (
                        <ul className="space-y-1.5 mb-4 text-gray-600 text-xs sm:text-sm">
                          {post.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-[#B8EA80] font-bold mt-0.5">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="text-gray-900 font-semibold hover:text-black transition-colors text-sm sm:text-base flex items-center gap-1">
                        Read Full Article →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
 
          {/* Main Layout with Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Placeholder for additional content if needed */}
            </div>
 
 
 
            {/* Sidebar */}
            <aside className="space-y-8 sm:space-y-10">
              {/* Categories */}
              {/* <section>
                <h2 className="text-xl sm:text-2xl font-bold mb-4">
                  Categories
                </h2>
                <ul className="space-y-2 sm:space-y-3">
                  {[
                    "Youth Empowerment Through Sports",
                    "Sports Events & Competition",
                    "Training & Development",
                    "Grassroots Development",
                  ].map((category, index) => (
                    <li key={index}>
                      <Link
                        href={`/blog/category/${category
                          .toLowerCase()
                          .replace(/ /g, "-")}`}
                        className="text-gray-600 hover:text-black text-sm sm:text-base"
                      >
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section> */}
 
 
 
              {/* Follow Us */}
              {/* <section>
                <h2 className="text-xl sm:text-2xl font-bold mb-4">
                  Follow Us
                </h2>
                <div className="flex gap-4">
                  <Link href="#" className="text-gray-600 hover:text-black">
                    <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    <Twitter className="h-5 w-5 sm:h-6 sm:w-6" />
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    <Youtube className="h-5 w-5 sm:h-6 sm:w-6" />
                  </Link>
                </div>
              </section> */}
 
 
 
              {/* Newsletter Signup */}
              {/* <section>
                <h2 className="text-xl sm:text-2xl font-bold mb-4">
                  Newsletter Signup
                </h2>
                <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed">
                  Stay updated with the latest news and events from Bharat
                  Sports Foundation.
                </p>
                <form className="space-y-3 sm:space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 sm:px-4 py-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#B8EA80] text-black font-bold py-2 rounded hover:bg-[#a5d695] transition-colors text-sm sm:text-base"
                  >
                    Subscribe
                  </button>
                </form>
              </section> */}
            </aside>
          </div>
        </div>
      </div>
 
 
 
      <Footer />
    </main>
  );
}
 