import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import Banner from "@/components/banner";


export default function BlogPage() {
  return (
    <main className="min-h-screen flex flex-col">
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
                    alt="Runner in red"
                    fill
                    className="object-top object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority
                  />
                </div>
                <div className="p-5 sm:p-6 flex-1 flex flex-col">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-900">
                    The Road to Olympic Glory
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base mb-4 flex-1 leading-relaxed">
                    Discover the inspiring journey of athletes preparing for
                    the upcoming Olympics, their challenges, and triumphs. Learn about their dedication, sacrifices, and the incredible stories that drive them forward in pursuit of excellence.
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
                    alt="Children playing soccer"
                    fill
                    className="object-center object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5 sm:p-6 flex-1 flex flex-col">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-900">
                    Community Sports Programs
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base mb-4 flex-1 leading-relaxed">
                    Explore how our community programs are fostering a love
                    for sports among youth and building future champions. Through grassroots initiatives and community engagement, we're creating opportunities for every child to discover their athletic potential.
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
                    alt="Team celebrating victory"
                    fill
                    className="object-center object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5 sm:p-6 flex-1 flex flex-col">
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
              Latest Posts
            </h2>
            <div className="grid gap-6 md:gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "Basketball Championship Highlights",
                  description:
                    "Catch up on the thrilling moments from this year's championship games and witness the incredible performances that defined the season. From buzzer-beating shots to historic comebacks, relive the excitement and drama of competitive basketball at its finest. Our coverage brings you the best plays, standout athletes, and unforgettable moments from the court.",
                  image: "/images/210876708e0f735a8d9a625bf7cd372d.png",
                  category: "Event Coverage",
                  date: "November 15, 2025",
                },
                {
                  title: "Coaching Tips for Young Athletes",
                  description:
                    "Learn essential coaching strategies to nurture young talents and help them reach their full potential. Discover proven techniques for building confidence, developing fundamental skills, and fostering a love for sports. Expert insights from experienced coaches will guide you in creating a positive environment where young athletes can thrive, learn, and grow both athletically and personally.",
                  image: "/images/ee82f3120d79366a4c871191b1b791a5.png",
                  category: "Training Tips",
                  date: "November 12, 2025",
                },
                {
                  title: "Marathon: A Test of Endurance",
                  description:
                    "Experience the excitement and challenges of marathon running through inspiring stories of determination and perseverance. Marathon runners push their physical and mental limits, transforming themselves through months of dedicated training. This comprehensive guide explores training regimens, nutrition strategies, mental preparation techniques, and the profound sense of accomplishment that comes with crossing the finish line.",
                  image: "/images/fc80c050e7a77a19c613163fdc10e533.png",
                  category: "Athlete Profiles",
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
                    "Athlete Profiles",
                    "Event Coverage",
                    "Training Tips",
                    "Health & Nutrition",
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