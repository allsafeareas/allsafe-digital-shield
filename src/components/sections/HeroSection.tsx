import { Button } from "@/components/ui/button";
import { Shield, Search, Eye } from "lucide-react";
import heroImage from "@/assets/hero-cybersec.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Cybersecurity background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/95"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Shield className="w-12 h-12 text-primary" />
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              AllSafeAreas
            </h1>
          </div>
          
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-4">
            Профессиональный поиск мошенников и OSINT-расследования
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Команда экспертов по информационной безопасности поможет вам найти мошенников, 
            провести расследование и защитить ваши активы в цифровом пространстве
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Наши услуги
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Консультация
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50">
              <Search className="w-8 h-8 text-primary mb-4 mx-auto" />
              <h3 className="font-semibold text-foreground mb-2">OSINT-расследования</h3>
              <p className="text-muted-foreground text-sm">
                Анализ открытых источников для получения необходимой информации
              </p>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50">
              <Shield className="w-8 h-8 text-primary mb-4 mx-auto" />
              <h3 className="font-semibold text-foreground mb-2">Поиск мошенников</h3>
              <p className="text-muted-foreground text-sm">
                Профессиональное выявление мошенников по цифровым следам
              </p>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50">
              <Eye className="w-8 h-8 text-primary mb-4 mx-auto" />
              <h3 className="font-semibold text-foreground mb-2">Анонимность</h3>
              <p className="text-muted-foreground text-sm">
                Полная конфиденциальность с технологиями военного уровня
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;