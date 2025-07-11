"use client";

import React, { useState } from 'react';

export default function SearchSection() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCity, setSelectedCity] = useState("Выберите город");

    const cities = [
        "Астана", "Алматы", "Шымкент", "Караганда", "Актобе", "Тараз", "Павлодар", "Усть-Каменогорск",
        "Семей", "Кокшетау", "Актау", "Атырау", "Костанай", "Петропавловск", "Туркестан", "Уральск",
        "Жезказган", "Темиртау", "Рудный", "Экибастуз", "Талдыкорган", "Кызылорда", "Байконур",
        "Сарыагаш", "Степногорск", "Атбасар", "Шалкар", "Аральск"
    ];

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelectCity = (city) => {
        setSelectedCity(city);
        setIsOpen(false);
    };

    return (
        <div className="w-full max-w-sm bg-[#FFA500]/20 p-10 rounded-xl">
            <form className="flex flex-col gap-4">
                <div className="relative">
                    <div
                        className="w-full px-10 py-3 rounded-lg bg-white/90 text-gray-800 cursor-pointer flex items-center justify-center text-xl"
                        onClick={toggleDropdown}
                    >
                        {selectedCity}
                    </div>

                    {/* Left search icon */}
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        </svg>
                    </span>

                    {/* Right dropdown arrow */}
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M19 9l-7 7-7-7"/>
                        </svg>
                    </span>

                    {isOpen && (
                        <ul className="absolute w-full mt-1 bg-white/90 rounded-lg shadow-lg max-h-60 overflow-y-auto z-10 animate-slideDown">
                            {cities.map((city, index) => (
                                <li
                                    key={index}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center justify-center"
                                    onClick={() => handleSelectCity(city)}
                                >
                                    <span className="text-xl text-center">{city}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full px-6 py-3 bg-[#FFA500] text-white rounded-lg hover:bg-yellow-600 transition-colors text-xl"
                >
                    Искать
                </button>
            </form>
        </div>
    );
}
