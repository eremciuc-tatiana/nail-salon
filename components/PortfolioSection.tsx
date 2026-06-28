import React from 'react';
import SectionDivider from './SectionDividerProps';

export default function PortfolioSection() {
    return (
        <section id="portfolio" className="w-full py-20 px-4 bg-[#FCF6F4]">
            <div className="max-w-5xl mx-auto">

                {/* Заголовок блока */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif text-neutral-800 mb-4">
                        Meine <span className="text-rose-400">Arbeiten</span>
                    </h2>
                    <SectionDivider></SectionDivider>

                    {/* Твой кастомный разделитель (исправил импорт, если он лежал в той же папке) */}
                    <div className="mb-6">
                        {/* Тут рендерится твой SectionDivider */}
                    </div>

                    <p className="text-xs md:text-sm text-neutral-500 max-w-lg mx-auto leading-relaxed">
                        Folgen Sie mir auf Instagram, um täglich neue Designs, Trends und exklвести Einblicke zu sehen.
                    </p>
                </div>

                {/* Живая Пинтерест-сетка (Masonry Layout) */}
                {/* columns контролируют количество колонок в зависимости от экрана, gap-6 задает отступы */}
                <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6 [column-fill:_balance]">

                    {/* Фото 1: Оригинальные пропорции (Вертикальное) */}
                    {/* break-inside-avoid не дает карточке разорваться между колонками */}
                    <div className="break-inside-avoid block rounded-3xl overflow-hidden group border border-neutral-100 shadow-sm bg-white">
                        <img
                            src="/portfolio/work-1.jpg"
                            alt="Nail Art Design"
                            className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700 block"
                        />
                    </div>

                    {/* Фото 2: Оригинальные пропорции (Горизонтальное / Квадратное) */}
                    <div className="break-inside-avoid block rounded-3xl overflow-hidden group border border-neutral-100 shadow-sm bg-white">
                        <img
                            src="/portfolio/work-2.jpg"
                            alt="Maniküre Frankfurt"
                            className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700 block"
                        />
                    </div>

                    {/* ТРЕНДОВАЯ КАРТОЧКА ИНСТАГРАМА (Теперь со стабильной высотой внутри потока) */}
                    <div className="break-inside-avoid flex flex-col justify-between items-center text-center rounded-3xl bg-rose-50/60 border border-rose-100/70 p-8 min-h-[280px] relative overflow-hidden group hover:bg-rose-100/40 transition-colors duration-300">
                        {/* Иконка Instagram на заднем фоне */}
                        <div className="absolute -bottom-6 -right-6 text-rose-200/20 group-hover:scale-110 transition-transform duration-500 pointer-events-none">
                            <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                            </svg>
                        </div>

                        <div className="my-auto flex flex-col items-center">
                            <span className="text-xs uppercase tracking-widest text-neutral-400 mb-1">Instagram</span>
                            <span className="text-xl font-serif text-neutral-800 font-semibold mb-3">@eremciuktatiana_nails</span>
                            <p className="text-[11px] text-neutral-500 max-w-[180px] leading-relaxed mb-6">
                                Tägliche Updates, neue Designs и свободные окошки для записи!
                            </p>
                        </div>

                        <a
                            href="https://www.instagram.com/eremciuktatiana_nails"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-3 bg-neutral-900 text-white rounded-2xl text-[11px] font-semibold uppercase tracking-wider hover:bg-rose-500 hover:scale-[1.02] shadow-sm transition-all duration-300 z-10"
                        >
                            Mehr auf Instagram
                        </a>
                    </div>

                    {/* Фото 3: Оригинальные пропорции (Широкое или макро) */}
                    <div className="break-inside-avoid block rounded-3xl overflow-hidden group border border-neutral-100 shadow-sm bg-white">
                        <img
                            src="/portfolio/work-3.jpg"
                            alt="Pediküre Design"
                            className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700 block"
                        />
                    </div>

                </div>

            </div>
        </section>
    );
}