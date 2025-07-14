import React from "react";

export default function Footer() {
    return (
        <footer className="bg-[#a97a00] text-white px-4 py-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-8">
                {/* Левая колонка */}
                <div className="md:w-1/3">
                    <h2 className="text-2xl font-bold mb-3">
                        <span className="text-orange-400">Toi</span>Bastar
                    </h2>
                    <p className="text-sm mb-4">
                        Если вы представляете компанию по аренде автомобилей и хотите присоединиться к нашей сети партнёров, свяжитесь с нами. Мы открыты для сотрудничества и готовы предложить взаимовыгодные условия.
                    </p>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded mb-4 text-sm">
                        Стать партнёром
                    </button>
                    <div className="flex gap-3 flex-wrap">
                        <img src="/google-play-badge.png" alt="Google Play" className="h-10 w-auto" />
                        <img src="/app-store-badge.png" alt="App Store" className="h-10 w-auto" />
                    </div>
                </div>

                {/* Средняя колонка */}
                <div className="md:w-1/3">
                    <h3 className="text-lg font-semibold mb-2">Навигация</h3>
                    <ul className="text-sm space-y-1">
                        <li><a href="/" className="hover:underline">Главная</a></li>
                        <li><a href="/contact" className="hover:underline">Контакты</a></li>
                        <li><a href="/about" className="hover:underline">О нас</a></li>
                        <li><a href="/terms" className="hover:underline">Условия</a></li>
                    </ul>
                </div>

                {/* Правая колонка */}
                <div className="md:w-1/3">
                    <h3 className="text-lg font-semibold mb-2">Правовая информация</h3>
                    <ul className="text-sm space-y-1">
                        <li><a href="/privacy" className="hover:underline">Политика конфиденциальности</a></li>
                        <li><a href="/user-agreement" className="hover:underline">Пользовательское соглашение</a></li>
                        <li><a href="/data-policy" className="hover:underline">Сбор и обработка данных</a></li>
                        <li><a href="/faq" className="hover:underline">FAQ</a></li>
                    </ul>
                    <div className="flex space-x-4 text-2xl mt-4">

                    </div>
                </div>
            </div>

            <div className="text-center text-sm mt-10 border-t border-white/20 pt-4">
                © 2025 ToiBastar® Global Inc.
            </div>
        </footer>
    );
}
