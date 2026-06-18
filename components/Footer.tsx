import React from 'react';
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="w-full bg-rose-400 text-white py-12 px-4 mt-auto">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8 text-center md:text-left">

                {/* Левая часть: Брендинг и короткое описание */}
                <div className="flex flex-col items-center md:items-start ">
                    <div className="flex items-center bg-white rounded-md mb-1">
                              <Image
                                src="/logo/logo.png"
                                alt="TE Nails Logo"
                                width={150}
                                height={50}
                                className="h-10 md:h-12 w-auto object-contain"
                                priority
                              />
                            </div>
                    {/* <span className="text-xl md:text-2xl font-serif tracking-widest mb-1">TE NAILS</span>
                    <span className="text-[9px] uppercase tracking-[0.2em] text-rose-100 mb-4">by Tatiana Eremciuc</span> */}
                    <p className="text-xs text-rose-100 max-w-xs leading-relaxed">
                        Individuelle Pflege, höchste Hygiene und Liebe zum Detail im Frankfurter Süden.
                    </p>
                </div>

                {/* Правая часть: Контакты и Юридические ссылки */}
                <div className="flex flex-col items-center md:items-end gap-6">

                    {/* Соцсети */}
                    <div className="flex gap-6 text-sm font-medium tracking-wide">
                        <a
                            href="https://www.instagram.com/eremciuktatiana_nails"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-rose-200 transition-colors"
                        >
                            Instagram
                        </a>
                        {/* Ссылка на WhatsApp (поменяй номер на свой для тестов, если нужно) */}
                        <a
                            href="https://wa.me/4917655794870"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-rose-200 transition-colors"
                        >
                            WhatsApp
                        </a>
                    </div>

                    {/* Обязательные ссылки для Германии */}
                    <div className="flex gap-5 text-xs text-rose-200 mt-2">
                        <a href="/impressum" className="hover:text-white transition-colors underline underline-offset-4">Impressum</a>
                        <a href="/datenschutz" className="hover:text-white transition-colors underline underline-offset-4">Datenschutz</a>
                    </div>

                </div>
            </div>

            {/* Копирайт */}
            <div className="max-w-5xl mx-auto mt-12 pt-6 border-t border-rose-400/50 text-center text-[10px] text-rose-200 uppercase tracking-widest">
                <p>© {new Date().getFullYear()} TE Nails. Alle Rechte vorbehalten.</p>
            </div>
        </footer>
    );
}