import React from 'react';

interface WhatsAppButtonProps {
    text?: string;
    className?: string;
}

export default function WhatsAppButton({
    text = "Termin vereinbaren",
    className = ""
}: WhatsAppButtonProps) {

    // ТУТ МЕНЯЕШЬ НОМЕР ОДИН РАЗ ДЛЯ ВСЕГО САЙТА
    const phoneNumber = "4917655794870"
    const message = "Hallo, ich möchte einen Termin vereinbaren";

    // Генерируем правильную ссылку
    const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Если классы не передали, ставим дефолтный розовый дизайн
    const finalClass = className || "bg-rose-400 text-neutral-900 px-8 py-3.5 md:py-4 rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-rose-300 hover:scale-105 transition-all duration-300 shadow-md";

    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={finalClass}
        >
            {text}
        </a>
    );
}