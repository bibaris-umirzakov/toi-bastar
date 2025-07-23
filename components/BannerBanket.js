import Image from "next/image";
import { Great_Vibes } from 'next/font/google';

const greatVibes = Great_Vibes({ 
  subsets: ['latin'], 
  weight: '400',
  variable: '--font-great-vibes' 
})


export default function BannerBanket() {
  return (
  <div className={`px-4 sm:px-6 md:px-10 lg:px-20 `}>
       <div className="relative bg-[url(/Banket/bg.png)] rounded-lg md:rounded-xl lg:rounded-2xl h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] bg-cover bg-center bg-no-repeat mt-8 sm:mt-12 md:mt-[60px]">
       
           <div className="absolute bottom-0 left-0 w-full sm:w-[80%] md:w-[700px] h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px]">
          <Image
            src="/Banket/Intersect.png"
            alt="Банкетный зал"
            fill
            className="object-cover rounded-b-lg md:rounded-b-xl lg:rounded-b-2xl"
            priority
          />
        </div>
          <div className="absolute mt-[90px] bottom-[20px] left-[20px] sm:bottom-[30px] sm:left-[40px] md:bottom-[40px] md:left-[60px] z-20 w-[80%] max-w-[500px]">
          <Image
            src="/Banket/text.png"
            alt="Берегите своё время - мы всё организуем"
            width={500}
            height={150}
            className="w-full h-auto "
            style={{
              transform: 'translateY(0)' 
            }}
            priority
          />
        </div>
      </div>
    </div>
  );
}
  
