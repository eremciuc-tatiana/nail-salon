import Image from 'next/image';
import WhatsAppButton from '../components/WhatsAppButton';

export default function ServicesBlock() {
    return (
        <section id = "services" className = "w-full py-20 px-4 bg-white" >
            <div className="max-w-5xl mx-auto">

                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-4xl font-serif text-neutral-800 mb-4 leading-relaxed">
                        Willkommen bei <span className="text-rose-400">TE Nail Studio</span>
                    </h2>
                    <p className="text-sm text-neutral-500 max-w-lg mx-auto">
                        Höchste Qualität, sterile Instrumente und individuelle Pflege für Ihre Hände und Füße.
                    </p>
                </div>

                {/* Сетка с тремя кругами */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 text-center mb-16">

                    {/* Услуга 1: Маникюр */}
                    <div className="flex flex-col items-center group">
                        <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden mb-6 p-2 border border-rose-200 group-hover:border-rose-400 transition-colors duration-500">
                            <div className="relative w-full h-full rounded-full overflow-hidden">
                                <Image
                                    src="/services-block-foto/manikure.jpg" // Поменяй на фотку красивых рук
                                    alt="Maniküre"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                        </div>
                        <h3 className="text-xl font-serif text-neutral-800 mb-2">Maniküre</h3>
                        <p className="text-xs text-neutral-500 px-4 mb-3">
                            Klassische & apparative Maniküre, Naturnagelverstärkung und Shellac-Farben.
                        </p>
                        <span className="text-rose-500 font-medium text-sm">ab 40 €</span>
                    </div>

                    {/* Услуга 2: Педикюр */}
                    <div className="flex flex-col items-center group">
                        <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden mb-6 p-2 border border-rose-200 group-hover:border-rose-400 transition-colors duration-500">
                            <div className="relative w-full h-full rounded-full overflow-hidden">
                                <Image
                                    src="/services-block-foto/pedikure.jpg" // Поменяй на фотку красивого педикюра
                                    alt="Pediküre"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                        </div>
                        <h3 className="text-xl font-serif text-neutral-800 mb-2">Pediküre</h3>
                        <p className="text-xs text-neutral-500 px-4 mb-3">
                            Ästhetische Fußpflege und langanhaltende Beschichtung für gepflegte Füße.
                        </p>
                        <span className="text-rose-500 font-medium text-sm">ab 50 €</span>
                    </div>

                    {/* Услуга 3: Дизайн или Комплекс */}
                    <div className="flex flex-col items-center group">
                        <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden mb-6 p-2 border border-rose-200 group-hover:border-rose-400 transition-colors duration-500">
                            <div className="relative w-full h-full rounded-full overflow-hidden">
                                <Image
                                    src="/services-block-foto/design.jpg" // Поменяй на фотку френча или сложного дизайна
                                    alt="Design & Extras"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                        </div>
                        <h3 className="text-xl font-serif text-neutral-800 mb-2">Design & Extras</h3>
                        <p className="text-xs text-neutral-500 px-4 mb-3">
                            French, Nailart, Nagelreparatur und schonende Entfernung von Altmaterial.
                        </p>
                        <span className="text-rose-500 font-medium text-sm">Individuell</span>
                    </div>

                </div>

                {/* Блок с двумя кнопками */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">

                    {/* Контейнер для WhatsApp, который управляет её шириной на мобилке */}
                    <div className="w-full sm:w-auto flex justify-center">
                        <WhatsAppButton className="w-full sm:w-auto text-center bg-rose-400 text-neutral-900 px-8 py-3.5 md:py-4 rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-rose-300 hover:scale-105 transition-all duration-300 shadow-md" />
                    </div>

                    {/* Кнопка с ценами — используется только тут */}
                    <a
                        href="https://www.instagram.com/eremciuktatiana_nails"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-8 py-3.5 md:py-4 rounded-full text-xs font-semibold uppercase tracking-widest text-center text-neutral-700 bg-white border border-neutral-300 hover:border-rose-400 hover:text-rose-500 hover:scale-105 shadow-md transition-all duration-300"
                    >
                        Alle Preise ansehen
                    </a>

                </div>

            </div>
    </section>
  );
}