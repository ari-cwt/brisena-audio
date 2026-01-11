export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden" id="landing">
      {/* Video background */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/hero-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-orange-800/50 via-indigo-800/50 to-purple-900/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <h1 className="text-white text-6xl md:text-9xl tracking-wide">
          CRAFTING
          <br />
          SOUND WITH
          <br />
          PRECISION
        </h1>

        <div className="flex gap-4 lg:gap-8">
          <button className="mt-8 rounded-full border border-white px-12 md:px-16 py-2 md:py-3 font-montserrat text-white transition duration-700 cursor-pointer hover:bg-white hover:text-black">
            <a href="/portofolio">Portofolio</a>
          </button>
          <button className="mt-8 rounded-full border border-white px-12 md:px-16 py-2 md:py-3   font-montserrat text-white transition duration-700 cursor-pointer hover:bg-white hover:text-black">
            <a href="/portofolio">Layanan Kami</a>
          </button>
        </div>
      </div>
    </section>
  );
}
