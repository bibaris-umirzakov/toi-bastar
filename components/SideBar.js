'use client';
import Link from "next/link";
import { House, ShieldQuestion, ClipboardPenLine, Landmark, ContactRound, Settings, LogOut } from 'lucide-react';

export default function SideBar({ isOpen, toggleMenu }) {
  return (
    <aside className={`lg:w-72 w-full lg:block ${isOpen ? 'block' : 'hidden'} lg:relative fixed z-20 bg-white border-r border-gray-200 h-full`}>
      <div className="flex flex-col justify-between h-full p-6">
        {/* Верхняя часть: логотип и навигация */}
        <div className="flex flex-col gap-4">
          <img src="/Logo.png" alt="Logo" className="w-[180px] h-auto mb-6" />
          <nav className="flex flex-col gap-3">
            <Link href="/" className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-[#fff5e6] hover:text-[#FFA500] font-medium">
              <House className="w-5 h-5" />
              Главная
            </Link>
            <Link href="#" className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-[#fff5e6] hover:text-[#FFA500] font-medium">
              <ClipboardPenLine className="w-5 h-5" />
              Добавить организацию
            </Link>
            <Link href="#" className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-[#fff5e6] hover:text-[#FFA500] font-medium">
              <Landmark className="w-5 h-5" />
              Банкетные залы
            </Link>
            <Link href="#" className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-[#fff5e6] hover:text-[#FFA500] font-medium">
              <ContactRound className="w-5 h-5" />
              Мои клиенты
            </Link>
            <Link href="#" className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-[#fff5e6] hover:text-[#FFA500] font-medium">
              <Settings className="w-5 h-5" />
              Настройки
            </Link>
          </nav>
        </div>

        {/* Нижняя часть: Техподдержка и Выйти */}
        <div className="flex flex-col gap-3 pt-6">
          <button className="w-full flex items-center gap-2 border border-[#FFA500] text-[#FFA500] py-2 px-4 rounded-lg font-medium hover:bg-[#fff5e6] transition-colors">
            <ShieldQuestion className="w-5 h-5" />
            Тех поддержка
          </button>

          <button onClick={toggleMenu} className="w-full flex items-center gap-2 px-4 py-2 hover:bg-[#fff5e6] font-medium rounded-lg transition-colors">
            <LogOut className="w-5 h-5" alt="Выход" />
            Выйти
          </button>
        </div>
      </div>
    </aside>
  );
}