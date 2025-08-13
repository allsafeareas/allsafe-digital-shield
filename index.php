<?php
declare(strict_types=1);

// Serve the Vite-built React app via manifest for correct asset URLs.
// Assumes `npm run build` has been executed and output is in `dist/`.

$distDir = __DIR__ . '/dist';
$manifestPath = $distDir . '/.vite/manifest.json';

if (!is_file($manifestPath)) {
	http_response_code(500);
	header('Content-Type: text/plain; charset=UTF-8');
	echo "Build manifest not found. Run 'npm run build' first.";
	exit(1);
}

$manifestJson = file_get_contents($manifestPath);
if ($manifestJson === false) {
	http_response_code(500);
	header('Content-Type: text/plain; charset=UTF-8');
	echo 'Unable to read Vite manifest.';
	exit(1);
}

$manifest = json_decode($manifestJson, true, 512, JSON_THROW_ON_ERROR);

// Find the main entry (by convention `src/main.tsx`). Adjust if needed.
$entryKeyCandidates = [
	'src/main.tsx',
	'src/main.ts',
	'index.html',
];

$entry = null;
foreach ($entryKeyCandidates as $candidate) {
	if (isset($manifest[$candidate])) {
		$entry = $manifest[$candidate];
		break;
	}
}

if ($entry === null) {
	http_response_code(500);
	header('Content-Type: text/plain; charset=UTF-8');
	echo 'Unable to locate main entry in Vite manifest.';
	exit(1);
}

$cssFiles = $entry['css'] ?? [];
$jsFile = $entry['file'] ?? null;

if ($jsFile === null) {
	http_response_code(500);
	header('Content-Type: text/plain; charset=UTF-8');
	echo 'Main JS file missing in Vite manifest.';
	exit(1);
}

// Basic index shell with root container; reuses the project's SEO tags from src/index.html if desired.
?><!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>AllSafeAreas - Профессиональный поиск мошенников и OSINT-расследования</title>
    <meta name="description" content="Профессиональные OSINT-расследования, поиск мошенников и аудит безопасности. Команда экспертов по информационной безопасности для защиты ваших активов." />
    <meta name="keywords" content="OSINT, расследования, поиск мошенников, кибербезопасность, аудит безопасности, цифровая криминалистика" />
    <link rel="canonical" href="https://allsafeareas.ru" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://allsafeareas.ru/" />
    <meta property="og:title" content="AllSafeAreas - Профессиональный поиск мошенников и OSINT-расследования" />
    <meta property="og:description" content="Команда экспертов по информационной безопасности поможет найти мошенников, провести расследование и защитить ваши активы." />
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://allsafeareas.ru/" />
    <meta property="twitter:title" content="AllSafeAreas - Профессиональный поиск мошенников" />
    <meta property="twitter:description" content="Профессиональные OSINT-расследования и кибербезопасность" />
    
    <!-- JSON-LD Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "AllSafeAreas",
      "url": "https://allsafeareas.ru",
      "description": "Профессиональные OSINT-расследования и поиск мошенников",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "",
        "contactType": "Customer Service",
        "email": "support@allsafeareas.ru"
      },
      "sameAs": [
        "https://t.me/allsafeareas"
      ],
      "service": [
        {
          "@type": "Service",
          "name": "Поиск мошенников",
          "description": "Профессиональное выявление мошенников по цифровым следам"
        },
        {
          "@type": "Service", 
          "name": "OSINT-расследования",
          "description": "Анализ открытых источников информации для сбора доказательств"
        }
      ]
    }
    </script>
<?php foreach ($cssFiles as $css): ?>
    <link rel="stylesheet" href="/dist/<?php echo htmlspecialchars($css, ENT_QUOTES); ?>" />
<?php endforeach; ?>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/dist/<?php echo htmlspecialchars($jsFile, ENT_QUOTES); ?>"></script>
  </body>
</html>


