import React from 'react';
import Image from 'next/image';

interface SectionDividerProps {
    text?: string;
}

export default function SectionDivider({ text }: SectionDividerProps) {
    return (
        <div className="flex items-center justify-center gap-5 select-none mb-4">
            {/* Левая черточка */}
            <div className="w-20 md:w-36 h-[2px] bg-gradient-to-r from-transparent to-rose-400/80" />

            <div className="flex items-center justify-center w-10 h-10 p-1">
                {text ? (
                    <span className="text-[11px] font-serif font-medium tracking-widest text-rose-500 uppercase">
                        {text}
                    </span>
                ) : (
                    <Image
                        src="/te-icon.png"
                        alt="TE Logo"
                        width={36} // Меняем пропорции под стать контейнеру
                        height={36}
                        className="w-full h-full object-contain"
                    />
                )}
            </div>

            {/* Правая черточка */}
            <div className="w-20 md:w-36 h-[2px] bg-gradient-to-l from-transparent to-rose-400/80" />
        </div>
    );
}