import React from "react";

export default function Footer() {

    return(
        <div className="Footer bg-[#89650B]     ">
            <section className="footer w-full  overflow-hidden pl-[101px] pb-[112px] max-sm:pl-[30px]">
                <div className="footer_title pt-[67px] text-[40px] font-bold text-[#FFA500]" >ToiBastar</div>
                <div className="footer_wrap flex direction-row items-baseline max-sm:flex max-sm:flex-col">
                    <div className="footer_wrap_item flex-[1_1_535px] max-sm:flex-[1_1_259px]">
                        <p className="tetx-[16px] text-white pt-[29px]">Если вы представляете компанию по аренде автомобилей и хотите присоединиться к нашей сети партнёров, свяжитесь с нами. Мы открыты для сотрудничества и готовы предложить взаимовыгодные условия.</p>
                        <div className="buttons flex direction-row justify-start pt-[29px] ">
                            <div className="buttons_partner text-white pt-[10px] pr-[27px] pb-[11px] pl-[27px] mr-[27px] bg-[#FFA500] rounded">Стать партнером</div>
                            <div className="buttons_google w-[139px] h-[40] mr-[27px]"><img src="google_play.png" alt=""/></div>
                            <div className="buttons_app w-[139px] h-[40]"><img src="app_store.png" alt=""/></div>
                        </div>
                    </div>
                    <div className="footer_wrap_item flex-[1_1_200px] text-white">
                        <ul >
                            <li className="pb-[20px]">Главная</li>
                            <li className="pb-[20px]">Контакты</li>
                            <li className="pb-[20px]">О нас</li>
                            <li>Условия</li>
                        </ul>

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
