"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      {/* TOP BAR */}
      <div className="h-16 w-full bg-black/40 backdrop-blur-md py-4">
        <div className="relative mx-auto h-full max-w-7xl px-6 flex items-center">
          {/* LEFT LINKS (desktop) */}
          <nav className="hidden md:flex flex-1 gap-6">
            <a
              href="/#impact"
              className="text-sm text-white/80 hover:text-white transition"
            >
              About Us
            </a>
            <a
              href="/portofolio"
              className="text-sm text-white/80 hover:text-white transition"
            >
              Portfolio
            </a>
            <a
              href="/pricing"
              className="text-sm text-white/80 hover:text-white transition"
            >
              Pricing
            </a>
          </nav>

          {/* CENTER LOGO */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <Link href="/#landing" className="block">
              <Image
                src="/logo.png" // put your logo in /public
                alt="Brisena Audio Production"
                width={60} // adjust as needed
                height={24} // adjust as needed
                priority
              />
            </Link>
          </div>

          {/* RIGHT LINKS (desktop) */}
          <nav className="hidden md:flex flex-1 justify-end gap-6">
            <a
              href="/#services"
              className="text-sm text-white/80 hover:text-white transition"
            >
              Services
            </a>
            <a
              href="https://wa.me/6281289194782?text=Halo%2C%20saya%20dari%20website%20Brisena%20Audio%2C%20berminat%20untuk%20membuat%20sebuah%20proyek%20musik."
              className="text-sm text-white/80 hover:text-white transition"
            >
              Contact Us
            </a>
          </nav>

          {/* BURGER (mobile) */}
          <button
            onClick={() => setOpen(!open)}
            className="ml-auto md:hidden flex flex-col gap-1"
            aria-label="Toggle menu"
          >
            <span className="h-px w-6 bg-white" />
            <span className="h-px w-6 bg-white" />
            <span className="h-px w-6 bg-white" />
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN (animated) */}
      <div
        className={`
          md:hidden
          overflow-hidden
          bg-black/50
          backdrop-blur-md
          transition-all
          duration-300
          ease-out
          ${open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <nav className="flex flex-col px-6 py-6 gap-4 text-white">
          <a href="/#impact" className="text-sm hover:opacity-80 transition">
            About Us
          </a>
          <a href="/portofolio" className="text-sm hover:opacity-80 transition">
            Portfolio
          </a>
          <a href="" className="text-sm hover:opacity-80 transition">
            Services
          </a>
          <a href="" className="text-sm hover:opacity-80 transition">
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
}
