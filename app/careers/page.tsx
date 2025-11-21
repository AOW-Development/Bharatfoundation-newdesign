"use client";

import React from "react";
import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  MapPin,
  Briefcase,
  X,
  Upload,
  CheckCircle,
} from "lucide-react";
import Banner from "@/components/banner";
import {
  Clock,
  PieChart,
  Coffee,
  Maximize2,
  Leaf,
  Shield,
  Home,
} from "lucide-react";

interface JobOpening {
  title: string;
  location: string;
  type: string;
  description: string;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  position: string;
  resume: File | null;
}

interface GeneralFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  resume: File | null;
}

interface SubmitStatus {
  type: "success" | "error";
  message: string;
}

const jobOpenings: JobOpening[] = [
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
];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [showGeneralForm, setShowGeneralForm] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    position: "",
    resume: null,
  });
  const [generalFormData, setGeneralFormData] = useState<GeneralFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    resume: null,
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus | null>(null);
  const [fileError, setFileError] = useState<string>("");
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);

  const handleApplyClick = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setFormData({ ...formData, position: jobTitle });
    setSubmitStatus(null);
    setFileError("");
  };

  const handleGeneralApplyClick = () => {
    setShowGeneralForm(true);
    setSubmitStatus(null);
    setFileError("");
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGeneralInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setGeneralFormData({ ...generalFormData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileError("");

    if (file) {
      // Check if file is PDF
      if (file.type !== "application/pdf") {
        setFileError("Please upload only PDF files");
        e.target.value = "";
        return;
      }

      // Check file size (2MB = 2 * 1024 * 1024 bytes)
      if (file.size > 2 * 1024 * 1024) {
        setFileError("File size must be less than 2MB");
        e.target.value = "";
        return;
      }

      setFormData({ ...formData, resume: file });
    }
  };

  const handleGeneralFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileError("");

    if (file) {
      // Check if file is PDF
      if (file.type !== "application/pdf") {
        setFileError("Please upload only PDF files");
        e.target.value = "";
        return;
      }

      // Check file size (2MB = 2 * 1024 * 1024 bytes)
      if (file.size > 2 * 1024 * 1024) {
        setFileError("File size must be less than 2MB");
        e.target.value = "";
        return;
      }

      setGeneralFormData({ ...generalFormData, resume: file });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Create FormData for file upload
      const submitData = new FormData();
      submitData.append("firstName", formData.firstName);
      submitData.append("lastName", formData.lastName);
      submitData.append("email", formData.email);
      submitData.append("phone", formData.phone);
      submitData.append("address", formData.address);
      submitData.append("position", formData.position);
      if (formData.resume) {
        submitData.append("resume", formData.resume);
      }

      const response = await fetch("/api/apply", {
        method: "POST",
        body: submitData,
      });

      const data = await response.json();

      if (response.ok) {
        setShowSuccessModal(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
          position: "",
          resume: null,
        });
        setSelectedJob(null);
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to submit application",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGeneralSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Create FormData for file upload
      const submitData = new FormData();
      submitData.append("firstName", generalFormData.firstName);
      submitData.append("lastName", generalFormData.lastName);
      submitData.append("email", generalFormData.email);
      submitData.append("phone", generalFormData.phone);
      submitData.append("address", generalFormData.address);
      submitData.append("position", "General Application");
      if (generalFormData.resume) {
        submitData.append("resume", generalFormData.resume);
      }

      const response = await fetch("/api/apply", {
        method: "POST",
        body: submitData,
      });

      const data = await response.json();

      if (response.ok) {
        setShowSuccessModal(true);
        setGeneralFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
          resume: null,
        });
        setShowGeneralForm(false);
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to submit application",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setSelectedJob(null);
    setSubmitStatus(null);
    setFileError("");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      position: "",
      resume: null,
    });
  };

  const closeGeneralModal = () => {
    setShowGeneralForm(false);
    setSubmitStatus(null);
    setFileError("");
    setGeneralFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      resume: null,
    });
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <Banner mediaUrl="/images/career.jpg" />

      {/* Careers Introduction */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 text-center lg:text-left">
              Join Our Mission
            </h2>
            <p className="text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 text-gray-700 leading-relaxed text-center lg:text-left">
              Bharat Sports Foundation is a team of passionate professionals
              dedicated to making sports accessible to every young athlete in
              India regardless of background. If you&apos;re looking for a
              career that creates measurable social impact, you&apos;re in the
              right place.
            </p>

            <div className="bg-gradient-to-br from-[#B8EA80] to-[#98c889] p-6 sm:p-8 lg:p-10 rounded-2xl mb-8 sm:mb-12 shadow-lg">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-gray-900 text-center lg:text-left">
                Why Work Here?
              </h3>
              <ul className="space-y-3 sm:space-y-4 text-gray-900">
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="font-bold text-lg sm:text-xl flex-shrink-0 mt-1">
                    •
                  </span>
                  <div className="text-sm sm:text-base">
                    <strong>Mission-Driven Work:</strong> Every day, your work
                    directly impacts athletes, families, and communities.
                    You&apos;ll see the lives you&apos;re changing.
                  </div>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="font-bold text-lg sm:text-xl flex-shrink-0 mt-1">
                    •
                  </span>
                  <div className="text-sm sm:text-base">
                    <strong>Growth Opportunities:</strong> We invest in our
                    team&apos;s development through training, mentorship, and
                    leadership pathways.
                  </div>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="font-bold text-lg sm:text-xl flex-shrink-0 mt-1">
                    •
                  </span>
                  <div className="text-sm sm:text-base">
                    <strong>Collaborative Culture:</strong> Work alongside
                    passionate, talented people who care deeply about sports and
                    social change.
                  </div>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="font-bold text-lg sm:text-xl flex-shrink-0 mt-1">
                    •
                  </span>
                  <div className="text-sm sm:text-base">
                    <strong>Meaningful Benefits:</strong> Competitive
                    compensation, health coverage, and work-life balance that
                    respects your well-being.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-gray-900 text-center">
              What We Offer
            </h3>
            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 mb-10 sm:mb-12 max-w-3xl mx-auto">
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-[#B8EA80] font-bold text-lg sm:text-xl flex-shrink-0 mt-1">
                  ✓
                </span>
                <div>
                  <strong>Competitive Benefits</strong> : Fair compensation
                  aligned with nonprofit standards
                </div>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-[#B8EA80] font-bold text-lg sm:text-xl flex-shrink-0 mt-1">
                  ✓
                </span>
                <div>
                  <strong>Health Insurance</strong> : Medical coverage for you
                  and your family
                </div>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-[#B8EA80] font-bold text-lg sm:text-xl flex-shrink-0 mt-1">
                  ✓
                </span>
                <div>
                  <strong>Flexible Work Hours</strong> : Hybrid options where
                  applicable
                </div>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-[#B8EA80] font-bold text-lg sm:text-xl flex-shrink-0 mt-1">
                  ✓
                </span>
                <div>
                  <strong>Professional Development</strong> : Training budgets
                  and learning opportunities
                </div>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-[#B8EA80] font-bold text-lg sm:text-xl flex-shrink-0 mt-1">
                  ✓
                </span>
                <div>
                  <strong>Purpose-Driven Environment</strong> : Work that
                  matters every single day
                </div>
              </li>
            </ul>

            <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 lg:mb-10 text-center text-gray-900">
              Why Join Our Team
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
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
                  className="flex flex-col items-center text-center p-3 sm:p-4 lg:p-6 bg-gray-50 hover:bg-gray-100 transition-all duration-300 rounded-xl"
                >
                  <div className="bg-[#B8EA80] p-2.5 sm:p-3 lg:p-4 mb-2 sm:mb-3 lg:mb-4 rounded-lg">
                    <benefit.icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-gray-900" />
                  </div>
                  <p className="text-xs sm:text-sm lg:text-base font-semibold text-gray-900 leading-tight">
                    {benefit.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3 mb-8 sm:mb-10 lg:mb-12">
              <Briefcase className="h-7 w-7 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-[#B8EA80] flex-shrink-0" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 text-center sm:text-left">
                Current Openings
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {jobOpenings.map((job, index) => (
                <div
                  key={index}
                  className="flex flex-col p-5 sm:p-6 lg:p-8 bg-gradient-to-br from-gray-50 to-gray-100 hover:from-white hover:to-gray-50 transition-all duration-300 border-2 border-gray-200 hover:border-[#B8EA80] rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl group"
                >
                  <div className="mb-4">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-3 mb-3">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-[#7ab86a] transition-colors">
                        {job.title}
                      </h3>
                      <span className="inline-block bg-gradient-to-r from-[#B8EA80] to-[#98c889] text-gray-900 text-xs sm:text-sm font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full whitespace-nowrap w-fit">
                        {job.type}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 mb-3">
                      <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#B8EA80] flex-shrink-0" />
                      <span>{job.location}</span>
                    </div>

                    <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-4">
                      {job.description}
                    </p>
                  </div>

                  <Button
                    onClick={() => handleApplyClick(job.title)}
                    className="gap-2 bg-gradient-to-r from-[#B8EA80] to-[#98c889] text-gray-900 hover:from-[#98c889] hover:to-[#7ab86a] w-full sm:w-auto sm:self-end px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold transition-all duration-300 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Apply Now
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Modal for Specific Position */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-3 sm:p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-xl sm:rounded-2xl max-w-2xl w-full my-4 sm:my-8 max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-gradient-to-r from-[#B8EA80] to-[#98c889] p-4 sm:p-6 rounded-t-xl sm:rounded-t-2xl z-10">
              <div className="flex justify-between items-start">
                <div className="flex-1 pr-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">
                    Apply for Position
                  </h3>
                  <p className="text-sm sm:text-base text-gray-800 font-semibold break-words">
                    {selectedJob}
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-900 hover:text-gray-700 transition-colors p-1 flex-shrink-0"
                  type="button"
                >
                  <X className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="p-4 sm:p-6 space-y-4 sm:space-y-5"
            >
              {submitStatus && (
                <div
                  className={`p-3 sm:p-4 rounded-lg text-xs sm:text-sm font-medium ${
                    submitStatus.type === "success"
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-1.5 sm:mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-lg focus:border-[#B8EA80] focus:outline-none transition-colors"
                    placeholder="John"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-1.5 sm:mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-lg focus:border-[#B8EA80] focus:outline-none transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-1.5 sm:mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-lg focus:border-[#B8EA80] focus:outline-none transition-colors"
                  placeholder="john.doe@example.com"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-1.5 sm:mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-lg focus:border-[#B8EA80] focus:outline-none transition-colors"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-1.5 sm:mb-2">
                  Address *
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-lg focus:border-[#B8EA80] focus:outline-none transition-colors resize-none"
                  placeholder="Enter your full address"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-1.5 sm:mb-2">
                  Position Applying For *
                </label>
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-lg focus:border-[#B8EA80] focus:outline-none transition-colors bg-white"
                >
                  <option value="">Select a position</option>
                  {jobOpenings.map((job, index) => (
                    <option key={index} value={job.title}>
                      {job.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-1.5 sm:mb-2">
                  Upload Resume *
                  <span className="text-gray-600 font-normal text-xs ml-2">
                    (PDF only, max 2MB)
                  </span>
                </label>
                <div className="relative">
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm border-2 border-gray-200 rounded-lg focus:border-[#B8EA80] focus:outline-none transition-colors file:mr-2 sm:file:mr-4 file:py-1.5 sm:file:py-2 file:px-3 sm:file:px-4 file:rounded-full file:border-0 file:text-xs sm:file:text-sm file:font-semibold file:bg-[#B8EA80] file:text-gray-900 hover:file:bg-[#98c889] file:cursor-pointer"
                  />
                  <Upload className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400 pointer-events-none" />
                </div>
                {fileError && (
                  <p className="text-red-600 text-xs mt-1.5 sm:mt-2">
                    {fileError}
                  </p>
                )}
                {formData.resume && !fileError && (
                  <p className="text-green-600 text-xs mt-1.5 sm:mt-2 flex items-center gap-1 break-all">
                    ✓ {formData.resume.name} (
                    {(formData.resume.size / 1024).toFixed(1)} KB)
                  </p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2 sm:pt-4">
                <Button
                  type="button"
                  onClick={closeModal}
                  variant="outline"
                  className="w-full sm:flex-1 border-2 border-gray-300 hover:bg-gray-50 py-2.5 sm:py-3 text-sm sm:text-base font-semibold rounded-lg sm:rounded-xl transition-all"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:flex-1 bg-gradient-to-r from-[#B8EA80] to-[#98c889] text-gray-900 hover:from-[#98c889] hover:to-[#7ab86a] py-2.5 sm:py-3 text-sm sm:text-base font-semibold rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* General Resume Upload Modal */}
      {showGeneralForm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-3 sm:p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-xl sm:rounded-2xl max-w-2xl w-full my-4 sm:my-8 max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-gradient-to-r from-[#B8EA80] to-[#98c889] p-4 sm:p-6 rounded-t-xl sm:rounded-t-2xl z-10">
              <div className="flex justify-between items-start">
                <div className="flex-1 pr-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">
                    Send Us Your Resume
                  </h3>
                  <p className="text-sm sm:text-base text-gray-800 font-semibold break-words">
                    General Application
                  </p>
                </div>
                <button
                  onClick={closeGeneralModal}
                  className="text-gray-900 hover:text-gray-700 transition-colors p-1 flex-shrink-0"
                  type="button"
                >
                  <X className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
              </div>
            </div>

            <form
              onSubmit={handleGeneralSubmit}
              className="p-4 sm:p-6 space-y-4 sm:space-y-5"
            >
              {submitStatus && (
                <div
                  className={`p-3 sm:p-4 rounded-lg text-xs sm:text-sm font-medium ${
                    submitStatus.type === "success"
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-1.5 sm:mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={generalFormData.firstName}
                    onChange={handleGeneralInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-lg focus:border-[#B8EA80] focus:outline-none transition-colors"
                    placeholder="John"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-1.5 sm:mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={generalFormData.lastName}
                    onChange={handleGeneralInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-lg focus:border-[#B8EA80] focus:outline-none transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-1.5 sm:mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={generalFormData.email}
                  onChange={handleGeneralInputChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-lg focus:border-[#B8EA80] focus:outline-none transition-colors"
                  placeholder="john.doe@example.com"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-1.5 sm:mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={generalFormData.phone}
                  onChange={handleGeneralInputChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-lg focus:border-[#B8EA80] focus:outline-none transition-colors"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-1.5 sm:mb-2">
                  Address *
                </label>
                <textarea
                  name="address"
                  value={generalFormData.address}
                  onChange={handleGeneralInputChange}
                  required
                  rows={3}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-lg focus:border-[#B8EA80] focus:outline-none transition-colors resize-none"
                  placeholder="Enter your full address"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-1.5 sm:mb-2">
                  Upload Resume *
                  <span className="text-gray-600 font-normal text-xs ml-2">
                    (PDF only, max 2MB)
                  </span>
                </label>
                <div className="relative">
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleGeneralFileChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm border-2 border-gray-200 rounded-lg focus:border-[#B8EA80] focus:outline-none transition-colors file:mr-2 sm:file:mr-4 file:py-1.5 sm:file:py-2 file:px-3 sm:file:px-4 file:rounded-full file:border-0 file:text-xs sm:file:text-sm file:font-semibold file:bg-[#B8EA80] file:text-gray-900 hover:file:bg-[#98c889] file:cursor-pointer"
                  />
                  <Upload className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400 pointer-events-none" />
                </div>
                {fileError && (
                  <p className="text-red-600 text-xs mt-1.5 sm:mt-2">
                    {fileError}
                  </p>
                )}
                {generalFormData.resume && !fileError && (
                  <p className="text-green-600 text-xs mt-1.5 sm:mt-2 flex items-center gap-1 break-all">
                    ✓ {generalFormData.resume.name} (
                    {(generalFormData.resume.size / 1024).toFixed(1)} KB)
                  </p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2 sm:pt-4">
                <Button
                  type="button"
                  onClick={closeGeneralModal}
                  variant="outline"
                  className="w-full sm:flex-1 border-2 border-gray-300 hover:bg-gray-50 py-2.5 sm:py-3 text-sm sm:text-base font-semibold rounded-lg sm:rounded-xl transition-all"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:flex-1 bg-gradient-to-r from-[#B8EA80] to-[#98c889] text-gray-900 hover:from-[#98c889] hover:to-[#7ab86a] py-2.5 sm:py-3 text-sm sm:text-base font-semibold rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  {isSubmitting ? "Submitting..." : "Submit Resume"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl sm:rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl transform animate-in fade-in zoom-in duration-300">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-green-100 mb-3 sm:mb-4">
                <CheckCircle className="h-8 w-8 sm:h-10 sm:w-10 text-green-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                Application Submitted!
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-5 sm:mb-6">
                Thank you for applying to Bharat Sports Foundation. We&apos;ve
                received your application and will review it carefully.
                We&apos;ll get back to you soon!
              </p>
              <Button
                onClick={closeSuccessModal}
                className="w-full bg-gradient-to-r from-[#B8EA80] to-[#98c889] text-gray-900 hover:from-[#98c889] hover:to-[#7ab86a] py-2.5 sm:py-3 text-sm sm:text-base font-semibold rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA Section */}
      <section className="py-10 sm:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6">
            Don&apos;t see the right role? We&apos;re always looking for
            talented individuals.
          </p>
          <Button
            onClick={handleGeneralApplyClick}
            variant="outline"
            className="border-2 border-[#B8EA80] text-gray-900 hover:bg-[#B8EA80]/10 px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 text-sm sm:text-base font-semibold rounded-lg sm:rounded-xl transition-all duration-300 w-full sm:w-auto"
          >
            Send Us Your Resume
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
