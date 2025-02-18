import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function OurWorkPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Banner Section */}
      <section className="relative pt-20 h-[40vh] w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/our-work-banner.jpg"
            alt="Our Work Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Work</h1>
            <p className="text-xl opacity-90">
              Making a difference through sports and education
            </p>
          </div>
        </div>
      </section>

      {/* Grants Section */}
      <section id="grants" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Grants</h2>
            <p className="text-lg text-gray-600 mb-8">
              We offer several grants to support talented athletes in their
              journey. Apply today to get the support you need.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-[#B7E4A7] text-black hover:bg-[#98c889]">
                Apply Now
              </Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Simply Periods, Roots, Smiles Section */}
      <section id="initiatives" className="py-16 scroll-mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Simply Periods, Roots, Smiles
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-18%20135902-wqDEDwrsN4TJ7gBvX7pwZ85gXVAQyU.png"
                  alt="Girls in classroom learning about menstrual health"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Simply Periods</h3>
                <p className="text-gray-600">
                  Educating young girls about menstrual health and hygiene.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-18%20135902-wqDEDwrsN4TJ7gBvX7pwZ85gXVAQyU.png"
                  alt="People planting trees"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Roots</h3>
                <p className="text-gray-600">
                  Cultivating environmental awareness through tree planting
                  drives.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-18%20135902-wqDEDwrsN4TJ7gBvX7pwZ85gXVAQyU.png"
                  alt="Happy children participating in sports"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Smiles</h3>
                <p className="text-gray-600">
                  Bringing joy to underprivileged children through sports and
                  fun activities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-16 bg-[#B7E4A7] scroll-mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <div className="relative h-48">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-18%20135849-qLW8Bklb1KaTpWj409xGyzLrbj8u8C.png"
                  alt="Athletes running"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <p className="font-bold">
                  Our athletes have won over 100 medals in national
                  competitions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-48">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-18%20135849-qLW8Bklb1KaTpWj409xGyzLrbj8u8C.png"
                  alt="Youth sports program"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <p className="font-bold">
                  We have impacted over 10,000 youth through our community
                  programs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-48">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-18%20135849-qLW8Bklb1KaTpWj409xGyzLrbj8u8C.png"
                  alt="Women athletes training"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <p className="font-bold">
                  Empowering women athletes with specialized training sessions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Women's Report Section */}
      <section id="womens-report" className="py-16 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Women's Report
            </h2>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="relative h-[300px] mb-6">
                <div className="flex items-end justify-around h-full">
                  {[60, 40, 80, 70, 50, 90].map((height, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div
                        className="w-16 bg-[#B7E4A7] rounded-t"
                        style={{ height: `${height}%` }}
                      />
                      <div
                        className="w-16 bg-[#98c889] rounded-t"
                        style={{
                          height: `${height * 0.7}%`,
                          marginTop: "-4px",
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-center text-gray-600">
                The report showcases the strides made in women's sports,
                highlighting key areas of growth and future goals.
              </p>
              <div className="flex justify-center mt-8">
                <Button className="bg-[#B7E4A7] text-black hover:bg-[#98c889]">
                  Download Full Report
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
