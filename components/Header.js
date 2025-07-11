import Link from "next/link";


export default function Header() {
  return (

  <div className="flex items-center justify-between py-5">
    <img src="./Logo.png" className="w-[234px] h-[46px]"/>
    <div className="flex gap-10 text-base font-bold font-inter leading-none tracing-normal">
        <Link href="/">Главная</Link>
        <Link href="/pages/contacts">Банкетные залы</Link>
        <Link href="/pages/rent">Контакты</Link>
        <Link href="/pages/support">Техподдержка</Link>
    </div>
    <button className="bg-[#FFA500] text-white px-4 py-2 rounded-[10px] hover:bg-gray-100 transition whitespace-nowrap text-base font-normal">
        Стать партнёром
</button>

      </div>
  );
}

