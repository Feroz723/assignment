import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrackRecord from "@/components/TrackRecord";
import Partnerships from "@/components/Partnerships";
import AccredianEdge from "@/components/AccredianEdge";
import DomainExpertise from "@/components/DomainExpertise";
import CapabilityCalculator from "@/components/CapabilityCalculator";
import CourseSegmentation from "@/components/CourseSegmentation";
import WhoShouldJoin from "@/components/WhoShouldJoin";
import CATFramework from "@/components/CATFramework";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrackRecord />
        <Partnerships />
        <AccredianEdge />
        <DomainExpertise />
        <CapabilityCalculator />
        <CourseSegmentation />
        <WhoShouldJoin />
        <CATFramework />
        <Testimonials />
        <FAQ />
        <CTASection />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
