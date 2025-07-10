import Image from "next/image"
export default function Banner(){
    return(
        <div className="px-6 pt-15 bg-[url('/banner.jpg')] bg-cover bg-center h-screen w-full">
            <h1 className="text-[42px] text-white font-bold w-[550px] leading-tight mb-4">Найди идеальный зал и бронируй за пару кликов</h1>
            <p className="text-white w-[350px] text-[19px] leading-tight">Удобный сервис аренды банкетных залов в твоем городе</p>
        </div>
    )
}