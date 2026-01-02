export default function TrustedBy() {
  return (
    <section className="min-h-screen px-8 py-8 md:px-32 md:py-32 flex flex-col">
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

          {/* Optional gradient overlay */}
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

          {/* Optional gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-br from-orange-800/40 via-indigo-800/40 to-purple-900/50" />
        </div>
      </div>
    </section>
  );
}
