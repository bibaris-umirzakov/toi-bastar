import Image from "next/image"; 
export default function BannerBanket() {
  return (
  <div className={`px-4 sm:px-6 md:px-10 lg:px-20 `}>
       <div className="relative bg-[url(/Banket/bg.png)] rounded-lg md:rounded-xl lg:rounded-2xl h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] bg-cover bg-center bg-no-repeat mt-8 sm:mt-12 md:mt-[60px]">
       
           <div className="absolute bottom-0 left-0 w-full sm:w-[80%] md:w-[700px] h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px]">
          <Image
            src="/Banket/ItemBannerd.png"
            alt="Банкетный зал"
            fill
            className="object-cover rounded-b-lg md:rounded-b-xl lg:rounded-b-2xl"
            priority
          />
        
          
        </div>
      </div>
    </div>
  );
}
  
