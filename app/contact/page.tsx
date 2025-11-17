"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ContactForm from "@/components/contact-form";
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
      <section className="md:px-64 md:py-32 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="p-3 bg-[#B8EA80] rounded-lg group-hover:shadow-md transition-shadow">
                    <Phone className="w-5 h-5 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Phone</h3>
                    <p className="text-gray-600 hover:text-gray-900 transition-colors">
                      +91 98945 00669
                    </p>
                    <p className="text-gray-600 hover:text-gray-900 transition-colors">
                      +91 98674 47334
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="p-3 bg-[#B8EA80] rounded-lg group-hover:shadow-md transition-shadow">
                    <Mail className="w-5 h-5 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">E-mail</h3>
                    <p className="text-gray-600 hover:text-gray-900 transition-colors break-all">
                      bharatsportsfoundation@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="p-3 bg-[#B8EA80] rounded-lg group-hover:shadow-md transition-shadow">
                    <MapPin className="w-5 h-5 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Address</h3>
                    <p className="text-gray-600">
                      58/2, first floor, Sriranga complex, opp to century breeze
                      apartment, behind ICICI ATM, Surabhi layout, Yalahanka
                    </p>
                    <p className="text-gray-600 mt-1">
                      Bangalore, Karnataka, 560064
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="p-3 bg-[#B8EA80] rounded-lg group-hover:shadow-md transition-shadow">
                    <Share2 className="w-5 h-5 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Social Media</h3>
                    <div className="flex gap-4">
                      <a
                        href="https://www.instagram.com/bharatsportsfoundation_/"
                        className="p-2 bg-gradient-to-br from-pink-500 to-purple-600 text-white rounded-lg hover:scale-110 hover:shadow-lg transition-all duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                      <a
                        href="#"
                        className="p-2 bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-lg hover:scale-110 hover:shadow-lg transition-all duration-300"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Component */}
            <ContactForm />
          </div>

          {/* Map Section */}
          <div className="mt-12 h-[400px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200">
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
