"use client";

import { useState } from 'react';

export default function Filter() {
  const [form, setForm] = useState({
    priceFrom: '',
    priceTo: '',
    guestsFrom: '',
    guestsTo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Только положительные числа
    if (/^\d*$/.test(value)) {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Поиск:', form);
  };

  return (
    <div className=" px-5 py-4 space-y-6">
      {/* Заголовок — сверху */}
        <h1 className="text-3xl font-bold text-center text-[#F4A300] font-mali">
        Немного информации – и мы <br />
        найдём то, что нужно
        </h1>
        
    
    <div className="flex flex-col md:flex-row items-end justify-between gap-8">
      {/* Левая часть */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full md:max-w-md text-[#F4A300] h-full"
      >
        

        {/* Цена */}
        <label className="flex items-center gap-2 mt-4 font-semibold">
          <img src='/wallet.png' alt='' className='w-5 h-5'/> Цена
        </label>
        <div className="flex gap-4">
          <input
            type="text"
            name="priceFrom"
            value={form.priceFrom}
            onChange={handleChange}
            placeholder="от"
            className="border border-[#F4A300] rounded-lg p-2 w-full"
          />
          <input
            type="text"
            name="priceTo"
            value={form.priceTo}
            onChange={handleChange}
            placeholder="до"
            className="border border-[#F4A300] rounded-lg p-2 w-full"
          />
        </div>

        {/* Гостей */}
        <label className="flex items-center gap-2 font-semibold mt-2">
          <img src='/UsersGroup.png' alt='' className='w-5 h-5'/>Гостей
        </label>
        <div className="flex gap-4">
          <input
            type="text"
            name="guestsFrom"
            value={form.guestsFrom}
            onChange={handleChange}
            placeholder="от"
            className="border border-[#F4A300] rounded-lg p-2 w-full"
          />
          <input
            type="text"
            name="guestsTo"
            value={form.guestsTo}
            onChange={handleChange}
            placeholder="до"
            className="border border-[#F4A300] rounded-lg p-2 w-full"
          />
        </div>

        {/* Кнопка */}
        <button
          type="submit"
          className=" border border-[#F4A300] rounded-lg p-2 text-[#F4A300] hover:bg-[#F4A300] hover:text-white transition"
        >
          Найти
        </button>
      </form>

      {/* Правая часть */}
      <div className="w-full md:w-1/2 h-full">
        <img
          src="/photoтой 1.png"
          alt="Свадебная пара"
          className="rounded-xl object-contain w-full h-[300px] md:w-[342px] md:h-[260px]"
        />
      </div>
    </div>
  </div>
  );
}
