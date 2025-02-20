import Header from "@/components/header";
import HomePage from "@/components/home";
import WhatWeDo from "@/components/what-we-do";
import OurProgram from "@/components/our-program";
import VolunteerStats from "@/components/volunteer-stats";
import Footer from "@/components/footer";
import Banner from "@/components/banner";

export default function Page() {
  return (
    <main>
      <Header />
      <Banner
        imageUrl="/images/home_banner.png"
        videoUrl="/images/home-banner.mp4"
        heading=" Welcome to Bharat Sports Foundation"
        paragraph=" Your ultimate destination for everything related to physical
              education and sports"
        buttonText="Donate Here"
        buttonLink="/donate"
      />{" "}
      <WhatWeDo />
      <OurProgram />
      <VolunteerStats />
      <Footer />
    </main>
  );
}
