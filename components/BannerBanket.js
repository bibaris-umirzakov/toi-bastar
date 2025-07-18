import Image from "next/image";


export default function BannerBanket() {
  return (
  <div className="">
       <div className="bg-[url(/Banket/bg.png)] w-[1116px] h-[581px] pt-[221px] ml-[150px] mt-[60px]">
       
    <div className="relative w-[700px] h-[300px] mt-[60px] ">
  <Image
    src="/Banket/Intersect.png"
    alt="Фон банкетного зала"
    fill
    className="object-cover rounded-xl"
  />
  
 
  <div className="absolute bottom-6 left-6 p-4 rounded-lg z-10 max-w-[90%]">
    <h2  className="text-[#c3a560] text-2xl font-serif italic leading-snug">
      Берегите своё<br />время – мы всё организуем
    </h2>
  </div>
</div>

       </div>
  </div>
  );
}
