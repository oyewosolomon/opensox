import Image from "next/image";
import HeroSection from "./components/Hero";
import ForClient from "./components/ForClient";
import JobsCard from "./components/Jobs";
import Footer from "./components/Footer";
import MarketplaceExpert from "./components/MarketplaceExpert";
import HowItWorks from "./components/HowItWorks";
import WhyChooseOpensox from "./components/WhyChooseUs";

export default function Home() {
  return (
   <div>
    <HeroSection/>
    <ForClient/>
    <HowItWorks/>
    <WhyChooseOpensox/>
    <JobsCard/>
    {/* <MarketplaceExpert/> */}
    <Footer/>
   </div>
  );
}
