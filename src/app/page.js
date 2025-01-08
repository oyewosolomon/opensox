import Image from "next/image";
import HeroSection from "./components/Hero";
import ForClient from "./components/ForClient";
import JobsCard from "./components/Jobs";
import Footer from "./components/Footer";

export default function Home() {
  return (
   <div>
    <HeroSection/>
    <ForClient/>
    <JobsCard/>
    <Footer/>
   </div>
  );
}
