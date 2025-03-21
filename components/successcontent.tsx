// app/components/successcontent.tsx
"use client";

import { useSearchParams } from "next/navigation";
import { CheckCircle, Download, Share2 } from "lucide-react";
import Link from "next/link";
import { jsPDF } from "jspdf";

export default function SuccessContent() {
  const searchParams = useSearchParams();
  const amount = searchParams.get("amount") || "0";
  const transactionId = searchParams.get("transactionId") || "Unknown";

  const handleDownloadReceipt = () => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text("Donation Receipt", 20, 20);
    doc.setFontSize(12);
    doc.text(`Amount: ₹${amount}`, 20, 40);
    doc.text(`Transaction ID: ${transactionId}`, 20, 50);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 60);
    doc.text("Thank you for your generous donation!", 20, 80);
    doc.save(`receipt_${transactionId}.pdf`);
  };

  const handleShare = async () => {
    const shareText = `I just donated ₹${amount} to support a great cause! Transaction ID: ${transactionId}. Join me in making a difference!`;
    const shareUrl = window.location.origin;

    if (navigator.share) {
      try {
        await navigator.share({
          title: "Donation Success",
          text: shareText,
          url: shareUrl,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
        shareText + " " + shareUrl
      )}`;
      window.open(whatsappUrl, "_blank");
    }
  };

  return (
    <section className="flex-grow bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Donation Successful!
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Thank you for your generous donation of ₹{amount}. Your support
              means the world to us!
            </p>
            <div className="bg-gray-100 rounded-lg p-4 mb-8">
              <p className="text-sm text-gray-600">
                Transaction ID: {transactionId}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={handleDownloadReceipt}
                className="flex items-center justify-center gap-2 bg-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition-colors"
              >
                <Download className="w-5 h-5" />
                Download Receipt
              </button>
              <button
                onClick={handleShare}
                className="flex items-center justify-center gap-2 bg-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Share2 className="w-5 h-5" />
                Share
              </button>
            </div>
          </div>
          <div className="bg-gray-100 p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              What's Next?
            </h3>
            <p className="text-gray-600 mb-6">
              Your donation will be put to work immediately. Check out our
              latest projects and see the impact you're making!
            </p>
            <Link
              href="/resources"
              className="inline-block bg-[#B8EA80] text-black font-bold py-3 px-6 rounded-lg hover:bg-[#a5d695] transition-colors"
            >
              View Our Resources
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
