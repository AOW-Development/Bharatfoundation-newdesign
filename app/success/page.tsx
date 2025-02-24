import Header from "@/components/header";
import Banner from "@/components/banner";
import Footer from "@/components/footer";
import SuccessContent from "@/components/successcontent";

export default function SuccessPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Banner
        mediaUrl="/images/successBanner.jpg"
        heading="Thank You for Your Donation!"
        paragraph="Your generosity makes a real difference in the lives of those we serve."
      />
      <SuccessContent />
      <Footer />
    </main>
  );
}
