import Link from "next/link";

export default function SideBar(){
    return(
        <div className="flex space-y-3">
            <Link href="/" className="flex items-center gap-2 hover:text-[#FFA500] hover:bg-[#FFF9ED] px-10 py-2 hover:rounded-lg"><img src="home.png" alt=""/>Главная</Link>
        </div>
    )
}