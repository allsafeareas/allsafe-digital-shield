import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "AllSafeAreas";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "AllSafeAreas — актуальная главная страница загружается из allsafeareas.ru"
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed z-10 bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-3 py-1.5 rounded text-sm">
        Если сайт блокирует загрузку во фрейме, откройте <a className="underline" href="https://allsafeareas.ru/" target="_blank" rel="noreferrer">allsafeareas.ru</a> или локальный <a className="underline" href="/snapshot" target="_blank" rel="noreferrer">снимок</a>.
      </div>
      <iframe
        title="AllSafeAreas Home"
        src="https://allsafeareas.ru/"
        className="w-full h-screen border-0"
      />
    </div>
  );
};

export default Index;
