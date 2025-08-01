'use client'

export default function AddOrganization() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 flex items-center justify-center bg-[#FFF7EB] border-2 border-dashed border-[#FFA500] rounded-xl min-h-[300px]">
          <img src="/adminka/photo.png" alt="Upload" className="w-24 h-24 opacity-50" />
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <label className="text-sm font-medium">Название</label>
          <input type="text" className="border border-[#FFA500] rounded-lg px-4 py-2 outline-none" />

          <label className="text-sm font-medium">Количество</label>
          <input type="number" className="border border-[#FFA500] rounded-lg px-4 py-2 outline-none" />

          <label className="text-sm font-medium">Цена</label>
          <input type="text" className="border border-[#FFA500] rounded-lg px-4 py-2 outline-none" />

          <label className="text-sm font-medium">Адрес</label>
          <input type="text" className="border border-[#FFA500] rounded-lg px-4 py-2 outline-none" />

          <label className="text-sm font-medium">Номер</label>
          <input type="text" className="border border-[#FFA500] rounded-lg px-4 py-2 outline-none" />
        </div>
      </div>

      <div className="mt-6">
        <label className="text-sm font-medium">Описание</label>
        <textarea rows="3" className="w-full border border-[#FFA500] rounded-lg px-4 py-2 outline-none resize-none"></textarea>
      </div>

      <div className="mt-6 flex justify-end">
        <button className="bg-white border border-[#FFA500] text-[#FFA500] px-6 py-2 rounded-lg hover:bg-[#fff5e6] transition-colors">
          Сохранить
        </button>
      </div>
    </div>
  );
}