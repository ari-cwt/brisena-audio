"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

export const WhatsAppButton = () => {
  const whatsappUrl =
    "https://wa.me/6281289194782?text=Halo%2C%20saya%20dari%20website%20Brisena%20Audio%2C%20berminat%20untuk%20membuat%20sebuah%20proyek%20musik.";

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us via WhatsApp"
      className="group fixed bottom-6 right-6 z-50
        flex items-center bg-green-500 hover:bg-green-600 text-white
        rounded-full shadow-lg transition-colors
        pl-17 md:pl-20.5 pr-5 md:pr-6 py-3"
    >
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2
          rounded-full bg-green-500 group-hover:bg-green-600
          border-4 border-white
          w-14 h-14 md:w-17.5 md:h-17.5
          z-50 flex items-center justify-center shadow-md"
      >
        <FaWhatsapp className="w-[65%] h-[65%]" />
      </div>

      <span className="text-[13px] md:text-lg font-semibold">Contact Us</span>
    </Link>
  );
};
