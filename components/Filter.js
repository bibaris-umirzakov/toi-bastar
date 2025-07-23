"use client";

import React, { useState } from "react";

export default function Filter() {
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [guestsFrom, setGuestsFrom] = useState("");
  const [guestsTo, setGuestsTo] = useState("");

  const handleSearch = () => {
    console.log("Цена от:", priceFrom);
    console.log("Цена до:", priceTo);
    console.log("Гостей от:", guestsFrom);
    console.log("Гостей до:", guestsTo);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 rounded-2xl w-full max-w-[800px] mx-auto">
      
      <h2 className="text-xl md:text-2xl font-bold text-[#FFB633] text-center mb-6 leading-snug">
        Немного информации – и мы<br /> найдём то, что нужно
      </h2>

      
      <div className="flex flex-col md:flex-row md:items-end gap-4 w-full justify-between">
        
        <div className="flex flex-col text-[#FFB633] w-full md:w-auto">
          <label className="flex items-center gap-1 font-medium mb-1">
            <img src="/wallet.png" alt="Цена" className="w-4 h-4"/>
             Цена
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="от"
              value={priceFrom}
              onChange={(e) => setPriceFrom(e.target.value)}
              className="border border-orange-300 rounded-md px-3 py-2 w-full md:w-24 placeholder-orange-300 outline-none"
            />
            <input
              type="number"
              placeholder="до"
              value={priceTo}
              onChange={(e) => setPriceTo(e.target.value)}
              className="border border-orange-300 rounded-md px-3 py-2 w-full md:w-24 placeholder-orange-300 outline-none"
            />
          </div>
        </div>

        
        <div className="flex flex-col text-[#FFB633] w-full md:w-auto">
          <label className="flex items-center gap-1 font-medium mb-1">
            <img src="/UsersGroup.png" alt="Цена" className="w-4 h-4"/> 
            Гостей
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="от"
              value={guestsFrom}
              onChange={(e) => setGuestsFrom(e.target.value)}
              className="border border-orange-300 rounded-md px-3 py-2 w-full md:w-24 placeholder-orange-300 outline-none"
            />
            <input
              type="number"
              placeholder="до"
              value={guestsTo}
              onChange={(e) => setGuestsTo(e.target.value)}
              className="border border-orange-300 rounded-md px-3 py-2 w-full md:w-24 placeholder-orange-300 outline-none"
            />
          </div>
        </div>

        
        <div className="flex w-full md:w-auto">
          <button
            onClick={handleSearch}
            className="border border-[#FFB633] text-[#FFB633] font-medium rounded-md px-6 py-2 w-full md:w-auto hover:bg-orange-100 transition"
          >
            Найти
          </button>
        </div>

        <div className="flex flex-col  w-full md:w-auto">
        <img src="/photoтой 1.png" alt="Цена" className="w-70 h-70"/>
        </div>
        
      </div>
    </div>
  );
}
