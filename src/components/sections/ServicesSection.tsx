import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Users, Shield, FileSearch, Eye, Lock } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Search,
      title: "Поиск мошенников",
      description: "Профессиональное выявление мошенников по их цифровым следам. Восстановление информации о личности и местонахождении.",
      features: ["Анализ цифровых следов", "Идентификация личности", "Поиск местонахождения"]
    },
    {
      icon: FileSearch,
      title: "OSINT-расследования", 
      description: "Анализ открытых источников информации для сбора доказательств, проверки контрагентов и выявления скрытых связей.",
      features: ["Сбор доказательств", "Проверка контрагентов", "Выявление связей"]
    },
    {
      icon: Users,
      title: "Поиск пропавших",
      description: "Поиск людей с использованием современных технологий и OSINT-методов. Деликатный подход и конфиденциальность.",
      features: ["Современные технологии", "OSINT-методы", "Конфиденциальность"]
    },
    {
      icon: Shield,
      title: "Аудит безопасности",
      description: "Комплексная проверка ваших цифровых активов на уязвимости и риски. Рекомендации по усилению защиты.",
      features: ["Проверка уязвимостей", "Анализ рисков", "Рекомендации по защите"]
    }
  ];

  return (
    <section className="py-20 bg-muted/30" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Наши основные услуги
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы предоставляем комплексные решения для защиты ваших интересов в цифровом мире
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-[var(--shadow-cyber)] transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full mt-4">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Security Section */}
        <div className="bg-gradient-to-r from-card/80 to-card/60 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center space-x-3">
                <Lock className="w-8 h-8 text-primary" />
                <span>Абсолютная анонимность и безопасность</span>
              </h3>
              <p className="text-muted-foreground mb-6">
                Мы гарантируем полную конфиденциальность ваших данных с использованием 
                технологий военного уровня шифрования. Ваша информация защищена от 
                несанкционированного доступа.
              </p>
              <Button variant="cybersec" size="lg">
                Узнать о нашей безопасности
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                "Сквозное шифрование данных",
                "Анонимные методы работы", 
                "Серверы вне юрисдикции",
                "Отсутствие логов активности"
              ].map((feature, index) => (
                <div key={index} className="bg-background/50 rounded-lg p-4 border border-border/30">
                  <div className="flex items-center space-x-2">
                    <Eye className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;