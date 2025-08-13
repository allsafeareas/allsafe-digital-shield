import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Search, Users, Star } from "lucide-react";

const StatsSection = () => {
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
    <section className="py-20 bg-background" id="stats">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Наши результаты
          </h2>
          <p className="text-lg text-muted-foreground">
            Цифры, которые говорят о нашем профессионализме
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="bg-gradient-[var(--gradient-card)] border-border/50 hover:shadow-[var(--shadow-cyber)] transition-all duration-300 group text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-foreground mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;