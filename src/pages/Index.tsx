import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import StatsSection from "@/components/sections/StatsSection";
import TorSection from "@/components/sections/TorSection";

const Index = () => {
  useEffect(() => {
    document.title = "AllSafeAreas - Профессиональный поиск мошенников и OSINT-расследования";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Профессиональные OSINT-расследования, поиск мошенников и аудит безопасности. Команда экспертов по информационной безопасности для защиты ваших активов.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <StatsSection />
        <TorSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
