'use client';
import SideBar from "@/components/SideBar";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function AdminPage() {
  const [isAllowed, setIsAllowed] = useState(false);
  const [checked, setChecked] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
  }, []);

  if (!checked) return <div className="p-8">Загрузка...</div>;
  if (!isAllowed) return null;

  return (
    
    <div className="min-h-screen flex flex-col lg:flex-row bg-white">
      
      <div className="fixed left-0 top-0 h-full w-64 z-10 bg-white shadow-md">
        <SideBar isOpen={isMenuOpen} toggleMenu={() => {
        localStorage.removeItem('isAdmin');
        localStorage.removeItem('adminLoginTime');
        router.replace('/admin/login');
      }} />
      </div>

      <main className="w-full lg:ml-72 bg-[#FFF7EB] p-4 sm:p-8 text-[#FFA500]">
        {/* Top bar for mobile */}
        <div className="flex items-center justify-between lg:hidden mb-4">
          <img src="/Logo.png" alt="Logo" className="w-[140px] h-auto" />
          <button onClick={toggleMenu}>
            {isMenuOpen ? <X className="w-6 h-6 text-[#FFA500]" /> : <Menu className="w-6 h-6 text-[#FFA500]" />}
          </button>
        </div>

        {/* Content */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 flex items-center justify-center bg-[#FFF7EB] border-2 border-dashed border-[#FFA500] rounded-xl min-h-[300px]">
              <img src="/adminka/photo.png" alt="Upload" className="w-24 h-24 opacity-50" />
            </div>
            <div className="flex-1 flex flex-col gap-4">
              <label className="text-sm font-medium">Название</label>
              <input type="text" className="border border-[#FFA500] rounded-lg px-4 py-2 outline-none" />

              <label className="text-sm font-medium">Количество</label>
              <input type="number" className="border border-[#FFA500] rounded-lg px-4 py-2 outline-none" />

              <label className="text-sm font-medium">Цена</label>
              <input type="text" className="border border-[#FFA500] rounded-lg px-4 py-2 outline-none" />

              <label className="text-sm font-medium">Адрес</label>
              <input type="text" className="border border-[#FFA500] rounded-lg px-4 py-2 outline-none" />

              <label className="text-sm font-medium">Номер</label>
              <input type="text" className="border border-[#FFA500] rounded-lg px-4 py-2 outline-none" />
            </div>
          </div>
          <div className="mt-6">
            <label className="text-sm font-medium">Описание</label>
            <textarea rows="3" className="w-full border border-[#FFA500] rounded-lg px-4 py-2 outline-none resize-none"></textarea>
          </div>
          <div className="mt-6 flex justify-end">
            <button className="bg-white border border-[#FFA500] text-[#FFA500] px-6 py-2 rounded-lg hover:bg-[#fff5e6] transition-colors">
              Сохранить
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}