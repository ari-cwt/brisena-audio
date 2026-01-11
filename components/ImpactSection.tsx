export default function ImpactSection() {
  return (
    <section className="h-screen w-full bg-black text-white" id="impact">
      {/* Full-height container */}
      <div className="h-full flex flex-col">
        {/* TOP HALF */}
        <div className="flex-[0.7] flex items-center">
          <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-12 pt-20 sm:pt-12 px-8 sm:px-16 lg:px-32">
            {/* Left title */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight">
              PRODUKSI MUSIK
              <br />
              PROFESIONAL
            </h2>

            {/* Right paragraph */}
            <p className="text-base sm:text-lg leading-relaxed text-white/80">
              Sebagai musisi, kami tahu bahwa musik bukan sekadar teknis. Dari
              ide awal sampai hasil akhir, setiap karya musik dikerjakan dengan
              fokus pada rasa dan kualitas.
            </p>
          </div>
        </div>

        {/* BOTTOM HALF */}
        <div className="flex-[1.5] flex items-center justify-center">
          {/* Padding wrapper (does NOT affect section height) */}
          <div className="w-full h-full px-8 md:px-8 sm:px-16 lg:px-32 py-16">
            {/* Video container */}
            <div className="relative w-full h-full overflow-hidden rounded-xl">
              {/* Video */}
              <video
                className="absolute inset-0 w-full h-full object-cover"
                src="/videos/impact-section.mp4"
                autoPlay
                muted
                loop
                playsInline
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-br from-orange-800/50 via-indigo-800/50 to-purple-900/60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
