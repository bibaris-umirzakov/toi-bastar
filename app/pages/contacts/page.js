import React from 'react';
import Image from "next/image";
import Header from '@/components/Header';
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ListOfBanquetHalls from "@/components/ListOfBanquetHalls";

export default function Contacts() {
  return (
      <div className="px-4 py-6 max-w-6xl mx-auto">
          <Header />
          <ListOfBanquetHalls />
          <Contact />
          <Footer />
      </div>
  );
}
