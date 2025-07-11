export default function Footer() {
    return(
        <div className="bg-[#89650B]">
            <section className="container mx-auto py-15 px-4 md:px-8 xl:px-[100px]">
                <img src="./Logo.png" className="mb-10 w-[234px] h-[46px]"/>
                <div className="flex flex-col lg:flex-row md:flex md:flex-row flex-wrap  md:gap-10 gap-8 xl:gap-40">
                    <div className="flex-1 xl:flex-[2] md:w-[400px] flex flex-col gap-8">
                        <p className="text-base font-normal font-inter leading-6 text-wrap max-w-lg text-white">
                            Если вы представляете компанию по аренде автомобилей и хотите присоединиться к нашей сети партнёров, 
                            свяжитесь с нами. Мы открыты для сотрудничества и готовы предложить взаимовыгодные условия.</p>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:gap-2">
                            <a className="mb-4 md:mb-0" target="_blank" rel="noopener noreferrer" href="/">
						        <button className="bg-[#FFA500] text-white h-10 w-[190px] px-4  rounded-lg shadow-lg backdrop-blur-lg hover:bg-black/50 transition-colors">Стать партнером</button>
					        </a>
                            <div className="flex gap-1">
                                <div className="rounded-lg px-1 flex items-center gap-2 w-[135px]">
                                    <a target="_blank" rel="noopener noreferrer" className="cursor-pointer" href="/">
                                        <img src="google_play.png" alt=""/>        
                                    </a>
                                </div>
                                <div className="rounded-lg px-1 flex items-center gap-2 w-[130px]">
                                    <a target="_blank" rel="noopener noreferrer" className="cursor-pointer" href="/">
                                        <img src="app_store.png" alt=""/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-8 lg:gap-28">
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-col gap-5 text-white">
                                <a className="text-base font-medium hover:text-black transition-colors" href="/">Главная</a>
                                <a className="text-base font-medium hover:text-black transition-colors" href="/#ContactsNew">Контакты</a>
                                <a className="text-base font-medium hover:text-black transition-colors" href="/#Blog">О нас</a>
                                <a className="text-base font-medium hover:text-black transition-colors" href="/legal?section=condition">Условия</a>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-col gap-5 text-wrap lg:flex-wrap xl:text-nowrap text-white">
                                <a className="text-base font-medium hover:text-black transition-colors" href="/legal?section=privacy-policy">Политика конфиденциальности</a>
                                <a className="text-base font-medium hover:text-black transition-colors" href="/legal?section=terms">Пользовательское соглашение</a>
                                <a className="text-base font-medium hover:text-black transition-colors" href="/legal?section=data-collection">Сбор и обработка персональных данных</a>
                                <a className="text-base font-medium hover:text-black transition-colors" href="/support#faq">Часто задаваемые вопросы</a>
                            </div>
                            <div className="pt-4">
                                <div className="flex gap-4">
                                    <a href="/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#FFA500] transition-colors">
                                        <img src="telegram_icon.png" alt=""/>
                                    </a>
                                    <a href="/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#FFA500] transition-colors">
                                        <img src="telegram_icon.png" alt=""/>
                                    </a>
                                    <a href="/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#FFA500] transition-colors">
                                        <img src="instagram_icon.png" alt=""/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}