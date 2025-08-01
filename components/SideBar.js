'use client';
import Link from "next/link";
import { House, ShieldQuestion, ClipboardPenLine, Landmark, ContactRound, Settings, LogOut, X } from 'lucide-react'; 
export default function SideBar({ isOpen, toggleMenu, onLogout }) {
  return (
    <aside className={`lg:w-72 w-full lg:block ${isOpen ? 'block' : 'hidden'} lg:relative fixed z-20 bg-white border-r border-gray-200 h-full`}>  
      <div className="flex flex-col h-screen p-6">
        <div className="flex items-center justify-between lg:hidden mb-4">
          <img src="/Logo.png" alt="Logo" className="w-[140px] h-auto" />
          {/* Close button - visible when menu is open on mobile */}
          <button onClick={toggleMenu} className="p-2">																													
            <X className="w-6 h-6 text-[#FFA500]" />
          </button>
        </div>
        {/* Desktop logo - visible only on large screens */}
        <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-4">
        <img src="/Logo.png" alt="Logo" className="w-[180px] h-auto mb-6 hidden lg:block" />

        {/* Navigation links section - takes available vertical space */}
        <nav className="flex flex-col gap-3 flex-grow">
          {/* Each Link triggers toggleMenu to close the sidebar on navigation */}
          <Link href="/admin" className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-[#fff5e6] hover:text-[#FFA500] font-medium" onClick={toggleMenu}>
            <House className="w-5 h-5" />
            Главная
          </Link>
          <Link href="/admin/add-organization" className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-[#fff5e6] hover:text-[#FFA500] font-medium" onClick={toggleMenu}>
            <ClipboardPenLine className="w-5 h-5" />
            Добавить организацию
          </Link>
          <Link href="/admin/banquet-halls" className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-[#fff5e6] hover:text-[#FFA500] font-medium" onClick={toggleMenu}>
            <Landmark className="w-5 h-5" />
            Банкетные залы
          </Link>
          <Link href="/admin/my-clients" className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-[#fff5e6] hover:text-[#FFA500] font-medium" onClick={toggleMenu}>
            <ContactRound className="w-5 h-5" />
            Мои клиенты
          </Link>
          <Link href="/admin/settings" className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-[#fff5e6] hover:text-[#FFA500] font-medium" onClick={toggleMenu}>
            <Settings className="w-5 h-5" />
            Настройки
          </Link>
        </nav>
        </div>

        {/* Bottom section: Technical Support and Logout buttons */}
        <div className="flex flex-col gap-3 pt-6">
          <button className="w-full flex items-center gap-2 border border-[#FFA500] text-[#FFA500] py-2 px-4 rounded-lg font-medium hover:bg-[#fff5e6] transition-colors duration-200">
            <ShieldQuestion className="w-5 h-5" />
            Тех поддержка
          </button>

          {/* Logout button - calls the onLogout function passed from parent */}
          <button onClick={onLogout} className="w-full flex items-center gap-2 px-4 py-2 hover:bg-[#fff5e6] font-medium rounded-lg transition-colors duration-200">
            <LogOut className="w-5 h-5" alt="Выход" />
            Выйти
          </button>
        </div>
        </div>
      </div>
    </aside>
  );
}
