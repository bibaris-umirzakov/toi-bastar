import Link from "next/link";

export default function HowItWork() {
    return (
        <div className="HowItWork work bg-white  mt-[80px] ">


            <section className="work bg-white ">
                <div className="work_btn flex justify-center  "><button className=" text-base sm:text-sm rounded  bg-[#F6E9D1]  text-[#FFA500] font-bold pt-[12px] pb-[12px] pl-[32px] pr-[32px] flex  items-center">КАК ЭТО РАБОТАЕТ?</button></div>
                <h1 className="text-[38px] text-center mt-[32px] mb-[80px] max-sm:mb-[50px]" >Как найти тойхану в 3 шага</h1>
                <div className=" work_wrap flex flex-row justify-around max-sm:flex max-sm:flex-col ">
                    <div className=" max-sm:flex  max-sm:items-start max-sm:ml-[21px] wrap_item flex flex-col items-center text-center max-sm:flex-row">
                        <div className="wrap_item_img bg-[#FDF1D8] p-[32px] rounded-2xl mb-[40px] max-sm:p-[18px]" ><img src="svg1530.png" alt=""/></div>
                        <div className="wrap_item_text max-sm:ml-[20px]">
                            <div className="wrap_item_title text-[20px] color-black mb-[24px] max-sm:text-[16px]  font-bold max-sm:mb-[5px] text-start" >Выберите город и дату</div>
                            <div className="wrap_item_content max-sm:text-[16px]">Укажи, где и когда нужен зал</div>
                        </div>

                    </div>
                    <div className="max-sm:flex max-sm:items-start max-sm:ml-[21px] wrap_item flex flex-col items-center text-center max-sm:flex-row">
                        <div className="wrap_item_img bg-[#FDF1D8] p-[32px] rounded-2xl mb-[40px] max-sm:p-[18px]"><img src="Vector.png" alt=""/></div>
                        <div className="wrap_item_text max-sm:ml-[20px] max-sm:text-start">
                            <div className="wrap_item_title text-[20px]  color-black mb-[24px] max-sm:text-[16px] font-bold max-sm:mb-[5px]">Найдите подходящий зал</div>
                            <div className="wrap_item_content max-sm:text-[16px]">Сравни предложения по
                                цене, вместимости и услугам</div>
                        </div>
                        </div>

                    <div className="max-sm:flex  max-sm:items-start max-sm:ml-[21px] wrap_item flex flex-col items-center text-center max-sm:flex-row">
                        <div className="wrap_item_img bg-[#FDF1D8] p-[32px] rounded-2xl mb-[40px] max-sm:p-[18px]"><img src="Vector (1).png" alt=""/></div>
                        <div className="wrap_item_text max-sm:ml-[20px] max-sm:text-start">
                        <div className="wrap_item_title text-[20px]  color-black mb-[24px]  max-sm:text-[16px] font-bold max-sm:mb-[5px]">Забронируйте онлайн</div>
                        <div className="wrap_item_content max-sm:text-[16px]">Свяжитесь напрямую
                            или оставьте заявку</div>
                        </div>
                    </div>
                </div>
            </section>




        </div>
    );
}

