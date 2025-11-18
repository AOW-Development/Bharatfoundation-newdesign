// "use client";
// import type React from "react";
// import { useState } from "react";
// import { Send } from "lucide-react";

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     address: "",
//     message: "",
//   });

//   const [showThankYou, setShowThankYou] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log(formData);

//     setShowThankYou(true);

//     setTimeout(() => {
//       setShowThankYou(false);
//       setFormData({
//         firstName: "",
//         lastName: "",
//         email: "",
//         address: "",
//         message: "",
//       });
//     }, 5000);
//   };

//   return (
//     <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
//       <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
//         Send Us a Message
//       </h2>

//       {showThankYou ? (
//         <div className="flex flex-col items-center justify-center py-12 space-y-4 animate-fade-in">
//           <div className="w-20 h-20 bg-gradient-to-br from-[#B8EA80] to-[#a0d970] rounded-full flex items-center justify-center">
//             <svg
//               className="w-10 h-10 text-gray-900"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M5 13l4 4L19 7"
//               />
//             </svg>
//           </div>
//           <h3 className="text-2xl font-bold text-gray-900">Thank You!</h3>
//           <p className="text-gray-600 text-center">
//             Your message has been sent successfully. We&apos;ll get back to you
//             soon!
//           </p>
//         </div>
//       ) : (
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="grid md:grid-cols-2 gap-6">
//             <div>
//               <label className="block mb-2 text-sm font-medium text-gray-700">
//                 First Name
//               </label>
//               <input
//                 type="text"
//                 required
//                 value={formData.firstName}
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     firstName: e.target.value,
//                   })
//                 }
//                 className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:border-[#B8EA80] focus:ring-2 focus:ring-[#B8EA80]/20 outline-none transition-all duration-300"
//                 placeholder="John"
//               />
//             </div>
//             <div>
//               <label className="block mb-2 text-sm font-medium text-gray-700">
//                 Last Name
//               </label>
//               <input
//                 type="text"
//                 required
//                 value={formData.lastName}
//                 onChange={(e) =>
//                   setFormData({ ...formData, lastName: e.target.value })
//                 }
//                 className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:border-[#B8EA80] focus:ring-2 focus:ring-[#B8EA80]/20 outline-none transition-all duration-300"
//                 placeholder="Doe"
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block mb-2 text-sm font-medium text-gray-700">
//               E-mail
//             </label>
//             <input
//               type="email"
//               required
//               value={formData.email}
//               onChange={(e) =>
//                 setFormData({ ...formData, email: e.target.value })
//               }
//               className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:border-[#B8EA80] focus:ring-2 focus:ring-[#B8EA80]/20 outline-none transition-all duration-300"
//               placeholder="contact@sportsfoundation.com"
//             />
//           </div>

//           <div>
//             <label className="block mb-2 text-sm font-medium text-gray-700">
//               Address
//             </label>
//             <input
//               type="text"
//               required
//               value={formData.address}
//               onChange={(e) =>
//                 setFormData({ ...formData, address: e.target.value })
//               }
//               className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:border-[#B8EA80] focus:ring-2 focus:ring-[#B8EA80]/20 outline-none transition-all duration-300"
//               placeholder="Enter your address"
//             />
//           </div>

//           <div>
//             <label className="block mb-2 text-sm font-medium text-gray-700">
//               Message
//             </label>
//             <textarea
//               required
//               value={formData.message}
//               onChange={(e) =>
//                 setFormData({ ...formData, message: e.target.value })
//               }
//               className="w-full h-32 px-4 py-3 bg-white border border-gray-200 rounded-lg focus:border-[#B8EA80] focus:ring-2 focus:ring-[#B8EA80]/20 outline-none resize-none transition-all duration-300"
//               placeholder="Enter your message here..."
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-[#B8EA80] to-[#a0d970] text-gray-900 font-semibold py-3 px-6 rounded-lg hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 group"
//           >
//             Send Message
//             <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//           </button>
//         </form>
//       )}
//     </div>
//   );
// }

"use client";
import type React from "react";
import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    message: "",
  });

  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      setShowThankYou(true);

      setTimeout(() => {
        setShowThankYou(false);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          address: "",
          message: "",
        });
      }, 5000);
    } else {
      alert("Failed to send email: " + data.error);
    }
  };

  return (
    <div className="">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-7 md:mb-8 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
        Send Us a Message
      </h2>

      {showThankYou ? (
        <div className="flex flex-col items-center justify-center py-12 space-y-4 animate-fade-in">
          <div className="w-20 h-20 bg-gradient-to-br from-[#B8EA80] to-[#a0d970] rounded-full flex items-center justify-center">
            <svg
              className="w-10 h-10 text-gray-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Thank You!</h3>
          <p className="text-gray-600 text-center">
            Your message has been sent successfully. We&apos;ll get back to you
            soon!
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                required
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    firstName: e.target.value,
                  })
                }
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:border-[#B8EA80] focus:ring-2 focus:ring-[#B8EA80]/20 outline-none transition-all duration-300"
                placeholder="John"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                required
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:border-[#B8EA80] focus:ring-2 focus:ring-[#B8EA80]/20 outline-none transition-all duration-300"
                placeholder="Doe"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              E-mail
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:border-[#B8EA80] focus:ring-2 focus:ring-[#B8EA80]/20 outline-none transition-all duration-300"
              placeholder="contact@sportsfoundation.com"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              required
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:border-[#B8EA80] focus:ring-2 focus:ring-[#B8EA80]/20 outline-none transition-all duration-300"
              placeholder="Enter your address"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full h-32 px-4 py-3 bg-white border border-gray-200 rounded-lg focus:border-[#B8EA80] focus:ring-2 focus:ring-[#B8EA80]/20 outline-none resize-none transition-all duration-300"
              placeholder="Enter your message here..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#B8EA80] to-[#a0d970] text-gray-900 font-semibold py-3 px-6 rounded-lg hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            Send Message
            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      )}
    </div>
  );
}
