import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import Head from "next/head";
import { Button } from "@/components/ui/button";
import {
  Clock,
  PieChart,
  Coffee,
  Maximize2,
  Leaf,
  Shield,
  Briefcase,
  Home,
  MapPin,
  ArrowRight,
} from "lucide-react";
import Banner from "@/components/banner";
import Link from "next/link";
 
 
export default function GetInvolvedPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Head>
        <title>Get Involved with a Sports NGO in Bangalore | Support Youth</title>
        <meta name="description" content="Get involved with a sports NGO in Bangalore and empower young athletes with training, mentorship, and sports opportunities for a brighter future." />
        <meta name="keywords" content="Get involved with a sports NGO in Bangalore, sports event volunteer in India, volunteer and donate to sports NGO, partner with a youth sports nonprofit in Bangalore" />
        <meta name="canonical" content="https://bharatsportsfoundation.org/get-involved-with-a-sports-ngo-in-bangalore" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Get Involved with a Sports NGO in Bangalore | Support Youth" />
        <meta property="og:description" content="Get involved with a sports NGO in Bangalore and empower young athletes with training, mentorship, and sports opportunities for a brighter future." />
        <meta property="og:url" content="https://bharatsportsfoundation.org/get-involved-with-a-sports-ngo-in-bangalore" />
        <meta property="og:type" content="website" />
      </Head>
 
      <Header />
 
 
      <Banner
        mediaUrl="/images/getinvolvedBanner.jpg"
        heading="Welcome to Bharat Sports Foundation"
        paragraph="Your ultimate destination for everything related to physical education and sports"
      />
 
 
      {/* Volunteer Section */}
      <section
        id="volunteer"
        className="py-12 sm:py-16 md:py-20 bg-[#B8EA80] scroll-mt-20"
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Volunteer With Us
            </h2>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">
              Be the Reason an Athlete Succeeds
            </h3>
            <p className="text-base sm:text-lg md:text-lg mb-6 text-gray-800 leading-relaxed">
              Behind every medal, every personal best, every breakthrough moment, there's a network of people who believed, supported, and showed up. You can be that person.
            </p>
            <p className="text-base sm:text-lg md:text-lg mb-8 text-gray-800 leading-relaxed">
              Bharath Sports Foundation runs on the passion and commitment of volunteers who give their time, skills, and energy to change lives through sports. Get involved with a sports NGO in Bangalore and become part of something meaningful. No matter your background, we have a place for you.
            </p>
 
            <div className="mb-8">
              <h4 className="text-lg sm:text-xl font-bold mb-4 text-gray-900">Why Volunteer With Us?</h4>
              <ul className="space-y-3 text-gray-800">
                <li className="flex items-start gap-3">
                  <span className="text-gray-900 font-bold mt-1">•</span>
                  <div>
                    <strong>Create Real Impact:</strong> Your time directly supports athletes who lack resources but not determination. You'll see the difference you make in real time.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-900 font-bold mt-1">•</span>
                  <div>
                    <strong>Share Your Skills:</strong> Whether you're a former athlete, a coach, an organizer, a photographer, or just someone who cares, your skills matter here.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-900 font-bold mt-1">•</span>
                  <div>
                    <strong>Build Community:</strong> Join a team of passionate people working toward the same goal: giving every young athlete a fair shot.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-900 font-bold mt-1">•</span>
                  <div>
                    <strong>Flexible Commitment:</strong> Volunteer for a day, a weekend, a season, or long-term. We work around your schedule.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-900 font-bold mt-1">•</span>
                  <div>
                    <strong>Personal Growth:</strong> Gain leadership experience, mentoring skills, and the deep satisfaction of helping someone achieve their dreams.
                  </div>
                </li>
              </ul>
            </div>
 
            <div className="bg-gray-900 text-white p-6 rounded-xl mb-8">
              <h4 className="text-lg sm:text-xl font-bold mb-3">Join Our Volunteer Community Today</h4>
              <p className="text-base leading-relaxed mb-2">
                Every weekend, every training session, every tournament — volunteers make it possible.
              </p>
              <p className="text-base leading-relaxed">
                Be the reason a talented athlete doesn't quit. Get involved with a sports NGO in Bangalore today and become a sports event volunteer in India.
              </p>
            </div>
 
            <Button className="bg-gray-900 text-white hover:bg-gray-800 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-semibold transition-all duration-300 rounded-xl w-full sm:w-auto">
              Sign Up to Volunteer
            </Button>
          </div>
        </div>
      </section>
 
 
      {/* Donate Section */}
      <section
        id="donate"
        className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white scroll-mt-20"
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              Support Our Mission Through Donations
            </h2>
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              Volunteer and Donate to Sports NGO
            </h3>
            <p className="text-base sm:text-lg md:text-lg mb-6 leading-relaxed">
              Your contributions help us fund programs and support athletes. Every donation, big or small, makes a significant impact.
            </p>
 
            <div className="mb-8">
              <h4 className="text-lg sm:text-xl font-bold mb-4">Multiple Ways to Get Involved with a Sports NGO in Bangalore</h4>
              <p className="text-base mb-4 leading-relaxed">
                Whether you want to volunteer and donate to sports NGO programs or partner with a youth sports nonprofit in Bangalore, we have opportunities that match your interests and capacity.
              </p>
 
              <div className="space-y-4 text-base">
                <div>
                  <strong className="block mb-2">Volunteer Your Time:</strong>
                  <ul className="space-y-1 ml-4">
                    <li>• Coach young athletes</li>
                    <li>• Organize tournaments as sports event volunteers in India</li>
                    <li>• Mentor and guide aspiring athletes</li>
                    <li>• Support our programs administratively</li>
                  </ul>
                </div>
 
                <div>
                  <strong className="block mb-2">Donate to Youth Sports Charity:</strong>
                  <ul className="space-y-1 ml-4">
                    <li>• Fund athlete equipment and training</li>
                    <li>• Sponsor scholarships and grants</li>
                    <li>• Support tournament participation</li>
                    <li>• Build sustainable sports programs</li>
                  </ul>
                </div>
 
                <div>
                  <strong className="block mb-2">Partner With Us:</strong>
                  <ul className="space-y-1 ml-4">
                    <li>• Partner with the youth sports nonprofit Bangalore for CSR initiatives</li>
                    <li>• Collaborate on community sports development</li>
                    <li>• Create long-term impact together</li>
                  </ul>
                </div>
              </div>
            </div>
 
            <Link href="/donate" passHref>
              <Button className="bg-[#B8EA80] text-gray-900 hover:bg-[#98c889] px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-semibold transition-all duration-300 rounded-xl w-full sm:w-auto">
                Donate Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
 
 
      {/* Partner Section */}
      <section
        id="partner"
        className="py-12 sm:py-16 md:py-20 bg-gray-50 scroll-mt-20"
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Partner With Bharat Sports Foundation
            </h2>
            <p className="text-base sm:text-lg md:text-lg mb-6 text-gray-700 leading-relaxed">
              We collaborate with organizations to promote sports and wellness. Partner with us to create more opportunities for youth and community development.
            </p>
            <p className="text-base sm:text-lg md:text-lg mb-8 text-gray-700 leading-relaxed">
              Partner with a youth sports nonprofit in Bangalore committed to real impact and measurable social change through comprehensive sports development programs.
            </p>
 
            <div className="bg-white p-4 sm:p-6 rounded-xl border-2 border-gray-200 mb-8 overflow-hidden">
              <h4 className="text-lg sm:text-xl font-bold mb-4 text-gray-900">Contact Us:</h4>
              <div className="space-y-2">
                <p className="text-sm sm:text-base text-gray-700 flex items-start gap-2">
                  <span className="flex-shrink-0">📧</span>
                  <a href="mailto:partnerships@bharatsportsfoundation.org" className="text-[#7ab86a] hover:underline break-all">partnerships@bharatsportsfoundation.org</a>
                </p>
                <p className="text-sm sm:text-base text-gray-700 flex items-start gap-2">
                  <span className="flex-shrink-0">📞</span>
                  <a href="tel:+919867447334" className="text-[#7ab86a] hover:underline break-all">+91 98674 47334</a>
                </p>
              </div>
            </div>
 
            <Button className="bg-[#B8EA80] text-gray-900 hover:bg-[#98c889] px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-semibold transition-all duration-300 rounded-xl w-full sm:w-auto">
              Become a Partner
            </Button>
          </div>
        </div>
      </section>
 
 
      {/* Careers Section */}
      <section
        id="careers"
        className="py-12 sm:py-16 md:py-20 bg-white scroll-mt-20"
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Build Your Career With Us
            </h2>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">
              Work With Purpose. Build the Future of Indian Sports.
            </h3>
            <p className="text-base sm:text-lg md:text-lg mb-8 text-gray-700 leading-relaxed">
              Bharath Sports Foundation is a team of passionate professionals dedicated to making sports accessible to every young athlete in India regardless of background. If you're looking for a career that creates measurable social impact, you're in the right place.
            </p>
 
            <div className="bg-gradient-to-br from-[#B8EA80] to-[#98c889] p-4 sm:p-6 rounded-xl mb-12">
              <h4 className="text-lg sm:text-xl font-bold mb-4 text-gray-900">Why Work Here?</h4>
              <ul className="space-y-3 text-gray-900">
                <li className="flex items-start gap-3">
                  <span className="font-bold mt-1 flex-shrink-0">•</span>
                  <div>
                    <strong>Mission-Driven Work:</strong> Every day, your work directly impacts athletes, families, and communities. You'll see the lives you're changing.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold mt-1 flex-shrink-0">•</span>
                  <div>
                    <strong>Growth Opportunities:</strong> We invest in our team's development through training, mentorship, and leadership pathways.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold mt-1 flex-shrink-0">•</span>
                  <div>
                    <strong>Collaborative Culture:</strong> Work alongside passionate, talented people who care deeply about sports and social change.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold mt-1 flex-shrink-0">•</span>
                  <div>
                    <strong>Meaningful Benefits:</strong> Competitive compensation, health coverage, and work-life balance that respects your well-being.
                  </div>
                </li>
              </ul>
            </div>
 
 
            {/* What We Offer */}
            <div className="mb-16">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">
                What We Offer
              </h3>
              <ul className="space-y-3 text-sm sm:text-base text-gray-700 mb-10">
                <li className="flex items-start gap-3">
                  <span className="text-[#B8EA80] font-bold text-xl flex-shrink-0">✓</span>
                  <div><strong>Competitive Benefits</strong> : Fair compensation aligned with nonprofit standards</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#B8EA80] font-bold text-xl flex-shrink-0">✓</span>
                  <div><strong>Health Insurance</strong> : Medical coverage for you and your family</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#B8EA80] font-bold text-xl flex-shrink-0">✓</span>
                  <div><strong>Flexible Work Hours</strong> : Hybrid options where applicable</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#B8EA80] font-bold text-xl flex-shrink-0">✓</span>
                  <div><strong>Professional Development</strong> : Training budgets and learning opportunities</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#B8EA80] font-bold text-xl flex-shrink-0">✓</span>
                  <div><strong>Purpose-Driven Environment</strong> : Work that matters every single day</div>
                </li>
              </ul>
 
              <h4 className="text-xl sm:text-2xl font-bold mb-8 text-center text-gray-900">
                Why Join Our Team
              </h4>
 
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                {[
                  { icon: Clock, title: "Flexible Work Hours" },
                  { icon: PieChart, title: "Competitive Benefits" },
                  { icon: Coffee, title: "Free Coffee & Snacks" },
                  { icon: Maximize2, title: "Referral Bonus Program" },
                  { icon: Leaf, title: "Health & Wellness Programs" },
                  { icon: Shield, title: "Comprehensive Healthcare" },
                  { icon: Briefcase, title: "Annual Foundation Event" },
                  { icon: Home, title: "Modern Facility Spaces" },
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center p-3 sm:p-4 md:p-6 bg-gray-50 hover:bg-gray-100 transition-all duration-300 rounded-xl"
                  >
                    <div className="bg-[#B8EA80] p-3 sm:p-4 mb-3 sm:mb-4 rounded-lg">
                      <benefit.icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-gray-900" />
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-gray-900 leading-tight">
                      {benefit.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
 
 
            {/* Job Openings */}
            <div>
              <div className="flex items-center gap-3 mb-10">
                <Briefcase className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-[#B8EA80] flex-shrink-0" />
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                  Current Openings
                </h3>
              </div>
 
 
              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    title: "Program Manager — Athlete Support",
                    location: "Bangalore, Karnataka",
                    type: "Full Time",
                    description:
                      "Lead and mentor athletes with expert coaching techniques, develop training programs, and drive athletic excellence",
 
 
                  },
                  {
                    title: "Sports Coordinator",
                    location: "Bangalore, Karnataka (with travel to districts)",
                    type: "Full Time",
                    description:
                      "Organize and manage large-scale sports events and community programs, from planning to execution",
 
 
                  },
                  {
                    title: "Fundraising & Communications Manager",
                    location: "Remote or Bangalore",
                    type: "Full Time",
                    description:
                      "Oversee program development, implementation, and impact measurement across multiple initiatives",
 
 
                  },
                ].map((job, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row md:items-center md:justify-between p-4 sm:p-6 md:p-7 lg:p-8 bg-gradient-to-br from-gray-50 to-gray-100 hover:from-white hover:to-gray-50 transition-all duration-300 border-2 border-gray-200 hover:border-[#B8EA80] rounded-2xl shadow-md hover:shadow-lg group"
                  >
                    <div className="mb-4 md:mb-0 flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-3 mb-3">
                        <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-[#7ab86a] transition-colors">
                          {job.title}
                        </h4>
                        <span className="inline-block bg-gradient-to-r from-[#B8EA80] to-[#98c889] text-gray-900 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap w-fit">
                          {job.type}
                        </span>
                      </div>
 
 
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 mb-3">
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-[#B8EA80] flex-shrink-0 mt-0.5" />
                          <span>{job.location}</span>
                        </div>
 
 
                      </div>
 
 
                      <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                        {job.description}
                      </p>
                    </div>
 
 
                    <Button className="gap-2 bg-gradient-to-r from-[#B8EA80] to-[#98c889] text-gray-900 hover:from-[#98c889] hover:to-[#7ab86a] mt-4 md:mt-0 w-full md:w-auto px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 text-xs sm:text-sm md:text-base font-semibold transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105">
                      Apply Now
                      <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </div>
                ))}
              </div>
 
 
              <div className="mt-12 bg-gray-50 p-4 sm:p-6 rounded-xl border-2 border-gray-200 overflow-hidden">
                <h4 className="text-base sm:text-lg md:text-xl font-bold mb-4 text-gray-900">How to Apply</h4>
                <ol className="space-y-2 text-xs sm:text-sm md:text-base text-gray-700 mb-6">
                  <li className="break-words">1. Review the job description to ensure you're a good fit</li>
                  <li className="break-words">2. Send your resume and cover letter to <a href="mailto:careers@bharatsportsfoundation.org" className="text-[#7ab86a] hover:underline break-all">careers@bharatsportsfoundation.org</a></li>
                  <li className="break-words">3. Subject line: [Position Name] – [Your Name]</li>
                  <li className="break-words">4. Include: Why you're passionate about sports development and what you'd bring to the role</li>
                </ol>
                <p className="text-xs sm:text-sm text-gray-600">
                  We review applications on a rolling basis and aim to respond within 2 weeks.
                </p>
              </div>
 
              <div className="mt-10 text-center">
                <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-4">
                  Don't see the right role? We're always looking for talented individuals.
                </p>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-2 border-[#B8EA80] text-[#00000] hover:bg-[#B8EA80]/10 px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold rounded-xl transition-all duration-300 w-full sm:w-auto"
                  >
                    Send Us Your Resume
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
 
 
      <Footer />
    </main>
  );
}
 