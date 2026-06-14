export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF8F6] flex flex-col font-sans selection:bg-rose-100 selection:text-rose-900 scroll-smooth">
      {/* --- ШАПКА --- */}
      <header className="w-full p-4 md:p-6 flex justify-between items-center bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-rose-100/40">
        <div className="flex flex-col">
          <h1 className="text-xl md:text-2xl font-light tracking-widest text-neutral-800 font-serif">TE NAILS</h1>
          <span className="text-[8px] md:text-[9px] text-rose-400 uppercase tracking-widest font-medium mt-0.5">by Tatiana Eremciuc</span>
        </div>

        {/* Меню скроется на мобилках, останется на ПК */}
        <nav className="hidden md:flex space-x-6 text-xs font-medium uppercase tracking-wider text-neutral-500">
          <a href="#services" className="hover:text-rose-500 transition-colors">Preise</a>
          <a href="#portfolio" className="hover:text-rose-500 transition-colors">Portfolio</a>
          <a href="#contacts" className="hover:text-rose-500 transition-colors">Kontakt</a>
        </nav>
      </header>

      {/* --- БЛОК 1: ГЛАВНЫЙ ЭКРАН (HERO) --- */}
      <section className="flex flex-col justify-center items-center text-center px-4 py-20 md:py-32 max-w-4xl mx-auto">
        <span className="text-[10px] md:text-xs font-semibold uppercase tracking-widest text-rose-500 mb-6 bg-rose-50 px-4 py-1.5 rounded-full">
          Privates Nagelstudio in Frankfurt
        </span>

        <h2 className="text-4xl md:text-6xl font-light tracking-tight text-neutral-800 mb-6 font-serif leading-tight">
          Ästhetik für Maniküre <br className="hidden md:block" /> & Pediküre
        </h2>

        <p className="text-sm md:text-lg text-neutral-600 mb-10 leading-relaxed max-w-xl px-4">
          Individuelle Pflege, höchste Hygiene und Liebe zum Detail.
          Ihre Wohlfühloase im Frankfurter Süden.
        </p>

        <a href="#contacts" className="bg-neutral-800 text-white px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-rose-500 transition-all duration-300 shadow-sm hover:shadow-md">
          Termin vereinbaren
        </a>
      </section>

      {/* --- БЛОК 2: УСЛУГИ И ЦЕНЫ (Скелет) --- */}
      <section id="services" className="w-full bg-white py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-serif text-center text-neutral-800 mb-12">Leistungen & Preise</h3>

          <div className="space-y-6">
            {/* Пример услуги 1 */}
            <div className="flex justify-between items-center border-b border-neutral-100 pb-4">
              <div className="flex flex-col">
                <span className="text-sm md:text-base text-neutral-800 font-medium">Maniküre mit Shellac / UV-Lack</span>
                <span className="text-xs text-neutral-500 mt-1">Entfernen, apparative Maniküre, Naturnagelverstärkung, einfarbig</span>
              </div>
              <span className="text-base md:text-lg text-rose-500 font-serif min-w-[60px] text-right">ab 50€</span>
            </div>

            {/* Пример услуги 2 */}
            <div className="flex justify-between items-center border-b border-neutral-100 pb-4">
              <div className="flex flex-col">
                <span className="text-sm md:text-base text-neutral-800 font-medium">Smart Pediküre</span>
                <span className="text-xs text-neutral-500 mt-1">Fußpflege (apparative Technik), UV-Lack</span>
              </div>
              <span className="text-base md:text-lg text-rose-500 font-serif min-w-[60px] text-right">ab 60€</span>
            </div>

            {/* Пример услуги 3 */}
            <div className="flex justify-between items-center border-b border-neutral-100 pb-4">
              <div className="flex flex-col">
                <span className="text-sm md:text-base text-neutral-800 font-medium">Nailart (French / Chrome)</span>
                <span className="text-xs text-neutral-500 mt-1">Zusätzlich zur Basisbehandlung</span>
              </div>
              <span className="text-base md:text-lg text-rose-500 font-serif min-w-[60px] text-right">+10€</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- БЛОК 3: ПОРТФОЛИО (Сетка для фото) --- */}
      <section id="portfolio" className="w-full py-20 px-4 bg-[#FAF8F6]">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-serif text-center text-neutral-800 mb-12">Portfolio</h3>

          {/* Сетка: 2 колонки на мобильном, 4 на ПК */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            <div className="aspect-square bg-rose-50 rounded-lg flex items-center justify-center border border-rose-100">
              <span className="text-xs text-rose-300">Foto 1</span>
            </div>
            <div className="aspect-square bg-stone-100 rounded-lg flex items-center justify-center border border-neutral-200">
              <span className="text-xs text-neutral-400">Foto 2</span>
            </div>
            <div className="aspect-square bg-rose-50 rounded-lg flex items-center justify-center border border-rose-100">
              <span className="text-xs text-rose-300">Foto 3</span>
            </div>
            <div className="aspect-square bg-stone-100 rounded-lg flex items-center justify-center border border-neutral-200">
              <span className="text-xs text-neutral-400">Foto 4</span>
            </div>
          </div>
          <div className="mt-8 text-center">
            <a href="#" className="text-xs text-neutral-500 hover:text-rose-500 underline underline-offset-4">Mehr auf Instagram ansehen</a>
          </div>
        </div>
      </section>

      {/* --- БЛОК 4: КОНТАКТЫ И ЛОКАЦИЯ --- */}
      <section id="contacts" className="w-full bg-white py-20 px-4 border-t border-neutral-100">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-serif text-neutral-800 mb-8">Ich freue mich auf Sie</h3>

          <div className="bg-[#FAF8F6] p-6 md:p-10 rounded-2xl flex flex-col items-center">
            <p className="text-sm text-neutral-500 uppercase tracking-widest mb-2">Adresse</p>
            <p className="text-lg text-neutral-800 font-medium mb-1">Frankfurt am Main, Südbahnhof</p>
            <p className="text-sm text-neutral-600 mb-8">Wir befinden uns im Salon [Name einfügen], Erdgeschoss</p>

            <p className="text-sm text-neutral-500 uppercase tracking-widest mb-4">Terminbuchung</p>
            {/* Ссылка на WhatsApp (потом подставишь номер) */}
            <a
              href="https://wa.me/490000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-green-600 text-white px-10 py-4 rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-green-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Über WhatsApp anfragen
            </a>
          </div>
        </div>
      </section>

      {/* --- ПОДВАЛ --- */}
      <footer className="w-full py-8 text-center text-xs text-neutral-400 bg-white">
        <p>© {new Date().getFullYear()} TE Nails by Tatiana Eremciuc. Alle Rechte vorbehalten.</p>
      </footer>
    </main>
  );
}