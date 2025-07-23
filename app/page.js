import React from 'react';
import HallCard from '@/components/HallCard';
import { halls } from '@/data/halls';
import Header from '@/components/Header';
import HowItWork from "@/components/HowItWork";
import Choice from "@/components/Choice";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Catalog from "@/components/Catalog";
import HallsList from "@/components/BanquetHalls/HallsList";

export default function Home() {
  return (
  <div className="px-4 py-6 max-w-6xl mx-auto">
     <Header />
     <HowItWork />
     <Choice />
      <Catalog />
      <Contact />
      <Footer />
      <HallsList />
    </div>
  );
}
