import Link from "next/link";

export default function SideBar(){
    return(
      <div>
        <div className="flex items-center justify-between md:px-20 px-5 py-4 bg-white shadow-md relative">
            <img src="/Logo.png" className="w-[150px] h-auto" alt="Logo" />
            <button className="text-md px-5 text-[#063C5E] font-bold">Выйти</button>
        </div>
        <div className="block space-y-3 bg-white shadow-md w-[300px] h-[730]">
            <Link href="/" className="flex mt-10 ml-16 items-center gap-2 w-[220px] h-[40px] hover:text-[#FFA500] text-sm px-5 hover:bg-[#FFF9ED] hover:rounded-lg"><img src="home.png" alt=""/>Главная</Link>
            <Link href="/" className="flex ml-16 items-center gap-2 w-[220px] h-[40px] hover:text-[#FFA500] text-sm px-5 hover:bg-[#FFF9ED] hover:rounded-lg"><img src="Frame.png" alt=""/>Добавить организацию</Link>
            <Link href="/" className="flex ml-16 items-center gap-2 w-[220px] h-[40px] hover:text-[#FFA500] text-sm px-5 hover:bg-[#FFF9ED] hover:rounded-lg"><img src="img2.png" alt=""/>Банкетные залы</Link>
            <Link href="/" className="flex ml-16 items-center gap-2 w-[220px] h-[40px] hover:text-[#FFA500] text-sm px-5 hover:bg-[#FFF9ED] hover:rounded-lg"><img src="userprofile.png" alt=""/>Мои клиенты</Link>
            <Link href="/" className="flex ml-16 items-center gap-2 w-[220px] h-[40px] hover:text-[#FFA500] text-sm px-5 hover:bg-[#FFF9ED] hover:rounded-lg"><img src="img1.png" alt=""/>Настройки</Link>
        </div>
      </div>
    )
}