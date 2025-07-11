"use client";
import Link from "next/link";
import { useState } from "react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-between px-20 py-4 bg-white shadow-md relative">
      <img src="./Logo.png" className="w-[150px] h-auto" alt="Logo" />

      
      <div className="hidden md:flex gap-6 text-[16px] font-bold">
        <Link href="/">Главная</Link>
        <Link href="/pages/contacts">Банкетные залы</Link>
        <Link href="/pages/rent">О нас</Link>
        <Link href="/pages/support">Контакты</Link>
      </div>

      
      <button className="hidden md:block bg-[#FFA500] text-white px-4 py-2 rounded-xl hover:bg-gray-100 transition whitespace-nowrap">
        Добавить организацию
      </button>

      
      <button onClick={() => setIsOpen(true)} className="md:hidden">
        <Bars3Icon className="h-8 w-8 text-black" />
      </button>

      
      {isOpen && (
        <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 flex flex-col px-6 py-4 transition-transform duration-300">
          <div className="flex justify-end">
            <button onClick={() => setIsOpen(false)}>
              <XMarkIcon className="h-8 w-8 text-black" />
            </button>
          </div>
          <nav className="flex flex-col gap-4 mt-6 text-[16px] font-bold">
            <Link href="/" onClick={() => setIsOpen(false)}>Главная</Link>
            <Link href="/pages/contacts" onClick={() => setIsOpen(false)}>Банкетные залы</Link>
            <Link href="/pages/rent" onClick={() => setIsOpen(false)}>О нас</Link>
            <Link href="/pages/support" onClick={() => setIsOpen(false)}>Контакты</Link>
            <button className="bg-[#FFA500] text-white px-4 py-2 rounded-xl mt-4">
              Добавить организацию
            </button>
          </nav>
        </div>
      )}
    </div>
  );
}
