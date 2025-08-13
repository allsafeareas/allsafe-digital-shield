import { Button } from "@/components/ui/button";
import { Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  const services = [
    "Поиск мошенников",
    "OSINT-расследования", 
    "Поиск пропавших",
    "Аудит безопасности",
    "Цифровая криминалистика"
  ];

  const resources = [
    "Новости",
    "FAQ", 
    "Блог",
    "Безопасность",
    "Правовая информация"
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">AS</span>
              </div>
              <span className="text-lg font-bold">AllSafeAreas</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Профессиональные OSINT-расследования и поиск мошенников
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Услуги</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a 
                    href="#services" 
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Ресурсы</h3>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Контакты</h3>
            <div className="space-y-3">
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Mail size={16} className="text-muted-foreground" />
                  <span className="text-muted-foreground">support@allsafeareas.ru</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle size={16} className="text-muted-foreground" />
                  <span className="text-muted-foreground">Telegram</span>
                </div>
              </div>
              <Button variant="cybersec" size="sm" className="w-full">
                Контактная форма
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2023 AllSafeAreas. Все права защищены.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;