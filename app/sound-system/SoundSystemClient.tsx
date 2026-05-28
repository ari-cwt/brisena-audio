"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  Users,
  Music,
  Zap,
  X,
  ChevronDown,
  PlayCircle,
} from "lucide-react";

// --- TYPES ---
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

type GalleryItem = {
  id: string;
  type: "image" | "video";
  src: string;
  orientation: "landscape" | "portrait";
};

type SelectedMedia = {
  src: string;
  type: "image" | "video";
};

// --- DATA ---
const packages: Package[] = [
  {
    id: "1000w",
    watt: "1000 WATT",
    capacity: "30-50 orang",
    originalPrice: "1.500.000",
    promoPrice: "990.000",
    image: "/images/sound-system/1000w.png",
    popular: true,
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

const galleryItems: GalleryItem[] = [
  {
    id: "img1",
    type: "image",
    src: "/images/sound-system/gallery/1.jpeg",
    orientation: "portrait",
  },
  {
    id: "img2",
    type: "image",
    src: "/images/sound-system/gallery/2.jpeg",
    orientation: "portrait",
  },
  {
    id: "vid1",
    type: "video",
    src: "/videos/sound-system/1.mp4",
    orientation: "landscape",
  },
  {
    id: "img3",
    type: "image",
    src: "/images/sound-system/gallery/3.jpeg",
    orientation: "portrait",
  },
  {
    id: "img4",
    type: "image",
    src: "/images/sound-system/gallery/4.jpeg",
    orientation: "portrait",
  },
  {
    id: "vid2",
    type: "video",
    src: "/videos/sound-system/2.mp4",
    orientation: "portrait",
  },
  {
    id: "img5",
    type: "image",
    src: "/images/sound-system/gallery/5.jpeg",
    orientation: "landscape",
  },
  {
    id: "img6",
    type: "image",
    src: "/images/sound-system/gallery/6.jpeg",
    orientation: "portrait",
  },
  {
    id: "vid3",
    type: "video",
    src: "/videos/sound-system/3.mp4",
    orientation: "portrait",
  },
  {
    id: "img7",
    type: "image",
    src: "/images/sound-system/gallery/7.jpeg",
    orientation: "portrait",
  },
  {
    id: "img8",
    type: "image",
    src: "/images/sound-system/gallery/8.jpeg",
    orientation: "portrait",
  },
  {
    id: "img9",
    type: "image",
    src: "/images/sound-system/gallery/9.jpeg",
    orientation: "portrait",
  },
];

export default function SoundSystemClient() {
  const [selectedMedia, setSelectedMedia] = useState<SelectedMedia | null>(
    null,
  );
  const [isGalleryOpen, setIsGalleryOpen] = useState(true);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedMedia) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedMedia]);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-pink-500 selection:text-white overflow-x-hidden">
      {/* INJECT CUSTOM KEYFRAMES */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes pulse-scale {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.02); }
          }
          
          /* Seamless Infinite Marquee Math:
            Translates left by 50% of the total track width.
            The -0.5rem perfectly offsets the 1rem (gap-4) flex gap to prevent jumping.
          */
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-50% - 0.5rem)); } 
          }
          .animate-marquee {
            animation: marquee 40s linear infinite;
          }
          
          /* Pauses animation when hovering anywhere in the container */
          .pause-marquee-on-hover:hover .animate-marquee {
            animation-play-state: paused;
          }
        `,
        }}
      />

      {/* HERO SECTION */}
      <section className="relative px-6 pt-32 pb-12 sm:px-12 lg:px-24 overflow-hidden">
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

      {/* INFINITE GALLERY SECTION */}
      <section className="relative z-10 px-6 pb-20 max-w-[1600px] mx-auto">
        <button
          onClick={() => setIsGalleryOpen(!isGalleryOpen)}
          className="w-full max-w-sm mx-auto flex items-center justify-center gap-3 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors font-medium text-neutral-200"
        >
          <span>📸 Lihat Galeri Acara Kami</span>
          <ChevronDown
            className={`w-5 h-5 transition-transform duration-300 ${
              isGalleryOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        <div
          className={`grid transition-all duration-500 ease-in-out ${
            isGalleryOpen
              ? "grid-rows-[1fr] opacity-100 mt-8"
              : "grid-rows-[0fr] opacity-0 mt-0"
          }`}
        >
          <div className="overflow-hidden">
            {/* MARQUEE CONTAINER
              Added pause-marquee-on-hover class so users can easily click media without it running away.
              Added left/right gradients for a premium fade-in/fade-out look.
            */}
            <div className="relative w-full overflow-hidden pause-marquee-on-hover">
              {/* Fade Edges */}
              <div className="absolute inset-y-0 left-0 w-8 sm:w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-8 sm:w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

              <div className="flex w-max gap-4 animate-marquee py-4">
                {/* We render the array twice [...galleryItems, ...galleryItems] to create a seamless infinite loop */}
                {[...galleryItems, ...galleryItems].map((item, index) => (
                  <button
                    key={`${item.id}-${index}`}
                    aria-hidden={index >= galleryItems.length} // Prevent screen readers from reading duplicates
                    onClick={() =>
                      setSelectedMedia({ src: item.src, type: item.type })
                    }
                    className={`
                      relative shrink-0 rounded-xl overflow-hidden bg-neutral-900 border border-white/10 group cursor-pointer focus:outline-none focus:ring-4 focus:ring-pink-500
                      h-56 sm:h-72 
                      ${item.orientation === "landscape" ? "aspect-video" : "aspect-[3/4]"}
                    `}
                  >
                    {item.type === "image" ? (
                      <Image
                        src={item.src}
                        alt="Galeri Acara"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 80vw, 400px"
                      />
                    ) : (
                      <>
                        {/* Video thumbnail trick: Load video but disable controls/autoPlay */}
                        <video
                          src={`${item.src}#t=0.1`} // Appending #t=0.1 forces iOS/Safari to load the first frame as a poster
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                          preload="metadata"
                          muted
                          playsInline
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                          <PlayCircle className="w-12 h-12 text-white/90 drop-shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-300" />
                        </div>
                      </>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING CARDS SECTION */}
      <section className="relative z-10 px-6 pb-32 sm:px-12 lg:px-24 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="h-full"
              style={
                pkg.popular
                  ? { animation: "pulse-scale 2.5s ease-in-out infinite" }
                  : undefined
              }
            >
              <div
                className={`
                  group relative flex flex-col rounded-2xl transition-all duration-500 h-full
                  hover:-translate-y-2
                  ${
                    pkg.popular
                      ? "shadow-[0_0_40px_rgba(236,72,153,0.5)]"
                      : "hover:shadow-[0_0_40px_rgba(236,72,153,0.15)]"
                  }
                `}
              >
                {/* GLOWING GRADIENT BORDER */}
                {pkg.popular && (
                  <div className="absolute -inset-0.5 rounded-2xl bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 animate-[pulse_2s_ease-in-out_infinite]" />
                )}

                {/* MAIN CARD CONTAINER */}
                <div
                  className={`
                    relative h-full flex flex-col rounded-2xl overflow-hidden
                    ${
                      pkg.popular
                        ? "m-[3px] bg-[#0a0a0a]"
                        : "bg-white/5 border border-white/10 backdrop-blur-xl"
                    }
                  `}
                >
                  {/* POPULAR BADGE */}
                  {pkg.popular && (
                    <div className="absolute top-4 right-4 z-20 bg-linear-to-r from-orange-500 to-pink-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg pointer-events-none">
                      Paling Laris
                    </div>
                  )}

                  {/* CLICKABLE IMAGE CONTAINER */}
                  <button
                    onClick={() =>
                      setSelectedMedia({ src: pkg.image, type: "image" })
                    }
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

                    <div className="absolute bottom-6 left-6 right-6 text-left pointer-events-none flex flex-col items-start">
                      <h3 className="text-4xl font-bold tracking-tight text-white mb-2">
                        {pkg.watt}
                      </h3>
                      <div className="flex items-center gap-2 text-base text-neutral-300 font-medium mb-3">
                        <Users className="w-5 h-5 text-orange-400" />
                        Cocok untuk {pkg.capacity}
                      </div>

                      {/* FREE RECORDING BADGE */}
                      <div className="z-20 w-fit bg-neutral-900/90 backdrop-blur-md border border-neutral-700 text-white text-[10px] md:text-xs font-bold px-3 py-1.5 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.5)] flex items-center gap-2 pointer-events-none transition-transform group-hover:scale-105">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
                        </span>
                        FREE rekam audio saat acara
                      </div>
                    </div>
                  </button>

                  {/* CONTENT */}
                  <div className="flex flex-col flex-1 px-8 pb-6">
                    {/* PRICE SECTION WITH MIC ADD-ON */}
                    <div className="mb-8 mt-2">
                      <div className="flex items-center gap-3 mb-1">
                        <p className="text-sm text-neutral-400 font-medium">
                          Harga Promo
                        </p>
                        <span className="text-md text-neutral-500 font-medium line-through decoration-pink-500/70">
                          Rp {pkg.originalPrice}
                        </span>
                      </div>

                      <div className="flex items-end justify-between gap-2 flex-wrap">
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-semibold text-white/90">
                            Rp
                          </span>
                          <span className="text-5xl font-bold tracking-tight text-white">
                            {pkg.promoPrice}
                          </span>
                        </div>

                        {/* FLOATING TEXT FOR EXTRA MIC */}
                        <div className="mb-1 text-right">
                          <span className="inline-block bg-pink-500/10 text-pink-400 text-[13px] font-bold px-2 py-0.5 rounded border border-pink-500/20 mb-0.5">
                            + Rp. 100.000
                          </span>
                          <span className="block text-[13px] text-neutral-400 font-medium">
                            per wireless mic
                          </span>
                        </div>
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

                    {/* NEW BUTTON FOR TRACKING */}
                    <button
                      onClick={() => {
                        // Fire conversion event
                        if (typeof window !== "undefined" && window.gtag) {
                          window.gtag("event", "conversion", {
                            send_to: "AW-18193243254/agZcCLvDu7QcEPa4m-ND",
                            value: 1.0,
                            currency: "IDR",
                          });
                        }
                        // Open WhatsApp
                        window.open(
                          `https://wa.me/6285121368452?text=Halo,%20saya%20ingin%20bertanya%20tentang%20sewa%20Sound%20System%20paket%20${pkg.watt}`,
                          "_blank",
                          "noopener,noreferrer",
                        );
                      }}
                      className="
                        relative w-full inline-flex items-center justify-center rounded-full px-6 py-4 text-base font-bold text-white 
                        overflow-hidden transition-all focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-black cursor-pointer
                      "
                    >
                      <span className="absolute inset-0 bg-linear-to-r from-orange-500 via-pink-500 to-purple-600" />
                      <span className="absolute inset-0 bg-linear-to-r from-orange-400 via-pink-400 to-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <span className="relative z-10 flex items-center gap-2">
                        <Music className="w-5 h-5" />
                        Pesan Sekarang
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FULLSCREEN MULTI-MEDIA MODAL */}
      {selectedMedia && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-sm cursor-zoom-out"
            onClick={() => setSelectedMedia(null)}
          />

          <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl h-full pointer-events-none">
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-4 right-4 sm:-right-4 sm:top-4 p-2 text-white/70 hover:text-white transition-colors cursor-pointer bg-neutral-800/50 hover:bg-neutral-700/50 rounded-full pointer-events-auto backdrop-blur-md z-20"
              aria-label="Tutup media"
            >
              <X className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            <div className="relative w-full h-[80vh] sm:h-[90vh] pointer-events-auto flex items-center justify-center">
              {selectedMedia.type === "image" ? (
                <Image
                  src={selectedMedia.src}
                  alt="Detail Sound System"
                  fill
                  className="object-contain drop-shadow-2xl"
                  sizes="100vw"
                  quality={100}
                />
              ) : (
                <video
                  src={selectedMedia.src}
                  controls
                  autoPlay
                  className="w-full max-h-full object-contain shadow-2xl bg-black rounded-lg"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
