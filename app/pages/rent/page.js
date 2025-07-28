import Header from '@/components/Header';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import Teams from '@/components/Teams';

export default function Rent() {
  return (
  <div>
    <Header/>
    <div className=' m-8 md:ml-20'>
    <h1 className='font-bold text-3xl mt-10'>Кто мы?</h1>
    <h1 className="mt-10 text-sm md:text-[20px] md:w-[800px] tracking-10 font-bold text-[#FFB633] mb-10">Toi<span className="text-[#063C5E] font-bold">Bastar </span><span className='text-black font-medium'> -  это стартап, содянный, для того, чтобы упростить поиск и бронирование банкетных залов. Мы помотаем людям экономить время и силы при канчали.</span></h1>
    <div className='flex justify-between'>
    <ul className='text-black text-sm space-y-10'>
      <li className='flex items-start gap-2'><Image src="/icons/check.png" alt="Check" width={22} height={22} className="w-[22px] h-[22px] flex-shrink-0"/>Более 100 залов на одной платформе</li>
      <li className='flex items-start gap-2'><Image src="/icons/check.png" alt="Check" width={22} height={22} className="w-[22px] h-[22px] flex-shrink-0"/>Удобный фильтр по цене и количеству гостей</li>
      <li className='flex items-start gap-2'><Image src="/icons/check.png" alt="Check" width={22} height={22} className="w-[22px] h-[22px] flex-shrink-0"/>Прамое бронирование без переплат</li>
      <li className='flex items-start gap-2'><Image src="/icons/check.png" alt="Check" width={22} height={22} className="w-[22px] h-[22px] flex-shrink-0"/>Поддержка и консультация 24/7</li>
      <li className='flex items-start gap-2  mb-15'><Image src="/icons/check.png" alt="Check" width={22} height={22} className="w-[22px] h-[22px] flex-shrink-0"/>Экономия времени — все залы и контакты собраны в одном месте </li>
    </ul>
    <Image src="/rent.png" alt="" width={250} height={400} className='md:absolute md:top-45 md:left-200 md:block object-contain hidden'/>
    </div>
    <Link 
    href={'/pages/contacts'}
    className='rounded-lg border-2 border-[#FFA500] text-[#FFA500] px-4 py-2' 
    >Посмотреть залы</Link>
    </div>
    <Teams />
    <Contact />
    <Footer />
    </div>
  );
}
