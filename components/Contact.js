import Link from "next/link";

export default function Contact() {
    return (
    <div className="Contacrs">
        <section className="contact">
            <div className="contact_title mb-[75px] text-[35px] font-bold max-sm:text-center">Наши контакты</div>
            <div className="contact_wrap flex direction-row justify-between max-sm:flex-col">
                <div className="contact_item">
                    <div className="contact_item_address">
                        <h3>Адрес:</h3>
                        <p>160000, г. Шымкент.</p>
                    </div><br/>
                    <div className="contact_item_email">
                        <h3>E-mail:</h3>
                        <p>info@ToiBastar.kz</p>
                    </div>
                </div>
                <div className="contact_item max-sm:mt-[50px]">
                    <div className="contact_item_time">
                        <h3>Время работы:</h3>
                        <p>Ежедневно 08:00 до 20:00</p>
                    </div><br/>
                    <div className="contact_item_social  max-sm:mt-[50px]">
                        <h3>Соц. сети:</h3>
                        <div className="contact_item_socials_icons flex direction-row justify-start max-sm:justify-start">
                            <a href="" className="max-sm:mr-[10px] mr-[10px]"><img src="telegram.png" alt=""/></a>
                            <a href="" className="max-sm:mr-[10px] mr-[10px]"><img src="whatsapp.png" alt=""/></a>
                            <a href=""><img src="instagram.png" alt=""/></a>
                        </div>

                    </div>

                </div>
                <div className="contact_item max-sm:mt-[50px]">
                    <h3>Телефон:</h3>
                    <p>8 777 060 80 31</p>
                </div>
            </div>
        </section>
    </div>
    )
}