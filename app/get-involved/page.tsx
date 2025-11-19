import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
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
            <p className="text-base sm:text-lg md:text-lg mb-8 text-gray-800 leading-relaxed">
              Join our team of volunteers and make a difference in the
              community. Whether you are interested in coaching, organizing
              events, or administrative tasks, we have a place for you.
            </p>
            <Link href="/contact">
              <Button className="bg-gray-900 text-white hover:bg-gray-800 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-semibold transition-all duration-300 rounded-xl">
                Join as a Volunteer
              </Button>
            </Link>
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
            <p className="text-base sm:text-lg md:text-lg mb-8 leading-relaxed">
              Your contributions help us fund programs and support athletes.
              Every donation, big or small, makes a significant impact.
            </p>
            <Link href="/donate" passHref>
              <Button className="bg-[#B8EA80] text-gray-900 hover:bg-[#98c889] px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-semibold transition-all duration-300 rounded-xl">
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
            <p className="text-base sm:text-lg md:text-lg mb-8 text-gray-700 leading-relaxed">
              We collaborate with organizations to promote sports and wellness.
              Partner with us to create more opportunities for youth and
              community development.
            </p>
            <Link href="/contact">
              <Button className="bg-[#B8EA80] text-gray-900 hover:bg-[#98c889] px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-semibold transition-all duration-300 rounded-xl">
                Become a Partner
              </Button>
            </Link>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Build Your Career With Us
            </h2>
            <p className="text-base sm:text-lg md:text-lg mb-12 text-gray-700 leading-relaxed">
              Join our team of dedicated professionals and contribute to the
              growth of sports and wellness in the community. Explore career
              opportunities with us.
            </p>

            {/* What We Offer */}
            <div className="mb-16">
              <h3 className="text-2xl sm:text-3xl font-bold mb-10 text-center text-gray-900">
                Why Join Our Team
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8">
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
                    className="flex flex-col items-center text-center p-4 sm:p-6 bg-gray-50 hover:bg-gray-100 transition-all duration-300 rounded-xl"
                  >
                    <div className="bg-[#B8EA80] p-4 mb-4">
                      <benefit.icon className="h-6 w-6 sm:h-7 sm:w-7 text-gray-900" />
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
                <Briefcase className="h-7 w-7 sm:h-8 sm:w-8 text-[#B8EA80]" />
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Current Openings
                </h3>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    title: "Sports Coach",
                    location: "Bangalore",
                    type: "Full Time",
                    description:
                      "Lead and mentor athletes with expert coaching techniques, develop training programs, and drive athletic excellence",
                  },
                  {
                    title: "Event Coordinator",
                    location: "Bangalore",
                    type: "Full Time",
                    description:
                      "Organize and manage large-scale sports events and community programs, from planning to execution",
                  },
                  {
                    title: "Program Manager",
                    location: "Bangalore",
                    type: "Full Time",
                    description:
                      "Oversee program development, implementation, and impact measurement across multiple initiatives",
                  },
                ].map((job, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row md:items-center md:justify-between p-6 sm:p-7 md:p-8 bg-gradient-to-br from-gray-50 to-gray-100 hover:from-white hover:to-gray-50 transition-all duration-300 border-2 border-gray-200 hover:border-[#B8EA80] rounded-2xl shadow-md hover:shadow-lg group"
                  >
                    <div className="mb-5 md:mb-0 flex-1">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 group-hover:text-[#7ab86a] transition-colors">
                          {job.title}
                        </h4>
                        <span className="inline-block bg-gradient-to-r from-[#B8EA80] to-[#98c889] text-gray-900 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                          {job.type}
                        </span>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-[#B8EA80]" />
                          <span>{job.location}</span>
                        </div>
                      </div>

                      <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                        {job.description}
                      </p>
                    </div>

                    <Button className="gap-2 bg-gradient-to-r from-[#B8EA80] to-[#98c889] text-gray-900 hover:from-[#98c889] hover:to-[#7ab86a] mt-5 md:mt-0 w-full md:w-auto px-6 md:px-8 py-3 font-semibold transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105">
                      Apply Now
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>

              <div className="mt-10 text-center">
                <p className="text-gray-600 text-sm sm:text-base mb-4">
                  Don't see the right role? We're always looking for talented
                  individuals.
                </p>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-2 border-[#B8EA80] text-[#00000] hover:bg-[#B8EA80]/10 px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold rounded-xl transition-all duration-300"
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
