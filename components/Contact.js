"use client";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="bg-[#FFF9ED] md:px-20 px-5 pt-5 pb-20">
        <h1 className="text-[34px] font-bold mb-10">Наши контакты</h1>

        <div className="grid md:grid-cols-3 gap-y-8 gap-x-12">
        
            <div className="flex flex-col gap-2 order-1">
                <h3 className="text-gray-600 font-medium">Адрес:</h3>
                <p className="font-semibold">160000, г. Шымкент.</p>
            </div>

            <div className="flex flex-col gap-2 order-2">
                <h3 className="text-gray-600 font-medium">Время работы:</h3>
                <p className="font-semibold">Ежедневно 08:00 до 20:00</p>
            </div>

            <div className="flex flex-col gap-2 order-3">
                <h3 className="text-gray-600 font-medium">Телефон:</h3>
                <p className="font-semibold">+7 777 060 80 31</p>
            </div>

            <div className="flex flex-col gap-2 order-5 md:order-4">
                <h3 className="text-gray-600 font-medium">E-mail:</h3>
                <p className="font-semibold">info@ToiBastar.kz</p>
            </div>

            <div className="flex flex-col gap-2 order-6 md:order-5">
                <h3 className="text-gray-600 font-medium">Соц. сети:</h3>
                <div className="flex gap-4">
                    <Link href="#"><img src="/telegram.png" alt="Telegram" className="w-6 h-6" /></Link>
                    <Link href="#"><img src="/whatsapp.png" alt="WhatsApp" className="w-6 h-6" /></Link>
                    <Link href="#"><img src="/instagram.png" alt="Instagram" className="w-6 h-6" /></Link>
                </div>
            </div>
        </div>
    </div>
  );
}
