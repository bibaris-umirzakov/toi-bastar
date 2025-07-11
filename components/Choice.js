import Link from "next/link";

export default function Choice() {
    return (
        <div className="Choice">
            <section className="choice mt-[155px]">
                <div className="choice_wrap flex flex-row justify-around max-sm:flex max-sm:flex-col">
                    <div className="choice_item mr-[40px] max-w-[615px] mt-[195px] max-sm:mb-[70px]"><img src="banquet.png" alt=""/></div>
                    <div className="choice_item">
                        <div className="choice_item_btn flex max-sm:flex max-sm:justify-center max-sm:mb-[46px]"><button className="text-[14px] rounded  bg-[#F6E9D1]  text-[#FFA500] font-medium pt-[16px] pb-[16px] pl-[32px] pr-[32px] mb-[32px] flex  items-center">ПОЧЕМУ ВЫБИРАЮТ НАС?</button></div>
                        <div className="choice_item_title text-[38px]/[47px] font-medium mb-[56px] max-sm:text-center max-sm:text-[28px] max-sm:font-bold ">Мы предлагаем лучшие условия</div>
                        <div className="choice_block">
                            <div className="choice_block_item flex  mb-[37.5px]">
                                <div className="choice_block_item_img  flex-[1_1_64px]  p-[20px] bg-[#FDEDD8] rounded mr-[24px] h-[64px] max-sm:flex max-sm:flex-none "><img src="wallet.png" alt=""/></div>
                                <div className="choice_block_item_content  flex-[1_1_365px] mt-[-7px]">
                                    <div className="choice_block_item_content_title text-[20px]  font-bold">Ценовая политика</div>
                                    <div className="choice_block_item_content_text text-[#989898]">Подходит для любого бюджета, постоянным клиентам — скидки и бонусы.</div>
                                </div>
                            </div>
                            <div className="choice_block_item flex mb-[37.5px]">
                                <div className="choice_block_item_img p-[20px] bg-[#FDEDD8] rounded mr-[24px] flex-[1_1_64px] h-[64px] max-sm:flex max-sm:flex-none "><img src="clock.png" alt=""/></div>
                                <div className="choice_block_item_content flex-[1_1_365px] mt-[-7px]">
                                    <div className="choice_block_item_content_title text-[20px] font-bold ">Быстрое бронирование</div>
                                    <div className="choice_block_item_content_text text-[#989898]">Бронирование банкетного зала всего за 5 минут.</div>
                                </div>
                            </div>
                            <div className="choice_block_item flex mb-[37.5px]">
                                <div className="choice_block_item_img p-[20px] bg-[#FDEDD8] rounded mr-[24px] flex-[1_1_64px] h-[64px] max-sm:flex max-sm:flex-none "><img src="buildings.png" alt=""/></div>
                                <div className="choice_block_item_content flex-[1_1_365px] mt-[-7px]">
                                    <div className="choice_block_item_content_title text-[20px] font-bold ">Свобода выбора</div>
                                    <div className="choice_block_item_content_text text-[#989898]">Более 20 залов — от классики до люкса.</div>
                                </div>
                            </div>
                            <div className="choice_block_item flex mb-[37.5px]">
                                <div className="choice_block_item_img p-[20px] bg-[#FDEDD8] rounded mr-[24px] flex-[1_1_64px] h-[64px] max-sm:flex max-sm:flex-none"><img  className="" src="messages-2.png" alt=""/></div>
                                <div className="choice_block_item_content flex-[1_1_365px] mt-[-7px]">
                                    <div className="choice_block_item_content_title text-[20px] font-bold ">Техническая поддержка</div>
                                    <div className="choice_block_item_content_text text-[#989898]">Есть вопрос? Обращайтесь в службу поддержки ToiBastar с 08:00 до 20:00, если у вас возникнут проблемы.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}
