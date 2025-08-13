import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Search, Users, Star } from "lucide-react";
import { motion } from "framer-motion";

const StatsSection = () => {
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
    hidden: { y: 50, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  };
  const stats = [
    {
      icon: Search,
      number: "198",
      label: "Найдено мошенников",
      description: "Успешно выявленных мошенников"
    },
    {
      icon: TrendingUp,
      number: "683", 
      label: "OSINT-расследований",
      description: "Проведённых расследований"
    },
    {
      icon: Users,
      number: "146",
      label: "Успешных поисков", 
      description: "Найденных людей"
    },
    {
      icon: Star,
      number: "99.8%",
      label: "Уровень довольных клиентов",
      description: "Положительных отзывов"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden" id="stats">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,204,168,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,204,168,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
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
            Наши результаты
          </h2>
          <p className="text-lg text-muted-foreground">
            Цифры, которые говорят о нашем профессионализме
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                }}
                transition={{ type: "spring" as const, stiffness: 300 }}
              >
                <Card className="bg-gradient-[var(--gradient-card)] backdrop-blur-lg border-border/30 hover:border-primary/50 hover:shadow-[var(--shadow-cyber)] transition-all duration-500 group text-center relative overflow-hidden">
                  {/* Glowing effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardContent className="p-6 relative z-10">
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <IconComponent className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300" />
                    </motion.div>
                    
                    <motion.div 
                      className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.5, type: "spring" as const }}
                    >
                      {stat.number}
                    </motion.div>
                    
                    <div className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                      {stat.label}
                    </div>
                    
                    <div className="text-sm text-muted-foreground">
                      {stat.description}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;