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
          <nav className="hidden md:flex flex-1 gap-6">
            <a
              href="/"
              className="text-sm text-white/80 hover:text-white transition"
            >
              Home
            </a>
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
          ${open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <nav className="flex flex-col px-6 py-6 gap-4 text-white">
          <a
            href="/#portofolio"
            className="text-sm hover:opacity-80 transition"
          >
            Portofolio
          </a>
          <a href="/#services" className="text-sm hover:opacity-80 transition">
            Layanan Kami
          </a>
          <a
            href="https://wa.me/6281289194782?text=Halo%2C%20saya%20dari%20website%20Brisena%20Audio%2C%20berminat%20untuk%20membuat%20sebuah%20proyek%20musik."
            className="text-sm hover:opacity-80 transition"
          >
            Hubungi Kami
          </a>
        </nav>
      </div>
    </header>
  );
}
