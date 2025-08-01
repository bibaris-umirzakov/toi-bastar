// /app/admin/layout.js
'use client';
import SideBar from "@/components/SideBar";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useIsDesktop } from "./login/useIsDesktop";

export default function AdminLayout({ children }) {
  const [isAllowed, setIsAllowed] = useState(false);
  const [checked, setChecked] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const isDesktop = useIsDesktop();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const logoutFunc = () => {
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('adminLoginTime');
    router.replace('/admin/login');
  };

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin');
    const loginTime = localStorage.getItem('adminLoginTime');
    const now = Date.now();

    if (isAdmin === 'true' && loginTime) {
      const diff = now - parseInt(loginTime, 10);
      if (diff < 20 * 60 * 1000) {
        setIsAllowed(true);
        setChecked(true);
        const timeout = setTimeout(() => {
          localStorage.removeItem('isAdmin');
          localStorage.removeItem('adminLoginTime');
          router.replace('/admin/login');
        }, 20 * 60 * 1000 - diff);
        return () => clearTimeout(timeout);
      } else {
        localStorage.removeItem('isAdmin');
        localStorage.removeItem('adminLoginTime');
        router.replace('/admin/login');
      }
    } else {
      router.replace('/admin/login');
    }
  }, [router]);

  if (!checked) return <div className="p-8">Загрузка...</div>;
  if (!isAllowed) return null;

  return (
    <div className="min-h-screen flex bg-white relative">
      {/* Сайдбар — фиксирован на десктопе */}
      {isDesktop && (
        <div className="hidden lg:block fixed left-0 top-0 h-screen w-72 z-20 bg-white shadow-md">
          <SideBar isOpen={true} toggleMenu={toggleMenu} onLogout={logoutFunc} />
        </div>
      )}

      {/* Мобильное меню */}
      {!isDesktop && isMenuOpen && (
        <div className="fixed inset-0 z-30 bg-white shadow-lg">
          <SideBar isOpen={true} toggleMenu={toggleMenu} onLogout={logoutFunc} />
        </div>
      )}

      <main className={`flex-1 w-full bg-[#FFF7EB] p-4 sm:p-8 text-[#FFA500] transition-all duration-300 ${isDesktop ? 'ml-72' : ''}`}>
        {/* Top bar for mobile */}
        <div className="flex items-center justify-between lg:hidden mb-4">
          <img src="/Logo.png" alt="Logo" className="w-[140px] h-auto" />
          <button onClick={toggleMenu}>
            {isMenuOpen ? <X className="w-6 h-6 text-[#FFA500]" /> : <Menu className="w-6 h-6 text-[#FFA500]" />}
          </button>
        </div>
        {/* Здесь будет отображаться содержимое дочерних страниц (page.js) */}
        {children} 
      </main>
    </div>
  );
}