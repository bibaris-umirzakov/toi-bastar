export default function Choice() {
  return (
    <div>
    <div>
          <div className="flex-row md:flex">
            <div className="mt-[25px] md:w-1/2 md:mt-[245px] object-cover"><img src="/banquet.jpg" alt=""/></div>
            <div className=" md:bg-[#FFF9ED] md:w-1/2 px-6 md:px-0 md:mt-[245px] md:pl-[50px]">
                <div className="flex max-w-[615px] mt-[50px] md:mb-[25px] md:mt-[60px] max-sm:flex max-sm:justify-center max-sm:mb-[46px]"><button className="text-[13px] rounded-xl bg-[#FDEDD8] text-[#FFA500] font-medium py-[10px] px-[30px] tracking-85">ПОЧЕМУ ВЫБИРАЮТ НАС?</button></div>
                <div className="text-[38px] md:text-[38px] leading-tight font-medium mb-[56px]  max-sm:text-center sm:text-left max-sm:text-[28px] max-sm:font-bold ">Мы предлагаем лучшие условия</div>
                <div className="flex mb-[30px] pr-3 md:pr-0">
                    <div className="p-[20px] bg-[#FDEDD8] rounded-2xl mr-[24px] h-[64px] min-w-[64px] max-sm:flex max-sm:flex-none "><img src="wallet.png" alt=""/></div>
                    <div className="block">
                            <p className="text-[20px] font-medium">Ценовая политика</p>
                            <p className="text-[#989898] sm:text-base max-w-[320px]">Подходит для любого бюджета, постоянным клиентам — скидки и бонусы.</p>
                    </div>
                </div>
                <div className="flex mb-[20px] ">
                    <div className="p-[20px] bg-[#FDEDD8] rounded-2xl mr-[24px] h-[64px] min-w-[64px] max-sm:flex max-sm:flex-none "><img src="clock.png" alt=""/></div>
                        <div className="block">
                            <p className="text-[20px] font-medium">Быстрое бронирование</p>
                            <p className="text-[#989898] sm:text-base max-w-[320px]">Бронирование банкетного зала всего за 5 минут.</p>
                        </div>
                </div>
                <div className="flex mb-[32px] ">
                    <div className="p-[20px] bg-[#FDEDD8] rounded-2xl mr-[24px] h-[64px] min-w-[64px] max-sm:flex max-sm:flex-none "><img src="buildings.png" alt=""/></div>
                        <div className="block">
                            <p className="text-[20px] font-medium">Свобода выбора</p>
                            <p className="text-[#989898] sm:text-base max-w-[320px]">Более 20 залов — от классики до люкса.</p>
                        </div>
                </div>
                <div className="flex mb-[32px] ">
                    <div className="p-[20px] bg-[#FDEDD8] rounded-2xl mr-[24px] h-[64px] min-w-[64px] max-sm:flex max-sm:flex-none"><img  className="" src="messages-2.png" alt=""/></div>
                        <div className="block">
                            <p className="text-[20px] font-medium">Техническая поддержка</p>
                            <p className="text-[#989898] sm:text-base max-w-[320px]">Есть вопрос? Обращайтесь в службу поддержки ToiBastar с 08:00 до 20:00, если у вас возникнут проблемы.</p>
                        </div>
                </div>
            </div>
          </div>
          
        </div>
      

      {/* <div className="hidden md:flex flex-row bg-[#FFF9ED] px-[50px] py-[80px]">
        <div className="w-1/2 pr-[40px]">
          <img src="/banquet.jpg" alt="Фото" className="rounded-xl w-full" />
        </div>
        <div className="w-1/2">
          <button className="text-[13px] rounded-xl bg-[#FDEDD8] text-[#FFA500] font-medium py-[10px] px-[20px] tracking-85 mb-6">
            ПОЧЕМУ ВЫБИРАЮТ НАС?
          </button>
          <h2 className="text-[38px] font-medium mb-10 leading-tight">
            Мы предлагаем лучшие условия
          </h2>

          <div className="space-y-6">
            <div className="flex">
              <div className="min-w-[64px] h-[64px] p-4 bg-[#FDEDD8] rounded-2xl mr-4 flex items-center justify-center">
                <img src="wallet.png" alt="" className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[20px] font-medium">Ценовая политика</p>
                <p className="text-[#989898] text-base">Подходит для любого бюджета, постоянным клиентам — скидки и бонусы.</p>
              </div>
            </div>
            <div className="flex mb-[20px] ">
                    <div className="p-[20px] bg-[#FDEDD8] rounded-2xl mr-[24px] h-[64px] min-w-[64px] max-sm:flex max-sm:flex-none "><img src="clock.png" alt=""/></div>
                        <div className="block">
                            <p className="text-[20px] font-medium">Быстрое бронирование</p>
                            <p className="text-[#989898] text-base w-[320px]">Бронирование банкетного зала всего за 5 минут.</p>
                        </div>
            </div>
            <div className="flex mb-[32px] ">
                    <div className="p-[20px] bg-[#FDEDD8] rounded-2xl mr-[24px] h-[64px] min-w-[64px] max-sm:flex max-sm:flex-none "><img src="buildings.png" alt=""/></div>
                        <div className="block">
                            <p className="text-[20px] font-medium">Свобода выбора</p>
                            <p className="text-[#989898] text-base w-[320px]">Более 20 залов — от классики до люкса.</p>
                        </div>
            </div>
            <div className="flex">
                    <div className="p-[20px] bg-[#FDEDD8] rounded-2xl mr-[24px] h-[64px] min-w-[64px] max-sm:flex max-sm:flex-none"><img  className="" src="messages-2.png" alt=""/></div>
                        <div className="block">
                            <p className="text-[20px] font-medium">Техническая поддержка</p>
                            <p className="text-[#989898] text-base w-[400px]">Есть вопрос? Обращайтесь в службу поддержки ToiBastar с 08:00 до 20:00, если у вас возникнут проблемы.</p>
                        </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}








