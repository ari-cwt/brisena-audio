const PRICING_SECTIONS = [
  {
    title: "Music Production",
    subtitle: "Original Music Creation",
    description:
      "Professional music production tailored to your vision — crafted with musical feel and technical precision.",
    services: [
      "Original song creation (from scratch)",
      "Music arrangement & full production",
      "Company jingle & commercial music",
      "Minus one / backing track",
      "Karaoke track production",
    ],
    price: "Starting from IDR 2,000,000 / song",
    note: "Final price depends on song complexity and production scope.",
    video: "/videos/impact-section.mp4",
  },
  {
    title: "Mixing & Mastering",
    subtitle: "Professional Sound Refinement",
    description:
      "Clarity, balance, and impact — optimized for streaming, broadcast, and digital platforms.",
    services: [
      "Song mixing",
      "Mastering (streaming-ready)",
      "Mixing + mastering bundle",
      "Stem mixing (upon request)",
    ],
    price: "Starting from IDR 1,500,000 / song",
    note: "Final price depends on track complexity and session requirements.",
    video: "/videos/hero-bg.mp4",
  },
  {
    title: "Recording",
    subtitle: "Capture the Performance",
    description:
      "Clean, focused recording sessions designed to capture the best performance — in-studio or remote.",
    services: [
      "Vocal recording",
      "Instrument recording",
      "Assisted recording sessions",
      "Remote recording collaboration",
    ],
    price: "Starting from IDR 800,000 / session",
    note: "Final price depends on recording complexity and session duration.",
    video: "/videos/music-artist-2.mp4",
  },
  {
    title: "Audio for Content & Brand",
    subtitle: "Audio for Digital & Commercial Use",
    description:
      "Clean, consistent, and professional audio for creators, brands, and digital media.",
    services: [
      "YouTube audio editing",
      "Podcast editing & mastering",
      "Live / streaming audio setup",
      "Sound design & background music",
      "Sonic logo & brand sound",
    ],
    price: "Starting from IDR 500,000 / project",
    note: "Final price depends on project complexity and deliverables.",
    video: "/videos/music-artist-1.mp4",
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Page header */}
      <section className="pt-32 pb-24 px-8 sm:px-16 lg:px-32">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight uppercase">
          Pricing
        </h1>
        <p className="mt-6 max-w-2xl text-white/80 text-lg">
          Transparent pricing for professional audio services. Each project is
          handled with care, precision, and creative intent.
        </p>
      </section>

      {/* Pricing sections */}
      <section className="space-y-16 px-8 sm:px-16 lg:px-32 pb-32">
        {PRICING_SECTIONS.map((item, idx) => (
          <div
            key={idx}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* TEXT CONTENT */}
            <div className={idx % 2 === 1 ? "lg:order-2" : "lg:order-1"}>
              <h2 className="text-4xl sm:text-5xl tracking-tight uppercase">
                {item.title}
              </h2>

              <p className="mt-4 text-xl text-white/80">{item.subtitle}</p>

              <p className="mt-6 text-white/70 leading-relaxed">
                {item.description}
              </p>

              <ul className="mt-8 space-y-3 text-white/85">
                {item.services.map((service, i) => (
                  <li key={i}>— {service}</li>
                ))}
              </ul>

              <div className="mt-10">
                <p className="text-lg font-semibold">{item.price}</p>
                <p className="text-sm text-white/60 mt-1">{item.note}</p>
              </div>
            </div>

            {/* VIDEO */}
            <div
              className={`relative h-80 sm:h-95 lg:h-105 rounded-xl overflow-hidden ${
                idx % 2 === 1 ? "lg:order-1" : "lg:order-2"
              }`}
            >
              <video
                className="absolute inset-0 w-full h-full object-cover"
                src={item.video}
                autoPlay
                muted
                loop
                playsInline
              />

              <div className="absolute inset-0 bg-linear-to-br from-orange-800/50 via-indigo-800/50 to-purple-900/60" />
            </div>
            {/* SEPARATOR */}
            {idx !== PRICING_SECTIONS.length - 1 && (
              <div className="w-full h-px bg-white lg:hidden" />
            )}
          </div>
        ))}
      </section>
    </main>
  );
}
