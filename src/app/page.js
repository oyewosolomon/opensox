import Image from "next/image";
import HeroSection from "./components/Hero";
import ForClient from "./components/ForClient";

export default function Home() {
  return (
   <div>
    <HeroSection/>
    <ForClient/>
   </div>
  );
}
