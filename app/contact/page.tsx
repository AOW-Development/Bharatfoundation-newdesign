"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ContactForm from "@/components/contact-form1";
import { Phone, Mail, MapPin, Share2, Instagram, Twitter } from "lucide-react";
import Banner from "@/components/banner";

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <Banner
        imageUrl="/images/contactusbanner.jpg"
        videoUrl="/images/contactus-banner.mp4"
      />

      {/* Contact Section */}
      <section
        className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-64
  py-12 sm:py-14 md:py-20 lg:py-24
  -mt-6 sm:-mt-8 md:-mt-16"
      >
        <div className="container mx-auto px-0 sm:px-0">
          {/* Combined Contact Information and Form */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Contact Information */}
              <div className="p-6 sm:p-7 md:p-8 pt-8 sm:pt-9 md:pt-10 border-b md:border-b-0 md:border-r border-gray-100">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-7 md:mb-8 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Contact Information
                </h2>

                <div className="space-y-5 sm:space-y-6 md:space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4 group transition-all duration-300">
                    <div className="p-3 bg-[#B8EA80] rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300 flex-shrink-0">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                        Phone
                      </h3>
                      <a
                        href="tel:+919894500669"
                        className="text-gray-600 hover:text-[#00000] transition-colors text-xs sm:text-sm md:text-base block"
                      >
                        +91 98945 00669
                      </a>
                      <a
                        href="tel:+919867447334"
                        className="text-gray-600 hover:text-[#00000] transition-colors text-xs sm:text-sm md:text-base block mt-1"
                      >
                        +91 98674 47334
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 group transition-all duration-300">
                    <div className="p-3 bg-[#B8EA80] rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300 flex-shrink-0">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                        E-mail
                      </h3>
                      <a
                        href="mailto:bharatsportsfoundation@gmail.com"
                        className="text-gray-600 hover:text-[#00000] transition-colors text-xs sm:text-sm md:text-base break-all"
                      >
                        bharatsportsfoundation@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4 group transition-all duration-300">
                    <div className="p-3 bg-[#B8EA80] rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300 flex-shrink-0">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                        Address
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                        58/2, first floor, Sriranga complex, opp to century
                        breeze apartment, behind ICICI ATM, Surabhi layout,
                        Yalahanka
                      </p>
                      <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed mt-2">
                        Bangalore, Karnataka, 560064
                      </p>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="flex items-start gap-4 group transition-all duration-300">
                    <div className="p-3 bg-[#B8EA80] rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300 flex-shrink-0">
                      <Share2 className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">
                        Social Media
                      </h3>
                      <div className="flex gap-3 sm:gap-4">
                        <a
                          href="https://www.instagram.com/bharatsportsfoundation_/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 bg-gradient-to-br from-[#B8EA80] to-[#98c889] text-gray-900 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                          title="Instagram"
                        >
                          <Instagram className="w-5 h-5" />
                        </a>
                        <a
                          href="#"
                          className="p-2.5 bg-gradient-to-br from-[#B8EA80] to-[#98c889] text-gray-900 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                          title="Twitter"
                        >
                          <Twitter className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form Component */}
              <div className="p-6 sm:p-7 md:p-8">
                <ContactForm />
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 h-64 sm:h-80 md:h-96 lg:h-[400px] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9329.795929070526!2d77.60105988388945!3d13.092310102944248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19fc6d3d1375%3A0xa85005b870e9d094!2sCentury%20Breeze!5e0!3m2!1sen!2sin!4v1763371648973!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}