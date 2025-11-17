"use client";
import type React from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import Banner from "@/components/banner";
import { useState, Suspense } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { validateEmail, validatePhone, validatePAN } from "@/lib/validation";
import RightColumn from "../../components/rightColumn";
import { useSearchParams } from "next/navigation";

// Interfaces
interface FormData {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  stateProvinceZip: string;
  email: string;
  phone: string;
  panCard: string;
}

interface FormErrors {
  donationAmount?: string;
  firstName?: string;
  lastName?: string;
  address?: string;
  city?: string;
  stateProvinceZip?: string;
  email?: string;
  phone?: string;
  panCard?: string;
}

// Donation Form Component
function DonationForm() {
  const searchParams = useSearchParams();
  const initialAmount = Number(searchParams.get("amount")) || 2000;

  const [donationAmount, setDonationAmount] = useState<number>(initialAmount);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    stateProvinceZip: "",
    email: "",
    phone: "",
    panCard: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    if (donationAmount <= 0) errors.donationAmount = "Please enter a valid donation amount";
    if (!formData.firstName) errors.firstName = "First name is required";
    if (!formData.lastName) errors.lastName = "Last name is required";
    if (!formData.address) errors.address = "Address is required";
    if (!formData.city) errors.city = "City is required";
    if (!formData.stateProvinceZip) errors.stateProvinceZip = "State/Province/Zip is required";
    if (!formData.email || !validateEmail(formData.email)) errors.email = "Please enter a valid email";
    if (!formData.phone || !validatePhone(formData.phone)) errors.phone = "Please enter a valid 10-digit phone";
    if (formData.panCard && !validatePAN(formData.panCard)) errors.panCard = "Please enter a valid PAN";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const transactionId = "TXN" + Date.now();

      const response = await fetch("/api/phonepe-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: donationAmount,
          transactionId,
          userId: `${formData.firstName}_${formData.lastName}`,
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.details || "Payment failed");

      window.location.href = data.redirectUrl;
    } catch (error) {
      alert("Failed to initiate payment: " + (error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="bg-white sm:p-6 rounded-lg shadow-sm box-border w-full h-full overflow-x-hidden lg:ml-6">
      <form onSubmit={handleSubmit}>
        {/* BANK DETAILS */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">
            Quick Pay: Cheque/ Demand Draft/ NEFT/ RTGS Transfer Details/ UPI Details
          </h2>
          <div className="space-y-2 text-sm">
            <p>Bank Name: State Bank of India</p>
            <p>Account Number: 00000043767515362 IFSC: SBIN0008658</p>
            <p>BHARAT SPORTS FOUNDATION</p>
          </div>
        </div>

        {/* DONATION AMOUNT */}
        <div className="mb-6 sm:mb-8">
          <h3 className="font-bold mb-3 sm:mb-4">Enter Your Own Donation Amount</h3>
          <div className="flex gap-2">
            <input
              type="number"
              className="flex-1 px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
              placeholder="Enter Your Donation Amount"
              value={donationAmount}
              onChange={(e) => setDonationAmount(Number(e.target.value))}
            />
            <button type="button" className="bg-[#B8EA80] px-6 py-2 rounded-r-lg text-black font-semibold">
              Enter
            </button>
          </div>
          {formErrors.donationAmount && <p className="text-red-500 text-xs mt-1">{formErrors.donationAmount}</p>}
        </div>

        {/* USER INFORMATION */}
        <div className="mb-6 sm:mb-8">
          <h3 className="font-bold mb-3 sm:mb-4">Your Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">

            <div className="space-y-4">
              {/* First + Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    className={`w-full px-4 py-2 border rounded focus:ring-2 ${formErrors.firstName ? "border-red-500" : ""}`}
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                  {formErrors.firstName && <p className="text-red-500 text-xs mt-1">{formErrors.firstName}</p>}
                </div>

                <div>
                  <input
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    className={`w-full px-4 py-2 border rounded focus:ring-2 ${formErrors.lastName ? "border-red-500" : ""}`}
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                  {formErrors.lastName && <p className="text-red-500 text-xs mt-1">{formErrors.lastName}</p>}
                </div>
              </div>

              {/* Address */}
              <div className="relative">
                <input
                  name="address"
                  type="text"
                  placeholder="Address Street"
                  className={`w-full px-4 py-2 border rounded focus:ring-2 ${formErrors.address ? "border-red-500" : ""}`}
                  value={formData.address}
                  onChange={handleInputChange}
                />
                <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                {formErrors.address && <p className="text-red-500 text-xs mt-1">{formErrors.address}</p>}
              </div>

              {/* City */}
              <input
                name="city"
                type="text"
                placeholder="City"
                className={`w-full px-4 py-2 border rounded focus:ring-2 ${formErrors.city ? "border-red-500" : ""}`}
                value={formData.city}
                onChange={handleInputChange}
              />
              {formErrors.city && <p className="text-red-500 text-xs mt-1">{formErrors.city}</p>}
            </div>

            {/* RIGHT SIDE FIELDS */}
            <div className="space-y-4">

              {/* State */}
              <input
                name="stateProvinceZip"
                type="text"
                placeholder="State/Province/Zip"
                className={`w-full px-4 py-2 border rounded focus:ring-2 ${formErrors.stateProvinceZip ? "border-red-500" : ""}`}
                value={formData.stateProvinceZip}
                onChange={handleInputChange}
              />
              {formErrors.stateProvinceZip && <p className="text-red-500 text-xs mt-1">{formErrors.stateProvinceZip}</p>}

              {/* Email */}
              <div className="relative">
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className={`w-full px-4 py-2 border rounded focus:ring-2 ${formErrors.email ? "border-red-500" : ""}`}
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
              </div>

              {/* Phone */}
              <div className="relative">
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone/Mobile No"
                  className={`w-full px-4 py-2 border rounded focus:ring-2 ${formErrors.phone ? "border-red-500" : ""}`}
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                <Phone className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                {formErrors.phone && <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>}
              </div>
            </div>
          </div>

          {/* PAN + BUTTON */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4 items-center">
            <div className="w-full space-y-4">
              <input
                name="panCard"
                type="text"
                placeholder="PAN Card No (Optional)"
                className={`w-full px-4 py-2 border rounded focus:ring-2 ${formErrors.panCard ? "border-red-500" : ""}`}
                value={formData.panCard}
                onChange={handleInputChange}
              />
              {formErrors.panCard && <p className="text-red-500 text-xs mt-1">{formErrors.panCard}</p>}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full sm:w-auto bg-[#B8EA80] text-black font-bold py-3 px-6 rounded-lg hover:bg-[#a5d695] transition-colors disabled:bg-gray-400 text-sm sm:text-base"
            >
              {isLoading ? "Processing..." : `DONATE ₹${donationAmount}/- via PhonePe`}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

// MAIN PAGE
export default function DonatePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Banner
        mediaUrl="/images/donationbanner.png"
        heading="Want to be a Volunteer? Select Your Donation Choice & Amount"
        paragraph="Feel free to go ahead and join us in celebrating the achievement of success all-together forming a dynamic team"
        buttons={[
          { text: "Monthly Donation", link: "/monthly-donation" },
          { text: "Onetime Donation", link: "/one-time-donation" },
        ]}
      />

      <section className="flex-grow bg-gray-50 py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {/* Donation Form → spans 2 of 3 columns */}
            <div className="lg:col-span-2">
              <Suspense fallback={<div>Loading donation form...</div>}>
                <DonationForm />
              </Suspense>
            </div>

            {/* Sidebar → 1 column */}
            <div className="w-full bg-white p-4 sm:p-6 rounded-lg shadow-sm max-h-[100vh] overflow-y-auto">
              <RightColumn />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
