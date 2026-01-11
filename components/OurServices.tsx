"use client";

import { useState } from "react";
import ServiceCard from "./ServiceCard";
import PembuatanLaguContent from "./pelajari_lebih_lanjut/PembuatanLaguContent";
import { ArrowLeft } from "lucide-react";
import JingleContent from "./pelajari_lebih_lanjut/JingleContent";
import MixingContent from "./pelajari_lebih_lanjut/MixingContent";
import AransemenContent from "./pelajari_lebih_lanjut/AransementContent";
import MinusOneContent from "./pelajari_lebih_lanjut/MinusOneContent";
import RecordingContent from "./pelajari_lebih_lanjut/RecordingContent";

type Service = {
  id: string;
  title: string;
  description: string;
  price: number | string;
  image: string;
  modalContent: React.ReactNode;
  showBadge?: boolean;
};

const services: Service[] = [
  {
    id: "pembuatan_lagu",
    title: "Pembuatan Lagu",
    description:
      "Pembuatan lagu dari awal, mulai dari konsep, aransemen, hingga produksi musik secara menyeluruh.",
    price: 3500000,
    image: "/images/services/song.jpg",
    showBadge: true,
    modalContent: <PembuatanLaguContent />,
  },
  {
    id: "jingle",
    title: " Jingle & Commercial Music",
    description:
      "Pembuatan musik singkat yang mudah diingat untuk kebutuhan brand, iklan, dan konten promosi.",
    price: 2500000,
    image: "/images/services/jingle.jpg",
    modalContent: <JingleContent />,
  },
  {
    id: "mixing_and_mastering",
    title: "Mixing & Mastering",
    description:
      "Mengolah lagu agar terdengar seimbang, jernih, dan siap dirilis di semua platform digital.",
    price: 1500000,
    image: "/images/services/mixing.jpg",
    modalContent: <MixingContent />,
  },
  {
    id: "aransemen",
    title: "Aransemen Musik",
    description:
      "Menyusun dan mengembangkan lagu sesuai karakter dan kebutuhan klien. Kami juga menggunakkan jasa session player profesional.",
    price: 3000000,
    image: "/images/services/aransemen.jpg",
    showBadge: true,
    modalContent: <AransemenContent />,
  },
  {
    id: "minus_one",
    title: "Pembuatan Minus One / Backing Track",
    description:
      "Musik tanpa vokal atau instrumen tertentu untuk latihan, performance, karaoke, backing track band dan ibadah.",
    price: 700000,
    image: "/images/services/minus.jpg",
    showBadge: true,
    modalContent: <MinusOneContent />,
  },
  {
    id: "recording",
    title: "Recording Studio",
    description:
      "Layanan rekaman vokal dan instrumen dengan peralatan profesional untuk hasil audio yang bersih dan detail.",
    price: 1000000,
    image: "/images/services/recording.jpg",
    showBadge: true,
    modalContent: <RecordingContent />,
  },
];

export default function OurServices() {
  const [activeService, setActiveService] = useState<Service | null>(null);

  return (
    <section className="min-h-screen w-full bg-black text-white" id="services">
      <div className="flex flex-col">
        {/* TITLE */}
        <div className="px-4 sm:px-8 lg:px-32 pt-20 sm:pt-24 lg:pt-32 pb-10">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl tracking-tight">
            OUR SERVICES
          </h2>
        </div>

        {/* CARDS */}
        <div className="px-4 sm:px-8 lg:px-32 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                image={service.image}
                price={service.price}
                showBadge={service.showBadge}
                onOpen={() => setActiveService(service)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* FULLSCREEN MODAL */}
      {activeService && (
        <div className="fixed inset-0 z-50">
          {/* BACKDROP */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setActiveService(null)}
          />

          {/* MODAL */}
          <div
            className="relative z-10 h-full w-full overflow-y-auto max-w-6xl mx-auto bg-black"
            onClick={() => setActiveService(null)}
          >
            <div className="max-w-5xl mx-auto px-6 py-20">
              {/* CLOSE */}
              <button
                onClick={() => setActiveService(null)}
                className="mb-8 text-sm text-white/70 hover:text-white cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <ArrowLeft /> Back
                </div>
              </button>

              {/* CONTENT */}
              {activeService.modalContent}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
