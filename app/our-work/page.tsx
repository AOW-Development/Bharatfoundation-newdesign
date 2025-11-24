import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Banner from "@/components/banner";
import Link from "next/link";

export default function OurWorkPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Banner Section */}
      <Banner
        mediaUrl="/images/ourworkbanner.webp"
        heading="Welcome to Bharat Sports Foundation"
        paragraph="Your ultimate destination for everything related to physical education and sports"
      />

      {/* Grants Section - Modern Design */}
      <section
        id="grants"
        className="py-3 bg-gradient-to-br from-gray-50 to-white scroll-mt-20"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-[#98c889] uppercase tracking-wider">
                Support
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Grants
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              We offer multiple grant opportunities designed to nurture athletic
              potential and support long-term sporting development. Join our
              mission to strengthen grassroots sports development initiatives in
              India and empower rising talent.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button className="bg-[#B8EA80] text-black hover:bg-[#98c889] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl px-8 py-6 text-lg font-semibold rounded-full">
                  Apply Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Simply Periods, Roots, Smiles Section - Enhanced Cards */}
      <section id="initiatives" className="py-6 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-[#98c889] uppercase tracking-wider">
                Our Initiatives
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Simply Periods, Roots, Smiles
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Simply Periods Card */}
            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-2xl">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/Periods.jpg"
                  alt="Girls in classroom learning about menstrual health"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-[#98c889] transition-colors duration-300">
                  Simply Periods
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Empowering young girls with knowledge, confidence, and dignity
                  through menstrual health awareness. Every girl deserves access
                  to facts, support, participating confidently, supporting
                  women's empowerment through sports in India.{" "}
                </p>
              </CardContent>
            </Card>

            {/* Roots Card */}
            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-2xl">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/root.jpg"
                  alt="People planting trees"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-[#98c889] transition-colors duration-300">
                  Roots
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Through tree-planting missions and eco-awareness activities,
                  we help shape future champions who value growth beyond the
                  field, strengthening grassroots sports development initiatives
                  in India.
                </p>
              </CardContent>
            </Card>

            {/* Smiles Card */}
            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-2xl">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/smile.jpg"
                  alt="Happy children participating in sports"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-[#98c889] transition-colors duration-300">
                  Smiles
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Beyond competition, play shapes confidence, friendships,
                  resilience, and happiness. Our programs help build child
                  development through sports, improving social skills, emotional
                  well-being, and physical literacy for children from diverse
                  backgrounds.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section - Modern Stats Cards */}
      <section
        id="impact"
        className="py-20 bg-gradient-to-br from-[#B8EA80] to-[#a8da70] scroll-mt-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-gray-800 uppercase tracking-wider">
                Our Achievements
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Impact
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Impact Card 1 */}
            <Card className="group overflow-hidden border-0 bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-2xl">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/running.jpg"
                  alt="Athletes running"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <p className="text-gray-700 font-medium leading-relaxed">
                  Our supported athletes have achieved more than 100 medals
                  across district, state, and national levels, a testament to
                  the sports development impact in India when the right
                  guidance, ecosystem, and encouragement align.
                </p>
              </CardContent>
            </Card>

            {/* Impact Card 2 */}
            <Card className="group overflow-hidden border-0 bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-2xl">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/playing.jpg"
                  alt="Youth sports program"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <p className="text-gray-700 font-medium leading-relaxed">
                  We have empowered more than 10,000 young individuals through
                  inclusive and community-driven programs, building pathways
                  from playground to podium across Karnataka and beyond.
                </p>
              </CardContent>
            </Card>

            {/* Impact Card 3 */}
            <Card className="group overflow-hidden border-0 bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-2xl">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/women_Athletics.jpg"
                  alt="Women athletes training"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <p className="text-gray-700 font-medium leading-relaxed">
                  We are committed to women's empowerment through sports in
                  India, offering specialized training, leadership support,
                  mentorship, and a safe environment for progress.{" "}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Women's Report Section - Modern Chart Design */}
      <section
        id="womens-report"
        className="py-20 bg-gradient-to-br from-white to-gray-50 scroll-mt-20"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold text-[#98c889] uppercase tracking-wider">
                  Annual Report
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Women's Report
              </h2>
            </div>

            <div className="bg-white p-4 sm:p-6 md:p-10 rounded-3xl shadow-2xl border border-gray-100">
              <div className="relative h-[300px] sm:h-[350px] md:h-[400px] mb-8 overflow-x-auto">
                <svg
                  className="w-full h-full min-w-[600px] md:min-w-0"
                  viewBox="0 0 800 400"
                  preserveAspectRatio="xMidYMid meet"
                >
                  {/* Grid lines */}
                  {[0, 25, 50, 75, 100].map((value, i) => (
                    <g key={i}>
                      <line
                        x1="60"
                        y1={350 - value * 2.8}
                        x2="760"
                        y2={350 - value * 2.8}
                        stroke="#e5e7eb"
                        strokeWidth="1"
                        strokeDasharray="5,5"
                      />
                      <text
                        x="40"
                        y={355 - value * 2.8}
                        fill="#6b7280"
                        fontSize="12"
                        textAnchor="end"
                      >
                        {value}%
                      </text>
                    </g>
                  ))}

                  {/* Line path */}
                  <path
                    d={`M 100,${350 - 60 * 2.8} L 220,${350 - 40 * 2.8} L 340,${
                      350 - 80 * 2.8
                    } L 460,${350 - 70 * 2.8} L 580,${350 - 50 * 2.8} L 700,${
                      350 - 90 * 2.8
                    }`}
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Gradient for line */}
                  <defs>
                    <linearGradient
                      id="lineGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#B8EA80" />
                      <stop offset="100%" stopColor="#98c889" />
                    </linearGradient>
                    <linearGradient
                      id="areaGradient"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#B8EA80" stopOpacity="0.3" />
                      <stop
                        offset="100%"
                        stopColor="#B8EA80"
                        stopOpacity="0.05"
                      />
                    </linearGradient>
                  </defs>

                  {/* Area fill under line */}
                  <path
                    d={`M 100,${350 - 60 * 2.8} L 220,${350 - 40 * 2.8} L 340,${
                      350 - 80 * 2.8
                    } L 460,${350 - 70 * 2.8} L 580,${350 - 50 * 2.8} L 700,${
                      350 - 90 * 2.8
                    } L 700,350 L 100,350 Z`}
                    fill="url(#areaGradient)"
                  />

                  {/* Data points */}
                  {[
                    { x: 100, y: 350 - 60 * 2.8, value: 60, label: "Q1 2024" },
                    { x: 220, y: 350 - 40 * 2.8, value: 40, label: "Q2 2024" },
                    { x: 340, y: 350 - 80 * 2.8, value: 80, label: "Q3 2024" },
                    { x: 460, y: 350 - 70 * 2.8, value: 70, label: "Q4 2024" },
                    { x: 580, y: 350 - 50 * 2.8, value: 50, label: "Q1 2025" },
                    { x: 700, y: 350 - 90 * 2.8, value: 90, label: "Q2 2025" },
                  ].map((point, index) => (
                    <g key={index} className="group cursor-pointer">
                      {/* Point circle */}
                      <circle
                        cx={point.x}
                        cy={point.y}
                        r="6"
                        fill="white"
                        stroke="#B8EA80"
                        strokeWidth="3"
                        className="transition-all duration-300 group-hover:r-8"
                      />
                      <circle
                        cx={point.x}
                        cy={point.y}
                        r="3"
                        fill="#98c889"
                        className="transition-all duration-300"
                      />

                      {/* Tooltip */}
                      <g className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <rect
                          x={point.x - 35}
                          y={point.y - 50}
                          width="70"
                          height="35"
                          fill="#1f2937"
                          rx="8"
                        />
                        <text
                          x={point.x}
                          y={point.y - 32}
                          fill="white"
                          fontSize="14"
                          fontWeight="bold"
                          textAnchor="middle"
                        >
                          {point.value}%
                        </text>
                        <text
                          x={point.x}
                          y={point.y - 18}
                          fill="#d1d5db"
                          fontSize="10"
                          textAnchor="middle"
                        >
                          {point.label}
                        </text>
                      </g>

                      {/* X-axis label */}
                      <text
                        x={point.x}
                        y="380"
                        fill="#6b7280"
                        fontSize="12"
                        fontWeight="600"
                        textAnchor="middle"
                      >
                        {point.label}
                      </text>
                    </g>
                  ))}
                </svg>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <p className="text-center text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-3xl mx-auto px-4">
                  The report showcases the strides made in women's sports,
                  highlighting key areas of growth and future goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
