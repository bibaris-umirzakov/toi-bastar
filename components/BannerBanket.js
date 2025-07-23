import Image from "next/image";
import { Great_Vibes } from 'next/font/google';

const greatVibes = Great_Vibes({ subsets: ['latin'], weight: '400' });


export default function BannerBanket() {
  return (
  <div className="px-20">
       <div className="bg-[url(/Banket/bg.png)] rounded h-[550px] bg-cover bg-center bg-no-repeat mt-[60px] ">
       
    <div className="relative  w-[700px] h-[300px]">
  <Image
    src="/Banket/Intersect.png"
    alt="Фон банкетного зала"
    fill
    className="object-cover rounded-xl mt-[255px]  "
  />
  
 
  <div className="absolute mt-[360px] ml-[50px] rounded-lg z-10 max-w-[90%] ">
    <h2 className="text-[#c3a560] great-vibes-text  text-4xl font-serif italic leading-snug ">
      Берегите своё<br />время – мы всё организуем
    </h2>
  </div>
</div>

       </div>
  </div>
  );
}
