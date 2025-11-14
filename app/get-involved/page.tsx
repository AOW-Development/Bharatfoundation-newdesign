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
  ArrowRight,
} from "lucide-react";
import Banner from "@/components/banner";
import Link from "next/link";

export default function GetInvolvedPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Banner Section */}
      {/* <section className="relative pt-20 h-[40vh] w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/get-involved-banner.jpg"
            alt="Get Involved Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get Involved
            </h1>
            <p className="text-xl opacity-90">Join us in making a difference</p>
          </div>
        </div>
      </section> */}

      <Banner
        mediaUrl="/images/getinvolvedBanner.jpg"
        heading="Welcome to Bharat Sports Foundation"
        paragraph="Your ultimate destination for everything related to physical education and sports"
      />

      {/* Volunteer Section */}
      <section id="volunteer" className="py-12 sm:py-16 md:py-20 bg-[#B8EA80] scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Volunteer With Us
            </h2>
            <p className="text-base sm:text-lg md:text-lg mb-8 text-gray-800 leading-relaxed">
             Join our team of volunteers and make a difference in the community. Whether you are interested in coaching, organizing events, or administrative tasks, we have a place for you.
            </p>
            <Button className="bg-gray-900 text-white hover:bg-gray-800 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-semibold transition-all duration-300">
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
            <p className="text-base sm:text-lg md:text-lg mb-8 leading-relaxed">
             Your contributions help us fund programs and support athletes. Every donation, big or small, makes a significant impact.
            </p>
           <Link href="/donate" passHref>
  <Button className="bg-[#B8EA80] text-gray-900 hover:bg-[#98c889] px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-semibold transition-all duration-300">
    Donate Now
  </Button>
</Link>

          </div>
        </div>
      </section>

      {/* Partner with Us Section */}
      <section id="partner" className="py-12 sm:py-16 md:py-20 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Partner With Bharat Sports Foundation
            </h2>
            <p className="text-base sm:text-lg md:text-lg mb-8 text-gray-700 leading-relaxed">
             We collaborate with organizations to promote sports and wellness. Partner with us to create more opportunities for youth and community development.
            </p>
            <Button className="bg-[#B8EA80] text-gray-900 hover:bg-[#98c889] px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-semibold transition-all duration-300">
              Become a Partner
            </Button>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="py-12 sm:py-16 md:py-20 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Build Your Career With Us
            </h2>
            <p className="text-base sm:text-lg md:text-lg mb-12 text-gray-700 leading-relaxed">
              Join our team of dedicated professionals and contribute to the growth of sports and wellness in the community. Explore career opportunities with us.
            </p>

            {/* What We Offer Section */}
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
                    className="flex flex-col items-center text-center p-4 sm:p-6 bg-gray-50 hover:bg-gray-100 transition-all duration-300"
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

            {/* Current Openings */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-10 text-gray-900">
                Current Openings
              </h3>
              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    title: "Sports Coach",
                    location: "Bangalore",
                    type: "Full Time",
                    description: "Lead and mentor athletes with expert coaching techniques"
                  },
                  {
                    title: "Event Coordinator",
                    location: "Delhi",
                    type: "Full Time",
                    description: "Organize and manage sports events and community programs"
                  },
                  {
                    title: "Program Manager",
                    location: "Mumbai",
                    type: "Full Time",
                    description: "Oversee program development and implementation"
                  },
                ].map((job, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-5 sm:p-6 md:p-8 bg-gray-50 hover:bg-gray-100 transition-all duration-300 border border-gray-200"
                  >
                    <div className="mb-4 sm:mb-0 flex-1">
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                        {job.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 mb-2">
                        {job.location} • {job.type}
                      </p>
                      <p className="text-sm text-gray-700">
                        {job.description}
                      </p>
                    </div>
                    <Button 
                      variant="ghost" 
                      className="gap-2 text-[#00000] hover:bg-gray-200 mt-4 sm:mt-0 w-full sm:w-auto justify-center sm:justify-start font-semibold transition-all duration-300"
                    >
                      Apply Now
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
