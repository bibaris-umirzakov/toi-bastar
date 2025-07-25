export default function Footer() {
    return(
        <div className="Footer bg-[#89650B]     ">
            <section className="footer w-full  overflow-hidden  pl-[101px] pb-[112px] max-sm:pl-[30px]">
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
                    <div className="footer_wrap_item flex-[1_1_280px] text-white">
                        <p className="pb-[20px]">Политика конфиденциальности</p>
                        <p className="pb-[20px]">Пользовательское соглашение</p>
                        <p className="pb-[20px]">Сбор и обработка персональных данных</p>
                        <p className="pb-[20px]">Часто задаваемые вопросы</p>
                        <div className="social_button flex direction-row justify-start">
                            <a href=""><img src="telegram_icon.png" alt=""/></a>
                            <a href=""><img src="telegram_icon.png" alt=""/></a>
                            <a href=""><img src="instagram_icon.png" alt=""/></a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}