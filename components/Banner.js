
import SearchSection from "./SearchSection";

export default function Banner(){
  return (
    <div>
      <div className="px-24 pt-15 bg-[url('/banner.jpg')] relative bg-cover bg-no-repeat bg-center h-screen w-full md:block hidden">
        <h1 className="text-[42px] text-white font-bold w-[550px] tracking-tight leading-15 mb-4">Найди идеальный зал и бронируй за пару кликов</h1>
        <p className="text-white w-[350px] text-[19px] leading-tight mb-12">Удобный сервис аренды банкетных залов в твоем городе</p>
         <SearchSection />
      </div>
      <div className="md:hidden flex flex-col items-center px-6 pt-5 text-center bg-[url('/banner1.jpg')] relative bg-contain bg-no-repeat w-full min-h-screen">
        <h1 className="text-[36px] w-[300px] leading-none font-bold text-[#FFA600]">Свадьба <span className="text-white"> - на высоте</span></h1>
        <p className="mt-7 text-[18px] text-white leading-none mb-5">Удобный сервис аренды банкетных залов в твоем городе</p>
         <SearchSection />
      </div>
    </div>
  )}
