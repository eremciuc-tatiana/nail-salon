import Image from "next/image";
import WhatsAppButton from '../components/WhatsAppButton';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF8F6] flex flex-col font-sans selection:bg-rose-100 selection:text-rose-900 scroll-smooth">
      {/* --- ШАПКА --- */}
     <Header/>

      {/* --- БЛОК 1: ГЛАВНЫЙ ЭКРАН (HERO) --- */}
      <section
        className="relative w-full flex flex-col justify-center items-center px-4 py-20 md:py-36 bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden"
        style={{ backgroundImage: "url('/foto/foto-salon.png')" }}
      >
        {/* Анимация парения */}
        <style>{`
                @keyframes soft-float {
                  0% { transform: translateY(0px); }
                  50% { transform: translateY(-12px); }
                  100% { transform: translateY(0px); }
                }
                .animate-soft-float {
                  animation: soft-float 6s ease-in-out infinite;
                }
        `}
        </style>

        {/* Обычное светлое (белое) тонирование для фотографии */}
        <div className="absolute inset-0 bg-black/15"></div>

  
        <div className="relative z-10 flex flex-col items-center justify-center text-center 
          bg-rose-500/35 backdrop-blur-s 
          w-[340px] h-[340px] md:w-[420px] md:h-[420px] 
          rounded-full 
          shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-white/20 
          animate-soft-float p-6"
        >
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white mb-3">
            Frankfurt Am Main
          </span>

          {/* Текст теперь белый, а знак & совпадает по цвету с кнопкой */}
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-6 font-serif leading-tight">
            Maniküre <br />
            & <br />
            Pediküre
          </h2>

          {/* Контрастная розовая кнопка в цвет амперсанда */}
          <WhatsAppButton></WhatsAppButton>
        </div>
      </section>

      <ServicesSection/>

      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-rose-200/60 to-transparent" />

      <PortfolioSection/>

      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-rose-200/60 to-transparent" />

      {/* --- БЛОК 4: КОНТАКТЫ И ЛОКАЦИЯ --- */}
      <section id="contacts" className="w-full bg-stone-50 py-20 px-4 border-t border-neutral-100">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-serif text-neutral-800 mb-8">Ich freue mich auf Sie</h3>

          <div className="bg-[#FAF8F6] p-6 md:p-10 rounded-2xl flex flex-col items-center">
            <p className="text-sm text-neutral-500 uppercase tracking-widest mb-2">Adresse</p>
            <p className="text-lg text-neutral-800 font-medium mb-1">Frankfurt am Main, Südbahnhof</p>
            <p className="text-sm text-neutral-600 mb-8">Wir befinden uns im Salon [Name einfügen], Erdgeschoss</p>

            <p className="text-sm text-neutral-500 uppercase tracking-widest mb-4">Terminbuchung</p>
            {/* Ссылка на WhatsApp (потом подставишь номер) */}
            <WhatsAppButton></WhatsAppButton>
          </div>
        </div>
      </section>

      <Footer/>
    </main>
  );
}