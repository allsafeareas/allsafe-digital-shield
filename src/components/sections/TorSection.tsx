import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Globe, Lock, Eye } from "lucide-react";

const TorSection = () => {
  return (
    <section className="py-20 bg-muted/30" id="tor">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-[var(--gradient-card)] border-border/50 shadow-[var(--shadow-cyber)]">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl md:text-3xl font-bold text-foreground">
                Доступ через Tor для максимальной анонимности
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                Наши сервисы доступны через Tor-соединение для пользователей, которым требуется 
                максимальный уровень конфиденциальности и безопасности.
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-8">
              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">Полная анонимность</h3>
                  <p className="text-sm text-muted-foreground">
                    Ваш IP-адрес и местоположение полностью скрыты
                  </p>
                </div>
                
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <Lock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">Шифрование</h3>
                  <p className="text-sm text-muted-foreground">
                    Многослойное шифрование всего трафика
                  </p>
                </div>
                
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">Без логов</h3>
                  <p className="text-sm text-muted-foreground">
                    Мы не ведём журналы ваших действий
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <Button variant="cybersec" size="lg" className="px-8">
                  Как подключиться через Tor
                </Button>
              </div>

              {/* Disclaimer */}
              <div className="bg-background/50 rounded-lg p-4 border border-border/30">
                <p className="text-xs text-muted-foreground text-center">
                  <strong className="text-foreground">Внимание:</strong> Использование Tor-браузера 
                  требует определённых технических знаний. Мы предоставляем подробные инструкции 
                  по безопасному подключению.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TorSection;