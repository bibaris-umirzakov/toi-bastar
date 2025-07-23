import Header from '@/components/Header';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Rent() {
  return (
  <div>
    <Header/>
    <div className='ml-20'>
    <h1 className='font-bold text-3xl mt-10'>Кто мы?</h1>
    <h1 className="mt-10 text-[20px] w-[800px] tracking-10 font-bold text-[#FFB633]">Toi<span className="text-[#063C5E] font-bold">Bastar </span><span className='text-black font-medium'> -  это стартап, содянный, для того, чтобы упростить поиск и бронирование банкетных залов. Мы помотаем людям экономить время и силы при канчали.</span></h1>
    <ul className='text-black text-sm'>
      <li className='flex gap-2 mt-10'><Image src="/icons/check.png" alt="Check" width={22} height={22} />Более 100 залов на одной платформе</li>
      <li className='flex gap-2 mt-10'><Image src="/icons/check.png" alt="Check" width={22} height={22} />Удобный фильтр по цене и количеству гостей</li>
      <li className='flex gap-2 mt-10'><Image src="/icons/check.png" alt="Check" width={22} height={22} />Прамое бронирование без переплат</li>
      <li className='flex gap-2 mt-10'><Image src="/icons/check.png" alt="Check" width={22} height={22} />Поддержка и консультация 24/7</li>
      <li className='flex gap-2 mt-10 mb-15'><Image src="/icons/check.png" alt="Check" width={22} height={22} />Экономия времени — все залы и контакты собраны в одном месте</li>
    </ul>
    <Link 
    href={'/pages/contacts'}
    className='rounded-lg border-2 border-[#FFA500] text-[#FFA500] px-4 py-2' 
    >Посмотреть залы</Link>
    </div>
    </div>
  );
}
