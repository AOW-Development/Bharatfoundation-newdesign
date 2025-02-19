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
        imageUrl="/images/home_banner.png"
        heading=" Welcome to Bharat Sports Foundation"
        paragraph=" Your ultimate destination for everything related to physical
                    education and sports"
        buttonText="Donate Here"
        buttonLink="/donate"
      />
      {/* Volunteer Section */}
      <section id="volunteer" className="py-16 bg-[#B7E4A7] scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Volunteer</h2>
            <p className="text-lg mb-8">
              Join our team of volunteers and make a difference in the
              community. Whether you are interested in coaching, organizing
              events, or administrative tasks, we have a place for you.
            </p>
            <Button className="bg-white text-black hover:bg-gray-100">
              Sign Up to Volunteer
            </Button>
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section
        id="donate"
        className="py-16 bg-gray-700 text-white scroll-mt-20"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Donate</h2>
            <p className="text-lg mb-8">
              Your contributions help us fund programs and support athletes.
              Every donation, big or small, makes a significant impact.
            </p>
            <Button className="bg-[#B7E4A7] text-black hover:bg-[#98c889]">
              Donate Now
            </Button>
          </div>
        </div>
      </section>

      {/* Partner with Us Section */}
      <section id="partner" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Partner with Us</h2>
            <p className="text-lg mb-8">
              We collaborate with organizations to promote sports and wellness.
              Partner with us to create more opportunities for youth and
              community development.
            </p>
            <Button className="bg-[#B7E4A7] text-black hover:bg-[#98c889]">
              Become a Partner
            </Button>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="py-16 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Careers</h2>
            <p className="text-lg mb-8">
              Join our team of dedicated professionals and contribute to the
              growth of sports and wellness in the community. Explore career
              opportunities with us.
            </p>

            {/* What We Offer Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-8 text-center">
                What we offer
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { icon: Clock, title: "Flexible Work Hours" },
                  { icon: PieChart, title: "Competitive Benefits" },
                  { icon: Coffee, title: "Free coffee & snacks" },
                  { icon: Maximize2, title: "Referral Bonus" },
                  { icon: Leaf, title: "Health & Wellness Programs" },
                  { icon: Shield, title: "Comprehensive Healthcare" },
                  { icon: Briefcase, title: "Annual Foundation Event" },
                  { icon: Home, title: "Modern Facility Spaces" },
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="bg-[#B7E4A7] p-4 rounded-lg mb-3">
                      <benefit.icon className="h-6 w-6" />
                    </div>
                    <p className="text-sm font-medium">{benefit.title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Current Openings */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Current Openings</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Sports Coach",
                    location: "Bangalore",
                    type: "Full Time",
                  },
                  {
                    title: "Event Coordinator",
                    location: "Delhi",
                    type: "Full Time",
                  },
                  {
                    title: "Program Manager",
                    location: "Mumbai",
                    type: "Full Time",
                  },
                ].map((job, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div>
                      <h4 className="font-bold mb-1">{job.title}</h4>
                      <p className="text-sm text-gray-600">
                        {job.location} • {job.type}
                      </p>
                    </div>
                    <Button variant="ghost" className="gap-2">
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
