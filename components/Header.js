


export default function Header() {
  return (
  <div className="flex items-center gap-6 justify-between px-6 py-4">
    <img src="./Logo.png" className="w-[187px] h-[48px]"/>
    <div className="flex gap-6 text-[16px] font-bold">
        <a href="#">Главное</a>
        <a href="#">Контакты</a>
        <a href="#">Аренда</a>
        <a href="#">Техподдержка</a>
    </div>
    <button className="bg-[#FFA500] text-white px-4 py-2 rounded-full hover:bg-gray-100 transition whitespace-nowrap">
        Стать партнёром
    </button>


  </div>
  );
}

