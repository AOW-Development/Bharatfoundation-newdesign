"use client";
import Header from "@/components/header";
import type React from "react";

import Footer from "@/components/footer";
import Image from "next/image";
import { Phone, Mail, MapPin, Share2, Instagram, Twitter } from "lucide-react";
import { useState } from "react";
import Banner from "@/components/banner";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Banner Section */}
      {/* <section className="relative pt-20 h-[40vh] w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/contact-banner.jpg"
            alt="Contact Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl opacity-90">Get in touch with our team</p>
          </div>
        </div>
      </section> */}
      {/* <Banner
        mediaUrl="/images/contactusbanner.jpg"
        heading=""
        paragraph=""
        // buttonText="Donate Here"
        // buttonLink="/donate"
      /> */}
      <Banner
        imageUrl="/images/contactusbanner.jpg"
        videoUrl="/images/contactus-banner.mp4"
      />
      {/* Contact Section */}
      <section className="md:px-64 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Phone</h3>
                    <p className="text-gray-600">+91 98945 00669</p>
                    <p className="text-gray-600">+91 98674 47334</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">E-mail</h3>
                    <p className="text-gray-600">bharatsportsfoundation@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Address</h3>
                    <p className="text-gray-600">58/2, first floor, Sriranga complex,opp to century breeze apartment,behind ICICI ATM, Surabhi layout, Yalahanka</p>
                    <p className="text-gray-600">Bangalore, Karnataka, 560064</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Share2 className="w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Social Media</h3>
                    <div className="flex gap-4">
                      <a href="https://www.instagram.com/bharatsportsfoundation_/" className="hover:text-gray-600" target="_blank">
                        <Instagram className="w-6 h-6" />
                      </a>
                      <a href="#" className="hover:text-gray-600">
                        <Twitter className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-black text-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 text-sm">First Name</label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      className="w-full p-2 bg-transparent border-b border-white/30 focus:border-white outline-none"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm">Last Name</label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      className="w-full p-2 bg-transparent border-b border-white/30 focus:border-white outline-none"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-sm">E-mail</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full p-2 bg-transparent border-b border-white/30 focus:border-white outline-none"
                    placeholder="contact@sportsfoundation.com"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full h-32 p-2 bg-transparent border-b border-white/30 focus:border-white outline-none resize-none"
                    placeholder="Enter your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#B8EA80] text-black font-semibold py-3 rounded hover:bg-[#98c889] transition-colors"
                >
                  Send &gt;
                </button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-12 h-[400px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.1813836710974!2d12.568337776916292!3d55.67584097309432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652533c5c803d23%3A0x4dd7edde69467b8!2sCopenhagen%2C%20Denmark!5e0!3m2!1sen!2sus!4v1708532943635!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
