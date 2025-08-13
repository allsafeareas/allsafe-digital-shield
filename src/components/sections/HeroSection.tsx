import { Button } from "@/components/ui/button";
import { Shield, Search, Eye } from "lucide-react";
import { motion } from "framer-motion";
import expertsImage from "@/assets/experts-office.jpg";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
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

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="hero">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={expertsImage} 
          alt="Cybersecurity experts investigating" 
          className="w-full h-full object-cover filter blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/95"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-accent/5"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div 
        className="container mx-auto px-4 z-10 relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="flex items-center justify-center space-x-4 mb-6"
            variants={itemVariants}
          >
            <motion.div variants={floatingVariants} animate="animate">
              <Shield className="w-12 h-12 text-primary drop-shadow-[0_0_20px_rgba(255,204,168,0.6)]" />
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
              variants={itemVariants}
            >
              AllSafeAreas
            </motion.h1>
          </motion.div>
          
          <motion.h2 
            className="text-xl md:text-2xl text-muted-foreground mb-4"
            variants={itemVariants}
          >
            Профессиональный поиск мошенников и OSINT-расследования
          </motion.h2>
          
          <motion.p 
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Команда экспертов по информационной безопасности поможет вам найти мошенников, 
            провести расследование и защитить ваши активы в цифровом пространстве
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="hero" size="lg" className="text-lg px-8 py-6" asChild>
                <a href="/services" className="flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  Наши услуги
                </a>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="neon" size="lg" className="text-lg px-8 py-6" asChild>
                <a href="/contacts" className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Консультация
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Features */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
            variants={containerVariants}
          >
            {[
              { icon: Search, title: "OSINT-расследования", desc: "Анализ открытых источников для получения необходимой информации" },
              { icon: Shield, title: "Поиск мошенников", desc: "Профессиональное выявление мошенников по цифровым следам" },
              { icon: Eye, title: "Анонимность", desc: "Полная конфиденциальность с технологиями военного уровня" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-card/30 backdrop-blur-lg rounded-2xl p-6 border border-border/30 hover:border-primary/50 group"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(255, 204, 168, 0.2)"
                }}
                transition={{ type: "spring" as const, stiffness: 300 }}
              >
                <motion.div
                  variants={floatingVariants}
                  animate="animate"
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  <feature.icon className="w-8 h-8 text-primary mb-4 mx-auto group-hover:text-accent transition-colors duration-300" />
                </motion.div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;