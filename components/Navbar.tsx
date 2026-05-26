"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function scrollToLanding() {
  const el = document.getElementById("landing");
  el?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      {/* TOP BAR */}
      <div className="h-16 w-full bg-black/40 backdrop-blur-md py-4">
        <div className="relative mx-auto h-full max-w-7xl px-6 flex items-center">
          {/* LEFT LINKS (desktop) */}
          <nav className="hidden md:flex flex-1 gap-6 items-center">
            <Link
              href="/"
              className="text-sm text-white/80 hover:text-white transition"
            >
              Home
            </Link>
            <a
              href="/#services"
              className="text-sm text-white/80 hover:text-white transition"
            >
              Layanan Kami
            </a>
            <a
              href="/#portofolio"
              className="text-sm text-white/80 hover:text-white transition"
            >
              Portofolio
            </a>

            {/* NEW SOUND SYSTEM LINK */}
            <Link
              href="/sound-system"
              className="group flex items-center gap-1.5 text-sm font-semibold transition-all hover:-translate-y-0.5"
            >
              <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 via-pink-400 to-purple-500 group-hover:opacity-80 transition">
                Sewa Sound System
              </span>
              <span className="bg-linear-to-r from-orange-500 to-pink-500 text-white text-[9px] px-1.5 py-0.5 rounded-full leading-none font-bold uppercase tracking-wider shadow-[0_0_10px_rgba(236,72,153,0.5)]">
                New
              </span>
            </Link>
          </nav>

          {/* CENTER LOGO */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <Link
              href="/"
              onClick={(e) => {
                // If already on homepage, prevent navigation
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  scrollToLanding();
                }
              }}
              className="block cursor-pointer"
            >
              <Image
                src="/logo.png"
                alt="Brisena Audio Production"
                width={60}
                height={24}
                priority
              />
            </Link>
          </div>

          {/* RIGHT LINKS (desktop) */}
          <nav className="hidden md:flex flex-1 justify-end gap-6">
            <a
              href="https://wa.me/6281289194782?text=Halo%2C%20saya%20dari%20website%20Brisena%20Audio%2C%20berminat%20untuk%20membuat%20sebuah%20proyek%20musik."
              className="text-sm text-white/80 hover:text-white transition"
            >
              Hubungi Kami
            </a>
          </nav>

          {/* BURGER (mobile) */}
          <button
            onClick={() => setOpen(!open)}
            className="ml-auto h-10 items-center justify-center md:hidden flex flex-col gap-1.5 cursor-pointer"
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
          ${open ? "max-h-[350px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <nav className="flex flex-col px-6 py-6 gap-5 text-white">
          <Link
            href="/"
            className="text-sm hover:opacity-80 transition"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <a
            href="/#portofolio"
            className="text-sm hover:opacity-80 transition"
            onClick={() => setOpen(false)}
          >
            Portofolio
          </a>
          <a
            href="/#services"
            className="text-sm hover:opacity-80 transition"
            onClick={() => setOpen(false)}
          >
            Layanan Kami
          </a>

          {/* NEW SOUND SYSTEM LINK (MOBILE) */}
          <Link
            href="/sound-system"
            className="flex items-center gap-2 text-sm font-semibold w-fit"
            onClick={() => setOpen(false)}
          >
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 via-pink-400 to-purple-500">
              Sewa Sound System
            </span>
            <span className="bg-linear-to-r from-orange-500 to-pink-500 text-white text-[9px] px-1.5 py-0.5 rounded-full leading-none font-bold uppercase tracking-wider">
              New
            </span>
          </Link>

          <a
            href="https://wa.me/6281289194782?text=Halo%2C%20saya%20dari%20website%20Brisena%20Audio%2C%20berminat%20untuk%20membuat%20sebuah%20proyek%20musik."
            className="text-sm hover:opacity-80 transition mt-2"
            onClick={() => setOpen(false)}
          >
            Hubungi Kami
          </a>
        </nav>
      </div>
    </header>
  );
}
