import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Shield, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

interface Translation {
  [key: string]: string;
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('ru');
  const [translations, setTranslations] = useState<Translation>({});

  useEffect(() => {
    // Get initial language and translations from PHP
    if (window.__INITIAL_LANG__) {
      setCurrentLang(window.__INITIAL_LANG__);
    }
    if (window.__TRANSLATIONS__) {
      setTranslations(window.__TRANSLATIONS__);
    }
  }, []);

  const changeLanguage = (lang: string) => {
    setCurrentLang(lang);
    // Reload page with new language
    window.location.href = '?lang=' + lang;
  };

  const languages = [
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
  ];

  const navigationItems = [
    {
      title: translations.nav_about || "О нас",
      items: [
        { title: translations.nav_about_company || "О компании", href: "/about" },
        { title: translations.nav_community || "Сообщество", href: "/community" },
        { title: translations.nav_support_project || "Поддержать проект", href: "/donat" },
        { divider: true },
        { title: translations.nav_contacts || "Контакты", href: "/contacts" },
        { title: translations.nav_privacy || "Политика конфиденциальности", href: "/privacy" },
      ]
    },
    {
      title: translations.nav_services || "Услуги",
      items: [
        { title: translations.nav_all_services || "Все услуги", href: "/services" },
        { title: translations.nav_fraud_investigation || "Поиск мошенников", href: "/services/fraud-investigation" },
        { title: translations.nav_osint_investigation || "OSINT-расследования", href: "/services/osint-investigation" },
        { title: translations.nav_missing_persons || "Поиск пропавших", href: "/services/missing-persons" },
        { title: translations.nav_security_audit || "Аудит безопасности", href: "/services/security-audit" },
        { divider: true },
        { title: "WipeMyInfo", href: "/wipemyinfo" },
      ]
    },
    {
      title: translations.nav_security || "Безопасность",
      items: [
        { title: translations.nav_security_overview || "Обзор безопасности", href: "/security" },
        { title: translations.nav_tor_browser || "Tor браузер", href: "/security/tor" },
        { title: translations.nav_secure_inquiry || "Безопасный запрос", href: "/security/secure_inquiry" },
        { divider: true },
        { title: "All Safe MultiTool", href: "/tools" },
      ]
    },
  ];

  const singleLinks = [
    { title: translations.nav_news || "Новости", href: "/news" },
    { title: translations.nav_bug_bounty || "Bug Bounty", href: "https://bounty.allsafeareas.ru" },
  ];

  const faqItems = [
    { title: translations.nav_faq || "FAQ", href: "/faq" },
    { title: translations.nav_knowledge_base || "База знаний", href: "/kb" },
  ];

  return (
    <>
      {/* Language Switcher - Fixed Position */}
      <motion.div 
        className="fixed top-20 right-4 z-50"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
      >
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="outline" 
              size="sm"
              className="bg-background/80 backdrop-blur-xl border-border/50 hover:border-primary/50"
            >
              <Globe className="w-4 h-4 mr-2" />
              <span className="mr-1">{languages.find(l => l.code === currentLang)?.flag}</span>
              <span className="hidden sm:inline">{languages.find(l => l.code === currentLang)?.name}</span>
              <ChevronDown className="w-4 h-4 ml-1" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-background/95 backdrop-blur-xl">
            {languages.map(lang => (
              <DropdownMenuItem 
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className="cursor-pointer"
              >
                <span className="mr-2">{lang.flag}</span>
                {lang.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </motion.div>

      <motion.header 
        className="fixed top-0 w-full bg-background/90 backdrop-blur-xl border-b border-border/50 z-40"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.a 
              href="/"
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Shield className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                AllSafeAreas
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navigationItems.map((item, index) => (
                <DropdownMenu key={item.title}>
                  <DropdownMenuTrigger asChild>
                    <motion.button
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-accent/10"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      {item.title}
                      <ChevronDown className="w-4 h-4" />
                    </motion.button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-background/95 backdrop-blur-xl min-w-[220px]">
                    {item.items.map((subItem, subIndex) => (
                      subItem.divider ? (
                        <DropdownMenuSeparator key={`divider-${subIndex}`} />
                      ) : (
                        <DropdownMenuItem key={subItem.title} asChild>
                          <a href={subItem.href} className="cursor-pointer">
                            {subItem.title}
                          </a>
                        </DropdownMenuItem>
                      )
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ))}

              {singleLinks.map((link, index) => (
                <motion.a
                  key={link.title}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-accent/10"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (navigationItems.length + index) * 0.1 + 0.3 }}
                  {...(link.href.startsWith('http') ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {link.title}
                </motion.a>
              ))}

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <motion.button
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-accent/10"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (navigationItems.length + singleLinks.length) * 0.1 + 0.3 }}
                  >
                    {translations.nav_faq || "FAQ"}
                    <ChevronDown className="w-4 h-4" />
                  </motion.button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-background/95 backdrop-blur-xl">
                  {faqItems.map(item => (
                    <DropdownMenuItem key={item.title} asChild>
                      <a href={item.href} className="cursor-pointer">
                        {item.title}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <motion.a
                href="/onlytrust"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-accent/10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (navigationItems.length + singleLinks.length + 1) * 0.1 + 0.3 }}
              >
                {translations.nav_onlytrust || "OnlyTrust"}
              </motion.a>
            </nav>

            {/* Desktop Auth Buttons */}
            <motion.div 
              className="hidden lg:flex items-center space-x-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="ghost" size="sm" className="hover:text-primary" asChild>
                  <a href="https://account.allsafeareas.ru/login.php">
                    {translations.nav_login || "Войти"}
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="hero" size="sm" asChild>
                  <a href="https://account.allsafeareas.ru/register.php" className="flex items-center gap-2">
                    <span className="text-lg">👤</span>
                    {translations.nav_register || "Регистрация"}
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} className="text-primary" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} className="text-primary" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border/50 fixed left-0 right-0 top-16 h-[calc(100vh-4rem)] overflow-y-auto"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "calc(100vh - 4rem)", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="py-4 space-y-2 px-4">
                  {/* Mobile navigation items */}
                  {navigationItems.map((section, sectionIndex) => (
                    <div key={section.title} className="space-y-2">
                      <motion.div 
                        className="text-sm font-semibold text-primary px-2 py-1"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: sectionIndex * 0.1 }}
                      >
                        {section.title}
                      </motion.div>
                      {section.items.map((item, itemIndex) => (
                        item.divider ? (
                          <div key={`divider-${itemIndex}`} className="h-px bg-border/50 my-2" />
                        ) : (
                          <motion.a
                            key={item.title}
                            href={item.href}
                            className="block px-4 py-2 text-muted-foreground hover:text-primary transition-colors hover:bg-accent/10 rounded-lg"
                            onClick={() => setIsMenuOpen(false)}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: sectionIndex * 0.1 + itemIndex * 0.05 }}
                            whileHover={{ x: 10 }}
                          >
                            {item.title}
                          </motion.a>
                        )
                      ))}
                    </div>
                  ))}

                  {/* Single links */}
                  <div className="h-px bg-border/50 my-4" />
                  {singleLinks.map((link, index) => (
                    <motion.a
                      key={link.title}
                      href={link.href}
                      className="block px-4 py-2 text-muted-foreground hover:text-primary transition-colors hover:bg-accent/10 rounded-lg"
                      onClick={() => setIsMenuOpen(false)}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: (navigationItems.length + index) * 0.1 }}
                      whileHover={{ x: 10 }}
                      {...(link.href.startsWith('http') ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {link.title}
                    </motion.a>
                  ))}

                  {/* FAQ items */}
                  {faqItems.map((item, index) => (
                    <motion.a
                      key={item.title}
                      href={item.href}
                      className="block px-4 py-2 text-muted-foreground hover:text-primary transition-colors hover:bg-accent/10 rounded-lg"
                      onClick={() => setIsMenuOpen(false)}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: (navigationItems.length + singleLinks.length + index) * 0.1 }}
                      whileHover={{ x: 10 }}
                    >
                      {item.title}
                    </motion.a>
                  ))}

                  <motion.a
                    href="/onlytrust"
                    className="block px-4 py-2 text-muted-foreground hover:text-primary transition-colors hover:bg-accent/10 rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: (navigationItems.length + singleLinks.length + faqItems.length) * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    {translations.nav_onlytrust || "OnlyTrust"}
                  </motion.a>

                  {/* Mobile auth buttons */}
                  <motion.div 
                    className="px-4 pt-4 space-y-2 border-t border-border/50"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Button variant="ghost" size="sm" className="w-full hover:text-primary" asChild>
                      <a href="https://account.allsafeareas.ru/login.php" className="flex items-center gap-2">
                        <span>🔐</span>
                        {translations.nav_login || "Войти"}
                      </a>
                    </Button>
                    <Button variant="hero" size="sm" className="w-full" asChild>
                      <a href="https://account.allsafeareas.ru/register.php" className="flex items-center gap-2">
                        <span>👤</span>
                        {translations.nav_register || "Регистрация"}
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </>
  );
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    __INITIAL_LANG__?: string;
    __TRANSLATIONS__?: Translation;
  }
}

export default Header;