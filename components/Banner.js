import Image from "next/image";
import SearchSection from "./SearchSection";

export default function Banner() {
    return (
        <div className="px-6 pt-16 bg-[url('/banner.jpg')] bg-cover bg-center h-[800px] w-full flex flex-col items-start justify-start">
            <div className="ml-20">
                <h1 className="text-[48px] text-white font-bold w-[600px] leading-tight mb-6">
                    Найди идеальный зал и бронируй за пару кликов
                </h1>
                <p className="text-white w-[400px] text-[22px] leading-tight mb-8">
                    Удобный сервис аренды банкетных залов в твоем городе. Открой для себя лучшие места для мероприятий!
                </p>
                <SearchSection />
            </div>
        </div>
    );
}