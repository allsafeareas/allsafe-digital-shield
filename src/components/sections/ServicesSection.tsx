import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Users, Shield, FileSearch, Eye, Lock } from "lucide-react";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  };
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
    <section className="py-20 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden" id="services">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 2, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4">
            Наши основные услуги
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы предоставляем комплексные решения для защиты ваших интересов в цифровом мире
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div key={index} variants={cardVariants}>
                <Card className="bg-card/50 backdrop-blur-lg border-border/30 hover:border-primary/50 hover:shadow-[var(--shadow-cyber)] transition-all duration-500 group relative overflow-hidden">
                  {/* Card glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardHeader className="relative z-10">
                    <div className="flex items-center space-x-4">
                      <motion.div 
                        className="w-12 h-12 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <IconComponent className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-300" />
                      </motion.div>
                      <div>
                        <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                          {service.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4 relative z-10">
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li 
                          key={featureIndex} 
                          className="flex items-center space-x-2 text-sm text-muted-foreground"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIndex * 0.1 }}
                        >
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button variant="outline" className="w-full mt-4 border-primary/30 hover:border-primary">
                        Подробнее
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Security Section */}
        <motion.div 
          className="bg-gradient-to-r from-card/60 to-card/40 backdrop-blur-xl rounded-3xl p-8 border border-border/30 relative overflow-hidden"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 animate-pulse" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center space-x-3">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Lock className="w-8 h-8 text-primary" />
                </motion.div>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Абсолютная анонимность и безопасность
                </span>
              </h3>
              <p className="text-muted-foreground mb-6">
                Мы гарантируем полную конфиденциальность ваших данных с использованием 
                технологий военного уровня шифрования. Ваша информация защищена от 
                несанкционированного доступа.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="cybersec" size="lg">
                  Узнать о нашей безопасности
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                "Сквозное шифрование данных",
                "Анонимные методы работы", 
                "Серверы вне юрисдикции",
                "Отсутствие логов активности"
              ].map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="bg-background/40 backdrop-blur-sm rounded-xl p-4 border border-border/20 hover:border-primary/30 group"
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(255, 204, 168, 0.1)"
                  }}
                >
                  <div className="flex items-center space-x-2">
                    <Eye className="w-4 h-4 text-primary group-hover:text-accent transition-colors duration-300" />
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                      {feature}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;