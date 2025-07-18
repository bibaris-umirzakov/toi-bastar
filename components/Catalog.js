"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import 'swiper/css/scrollbar';
import "swiper/css/navigation";
import { Scrollbar } from 'swiper/modules';

export default function Catalog() {
    const catalogItems = [
        { title: "Кафе", image: "/cafe.png" },
        { title: "Ресторан", image: "/restoran.png" },
        { title: "Банкетный зал", image: "/banquet.jpg" },
        // добавьте больше карточек при необходимости
    ];
    return(
        <div className="Catalog">


            <section className="py-10 bg-white">
            <h2 className="text-3xl font-bold text-center mb-8">КАТАЛОГ</h2>

            <div className="relative px-4 md:px-10">
            <Swiper

            scrollbar={{
                hide: false,
            }}
            modules={[Scrollbar]}
            spaceBetween={16}
            breakpoints={{
                320: {
                    slidesPerView: 1.2,
                },
                640: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            }}
        >
            {catalogItems.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className="relative rounded-xl overflow-hidden shadow-lg">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-60 object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-start justify-start p-4">
                            <h3 className="text-white text-lg font-semibold">
                                {item.title}
                            </h3>
                        </div>
                        <div className="absolute bottom-4 right-4">
                            <div className="bg-orange-500 text-white p-[11px] rounded-full w-[50px] h-[50px]">
                                <span className="text-[30px] "><a href=""><img src="arrow.png" alt=""/></a></span>
                            </div>
                        </div>
                    </div>
                    <div className="invisible">asd</div>

                </SwiperSlide>

            ))}

        </Swiper>


</div>
</section>

</div>
    );
}