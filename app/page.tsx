import Header from "@/components/header";
import HomePage from "@/components/home";
import WhatWeDo from "@/components/what-we-do";
import OurProgram from "@/components/our-program";
import VolunteerStats from "@/components/volunteer-stats";
import Footer from "@/components/footer";

export default function Page() {
  return (
    <main>
      <Header />
      <HomePage />
      <WhatWeDo />
      <OurProgram />
      <VolunteerStats />
      <Footer />
    </main>
  );
}
