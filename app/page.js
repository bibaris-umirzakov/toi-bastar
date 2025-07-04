import React from 'react';
import HallCard from '@/components/HallCard';
import { halls } from '@/data/halls';


export default function Home() {
  return (
  <div className="px-4 py-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-2 text-red-900">Найди свою идеальную Тойхану</h1>
      <p className="text-gray-600 mb-6">Смотри фото, цены и бронируй прямо сейчас</p>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Поиск по названию или району"
          className="flex-1 px-4 py-2 border rounded-lg"
        />
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">Найти Тойхану</button>
        <button className="bg-green-600 text-white px-6 py-2 rounded-lg">Добавить свою</button>
      </div>

      <h2 className="text-2xl font-semibold mb-4">🔥 ТОП 3 Тойханы</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {halls.slice(0, 3).map((hall) => (
          <HallCard key={hall.id} hall={hall} />
        ))}
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">🆕 Новые Тойханы</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {halls.map((hall) => (
          <HallCard key={hall.id} hall={hall} />
        ))}
      </div>
    </div>
  );
}
