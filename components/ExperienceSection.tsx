import Link from "next/link";

export default function ProvenExperienceSection() {
  return (
    <section className="min-h-screen bg-black w-full flex items-center justify-center px-8 sm:px-8 lg:px-32">
      {/* Video wrapper */}
      <div className="relative w-full h-[85vh] sm:h-[70vh] lg:h-[70vh] rounded-xl overflow-hidden">
        {/* Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/experience.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-orange-800/50 via-indigo-800/50 to-purple-900/60" />

        {/* Content overlay */}
        <div className="relative z-10 h-full flex flex-col justify-between px-6 sm:px-12 lg:px-24 py-24 sm:py-12 lg:py-16 text-white">
          {/* Top content */}
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl tracking-tight uppercase mb-6 sm:mb-10 lg:mb-14">
              TIM BERPENGALAMAN
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-white/90">
              Dengan pengalaman lebih dari 15 tahun di bidang audio dan musik,
              tim kami memahami proses produksi musik secara menyeluruh dan
              menangani setiap pekerjaan dengan fokus pada kualitas dan
              kebutuhan klien.
            </p>
          </div>

          {/* Bottom button */}
          <div className="pt-6 sm:pt-0">
            <Link href="/portofolio">
              <button className="inline-flex items-center justify-center rounded-full border border-white px-8 py-3 text-sm font-medium transition hover:bg-white hover:text-black">
                Lihat Portofolio
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
