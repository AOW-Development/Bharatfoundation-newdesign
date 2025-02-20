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

      {/* Banner Section */}
      {/* <section className="relative pt-20 h-[40vh] w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/blog-banner.jpg"
            alt="Blog Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
            <p className="text-xl opacity-90">
              Stay updated with the latest news and stories from the world of
              sports
            </p>
          </div>
        </div>
      </section> */}

      <Banner
        mediaUrl="/images/ourblog-vid.mp4"
        heading=""
        paragraph=""
        // buttonText="Donate Here"
        // buttonLink="/donate"
      />
      <div className="flex-grow bg-gray-50 py-12 px-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-2">
              {/* Featured Articles */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Featured Articles</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Featured Article 1 */}
                  <div className="bg-[#B7E4A7] rounded-lg overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src="/images/89e47092ce57d95022164c316fa26775.png"
                        alt="Runner in red"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-bold mb-2">
                        The Road to Olympic Glory
                      </h3>
                      <p className="text-gray-700 mb-4">
                        Discover the inspiring journey of athletes preparing for
                        the upcoming Olympics, their challenges, and
                      </p>
                      <button className="text-black font-semibold hover:underline">
                        Read More
                      </button>
                    </div>
                  </div>

                  {/* Featured Article 2 */}
                  <div className="bg-[#B7E4A7] rounded-lg overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src="/images/f755171b33bdb21fcec9db159e0aa353.png"
                        alt="Children playing soccer"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-bold mb-2">
                        Community Sports Programs
                      </h3>
                      <p className="text-gray-700 mb-4">
                        Explore how our community programs are fostering a love
                        for sports among youth and building future champions.
                      </p>
                      <button className="text-black font-semibold hover:underline">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Latest Posts */}
              <section>
                <h2 className="text-2xl font-bold mb-6">Latest Posts</h2>
                <div className="grid gap-8">
                  {[
                    {
                      title: "Basketball Championship Highlights",
                      description:
                        "Catch up on the thrilling moments from this year's championship games.",
                      image: "/images/210876708e0f735a8d9a625bf7cd372d.png",
                    },
                    {
                      title: "Coaching Tips for Young Athletes",
                      description:
                        "Learn essential coaching strategies to nurture young talents.",
                      image: "/images/ee82f3120d79366a4c871191b1b791a5.png",
                    },
                    {
                      title: "Marathon: A Test of Endurance",
                      description:
                        "Experience the excitement and challenges of marathon running.",
                      image: "/images/fc80c050e7a77a19c613163fdc10e533.png",
                    },
                  ].map((post, index) => (
                    <div key={index} className="flex gap-6 items-start">
                      <div className="relative w-32 h-32 flex-shrink-0">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                        <p className="text-gray-600">{post.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Categories */}
              <section>
                <h2 className="text-2xl font-bold mb-4">Categories</h2>
                <ul className="space-y-2">
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
                        className="text-gray-600 hover:text-black"
                      >
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Follow Us */}
              <section>
                <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
                <div className="flex gap-4">
                  <Link href="#" className="text-gray-600 hover:text-black">
                    <Facebook className="h-6 w-6" />
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    <Twitter className="h-6 w-6" />
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    <Instagram className="h-6 w-6" />
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    <Youtube className="h-6 w-6" />
                  </Link>
                </div>
              </section>

              {/* Newsletter Signup */}
              <section>
                <h2 className="text-2xl font-bold mb-4">Newsletter Signup</h2>
                <p className="text-gray-600 mb-4">
                  Stay updated with the latest news and events from Bharat
                  Sports Foundation.
                </p>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#B7E4A7] text-black font-bold py-2 rounded hover:bg-[#a5d695] transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
