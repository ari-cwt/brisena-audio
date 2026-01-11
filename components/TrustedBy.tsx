"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function TrustedBy() {
  const router = useRouter();
  const [leaving, setLeaving] = useState(false);

  const handleGoPortfolio = () => {
    setLeaving(true);
    setTimeout(() => {
      router.push("/portofolio");
    }, 300);
  };

  return (
    <section className="relative min-h-screen px-8 py-8 md:py-24 lg:px-32 lg:py-32 flex flex-col bg-black text-white">
      {/* TOP PART */}
      <div className="flex items-center justify-center mb-20 pt-6">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl text-center tracking-tight">
          TRUSTED BY ARTISTS AND INDUSTRY PROFESSIONALS
        </h2>
      </div>

      {/* BOTTOM PART */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Video 1 */}
        <div className="relative rounded-xl overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/videos/music-artist-1.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-linear-to-br from-orange-800/40 via-indigo-800/40 to-purple-900/50" />
        </div>

        {/* Video 2 */}
        <div className="relative rounded-xl overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/videos/music-artist-2.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-linear-to-br from-orange-800/40 via-indigo-800/40 to-purple-900/50" />
        </div>
      </div>

      {/* FLOATING PORTFOLIO BUTTON */}
      <div>
        <p
          className="absolute
          right-18 md:right-28
          top-1/2 -translate-y-1/2
          z-20 text-lg md:text-2xl"
        >
          See Our Projects
        </p>
        <button
          onClick={handleGoPortfolio}
          className={`
          group
          absolute
          right-4 md:right-12
          top-1/2 -translate-y-1/2
          z-20
          flex
          items-center
          justify-center
          w-10 h-40 md:w-12 md:h-48
          rounded-xl
          bg-white/30
          backdrop-blur-md
          border border-white/30
          transition-all
          duration-300
          hover:translate-x-1
          hover:shadow-xl
          hover:bg-white/40
          cursor-pointer
          ${leaving ? "opacity-0" : "opacity-100"}
        `}
          aria-label="Go to portfolio"
        >
          <ArrowRight
            size={20}
            className="text-white transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </button>
      </div>
    </section>
  );
}
