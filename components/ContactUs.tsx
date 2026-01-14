export default function ContactUs() {
  return (
    <section className="h-screen flex items-center justify-center">
      {/* VIDEO CONTAINER (70%) */}
      <div className="relative w-full h-[70%]">
        {/* Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/contact-us.mp4" type="video/mp4" />
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-orange-800/50 via-indigo-800/50 to-purple-900/60" />

        {/* Content */}
        <div className="relative z-10 h-full grid grid-cols-1 md:grid-cols-2 items-center px-8 sm:px-32">
          {/* LEFT */}
          <div>
            <span className="block text-sm font-semibold tracking-widest mb-6">
              BRISENA AUDIO
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-tight max-w-xl">
              READY TO CREATE IN A SPACE BUILT FOR HIGH-PERFORMANCE SOUND?
            </h2>
          </div>

          {/* RIGHT */}
          <div className="flex md:justify-end mt-8 md:mt-0 sm:px-48">
            <a href="https://wa.me/6285121368452?text=Halo%2C%20saya%20dari%20website%20Brisena%20Audio%2C%20berminat%20untuk%20membuat%20sebuah%20proyek%20musik.">
              <button className="text-2xl tracking-wide text-black hover:opacity-80 cursor-pointer bg-white px-8 py-2 sm:bg-white/0 sm:text-white  sm:hover:bg-white sm:hover:text-black sm:px-8 sm:py-2 rounded-full transition duration-700">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
