export default function Banquetfind() {
    return(
        <div className="px-20 py-10">
            <div className="flex justify-center items-cente "><p className="text-center font-bold text-[48px] text-[#FFB633] w-2/3">Немного информации - и мы найдём то, что нужно</p></div>
        <div className="grid grid-cols-2 gap-4 w-full px-4">
            <form className="w-full mx-auto mt-10 p-6 flex flex-col items-center gap-6 text-[#FFA500]">
  
  <div className="w-full">
    <label className="flex items-center gap-2 text-xl font-bold mb-3">
      <img src="/icons/wallet.png" alt="Цена" className="w-6 h-6" />
      Цена
    </label>
    <div className="flex gap-3">
      <input type="number" placeholder="от" min="1" step="1" required className="w-full border border-[#FFA500] rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-orange-300" />
      <input type="number" placeholder="до" min="1" step="1" required className="w-full border border-[#FFA500] rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-orange-300" />
    </div>
  </div>

  <div className="w-full">
    <label className="flex items-center gap-2 text-xl font-bold mb-3">
      <img src="/icons/Users.png" alt="Цена" className="w-6 h-6" />
      Гостей
    </label>
    <div className="flex gap-3">
      <input type="number" placeholder="от" min="1" step="1" required className="w-full border border-[#FFA500] rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-orange-300" />
      <input type="number" placeholder="до" min="1" step="1" required className="w-full border border-[#FFA500] rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-orange-300" />
    </div>
  </div>

  <button type="submit" className="w-full border border-[#FFA500] text-[#FFA500] font-bold text-lg py-3 rounded-lg hover:bg-orange-50 transition">
    Найти
  </button>
</form>

            <div className="w-full flex justify-end items-start mt-10"><img src="/photo2.png" alt=""/></div>
    
        </div>
        
    </div> 
    );
}