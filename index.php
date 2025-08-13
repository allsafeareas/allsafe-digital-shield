<?php
// Подключаем функции навигации
require_once '/var/www/allsafeareas/www/includes/navigation_helper.php';

// Подключаем конфигурацию сессий
require_once '/var/www/allsafeareas/www/includes/session_config.php';

// Безопасный запуск сессии
safe_session_start();

// Подключение функций безопасности
require_once '/var/www/allsafeareas/www/includes/security_functions.php';

// Установка заголовков безопасности
set_security_headers();



// Подключаем безопасность языка
require_once '/var/www/allsafeareas/www/includes/lang_security.php';

// Безопасная обработка языка
$lang_code = get_safe_language();
$_SESSION['lang'] = $lang_code;



// Подключение соответствующего файла перевода
include "lang/lang_$lang_code.php";
?>
<!DOCTYPE html>
<html lang="<?php echo $lang_code; ?>" data-security-monitoring="enabled" data-waf-protected="true">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
    <title><?php echo $lang['page_title']; ?></title>
    <meta name="description" content="<?php echo $lang['meta_description']; ?>">
    <meta name="keywords" content="<?php echo $lang['meta_keywords']; ?>">
    
    <!-- Open Graph / Social Media -->
    <meta property="og:title" content="<?php echo $lang['og_title']; ?>">
    <meta property="og:description" content="<?php echo $lang['og_description']; ?>">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://allsafeareas.ru/">
    <meta property="og:image" content="https://allsafeareas.ru/assets/images/og-image.jpg">
    <meta property="og:site_name" content="All Safe Areas">
    
    <!-- Security Headers -->
    <meta name="csrf-protection" content="enabled">
    <meta name="xss-protection" content="enabled">
    <meta name="waf" content="ModSecurity/3.0.8">
    <meta name="security-headers" content="HSTS, CSP, X-Frame-Options">
    <meta name="cloudflare-security" content="enabled">
    <meta name="ddos-protection" content="enabled">
    
    <!-- Icons & PWA -->
    <meta name="theme-color" content="#312e81">
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/icons/icon-32x32.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/assets/icons/icon-180x180.png">
    <link rel="manifest" href="/manifest.json">
    
    <!-- Stylesheets -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" rel="stylesheet">
    <style>
        :root {
            --primary-900: #312e81;
            --primary-800: #3730a3;
            --primary-700: #4338ca;
            --primary-600: #4f46e5;
            --primary-500: #6366f1;
            --primary-400: #818cf8;
            --primary-300: #a5b4fc;
            --primary-200: #c7d2fe;
            --primary-100: #e0e7ff;
            
            --bg-primary: #0f0f1a;
            --bg-secondary: #1a1a2e;
            --bg-tertiary: #252547;
            --bg-card: rgba(30, 30, 46, 0.6);
            
            --text-primary: #e0e0ff;
            --text-secondary: #a1a1c2;
            --text-tertiary: #7a7a9e;
            
            --border-color: rgba(99, 102, 241, 0.2);
            --border-hover: rgba(99, 102, 241, 0.4);
            
            --success-color: #10b981;
            --warning-color: #f59e0b;
            --danger-color: #ef4444;
            --info-color: #0ea5e9;
            
            --shadow-primary: 0 4px 20px rgba(79, 70, 229, 0.25);
            --shadow-secondary: 0 2px 10px rgba(79, 70, 229, 0.15);
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            background: var(--bg-primary);
            color: var(--text-primary);
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            min-height: 100vh;
            overflow-x: hidden;
            background-image: 
                linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
            background-size: 50px 50px;
        }
        
        .glass-card {
            background: var(--bg-card);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid var(--border-color);
            border-radius: 16px;
            overflow: hidden;
            transition: all 0.3s ease;
            box-shadow: var(--shadow-secondary);
        }
        
        .glass-card:hover {
            border-color: var(--border-hover);
            box-shadow: var(--shadow-primary);
            transform: translateY(-3px);
        }
        
        .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 1rem;
        }
        
        /* Header & Navigation */
        
        header {
            position: sticky;
            top: 0;
            z-index: 100;
            background: var(--bg-secondary);
            border-bottom: 1px solid var(--border-color);
        }
        
        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.2rem 0;
        }
        
        .logo {
            font-size: 1.8rem;
            font-weight: 800;
            background: linear-gradient(90deg, var(--primary-400), var(--primary-300));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .nav-links {
            display: flex;
            gap: 1.5rem;
            align-items: center;
        }
        
        .nav-link {
            color: var(--text-primary);
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
            padding: 0.5rem 0.8rem;
            border-radius: 8px;
        }
        
        .nav-link:hover {
            color: var(--primary-300);
            background: rgba(99, 102, 241, 0.1);
        }
        
        .nav-btn {
            background: var(--primary-600);
            color: white;
            padding: 0.7rem 1.5rem;
            border-radius: 12px;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .nav-btn:hover {
            background: var(--primary-500);
            transform: translateY(-2px);
            box-shadow: var(--shadow-primary);
        }
        
        /* Language Switcher */
        .language-switcher {
            position: fixed;
            top: 100px;
            right: 20px;
            z-index: 1000;
        }
        
        .language-btn {
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            color: var(--text-primary);
            padding: 0.8rem 1.2rem;
            border-radius: 12px;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 0.8rem;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
            box-shadow: var(--shadow-primary);
        }
        
        .language-btn:hover {
            border-color: var(--primary-500);
            background: var(--bg-tertiary);
            transform: translateY(-2px);
        }
        
        .language-menu {
            position: absolute;
            top: 100%;
            right: 0;
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 0.5rem 0;
            min-width: 180px;
            opacity: 0;
            visibility: hidden;
            transform: translateY(-10px);
            transition: all 0.3s ease;
            z-index: 1000;
            backdrop-filter: blur(10px);
            box-shadow: var(--shadow-primary);
        }
        
        .language-switcher:hover .language-menu {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }
        
        .language-option {
            padding: 0.8rem 1.2rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 0.8rem;
            transition: all 0.3s ease;
        }
        
        .language-option:hover {
            background: var(--bg-tertiary);
            color: var(--primary-300);
        }
        
        .language-flag {
            font-size: 1.2rem;
        }
        
        .mobile-menu-btn {
            display: none;
            background: transparent;
            border: none;
            color: var(--text-primary);
            font-size: 1.5rem;
            cursor: pointer;
        }
        
        /* Dropdown Menu */
        .dropdown {
            position: relative;
            display: inline-block;
        }
        
        .dropdown-toggle {
            color: var(--text-primary);
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
            padding: 0.5rem 0.8rem;
            border-radius: 8px;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            cursor: pointer;
        }
        
        .dropdown-toggle:hover {
            color: var(--primary-300);
            background: rgba(99, 102, 241, 0.1);
        }
        
        .dropdown-toggle::after {
            content: '▼';
            font-size: 0.7rem;
            transition: transform 0.3s ease;
        }
        
        .dropdown:hover .dropdown-toggle::after {
            transform: rotate(180deg);
        }
        
        .dropdown-menu {
            position: absolute;
            top: 100%;
            left: 0;
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 1rem 0;
            min-width: 220px;
            opacity: 0;
            visibility: hidden;
            transform: translateY(-10px);
            transition: all 0.3s ease;
            z-index: 1000;
            backdrop-filter: blur(10px);
            box-shadow: var(--shadow-primary);
        }
        
        .dropdown:hover .dropdown-menu {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }
        
        .dropdown-item {
            display: block;
            padding: 0.8rem 1.5rem;
            color: var(--text-secondary);
            text-decoration: none;
            transition: all 0.3s ease;
            font-size: 0.95rem;
        }
        
        .dropdown-item:hover {
            background: var(--bg-tertiary);
            color: var(--primary-300);
        }
        
        .dropdown-divider {
            height: 1px;
            background: var(--border-color);
            margin: 0.5rem 0;
        }
        
        /* Hero Section */
        .hero {
            padding: 6rem 0 4rem;
            position: relative;
            overflow: hidden;
        }
        
        .hero-content {
            max-width: 800px;
            margin: 0 auto;
            text-align: center;
            position: relative;
            z-index: 2;
        }
        
        .hero-title {
            font-size: 4rem;
            font-weight: 800;
            margin-bottom: 1.5rem;
            background: linear-gradient(90deg, var(--primary-400), var(--primary-300));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
        .hero-subtitle {
            font-size: 1.5rem;
            color: var(--text-secondary);
            margin-bottom: 2.5rem;
            line-height: 1.6;
        }
        
        .hero-buttons {
            display: flex;
            gap: 1.2rem;
            justify-content: center;
            margin-top: 2rem;
        }
        
        .btn {
            padding: 1rem 2.2rem;
            border-radius: 12px;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.3s ease;
            display: inline-flex;
            align-items: center;
            gap: 0.8rem;
        }
        
        .btn-primary {
            background: var(--primary-600);
            color: white;
        }
        
        .btn-primary:hover {
            background: var(--primary-500);
            transform: translateY(-3px);
            box-shadow: var(--shadow-primary);
        }
        
        .btn-secondary {
            background: transparent;
            color: var(--text-primary);
            border: 2px solid var(--border-color);
        }
        
        .btn-secondary:hover {
            background: var(--bg-tertiary);
            border-color: var(--primary-500);
        }
        
        /* Services Section */
        .section {
            padding: 5rem 0;
        }
        
        .section-header {
            text-align: center;
            margin-bottom: 4rem;
        }
        
        .section-title {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
            background: linear-gradient(90deg, var(--primary-400), var(--primary-300));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
        .section-subtitle {
            color: var(--text-secondary);
            max-width: 700px;
            margin: 0 auto;
            font-size: 1.2rem;
            line-height: 1.6;
        }
        
        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }
        
        .service-card {
            display: flex;
            flex-direction: column;
            height: 100%;
            padding: 2rem;
        }
        
        .service-icon {
            width: 70px;
            height: 70px;
            background: var(--primary-600);
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1.5rem;
            font-size: 1.8rem;
        }
        
        .service-title {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 1rem;
            color: var(--text-primary);
        }
        
        .service-description {
            color: var(--text-secondary);
            line-height: 1.6;
            flex-grow: 1;
            margin-bottom: 1.5rem;
        }
        
        /* Security Section */
        .security-section {
            background: var(--bg-secondary);
            border-radius: 16px;
            overflow: hidden;
            display: flex;
            flex-wrap: wrap;
        }
        
        .security-content {
            flex: 1;
            min-width: 300px;
            padding: 3rem;
        }
        
        .security-title {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
            color: var(--text-primary);
        }
        
        .security-description {
            color: var(--text-secondary);
            line-height: 1.7;
            margin-bottom: 2rem;
        }
        
        .security-features {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
            margin-top: 2rem;
        }
        
        .security-feature {
            display: flex;
            align-items: center;
            gap: 1rem;
        }
        
        .feature-icon {
            width: 40px;
            height: 40px;
            background: rgba(16, 185, 129, 0.15);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--success-color);
        }
        
        .feature-text {
            color: var(--text-secondary);
        }
        
        .security-image {
            flex: 1;
            min-width: 300px;
            background: linear-gradient(45deg, var(--primary-700), var(--primary-500));
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
        }
        
        /* Stats Section */
        .stats-section {
            background: linear-gradient(135deg, var(--primary-800), var(--primary-600));
            border-radius: 16px;
            padding: 4rem 2rem;
        }
        
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            text-align: center;
        }
        
        .stat-item {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        .stat-number {
            font-size: 3.5rem;
            font-weight: 800;
            margin-bottom: 0.5rem;
            color: white;
        }
        
        .stat-label {
            color: var(--primary-200);
            font-size: 1.1rem;
        }
        
        /* Tor Section */
        .tor-section {
            background: linear-gradient(45deg, #181c24, #0f172a);
            border: 1px solid var(--border-color);
            border-radius: 16px;
            padding: 3rem;
            display: flex;
            flex-wrap: wrap;
            gap: 2rem;
            align-items: center;
        }
        
        .tor-icon {
            font-size: 4rem;
            color: var(--primary-400);
        }
        
        .tor-content {
            flex: 1;
            min-width: 300px;
        }
        
        .tor-title {
            font-size: 1.8rem;
            font-weight: 700;
            margin-bottom: 1rem;
            color: var(--text-primary);
        }
        
        .tor-description {
            color: var(--text-secondary);
            margin-bottom: 1.5rem;
            line-height: 1.6;
        }
        
        /* Footer */
        footer {
            background: var(--bg-secondary);
            border-top: 1px solid var(--border-color);
            padding: 4rem 0 2rem;
            margin-top: 4rem;
        }
        
        .footer-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2.5rem;
            margin-bottom: 3rem;
        }
        
        .footer-col h3 {
            font-size: 1.3rem;
            font-weight: 600;
            margin-bottom: 1.5rem;
            color: var(--text-primary);
            position: relative;
            padding-bottom: 0.5rem;
        }
        
        .footer-col h3::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 50px;
            height: 2px;
            background: var(--primary-600);
        }
        
        .footer-links {
            list-style: none;
        }
        
        .footer-links li {
            margin-bottom: 0.8rem;
        }
        
        .footer-links a {
            color: var(--text-secondary);
            text-decoration: none;
            transition: all 0.3s ease;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .footer-links a:hover {
            color: var(--primary-300);
        }
        
        .social-links {
            display: flex;
            gap: 1rem;
            margin-top: 1.5rem;
        }
        
        .social-link {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: var(--bg-tertiary);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            color: var(--text-primary);
            font-size: 1.2rem;
        }
        
        .social-link:hover {
            background: var(--primary-600);
            transform: translateY(-3px);
        }
        
        .footer-bottom {
            border-top: 1px solid var(--border-color);
            padding-top: 2rem;
            text-align: center;
            color: var(--text-secondary);
            font-size: 0.9rem;
        }
        
        /* Animations */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .animate {
            animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .delay-1 {
            animation-delay: 0.1s;
        }
        
        .delay-2 {
            animation-delay: 0.2s;
        }
        
        .delay-3 {
            animation-delay: 0.3s;
        }
        
        .delay-4 {
            animation-delay: 0.4s;
        }
        
        /* Mobile Navigation */
        .mobile-nav {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--bg-primary);
            z-index: 1000;
            display: flex;
            flex-direction: column;
            padding: 2rem;
            transform: translateX(100%);
            transition: transform 0.4s ease;
        }
        
        .mobile-nav.active {
            transform: translateX(0);
        }
        
        .mobile-nav-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 3rem;
        }
        
        .mobile-nav-links {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }
        
        .mobile-nav-link {
            font-size: 1.2rem;
            color: var(--text-primary);
            text-decoration: none;
            padding: 0.8rem;
            border-radius: 8px;
            transition: all 0.3s ease;
        }
        
        .mobile-nav-link:hover {
            background: var(--bg-tertiary);
        }
        
        .close-mobile-menu {
            background: transparent;
            border: none;
            color: var(--text-primary);
            font-size: 1.8rem;
            cursor: pointer;
        }
        
        /* Responsive */
        @media (max-width: 992px) {
            .hero-title {
                font-size: 3rem;
            }
            
            .nav-links {
                display: none;
            }
            
            .mobile-menu-btn {
                display: block;
            }
        }
        
        @media (max-width: 768px) {
            .hero-title {
                font-size: 2.5rem;
            }
            
            .hero-subtitle {
                font-size: 1.2rem;
            }
            
            .hero-buttons {
                flex-direction: column;
                align-items: center;
            }
            
            .security-features {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>

    <!-- Language Switcher -->
    <div class="language-switcher">
        <div class="language-btn">
                            <span class="language-flag">
                    <?php echo $lang_code === 'ru' ? '🇷🇺' : ($lang_code === 'en' ? '🇺🇸' : ($lang_code === 'fr' ? '🇫🇷' : ($lang_code === 'de' ? '🇩🇪' : ($lang_code === 'zh' ? '🇨🇳' : ($lang_code === 'ja' ? '🇯🇵' : '🇷🇺'))))); ?>
                </span>
            <span><?php echo $lang['language_' . ($lang_code === 'ru' ? 'russian' : ($lang_code === 'en' ? 'english' : ($lang_code === 'fr' ? 'french' : ($lang_code === 'de' ? 'german' : ($lang_code === 'zh' ? 'chinese' : ($lang_code === 'ja' ? 'japanese' : 'russian'))))))]; ?></span>
            <i class="bi bi-chevron-down"></i>
        </div>
        <div class="language-menu">
            <div class="language-option" onclick="changeLanguage('ru')">
                <span class="language-flag">🇷🇺</span>
                <span><?php echo $lang['language_russian']; ?></span>
            </div>
            <div class="language-option" onclick="changeLanguage('en')">
                <span class="language-flag">🇺🇸</span>
                <span><?php echo $lang['language_english']; ?></span>
            </div>
            <div class="language-option" onclick="changeLanguage('fr')">
                <span class="language-flag">🇫🇷</span>
                <span><?php echo $lang['language_french']; ?></span>
            </div>
            <div class="language-option" onclick="changeLanguage('de')">
                <span class="language-flag">🇩🇪</span>
                <span><?php echo $lang['language_german']; ?></span>
            </div>
            <div class="language-option" onclick="changeLanguage('zh')">
                <span class="language-flag">🇨🇳</span>
                <span><?php echo $lang['language_chinese']; ?></span>
            </div>
            <div class="language-option" onclick="changeLanguage('ja')">
                <span class="language-flag">🇯🇵</span>
                <span><?php echo $lang['language_japanese']; ?></span>
            </div>
        </div>
    </div>
    
    <!-- Header -->
    <header>
        <div class="container">
            <div class="navbar">
                <a href="<?php echo get_home_link(); ?>" class="logo">
                    <i class="bi bi-shield-shaded"></i>
                    AllSafeAreas
                </a>
                
                <div class="nav-links">
                    <div class="dropdown">
                        <a href="<?php echo get_about_link(); ?>" class="dropdown-toggle"><?php echo $lang['nav_about']; ?></a>
                        <div class="dropdown-menu">
                            <a href="<?php echo get_about_link(); ?>" class="dropdown-item"><?php echo $lang['nav_about_company']; ?></a>
                            <a href="<?php echo get_community_link(); ?>" class="dropdown-item"><?php echo $lang['nav_community']; ?></a>
                            <a href="<?php echo get_donat_link(); ?>" class="dropdown-item"><?php echo $lang['nav_support_project']; ?></a>
                            <div class="dropdown-divider"></div>
                            <a href="<?php echo get_contacts_link(); ?>" class="dropdown-item"><?php echo $lang['nav_contacts']; ?></a>
                            <a href="<?php echo get_privacy_link(); ?>" class="dropdown-item"><?php echo $lang['nav_privacy']; ?></a>
                        </div>
                    </div>
                    
                    <div class="dropdown">
                        <a href="<?php echo get_services_link(); ?>" class="dropdown-toggle"><?php echo $lang['nav_services']; ?></a>
                        <div class="dropdown-menu">
                            <a href="<?php echo get_services_link(); ?>" class="dropdown-item"><?php echo $lang['nav_all_services']; ?></a>
                            <a href="<?php echo get_services_link(); ?>/fraud-investigation" class="dropdown-item"><?php echo $lang['nav_fraud_investigation']; ?></a>
                            <a href="<?php echo get_services_link(); ?>/osint-investigation" class="dropdown-item"><?php echo $lang['nav_osint_investigation']; ?></a>
                            <a href="<?php echo get_services_link(); ?>/missing-persons" class="dropdown-item"><?php echo $lang['nav_missing_persons']; ?></a>
                            <a href="<?php echo get_services_link(); ?>/security-audit" class="dropdown-item"><?php echo $lang['nav_security_audit']; ?></a>
                            <div class="dropdown-divider"></div>
                            <a href="<?php echo get_wipemyinfo_link(); ?>" class="dropdown-item">WipeMyInfo</a>
                        </div>
                    </div>
                    
                    <div class="dropdown">
                        <a href="<?php echo get_security_link(); ?>" class="dropdown-toggle"><?php echo $lang['nav_security']; ?></a>
                        <div class="dropdown-menu">
                            <a href="<?php echo get_security_link(); ?>" class="dropdown-item"><?php echo $lang['nav_security_overview']; ?></a>
                            <a href="<?php echo get_security_link(); ?>/tor" class="dropdown-item"><?php echo $lang['nav_tor_browser']; ?></a>
                            <a href="<?php echo get_security_link(); ?>/secure_inquiry" class="dropdown-item"><?php echo $lang['nav_secure_inquiry']; ?></a>
                            <div class="dropdown-divider"></div>
                            <a href="<?php echo get_tools_link(); ?>" class="dropdown-item">All Safe MultiTool</a>
                        </div>
                    </div>
                    
                    <a href="<?php echo get_news_link(); ?>" class="nav-link"><?php echo $lang['nav_news']; ?></a>
                    <a href="https://bounty.allsafeareas.ru" class="nav-link"><?php echo $lang['nav_bug_bounty']; ?></a>
                    <div class="dropdown">
                        <a href="<?php echo get_faq_link(); ?>" class="dropdown-toggle"><?php echo $lang['nav_faq']; ?></a>
                        <div class="dropdown-menu">
                            <a href="<?php echo get_faq_link(); ?>" class="dropdown-item"><?php echo $lang['nav_faq']; ?></a>
                            <a href="<?php echo get_kb_link(); ?>" class="dropdown-item"><?php echo $lang['nav_knowledge_base']; ?></a>
                        </div>
                    </div>
                    <a href="<?php echo get_onlytrust_link(); ?>" class="nav-link"><?php echo $lang['nav_onlytrust']; ?></a>
                    
                    <?php if (isset($_SESSION['user_id'])): ?>
                        <a href="https://lk.allsafeareas.ru" class="nav-btn">
                            <i class="bi bi-person-circle"></i>
                            <?php echo $lang['nav_personal_account']; ?>
                        </a>
                    <?php else: ?>
                        <a href="https://account.allsafeareas.ru/login.php" class="nav-link"><?php echo $lang['nav_login']; ?></a>
                        <a href="https://account.allsafeareas.ru/register.php" class="nav-btn">
                            <i class="bi bi-person-plus"></i>
                            <?php echo $lang['nav_register']; ?>
                        </a>
                    <?php endif; ?>
                </div>
                
                <button class="mobile-menu-btn">
                    <i class="bi bi-list"></i>
                </button>
            </div>
        </div>
    </header>
    
    <!-- Mobile Navigation -->
    <div class="mobile-nav">
        <div class="mobile-nav-header">
            <a href="<?php echo get_home_link(); ?>" class="logo">AllSafeAreas</a>
            <button class="close-mobile-menu">
                <i class="bi bi-x-lg"></i>
            </button>
        </div>
        
        <div class="mobile-nav-links">
            <a href="<?php echo get_about_link(); ?>" class="mobile-nav-link"><?php echo $lang['nav_about']; ?></a>
            <a href="<?php echo get_community_link(); ?>" class="mobile-nav-link"><?php echo $lang['nav_community']; ?></a>
            <a href="<?php echo get_donat_link(); ?>" class="mobile-nav-link"><?php echo $lang['nav_support_project']; ?></a>
            <a href="<?php echo get_contacts_link(); ?>" class="mobile-nav-link"><?php echo $lang['nav_contacts']; ?></a>
            <a href="<?php echo get_privacy_link(); ?>" class="mobile-nav-link"><?php echo $lang['nav_privacy']; ?></a>
            
            <div class="mobile-nav-divider"></div>
            
            <a href="<?php echo get_services_link(); ?>" class="mobile-nav-link"><?php echo $lang['nav_all_services']; ?></a>
            <a href="<?php echo get_services_link(); ?>/fraud-investigation" class="mobile-nav-link"><?php echo $lang['nav_fraud_investigation']; ?></a>
            <a href="<?php echo get_services_link(); ?>/osint-investigation" class="mobile-nav-link"><?php echo $lang['nav_osint_investigation']; ?></a>
            <a href="<?php echo get_services_link(); ?>/missing-persons" class="mobile-nav-link"><?php echo $lang['nav_missing_persons']; ?></a>
            <a href="<?php echo get_services_link(); ?>/security-audit" class="mobile-nav-link"><?php echo $lang['nav_security_audit']; ?></a>
            <a href="<?php echo get_wipemyinfo_link(); ?>" class="mobile-nav-link">WipeMyInfo</a>
            
            <div class="mobile-nav-divider"></div>
            
            <a href="<?php echo get_security_link(); ?>" class="mobile-nav-link"><?php echo $lang['nav_security_overview']; ?></a>
            <a href="<?php echo get_security_link(); ?>/tor" class="mobile-nav-link"><?php echo $lang['nav_tor_browser']; ?></a>
            <a href="<?php echo get_security_link(); ?>/secure_inquiry" class="mobile-nav-link"><?php echo $lang['nav_secure_inquiry']; ?></a>
            <a href="<?php echo get_tools_link(); ?>" class="mobile-nav-link">All Safe MultiTool</a>
            
            <div class="mobile-nav-divider"></div>
            
            <a href="<?php echo get_news_link(); ?>" class="mobile-nav-link"><?php echo $lang['nav_news']; ?></a>
            <a href="https://bounty.allsafeareas.ru" class="mobile-nav-link"><?php echo $lang['nav_bug_bounty']; ?></a>
            <a href="<?php echo get_faq_link(); ?>" class="mobile-nav-link"><?php echo $lang['nav_faq']; ?></a>
            <a href="<?php echo get_kb_link(); ?>" class="mobile-nav-link"><?php echo $lang['nav_knowledge_base']; ?></a>
            <a href="<?php echo get_onlytrust_link(); ?>" class="mobile-nav-link"><?php echo $lang['nav_onlytrust']; ?></a>
            
            <?php if (isset($_SESSION['user_id'])): ?>
                <a href="https://lk.allsafeareas.ru" class="mobile-nav-link">
                    <i class="bi bi-person-circle"></i> <?php echo $lang['nav_personal_account']; ?>
                </a>
            <?php else: ?>
                <a href="https://account.allsafeareas.ru/login.php" class="mobile-nav-link">
                    <i class="bi bi-box-arrow-in-right"></i> <?php echo $lang['nav_login']; ?>
                </a>
                <a href="https://account.allsafeareas.ru/register.php" class="mobile-nav-link">
                    <i class="bi bi-person-plus"></i> <?php echo $lang['nav_register']; ?>
                </a>
            <?php endif; ?>
        </div>
    </div>
    
    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <div class="hero-content animate">
                <h1 class="hero-title"><?php echo $lang['hero_title']; ?></h1>
                <p class="hero-subtitle"><?php echo $lang['hero_subtitle']; ?></p>
                
                <div class="hero-buttons">
                    <a href="<?php echo get_services_link(); ?>" class="btn btn-primary animate delay-1">
                        <i class="bi bi-search"></i>
                        <?php echo $lang['btn_our_services']; ?>
                    </a>
                    <a href="<?php echo get_contacts_link(); ?>" class="btn btn-secondary animate delay-2">
                        <i class="bi bi-chat-left-text"></i>
                        <?php echo $lang['btn_consultation']; ?>
                    </a>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Services Section -->
    <section class="section">
        <div class="container">
            <div class="section-header animate">
                <h2 class="section-title"><?php echo $lang['services_title']; ?></h2>
                <p class="section-subtitle"><?php echo $lang['services_subtitle']; ?></p>
            </div>
            
            <div class="services-grid">
                <div class="glass-card service-card animate delay-1">
                    <div class="service-icon">
                        <i class="bi bi-binoculars"></i>
                    </div>
                    <h3 class="service-title"><?php echo $lang['service_fraud_title']; ?></h3>
                    <p class="service-description"><?php echo $lang['service_fraud_desc']; ?></p>
                    <a href="<?php echo get_services_link(); ?>/fraud-investigation" class="btn btn-secondary">
                        <?php echo $lang['btn_more_details']; ?>
                        <i class="bi bi-arrow-right"></i>
                    </a>
                </div>
                
                <div class="glass-card service-card animate delay-2">
                    <div class="service-icon">
                        <i class="bi bi-file-earmark-text"></i>
                    </div>
                    <h3 class="service-title"><?php echo $lang['service_osint_title']; ?></h3>
                    <p class="service-description"><?php echo $lang['service_osint_desc']; ?></p>
                    <a href="<?php echo get_services_link(); ?>/osint-investigation" class="btn btn-secondary">
                        <?php echo $lang['btn_more_details']; ?>
                        <i class="bi bi-arrow-right"></i>
                    </a>
                </div>
                
                <div class="glass-card service-card animate delay-3">
                    <div class="service-icon">
                        <i class="bi bi-people"></i>
                    </div>
                    <h3 class="service-title"><?php echo $lang['service_missing_title']; ?></h3>
                    <p class="service-description"><?php echo $lang['service_missing_desc']; ?></p>
                    <a href="<?php echo get_services_link(); ?>/missing-persons" class="btn btn-secondary">
                        <?php echo $lang['btn_more_details']; ?>
                        <i class="bi bi-arrow-right"></i>
                    </a>
                </div>
                
                <div class="glass-card service-card animate delay-4">
                    <div class="service-icon">
                        <i class="bi bi-shield-check"></i>
                    </div>
                    <h3 class="service-title"><?php echo $lang['service_audit_title']; ?></h3>
                    <p class="service-description"><?php echo $lang['service_audit_desc']; ?></p>
                    <a href="<?php echo get_services_link(); ?>/security-audit" class="btn btn-secondary">
                        <?php echo $lang['btn_more_details']; ?>
                        <i class="bi bi-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Security Section -->
    <section class="section">
        <div class="container">
            <div class="glass-card security-section animate">
                <div class="security-content">
                    <h2 class="security-title"><?php echo $lang['security_title']; ?></h2>
                    <p class="security-description"><?php echo $lang['security_description']; ?></p>
                    
                    <div class="security-features">
                        <div class="security-feature">
                            <div class="feature-icon">
                                <i class="bi bi-lock"></i>
                            </div>
                            <span class="feature-text"><?php echo $lang['security_feature_encryption']; ?></span>
                        </div>
                        
                        <div class="security-feature">
                            <div class="feature-icon">
                                <i class="bi bi-incognito"></i>
                            </div>
                            <span class="feature-text"><?php echo $lang['security_feature_anonymous']; ?></span>
                        </div>
                        
                        <div class="security-feature">
                            <div class="feature-icon">
                                <i class="bi bi-server"></i>
                            </div>
                            <span class="feature-text"><?php echo $lang['security_feature_servers']; ?></span>
                        </div>
                        
                        <div class="security-feature">
                            <div class="feature-icon">
                                <i class="bi bi-file-lock"></i>
                            </div>
                            <span class="feature-text"><?php echo $lang['security_feature_logs']; ?></span>
                        </div>
                    </div>
                    
                    <a href="<?php echo get_security_link(); ?>" class="btn btn-primary" style="margin-top: 2rem;">
                        <i class="bi bi-shield-lock"></i>
                        <?php echo $lang['btn_security_info']; ?>
                    </a>
                </div>
                
                <div class="security-image">
                    <div class="tor-icon">
                        <i class="bi bi-shield-lock"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Stats Section -->
    <section class="section">
        <div class="container">
            <div class="glass-card stats-section animate">
                <div class="stats-grid">
                    <div class="stat-item">
                        <div class="stat-number">198</div>
                        <div class="stat-label"><?php echo $lang['stats_fraud_found']; ?></div>
                    </div>
                    
                    <div class="stat-item">
                        <div class="stat-number">683</div>
                        <div class="stat-label"><?php echo $lang['stats_osint_investigations']; ?></div>
                    </div>
                    
                    <div class="stat-item">
                        <div class="stat-number">146</div>
                        <div class="stat-label"><?php echo $lang['stats_successful_searches']; ?></div>
                    </div>
                    
                    <div class="stat-item">
                        <div class="stat-number">99.8%</div>
                        <div class="stat-label"><?php echo $lang['stats_satisfied_clients']; ?></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Tor Section -->
    <section class="section">
        <div class="container">
            <div class="glass-card tor-section animate">
                <div class="tor-icon">
                    <i class="bi bi-braces-asterisk"></i>
                </div>
                
                <div class="tor-content">
                    <h3 class="tor-title"><?php echo $lang['tor_title']; ?></h3>
                    <p class="tor-description"><?php echo $lang['tor_description']; ?></p>
                    
                    <a href="<?php echo get_security_link(); ?>/tor" class="btn btn-secondary">
                        <i class="bi bi-arrow-right"></i>
                        <?php echo $lang['btn_tor_connection']; ?>
                    </a>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-grid">
                <div class="footer-col">
                    <h3>AllSafeAreas</h3>
                    <p style="color: var(--text-secondary); margin-bottom: 1rem;"><?php echo $lang['footer_description']; ?></p>
                    <div class="social-links">
                        <a href="https://t.me/allsafeareas" class="social-link">
                            <i class="bi bi-telegram"></i>
                        </a>
                        <a href="https://vk.com/allsafeareas" class="social-link">
                            <i class="bi bi-vimeo"></i>
                        </a>
                        <a href="https://github.com/allsafeareas" class="social-link">
                            <i class="bi bi-github"></i>
                        </a>
                        <a href="mailto:support@allsafeareas.ru" class="social-link">
                            <i class="bi bi-envelope"></i>
                        </a>
                    </div>
                </div>
                
                <div class="footer-col">
                    <h3><?php echo $lang['footer_services']; ?></h3>
                    <ul class="footer-links">
                        <li><a href="<?php echo get_services_link(); ?>/fraud-investigation"><?php echo $lang['nav_fraud_investigation']; ?></a></li>
                        <li><a href="<?php echo get_services_link(); ?>/osint-investigation"><?php echo $lang['nav_osint_investigation']; ?></a></li>
                        <li><a href="<?php echo get_services_link(); ?>/missing-persons"><?php echo $lang['nav_missing_persons']; ?></a></li>
                        <li><a href="<?php echo get_services_link(); ?>/security-audit"><?php echo $lang['nav_security_audit']; ?></a></li>
                        <li><a href="<?php echo get_services_link(); ?>/digital-forensics"><?php echo $lang['footer_digital_forensics']; ?></a></li>
                    </ul>
                </div>
                
                <div class="footer-col">
                    <h3><?php echo $lang['footer_resources']; ?></h3>
                    <ul class="footer-links">
                        <li><a href="<?php echo get_news_link(); ?>"><?php echo $lang['nav_news']; ?></a></li>
                        <li><a href="<?php echo get_faq_link(); ?>">FAQ</a></li>
                        <li><a href="<?php echo get_home_link(); ?>/blog"><?php echo $lang['footer_blog']; ?></a></li>
                        <li><a href="<?php echo get_security_link(); ?>"><?php echo $lang['nav_security']; ?></a></li>
                        <li><a href="<?php echo get_home_link(); ?>/legal"><?php echo $lang['footer_legal']; ?></a></li>
                    </ul>
                </div>
                
                <div class="footer-col">
                    <h3><?php echo $lang['footer_contacts']; ?></h3>
                    <ul class="footer-links">
                        <li><a href="mailto:support@allsafeareas.ru"><i class="bi bi-envelope"></i> <?php echo $lang['contacts_support_email']; ?></a></li>
                        <li><a href="mailto:trust@allsafeareas.ru"><i class="bi bi-handshake"></i> <?php echo $lang['contacts_business_email']; ?></a></li>
                        <li><a href="mailto:info@allsafeareas.ru"><i class="bi bi-info-circle"></i> <?php echo $lang['contacts_info_email']; ?></a></li>
                        <li><a href="mailto:security@allsafeareas.ru"><i class="bi bi-shield-check"></i> <?php echo $lang['contacts_security_email']; ?></a></li>
                        <li><a href="https://t.me/allsafeareas"><i class="bi bi-telegram"></i> Telegram</a></li>
                        <li><a href="<?php echo get_contacts_link(); ?>"><i class="bi bi-geo-alt"></i> <?php echo $lang['footer_contact_form']; ?></a></li>
                    </ul>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p><?php echo $lang['footer_copyright']; ?></p>
                <p style="margin-top: 0.5rem;">
                    <a href="<?php echo get_privacy_link(); ?>" style="color: var(--text-secondary); margin: 0 0.5rem;"><?php echo $lang['footer_privacy']; ?></a>
                    <a href="<?php echo get_terms_link(); ?>" style="color: var(--text-secondary); margin: 0 0.5rem;"><?php echo $lang['footer_terms']; ?></a>
                </p>
            </div>
        </div>
    </footer>
    
    <!-- Scripts -->
    <script>
        // Mobile Menu Toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const closeMobileMenu = document.querySelector('.close-mobile-menu');
        const mobileNav = document.querySelector('.mobile-nav');
        
        mobileMenuBtn.addEventListener('click', () => {
            mobileNav.classList.add('active');
        });
        
        closeMobileMenu.addEventListener('click', () => {
            mobileNav.classList.remove('active');
        });
        
        // Animation on scroll
        document.addEventListener('DOMContentLoaded', function() {
            const animatedElements = document.querySelectorAll('.animate');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.visibility = 'visible';
                    }
                });
            }, {
                threshold: 0.1
            });
            
            animatedElements.forEach(element => {
                element.style.visibility = 'hidden';
                observer.observe(element);
            });
        });
        
        // Security monitoring (placeholder)
        setInterval(() => {
            console.log('[Security] Monitoring active - no threats detected');
        }, 30000);
        
        <?php
        require_once '/var/www/allsafeareas/www/includes/lang_security.php';
        echo secure_change_language_js();
        ?>
    </script>
    
    <!-- Security scripts -->
    <script src="/assets/js/cloudflare-static.js" defer></script>
    <script src="/assets/js/waf-ruleset.js" defer></script>
    <script src="/assets/js/security-monitor.js" defer></script>
</body>
</html>