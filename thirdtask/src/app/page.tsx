import HeroSection from '../components/HeroSection';
import ResidenciesSection from '../components/ResidenciesSection';
import OurValue from '../components/OurValue';
import ContactUs from '../components/ContactUs';
import GetStarted from '../components/GetStarted';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#18151A]">
      <Navbar />
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto pt-8 px-4">
        <HeroSection />
        <div className="flex-1 flex justify-center items-center mt-12 md:mt-0">
          <div className="rounded-full border-8 border-[#232025] overflow-hidden w-[420px] h-[420px] flex items-center justify-center">
            <Image src="/globe.svg" alt="Property" width={400} height={400} className="object-cover" />
          </div>
        </div>
      </div>
      <ResidenciesSection />
      <OurValue />
      <ContactUs />
      <GetStarted />
      <Footer />
    </main>
  );
}
