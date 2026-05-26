"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { CheckCircle2, Users, Music, Zap, X } from "lucide-react";

type Package = {
  id: string;
  watt: string;
  capacity: string;
  originalPrice: string;
  promoPrice: string;
  image: string;
  features: string[];
  popular?: boolean;
};

const packages: Package[] = [
  {
    id: "1000w",
    watt: "1000 WATT",
    capacity: "30-50 orang",
    originalPrice: "1.500.000",
    promoPrice: "999.000",
    image: "/images/sound-system/1000w.png",
    popular: true, // <-- Pindah ke sini
    features: [
      "Speaker Aktif 15 Inch (Huper) - 2 pcs",
      "Mixer 10 Channel - 1 pc",
      "Wireless Microphone - 2 pcs",
      "Kabel Audio untuk laptop / Hp",
      "Operator Mixer - 1 person",
      "Free transportasi loading in & out",
    ],
  },
  {
    id: "2000w",
    watt: "2000 WATT",
    capacity: "50-100 orang",
    originalPrice: "2.000.000",
    promoPrice: "1.850.000",
    image: "/images/sound-system/2000w.png",
    features: [
      "Speaker Aktif 15 Inch (Huper) - 4 pcs",
      "Mixer 10 Channel - 1 pc",
      "Wireless Microphone - 4 pcs",
      "Operator Mixer - 1 person",
      "Free transportasi loading in & out",
    ],
  },
  {
    id: "3000w",
    watt: "3000 WATT",
    capacity: "100-200 orang",
    originalPrice: "3.000.000",
    promoPrice: "2.500.000",
    image: "/images/sound-system/3000w.png",
    // popular: true, <-- Dihapus dari sini
    features: [
      "Speaker Aktif 15 Inch (Huper) - 6 pcs",
      "Mixer 16 Channel - 1 pc",
      "Wireless Microphone - 6 pcs",
      "Operator Mixer - 1 person",
      "Free transportasi loading in & out",
    ],
  },
  {
    id: "5000w",
    watt: "5000 WATT",
    capacity: "300-500 orang",
    originalPrice: "4.000.000",
    promoPrice: "3.500.000",
    image: "/images/sound-system/5000w.png",
    features: [
      "Speaker Aktif 15 Inch (Huper) - 6 pcs",
      "Subwoofer - 2 Pcs",
      "Mixer 16 Channel - 1 pc",
      "Wireless Microphone - 6 pcs",
      "Operator Mixer - 1 person",
      "Free transportasi loading in & out",
    ],
  },
];

export default function SoundSystemClient() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-pink-500 selection:text-white">
      {/* HERO SECTION */}
      <section className="relative px-6 pt-32 pb-20 sm:px-12 lg:px-24 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-linear-to-r from-orange-500/40 via-pink-500/40 to-purple-600/40 blur-[120px] opacity-30 pointer-events-none z-0" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-4">
            <Zap className="w-4 h-4 text-orange-400" />
            <span className="text-sm font-medium tracking-wide">
              PROMO SPESIAL BULAN INI
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            Sewa Sound System <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 via-pink-500 to-purple-500">
              Profesional
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Pilihan tepat untuk berbagai kebutuhan acara Anda. Harga transparan,
            peralatan berkualitas, dan sudah termasuk operator profesional.
          </p>
        </div>
      </section>

      {/* PRICING CARDS SECTION */}
      <section className="relative z-10 px-6 pb-32 sm:px-12 lg:px-24 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`
                group relative flex flex-col rounded-2xl transition-all duration-500 h-full
                hover:-translate-y-2
                ${
                  pkg.popular
                    ? "shadow-[0_0_40px_rgba(236,72,153,0.5)]" // Glow kuat di luar kartu
                    : "hover:shadow-[0_0_40px_rgba(236,72,153,0.15)]"
                }
              `}
            >
              {/* ANIMASI PULSING GRADIENT BORDER UNTUK PAKET LARIS */}
              {pkg.popular && (
                <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 animate-[pulse_2s_ease-in-out_infinite]" />
              )}

              {/* KONTEN KARTU UTAMA */}
              <div
                className={`
                  relative h-full flex flex-col rounded-2xl overflow-hidden
                  ${
                    pkg.popular
                      ? "m-[3px] bg-[#0a0a0a]" // Margin 3px akan memperlihatkan gradient menyala di bawahnya
                      : "bg-white/5 border border-white/10 backdrop-blur-xl"
                  }
                `}
              >
                {pkg.popular && (
                  <div className="absolute top-4 right-4 z-20 bg-linear-to-r from-orange-500 to-pink-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg pointer-events-none">
                    Paling Laris
                  </div>
                )}

                {/* CLICKABLE IMAGE CONTAINER */}
                <button
                  onClick={() => setSelectedImage(pkg.image)}
                  className="relative block w-full aspect-[4/5] overflow-hidden bg-neutral-900 cursor-zoom-in focus:outline-none focus:ring-4 focus:ring-pink-500"
                  aria-label={`Lihat gambar penuh untuk paket ${pkg.watt}`}
                >
                  <Image
                    src={pkg.image}
                    alt={`Sewa Sound System ${pkg.watt}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority={pkg.id === "1000w" || pkg.id === "2000w"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

                  <div className="absolute bottom-6 left-6 right-6 text-left pointer-events-none">
                    <h3 className="text-4xl font-bold tracking-tight text-white mb-2">
                      {pkg.watt}
                    </h3>
                    <div className="flex items-center gap-2 text-base text-neutral-300 font-medium">
                      <Users className="w-5 h-5 text-orange-400" />
                      Cocok untuk {pkg.capacity}
                    </div>
                  </div>
                </button>

                {/* CONTENT */}
                <div className="flex flex-col flex-1 p-8">
                  {/* PRICE SECTION */}
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-1">
                      <p className="text-sm text-neutral-400 font-medium">
                        Harga Promo
                      </p>
                      <span className="text-md text-neutral-500 font-medium line-through decoration-pink-500/70">
                        Rp {pkg.originalPrice}
                      </span>
                    </div>

                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-semibold text-white/90">
                        Rp
                      </span>
                      <span className="text-5xl font-bold tracking-tight text-white">
                        {pkg.promoPrice}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-10 flex-1">
                    {pkg.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-base text-neutral-300"
                      >
                        <CheckCircle2 className="w-6 h-6 text-pink-500 shrink-0" />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`https://wa.me/6285121368452?text=Halo,%20saya%20ingin%20bertanya%20tentang%20sewa%20Sound%20System%20paket%20${pkg.watt}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      relative w-full inline-flex items-center justify-center rounded-full px-6 py-4 text-base font-bold text-white 
                      overflow-hidden transition-all focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-black
                    "
                  >
                    <span className="absolute inset-0 bg-linear-to-r from-orange-500 via-pink-500 to-purple-600" />
                    <span className="absolute inset-0 bg-linear-to-r from-orange-400 via-pink-400 to-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="relative z-10 flex items-center gap-2">
                      <Music className="w-5 h-5" />
                      Pesan Sekarang
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FULLSCREEN IMAGE MODAL */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-sm cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          />

          <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl h-full pointer-events-none">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 sm:-right-4 sm:top-4 p-2 text-white/70 hover:text-white transition-colors cursor-pointer bg-neutral-800/50 hover:bg-neutral-700/50 rounded-full pointer-events-auto backdrop-blur-md z-20"
              aria-label="Tutup gambar"
            >
              <X className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            <div className="relative w-full h-[80vh] sm:h-[90vh] pointer-events-auto">
              <Image
                src={selectedImage}
                alt="Detail Sound System"
                fill
                className="object-contain drop-shadow-2xl"
                sizes="100vw"
                quality={100}
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
