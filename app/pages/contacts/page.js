import React from 'react';
import Image from "next/image";


const venues = [
    {
        id: 1,
        name: "777",
        rating: 4.4,
        reviews: 235,
        address: "Жиделбайсын 90/3",
        description: "Құттықтаймыз! \n"  + ""   +
            "Сіздің ерекше күніңізді жоспарлауда көмектесуге әрдайым дайынбыз.\n" +
            "2025 жылдың қыс-көктем маусымына арналған жеңілдетілген бағаларымыз туралы білу үшін хабарласыңыз.\n" +
            " 777-Банетный зал Шымкент қаласындағы сәнді тойхана. Сіздің мерекеңізді әсем де есте қаларлық етіп ұйымдастыруға дайынбыз.....",
        priceFrom: 7500,
        priceTo: 14000,
        capacity: 300,
        image: "/777.jpg",
        icon: "/star.png",
    },
    {
        id: 2,
        name: "Нұр & Әлем",
        rating: 3.8,
        reviews: 174,
        address: "Аюкене 10",
        description: "Сіздің ерекше күніңізді...",
        priceFrom: 6500,
        priceTo: 14000,
        capacity: 300,
        image: "/nur.jpg",
        icon: "/star.png",
    },
    {
        id: 3,
        name: "Millionaire's Empire",
        rating: 4.7,
        reviews: 328,
        address: "Аргынбекова 5/12",
        description: "Сіздің ерекше күніңізді...",
        priceFrom: 7500,
        priceTo: 14000,
        capacity: 350,
        image: "/empire.jpg",
        icon: "/star.png",
    },
    {
        id: 4,
        name: "Estrella",
        rating: 4.9,
        reviews: 679,
        address: "Үтегенова 603/8",
        description: "Сіздің ерекше күніңізді...",
        priceFrom: 5000,
        priceTo: 20000,
        capacity: 330,
        image: "/estrell.jpg",
        icon: "/star.png",
    },
];
export default function Contacts() {
  return (
      <div className="p-1 max-w-full mx-auto space-y-4 ">
          {/*max-w-5xl*/}
          {venues.map((venue) => (
              <div
                  key={venue.id}
                  className="flex flex-col sm:flex-row bg-beige rounded-lg overflow-hidden shadow  bg-[#FFF9ED] p-[15px]"
              >
                  <div className="relative w-full sm:w-1/4 h-48 sm:h-auto mr-[47px]">
                      <Image
                          src={venue.image}
                          alt={venue.name}
                          layout="fill"
                          objectFit="cover"
                      />
                  </div>

                  <div className="flex-1 p-4 space-y-2 ">
                      <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-lg">{venue.name}</h3>
                      </div>

                      <div className="flex items-center text-sm text-[#222222 ] space-x-1">
                          <span className="mr-[8px] bg-red" ></span> <img src={venue.icon} alt=""/>
                          <span className="mr-[8px]" >{venue.rating}</span>
                          <span className="mr-[16px]" >({venue.reviews})</span>
                          <span>{venue.address}</span>
                      </div>

                      <p className="text-sm text-gray-700">{venue.description}</p>

                      <div className="flex items-center  justify-between text-sm text-gray-800 space-x-4 ">
                          <div className="flex items-center space-x-2">
                              <span className="mr-[12px]">
                                <a className="rounded">&#8376;</a> {venue.priceFrom.toLocaleString()} - {venue.priceTo.toLocaleString()}
                            </span>
                              <div className="flex items-center">
                                  <img  className="w-[15px] h-[15px]" src="users.png " alt=""/>
                                  <span className="">  {venue.capacity} мест</span>

                              </div>
                          </div>
                          <div>
                              <button className="px-4 py-2 bg-[#FFB633] text-white rounded hover:bg-[#eda31e]">
                                  Забронировать
                              </button>
                          </div>


                      </div>


                  </div>
              </div>
          ))}
      </div>
  );
}
