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
import { Mail, Phone } from "lucide-react";

export default function GetInvolvedPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Head>
        <title>
          Get Involved with a Sports NGO in Bangalore | Support Youth
        </title>
        <meta
          name="description"
          content="Get involved with a sports NGO in Bangalore and empower young athletes with training, mentorship, and sports opportunities for a brighter future."
        />
        <meta
          name="keywords"
          content="Get involved with a sports NGO in Bangalore, sports event volunteer in India, volunteer and donate to sports NGO, partner with a youth sports nonprofit in Bangalore"
        />
        <meta
          name="canonical"
          content="https://bharatsportsfoundation.org/get-involved-with-a-sports-ngo-in-bangalore"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Get Involved with a Sports NGO in Bangalore | Support Youth"
        />
        <meta
          property="og:description"
          content="Get involved with a sports NGO in Bangalore and empower young athletes with training, mentorship, and sports opportunities for a brighter future."
        />
        <meta
          property="og:url"
          content="https://bharatsportsfoundation.org/get-involved-with-a-sports-ngo-in-bangalore"
        />
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
              Behind every medal, every personal best, every breakthrough
              moment, there's a network of people who believed, supported, and
              showed up. You can be that person.
            </p>
            <p className="text-base sm:text-lg md:text-lg mb-8 text-gray-800 leading-relaxed">
              Bharath Sports Foundation runs on the passion and commitment of
              volunteers who give their time, skills, and energy to change lives
              through sports. Get involved with a sports NGO in Bangalore and
              become part of something meaningful. No matter your background, we
              have a place for you.
            </p>

            <div className="mb-8">
              <h4 className="text-lg sm:text-xl font-bold mb-4 text-gray-900">
                Why Volunteer With Us?
              </h4>
              <ul className="space-y-3 text-gray-800">
                <li className="flex items-start gap-3">
                  <span className="text-gray-900 font-bold mt-1">•</span>
                  <div>
                    <strong>Create Real Impact:</strong> Your time directly
                    supports athletes who lack resources but not determination.
                    You'll see the difference you make in real time.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-900 font-bold mt-1">•</span>
                  <div>
                    <strong>Share Your Skills:</strong> Whether you're a former
                    athlete, a coach, an organizer, a photographer, or just
                    someone who cares, your skills matter here.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-900 font-bold mt-1">•</span>
                  <div>
                    <strong>Build Community:</strong> Join a team of passionate
                    people working toward the same goal: giving every young
                    athlete a fair shot.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-900 font-bold mt-1">•</span>
                  <div>
                    <strong>Flexible Commitment:</strong> Volunteer for a day, a
                    weekend, a season, or long-term. We work around your
                    schedule.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-900 font-bold mt-1">•</span>
                  <div>
                    <strong>Personal Growth:</strong> Gain leadership
                    experience, mentoring skills, and the deep satisfaction of
                    helping someone achieve their dreams.
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 text-white p-6 rounded-xl mb-8">
              <h4 className="text-lg sm:text-xl font-bold mb-3">
                Join Our Volunteer Community Today
              </h4>
              <p className="text-base leading-relaxed mb-2">
                Every weekend, every training session, every tournament —
                volunteers make it possible.
              </p>
              <p className="text-base leading-relaxed">
                Be the reason a talented athlete doesn't quit. Get involved with
                a sports NGO in Bangalore today and become a sports event
                volunteer in India.
              </p>
            </div>

            <Link href="/contact">
              <Button className="bg-gray-900 text-white hover:bg-gray-800 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-semibold transition-all duration-300 rounded-xl w-full sm:w-auto">
                Volunteer With Us
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
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              Volunteer and Donate to Sports NGO
            </h3>
            <p className="text-base sm:text-lg md:text-lg mb-6 leading-relaxed">
              Your contributions help us fund programs and support athletes.
              Every donation, big or small, makes a significant impact.
            </p>

            <div className="mb-8">
              <h4 className="text-lg sm:text-xl font-bold mb-4">
                Multiple Ways to Get Involved with a Sports NGO in Bangalore
              </h4>
              <p className="text-base mb-4 leading-relaxed">
                Whether you want to volunteer and donate to sports NGO programs
                or partner with a youth sports nonprofit in Bangalore, we have
                opportunities that match your interests and capacity.
              </p>

              <div className="space-y-4 text-base">
                <div>
                  <strong className="block mb-2">Volunteer Your Time:</strong>
                  <ul className="space-y-1 ml-4">
                    <li>• Coach young athletes</li>
                    <li>
                      • Organize tournaments as sports event volunteers in India
                    </li>
                    <li>• Mentor and guide aspiring athletes</li>
                    <li>• Support our programs administratively</li>
                  </ul>
                </div>

                <div>
                  <strong className="block mb-2">
                    Donate to Youth Sports Charity:
                  </strong>
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
                    <li>
                      • Partner with the youth sports nonprofit Bangalore for
                      CSR initiatives
                    </li>
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
              We collaborate with organizations to promote sports and wellness.
              Partner with us to create more opportunities for youth and
              community development.
            </p>
            <p className="text-base sm:text-lg md:text-lg mb-8 text-gray-700 leading-relaxed">
              Partner with a youth sports nonprofit in Bangalore committed to
              real impact and measurable social change through comprehensive
              sports development programs.
            </p>

            <div className="bg-white p-4 sm:p-6 rounded-xl border-2 border-gray-200 mb-8 overflow-hidden">
              <h4 className="text-lg sm:text-xl font-bold mb-4 text-gray-900">
                Contact Us:
              </h4>
              <div className="space-y-2">
                <p className="text-sm sm:text-base text-gray-700 flex items-start gap-2">
                  <Mail className="w-5 h-5 text-[#000000] flex-shrink-0" />
                  <a
                    href="mailto:partnerships@bharatsportsfoundation.org"
                    className="text-[#7ab86a] hover:underline break-all"
                  >
                    partnerships@bharatsportsfoundation.org
                  </a>
                </p>

                <p className="text-sm sm:text-base text-gray-700 flex items-start gap-2">
                  <Phone className="w-5 h-5 text-[#00000] flex-shrink-0" />
                  <a
                    href="tel:+919867447334"
                    className="text-[#7ab86a] hover:underline break-all"
                  >
                    +91 98674 47334
                  </a>
                </p>
              </div>
            </div>

            <Link href="/contact" passHref>
              <Button className="bg-[#B8EA80] text-gray-900 hover:bg-[#98c889] px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-semibold transition-all duration-300 rounded-xl w-full sm:w-auto">
                Become a Partner
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
