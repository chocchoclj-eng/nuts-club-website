import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandStory from "@/components/BrandStory";
import WhoWeAre from "@/components/WhoWeAre";
import PainPoints from "@/components/PainPoints";
import Solutions from "@/components/Solutions";
import Methodology from "@/components/Methodology";
import MatrixTabs from "@/components/MatrixTabs";
import Governance from "@/components/Governance";
import Pricing from "@/components/Pricing";
import WhyUs from "@/components/WhyUs";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main id="top" className="min-h-screen bg-zinc-950 text-zinc-100">
      <Navbar />
      <Hero />
      <BrandStory />
      <WhoWeAre />
      <PainPoints />
      <Solutions />
      <Methodology />
      <MatrixTabs />
      <Governance />
      <Pricing />
      <WhyUs />
      <FinalCTA />
      <Footer />
    </main>
  );
}